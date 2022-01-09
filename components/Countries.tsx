import { CountryCard } from './CountryCard';

export const Countries = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
      <CountryCard />
    </div>
  );
};
