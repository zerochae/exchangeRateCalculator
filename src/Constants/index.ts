import * as T from "Types/index";

const COUNTRIES: T.Nations = {
  US: "미국",
  AU: "호주",
  KR: "한국",
  JP: "일본",
  PH: "필리핀",
};

const CURRENCIES: T.Nations = {
  US: "USD",
  AU: "AUD",
  KR: "KRW",
  JP: "JPY",
  PH: "PHP",
};

export const REMITTANCE: T.Selects = [
  {
    id: 1,
    country: COUNTRIES.US,
    currency: CURRENCIES.US,
  },
  {
    id: 2,
    country: COUNTRIES.AU,
    currency: CURRENCIES.AU,
  },
];

export const RECIPIENT: T.Selects = [
  {
    id: 1,
    country: COUNTRIES.KR,
    currency: CURRENCIES.KR,
  },
  {
    id: 2,
    country: COUNTRIES.JP,
    currency: CURRENCIES.JP,
  },
  {
    id: 3,
    country: COUNTRIES.PH,
    currency: CURRENCIES.PH,
  },
];
