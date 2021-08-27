// FARM_STATUS = 'https://backend-farm.plantvsundead.com/farm-status',
// LAND = 'https://backend-farm.plantvsundead.com/land/-5/-8',
// LAND_DETAIL = "https://backend-farm.plantvsundead.com/farms/other/{{owner_id}}?limit=10&offset=0",
// MY_LAND = "https://backend-farm.plantvsundead.com/farms?limit=10&offset=0",
// PLANT_DETAIL = "https://backend-farm.plantvsundead.com/farms/{{plant_id}}",
// FARMING_STATS = "https://backend-farm.plantvsundead.com/farming-stats"

// mocks
import farmStatus from "./mocks/farmStatus";
import myLand from "./mocks/myLand";
import plantDetail from "./mocks/plantDetail";

export default class Controller {
  token;
  test = false;
  constructor(token) {
    this.token = token;
  }

  async farmStatus() {
    return !this.test
      ? await (
          await fetch("https://backend-farm.plantvsundead.com/farm-status", {
            headers: this.getHeaders(this.token),
          })
        ).json()
      : farmStatus;
  }

  async Land(latitud, longitud) {
    return await (
      await fetch(
        `https://backend-farm.plantvsundead.com/land/${latitud}/${longitud}`,
        {
          headers: this.getHeaders(this.token),
        }
      )
    ).json();
  }

  async LandDetail(owner, limit = "10", offset = "0") {
    return await (
      await fetch(
        `https://backend-farm.plantvsundead.com/farms/other/${owner}?limit=${limit}&offset=${offset}`,
        {
          headers: this.getHeaders(this.token),
        }
      )
    ).json();
  }

  async getMyLand() {
    return !this.test
      ? await (
          await fetch(
            "https://backend-farm.plantvsundead.com/farms?limit=10&offset=0",
            {
              headers: this.getHeaders(this.token),
            }
          )
        ).json()
      : myLand;
  }

  async getPlantDetail(plantId) {
    return !this.test
      ? await (
          await fetch(
            "https://backend-farm.plantvsundead.com/farms/" + plantId,
            {
              headers: this.getHeaders(this.token),
            }
          )
        ).json()
      : plantDetail;
  }

  async getFarmingStats() {
    return await (
      await fetch("https://backend-farm.plantvsundead.com/farming-stats", {
        headers: this.getHeaders(this.token),
      })
    ).json();
  }

  getHeaders() {
    return {
      origin: "https://marketplace.plantvsundead.com",
      referer: "https://marketplace.plantvsundead.com/",
      Authorization: "Bearer " + this.token,
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    };
  }
}
