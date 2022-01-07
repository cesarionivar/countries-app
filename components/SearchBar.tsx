export const SearchBar = () => {
  return (
    <div>
      <form className='flex p-4 bg-white'>
        <input
          className='flex-1 border border-black p-2'
          type='text'
          placeholder='Search for a country'
        />
      </form>
    </div>
  );
};
