import { sleep } from "./utils";
import Controller from "../api/api";

const tools = {
  WATER: 3,
  CROW: 4,
};

export async function checkPlantsStatus(plants, token) {
  try {
    let result = await getPlantsUpdateHist();

    if (plants) {
      await plants.forEach(async (plant) => {
        const controller = new Controller(token);

        if (plant.needWater) {
          const { data } = await controller.applyTool(tools.WATER, plant._id);
          console.log(result);
          result.updated.push({
            plant: plant._id,
            tool: "WATER",
            time: new Date(),
            response: data,
          });

          await sleep(20);
        }

        if (plant.hasCrow) {
          const { data } = await controller.applyTool(tools.CROW, plant._id);

          result.updated.push({
            plant: plant._id,
            tool: "CROW",
            time: new Date(),
            response: data,
          });

          await sleep(20);
        }

        await sleep(20);
      });
    }

    await setPlantsUpdateHist(result);
    console.log("check status: " + new Date().toISOString());
  } catch (error) {
    console.error(error);
  }
}

async function getPlantsUpdateHist() {
  let result = localStorage.getItem("plant_update");

  if (result) result = JSON.parse(result);

  if (!result) {
    result = {
      updated: [],
      lastUpdated: new Date(),
    };
  }
  await sleep(1);
  return result;
}

async function setPlantsUpdateHist(result) {
  result.lastUpdated = new Date();
  await sleep(1);
  localStorage.setItem("plant_update", JSON.stringify(result));
}
