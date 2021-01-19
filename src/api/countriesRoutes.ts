import { Application } from "express";
import CountriesBL from "../services/CountriesBL";

https: module.exports = (app: Application) => {
  app.get("/api/v1/countriesByName", () => {
    const countryFinder: CountriesBL = new CountriesBL();

    console.log(countryFinder.getCountryByName("aaa"));
  });
};
