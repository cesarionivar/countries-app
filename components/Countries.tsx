import { useEffect, useState } from 'react';
import { CountryCard } from './CountryCard';

export const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('/api/countries')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.data);
      });
  }, []);

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
      {countries.map((country, idx) => (
        <CountryCard key={idx} {...country} />
      ))}
    </div>
  );
};
