import { Filter } from './Filter';

export const SearchBar = () => {
  return (
    <div className='md:flex md:justify-between md:items-center'>
      <form className='flex p-4 md:flex-grow'>
        <input
          className='w-full md:w-1/2 border border-black p-2 rounded bg-slate-800'
          type='text'
          placeholder='Search for a country'
        />
      </form>
      <Filter />
    </div>
  );
};
