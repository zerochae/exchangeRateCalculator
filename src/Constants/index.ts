import * as T from "Types/index";

const STRINGS: { [key: string]: string } = {
  TITLE: "환율 계산",
  SENDER: "송금국가",
  RECEIVER: "수취국가",
  RATE: "환율",
  PRICE: "송금액",
};

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

export const TITLE: string = STRINGS.TITLE;

export const MENU: T.Menu = {
  sender: { id: 1, title: STRINGS.SENDER },
  receiver: { id: 2, title: STRINGS.RECEIVER },
  rate: { id: 3, title: STRINGS.RATE },
  price: { id: 4, title: STRINGS.PRICE },
};

export const OPTIONS: T.Options = {
  SENDER: {
    US: {
      id: 1,
      content: `${COUNTRIES.US}(${CURRENCIES.US})`,
    },
    AU: {
      id: 2,
      content: `${COUNTRIES.AU}(${CURRENCIES.AU})`,
    },
  },
  RECEIVER: {
    KR: {
      id: 1,
      content: `${COUNTRIES.KR}(${CURRENCIES.KR})`,
    },
    JP: {
      id: 2,
      content: `${COUNTRIES.JP}(${CURRENCIES.JP})`,
    },
    PH: {
      id: 3,
      content: `${COUNTRIES.PH}(${CURRENCIES.PH})`,
    },
  },
};
