import { Application, Request, Response } from "express";
import { Logger } from "tslog";

https: module.exports = (app: Application) => {
  let log: Logger = new Logger({ name: "slotMachine" });

  //EntryPoint for Question 1
  app.get("/api/v1/slotMachine/spin", async (req: Request, res: Response) => {
    try {
      let countryName: string = <string>req.query.playerId;
      //ApiResult = await countryFinder.getCountryByName(countryName);
    } catch (error) {
      log.error("error: " + error);
    }
    //res.send(ApiResult);
  });
};
