import axios from "axios";
import { Logger } from "tslog";

export default class CountriesBL {
  endpoint: string = "https://restcountries.eu/rest/v2/name/"; //https://restcountries.eu/rest/v2/name/{name}
  log: Logger = new Logger({ name: "CountriesBL" });

  async getCountryByName(countryName: String): Promise<any> {
    let getResult: JSON;
    try {
      getResult = await axios.get(this.endpoint + countryName);
    } catch (error) {
      this.log.error("error: " + error);
    }
    this.log.silly(getResult);
    return getResult;
  }
}
