import { Country } from '../types/Country';

export const CountryCard = ({
  name,
  population,
  region,
  capital,
  flag,
}: Country) => {
  return (
    <div className='flex flex-col bg-slate-800 m-4  rounded-xl'>
      <img className='rounded-t-xl w-full' src={flag} alt={name} />
      <div className='p-4 leading-relaxed'>
        <h2 className='text-2xl mb-2 font-bold'>{name}</h2>
        <p>
          <span className='font-bold'>Population:</span>{' '}
          <span>{population}</span>
        </p>
        <p>
          <span className='font-bold'>Region:</span> <span>{region}</span>
        </p>
        <p>
          <span className='font-bold'>Capital:</span> <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};
