// mocks
import availableTools from "../mocks/availableTools";
import dailyQuest from "../mocks/dailyQuest";
import farmingStats from "../mocks/farmingStats";
import farmStatus from "../mocks/farmStatus";
import land from "../mocks/land";
import myLand from "../mocks/myLand";
import myTools from "../mocks/myTools";
import plantDetail from "../mocks/plantDetail";
import pvuPrice from "../mocks/pvuPrice";
import weather from "../mocks/weather";

export default class Controller {
  token;
  test = false;
  constructor(token) {
    this.token = token;
  }

  async availableTools() {
    return !this.test
      ? await (
          await fetch(
            "https://backend-farm-stg.plantvsundead.com/available-tools",
            {
              headers: this.getHeaders(),
            }
          )
        ).json()
      : availableTools;
  }

  async dailyQuest() {
    return !this.test
      ? await (
          await fetch(
            "https://backend-farm-stg.plantvsundead.com/daily-quest",
            {
              headers: this.getHeaders(),
            }
          )
        ).json()
      : dailyQuest;
  }

  async farmingStats() {
    return !this.test
      ? await (
          await fetch("https://backend-farm.plantvsundead.com/farming-stats", {
            headers: this.getHeaders(),
          })
        ).json()
      : farmingStats;
  }

  async farmStatus() {
    return !this.test
      ? await (
          await fetch("https://backend-farm.plantvsundead.com/farm-status", {
            headers: this.getHeaders(),
          })
        ).json()
      : farmStatus;
  }

  async Land(latitud, longitud) {
    return !this.test
      ? await (
          await fetch(
            `https://backend-farm.plantvsundead.com/land/${latitud}/${longitud}`,
            {
              headers: this.getHeaders(),
            }
          )
        ).json()
      : land;
  }

  async LandDetail(owner, limit = "10", offset = "0") {
    return await (
      await fetch(
        `https://backend-farm.plantvsundead.com/farms/other/${owner}?limit=${limit}&offset=${offset}`,
        {
          headers: this.getHeaders(),
        }
      )
    ).json();
  }

  async myLand() {
    return !this.test
      ? await (
          await fetch(
            "https://backend-farm.plantvsundead.com/farms?limit=10&offset=0",
            {
              headers: this.getHeaders(),
            }
          )
        ).json()
      : myLand;
  }

  async myTools() {
    return !this.test
      ? await (
          await fetch("https://backend-farm-stg.plantvsundead.com/my-tools", {
            headers: this.getHeaders(),
          })
        ).json()
      : myTools;
  }

  async plantDetail(plantId) {
    return !this.test
      ? await (
          await fetch(
            "https://backend-farm.plantvsundead.com/farms/" + plantId,
            {
              headers: this.getHeaders(),
            }
          )
        ).json()
      : plantDetail;
  }

  async pvuPrice() {
    return !this.test
      ? await (
          await fetch("https://pvu-bot-info.plantvsundead.com/price", {
            headers: this.getHeaders(),
          })
        ).json()
      : pvuPrice;
  }

  async weather() {
    return !this.test
      ? await (
          await fetch(
            "https://backend-farm-stg.plantvsundead.com/weather-today",
            {
              headers: this.getHeaders(),
            }
          )
        ).json()
      : weather;
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
