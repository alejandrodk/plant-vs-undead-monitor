// mocks
import availableTools from "../mocks/availableTools";
import dailyQuest from "../mocks/dailyQuest";
import farmingStats from "../mocks/farmingStats";
import farmStatus from "../mocks/farmStatus";
import land from "../mocks/land";
import landDetail from "../mocks/landDetail";
import myLand from "../mocks/myLand";
import myTools from "../mocks/myTools";
import plantDetail from "../mocks/plantDetail";
import pvuPrice from "../mocks/pvuPrice";
import weather from "../mocks/weather";

export default class Controller {
  token;
  test = false;
  stage = "https://backend-farm-stg.plantvsundead.com";
  prod = "https://backend-farm.plantvsundead.com";
  proxy = "https://cors.bridged.cc/";
  host = this.proxy + this.stage;
  constructor(token) {
    this.token = token;
  }

  async availableTools() {
    return !this.test
      ? await (
          await fetch(this.host + "/available-tools", this.getConfig())
        ).json()
      : availableTools;
  }

  async dailyQuest() {
    return !this.test
      ? await (await fetch(this.host + "/daily-quest", this.getConfig())).json()
      : dailyQuest;
  }

  async farmingStats() {
    return !this.test
      ? await (
          await fetch(this.host + "/farming-stats", this.getConfig())
        ).json()
      : farmingStats;
  }

  async farmStatus() {
    return !this.test
      ? await (await fetch(this.host + "/farm-status", this.getConfig())).json()
      : farmStatus;
  }

  async Land(latitud, longitud) {
    return !this.test
      ? await (
          await fetch(
            `${this.proxy + this.host}/land/${latitud}/${longitud}`,
            this.getConfig()
          )
        ).json()
      : await this.fakeRequest(land);
  }

  async LandDetail(owner, limit = "10", offset = "0") {
    return !this.test
      ? await (
          await fetch(
            `${this.proxy}https://backend-farm.plantvsundead.com/farms/other/${owner}?limit=${limit}&offset=${offset}`,
            this.getConfig()
          )
        ).json()
      : await this.fakeRequest(landDetail);
  }

  async myLand() {
    return !this.test
      ? await (
          await fetch(this.host + "/farms?limit=10&offset=0", this.getConfig())
        ).json()
      : myLand;
  }

  async myTools() {
    return !this.test
      ? await (await fetch(this.host + "/my-tools", this.getConfig())).json()
      : myTools;
  }

  async plantDetail(plantId) {
    return !this.test
      ? await (
          await fetch(this.host + "/farms/" + plantId, this.getConfig())
        ).json()
      : plantDetail;
  }

  async pvuPrice() {
    return !this.test
      ? await (
          await fetch(
            "https://pvu-bot-info.plantvsundead.com/price",
            this.getConfig()
          )
        ).json()
      : pvuPrice;
  }

  async weather() {
    return !this.test
      ? await (
          await fetch(this.host + "/weather-today", this.getConfig())
        ).json()
      : weather;
  }

  getConfig() {
    const headers = new Headers();

    headers.append("Authorization", "Bearer " + this.token);

    return {
      redirect: "follow",
      headers,
    };
  }

  async fakeRequest(result) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result);
      }, 1000);
    });
  }
}
