import { addHours, addMinutes, isAfter } from "date-fns";
import Controller from "../api/api";

async function sleep(seconds) {
  return new Promise((res) => {
    setTimeout(res, seconds * 1000);
  });
}

function getCoordinatesRange() {
  const keys = [];
  let curr = -16;

  while (curr <= 16) {
    keys.push(curr);
    curr++;
  }

  return keys;
}

function getPlantToolCount(plant, type) {
  return plant.activeTools.find((tool) => tool.type == type)?.count;
}

async function getAvailableLands(token) {
  const WATER_LIMIT = 400;
  const ranges = getCoordinatesRange();
  const prevBlackList = localStorage.getItem("blackList");
  const blackList = prevBlackList ? JSON.parse(prevBlackList) : [];
  const results = [];
  const controller = new Controller(token);

  await ranges.reduce(async (acc, curr) => {
    const coord = curr.toString();
    const formatCoord = `${coord}/${coord}`;
    const IS_BLACK_LISTED = blackList.includes(formatCoord);

    const { data } = await acc;

    if (data && !IS_BLACK_LISTED) {
      const owner = data.ownerId;
      // TODO: comprobar si la land esta habilitada, sino mandar a blacklist
      // TODO: status 1????
      const { data: landResult } = await controller.LandDetail(owner);

      const plants =
        landResult &&
        Object.keys(landResult).length &&
        landResult?.filter(
          (plant) => getPlantToolCount(plant, "WATER") < WATER_LIMIT - 10
        );

      if (plants) {
        plants.map((plant, ix) => {
          results.push([
            `${formatCoord}`, //TODO: agregar pagina
            ix + 1,
            getPlantToolCount(plant, "WATER"),
            plant.hasCrow,
          ]);
        });
      } else {
        blackList.push(formatCoord);
      }
    }

    if (results.length % 20 === 0) sleep(10);

    return controller.Land(coord, coord);
  }, Promise.resolve);

  if (blackList.length) {
    localStorage.setItem("blackList", JSON.stringify(blackList));
    localStorage.setItem(
      "blackList_ttl",
      addHours(new Date(), 20).toISOString()
    );
  }

  const ordered = [
    ...results.filter((p) => p[2]),
    ...results.filter((p) => !p[2]).sort((a, b) => a[1] - b[1]),
  ];
  return ordered;
}

export async function getCoordinates(token) {
  const ttl = localStorage.getItem("coords_ttl");
  const blacklist_ttl = localStorage.getItem("blackList_ttl");

  if (ttl && isAfter(new Date(), new Date(parseInt(ttl)))) {
    localStorage.removeItem("coords");
  }

  if (blacklist_ttl && isAfter(new Date(), new Date(parseInt(blacklist_ttl)))) {
    localStorage.removeItem("blackList");
  }

  const prevCoords = localStorage.getItem("coords");

  if (prevCoords) return JSON.parse(prevCoords);

  const coords = await getAvailableLands(token);

  if (coords) {
    localStorage.setItem("coords", JSON.stringify(coords));
    localStorage.setItem("coords_ttl", addMinutes(new Date(), 20).getTime());
  }

  return coords;
}
