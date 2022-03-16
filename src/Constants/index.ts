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

export const SENDERKEYS: string[] = ["USDAUD"];

export const RECEIVERKEYS: string[] = ["USDKRW", "USDJPY", "USDPHP"];

export const SENDER: T.Selects = {
  US: {
    id: 1,
    country: COUNTRIES.US,
    currency: CURRENCIES.US,
    price: 1,
  },
  AU: {
    id: 2,
    country: COUNTRIES.AU,
    currency: CURRENCIES.AU,
    price: 0,
  },
};

export const RECEIVER: T.Selects = {
  KR: {
    id: 1,
    country: COUNTRIES.KR,
    currency: CURRENCIES.KR,
    price: 0,
  },
  JP: {
    id: 2,
    country: COUNTRIES.JP,
    currency: CURRENCIES.JP,
    price: 0,
  },
  PH: {
    id: 3,
    country: COUNTRIES.PH,
    currency: CURRENCIES.PH,
    price: 0,
  },
};

export const URL: string =
  "http://api.currencylayer.com/live?access_key=c3496e3b72c4325a0fd4ee717b12ff21&format=1";
