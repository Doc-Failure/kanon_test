import { timeStamp } from "console";
import CountriesBL from "./CountriesBL";

test("CountriesBL test", async () => {
  const countriesObject: CountriesBL = new CountriesBL();
  let CountryRes: JSON = await countriesObject.getCountryByName("Italy");

  expect(CountryRes).toBe("Italy");
});
