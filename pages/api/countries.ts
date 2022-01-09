import { NextApiRequest, NextApiResponse } from 'next';
import { Countries } from '../../interfaces/countries';
import { Country } from '../../types/Country';

type ResData = {
  data: Country[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  const countries: Countries[] = await fetch(
    'https://restcountries.com/v2/all'
  ).then((res) => res.json());

  let data: Country[] = countries.map((country) => {
    return {
      name: country.name,
      population: country.population,
      region: country.region,
      capital: country.capital,
      flag: country.flags?.svg,
    };
  });

  res.status(200).json({
    data,
  });
}
