export interface Nations {
  US: string;
  AU: string;
  KR: string;
  JP: string;
  PH: string;
}

export type Selects = {
  id: number;
  country: string;
  currency: string;
}[];
