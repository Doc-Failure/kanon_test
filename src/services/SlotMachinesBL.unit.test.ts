import SlotMachinesBL from "./SlotMachinesBL";

//Unit Test for the object SlotMachinesBL
test("SlotMachinesBL test", async () => {
  const slotMachinesBL: SlotMachinesBL = new SlotMachinesBL();
  let slotMachinesSpinResult: {
    spinResult: string[];
    coinWin: number;
  } = slotMachinesBL.spin("123");
  expect(slotMachinesSpinResult.spinResult.length).toBe(3);
  expect(slotMachinesSpinResult.coinWin).not.toBeGreaterThan(50);
  expect(slotMachinesSpinResult.coinWin).not.toBeLessThan(0);
});
