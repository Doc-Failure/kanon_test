import { Application, Request, Response } from "express";
import { Logger } from "tslog";
import SlotMachinesBL from "../services/SlotMachinesBL";

https: module.exports = (app: Application) => {
  let log: Logger = new Logger({ name: "slotMachine" });

  //EntryPoint for Question 4
  app.get("/api/v1/slotMachine/spin", async (req: Request, res: Response) => {
    const slotMachine: SlotMachinesBL = new SlotMachinesBL();
    let spinResult: {
      spinResult: string[];
      coinWin: number;
    };
    let requestId: string;
    try {
      requestId = <string>req.query.playerId;
      spinResult = slotMachine.spin(requestId);
    } catch (error) {
      log.error("error: " + error);
    }
    res.send(spinResult);
  });
};
