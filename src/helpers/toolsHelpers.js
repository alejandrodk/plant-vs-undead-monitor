import { sleep, soundNotification } from "./utils";
import Controller from "../api/api";

const tools = {
  WATER: 3,
  CROW: 4,
};

export async function checkPlantsStatus(plants, token) {
  try {
    let result = await getPlantsUpdateHist();

    if (plants) {
      await plants?.reduce(async (acc, plant) => {
        await acc;

        const controller = new Controller(token);

        if (plant.needWater) {
          soundNotification();

          const { data, status } = await controller.applyTool(
            tools.WATER,
            plant._id
          );

          if (status == 556) alert("manual review required");
          
          if (data?.reward == 0) console.log("success water");

          result.updated.push({
            plant: plant._id,
            tool: "WATER",
            time: new Date(),
            response: data,
          });

          await sleep(20);
        }

        if (plant.hasCrow) {
          soundNotification();

          const { data, status } = await controller.applyTool(
            tools.CROW,
            plant._id
          );

          if (status == 556) alert("manual review required");
          
          if (data?.reward == 0) console.log("success crow");

          result.updated.push({
            plant: plant._id,
            tool: "CROW",
            time: new Date(),
            response: data,
          });

          await sleep(20);
        }

        return sleep(20);
      }, Promise.resolve());
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
