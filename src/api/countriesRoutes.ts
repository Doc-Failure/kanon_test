import { Application, Request, Response } from "express";
import CountriesBL from "../services/CountriesBL";
import CountriesTypes from "../types/CountriesTypes";
import { Logger } from "tslog";

https: module.exports = (app: Application) => {
  let log: Logger = new Logger({ name: "CountriesRoutes" });

  //EntryPoint for Question 1
  app.get("/api/v1/countryByName", async (req: Request, res: Response) => {
    const countryFinder: CountriesBL = new CountriesBL();
    let ApiResult: CountriesTypes;
    try {
      let countryName: string = <string>req.query.country;
      ApiResult = await countryFinder.getCountryByName(countryName);
    } catch (error) {
      log.error("error: " + error);
    }
    res.send(ApiResult);
  });

  //EntryPoint for Question 2
  app.get("/api/v1/countriesByName", async (req: Request, res: Response) => {
    const countriesFinder: CountriesBL = new CountriesBL();
    let ApiResult: Array<CountriesTypes> = new Array<CountriesTypes>();
    try {
      console.log(req.query.countries);
      let countryName: Array<string> = (<string>req.query.countries).split(",");
      await Promise.all(
        countryName.map((cell) => {
          if (cell != undefined) {
            return countriesFinder.getCountryByName(cell);
          }
        })
      ).then((value: any) => {
        value.forEach((arrayOfRes: Array<CountriesTypes>) => {
          arrayOfRes.forEach((cell: CountriesTypes) => {
            ApiResult.push(cell);
          });
        });
      });
    } catch (error) {
      log.error("error: " + error);
    }
    res.send(ApiResult);
  });
};
