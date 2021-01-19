import CountriesBL from "./CountriesBL";
import CountriesTypes from "../types/CountriesTypes";

//Unit Test for the object CountriesBL
test("CountriesBL test", async () => {
  const countriesObject: CountriesBL = new CountriesBL();
  let CountryRes: Array<CountriesTypes> = await countriesObject.getCountryByName(
    "Italy"
  );

  expect(CountryRes[0].alpha2Code).toBe("IT");
  expect(CountryRes[0].alpha3Code).toBe("ITA");
  expect(CountryRes[0].area).toBe(301336);
  expect(CountryRes[0].population).toBe(60665551);
});
