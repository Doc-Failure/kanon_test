import { app } from "../index";
import supertest from "supertest";
import CountriesTypes from "../types/CountriesTypes";

//Unit Test for the object CountriesBL
it("Test Endpoints", async (done) => {
  const expected: string =
    '[{"name":"Italy","topLevelDomain":[".it"],"alpha2Code":"IT","alpha3Code":"ITA","callingCodes":["39"],"capital":"Rome","altSpellings":["IT","Italian Republic","Repubblica italiana"],"region":"Europe","subregion":"Southern Europe","population":60665551,"latlng":[42.83333333,12.83333333],"demonym":"Italian","area":301336,"gini":36,"timezones":["UTC+01:00"],"borders":["AUT","FRA","SMR","SVN","CHE","VAT"],"nativeName":"Italia","numericCode":"380","currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],"languages":[{"iso639_1":"it","iso639_2":"ita","name":"Italian","nativeName":"Italiano"}],"translations":{"de":"Italien","es":"Italia","fr":"Italie","ja":"イタリア","it":"Italia","br":"Itália","pt":"Itália","nl":"Italië","hr":"Italija","fa":"ایتالیا"},"flag":"https://restcountries.eu/data/ita.svg","regionalBlocs":[{"acronym":"EU","name":"European Union","otherAcronyms":[],"otherNames":[]}],"cioc":"ITA"}]';
  const resCountry = await supertest(app).get(
    "/api/v1/countryByName?country=Italy"
  );
  expect(resCountry.text).toBe(expected);

  const resCountries = await supertest(app).get(
    "/api/v1/countriesByName?countries=Italy,Esp"
  );

  let res = JSON.parse(resCountries.text);

  res.forEach((value: CountriesTypes) => {
    expect(value.name).not.toBe("United States");
  });

  done();
});
