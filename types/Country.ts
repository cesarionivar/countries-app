import { Region } from '../interfaces/countries';

export type Country = {
  name: string;
  population: number;
  region: Region;
  capital: string | undefined;
  flag: string;
};
