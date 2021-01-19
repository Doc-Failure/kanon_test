import axios from "axios";
import { Logger } from "tslog";
import CountriesTypes from "../types/CountriesTypes";

export default class CountriesBL {
  //The request path is: https://restcountries.eu/rest/v2/name/{name}
  endpoint: string = "https://restcountries.eu/rest/v2/name/";
  log: Logger = new Logger({ name: "CountriesBL" });

  async getCountryByName(
    countryName: string,
    fullText: boolean = false
  ): Promise<CountriesTypes> {
    let response: CountriesTypes;
    try {
      if (countryName) {
        let getResult = await axios.get(
          this.endpoint + countryName + "?fullText=" + fullText
        );
        if (getResult.data) response = getResult.data;
      }
    } catch (error) {
      //this.log.error("error: " + error);
    }
    return response;
  }
}
