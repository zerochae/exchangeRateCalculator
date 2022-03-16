export type Nations = { [key: string]: string };

export type Selects = {
  [key: string]: {
    id: number;
    country: string;
    currency: string;
    price: number;
  };
};

export type ExchangeData = { [key: string]: number } | null;

export type Menu = { [key: string]: { id: number; title: string } };

export type Options = {
  [key: string]: { [key: string]: { id: number; content: string } };
};
