export default interface CountriesTypes extends Array<any> {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: Array<string>;
  area: number;
  borders: Array<string>;
  callingCodes: Array<string>;
  capital: string;
  cioc: string;
  currencies: Array<JSON>;
  demonym: string;
  flag: string;
  gini: 36;
  languages: Array<JSON>;
  latlng: Array<number>;
  name: string;
  nativeName: string;
  numericCode: string;
  population: 60665551;
  region: string;
  regionalBlocs: Array<JSON>;
  subregion: string;
  timezones: Array<string>;
  topLevelDomain: Array<string>;
  translations: JSON;
}
