import { Logger } from "tslog";

export default class SlotMachinesBL {
  log: Logger = new Logger({ name: "SlotMachinesBL" });

  //Probably in more complex contexts we should consider some behavioral patterns
  spin(userId: string): { spinResult: string[]; coinWin: number } {
    let response: { spinResult: string[]; coinWin: number } = <
      { spinResult: string[]; coinWin: number }
    >{};
    response.coinWin = 0;
    const Reel1: string[] = [
      "cherry",
      "lemon",
      "apple",
      "lemon",
      "banana",
      "banana",
      "lemon",
      "lemon",
    ];
    const Reel2: string[] = [
      "lemon",
      "apple",
      "lemon",
      "lemon",
      "cherry",
      "apple",
      "banana",
      "lemon",
    ];
    const Reel3: string[] = [
      "lemon",
      "apple",
      "lemon",
      "apple",
      "cherry",
      "lemon",
      "banana",
      "lemon",
    ];

    //TODO we should use the userId to retrieve user data from Db and remove 1 coin from his balance

    const spinResult: string[] = [
      Reel1[this.getRandomNumber(7)],
      Reel2[this.getRandomNumber(7)],
      Reel3[this.getRandomNumber(7)],
    ];

    response.spinResult = [...spinResult];
    //Reward for 3 in a row
    if (spinResult[0] === spinResult[1] && spinResult[1] === spinResult[2]) {
      if (spinResult[0] === "cherry") {
        response.coinWin = 50;
      }
      if (spinResult[0] === "apple") {
        response.coinWin = 20;
      }
      if (spinResult[0] === "banana") {
        response.coinWin = 15;
      }
      if (spinResult[0] === "lemon") {
        response.coinWin = 3;
      } else if (
        spinResult[0] === spinResult[1] ||
        spinResult[1] === spinResult[2]
      ) {
        //Reward for 2 in a row
        if (spinResult[0] === "cherry") {
          response.coinWin = 40;
        }
        if (spinResult[0] === "apple") {
          response.coinWin = 10;
        }
        if (spinResult[0] === "banana") {
          response.coinWin = 5;
        }
      }
    }

    return response;
  }

  private getRandomNumber(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
