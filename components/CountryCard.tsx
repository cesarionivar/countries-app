export const CountryCard = () => {
  return (
    <div className='flex flex-col bg-slate-800 m-4  rounded-xl'>
      <img
        className='rounded-t-xl w-full'
        src='https://flagcdn.com/do.svg'
        alt='Dominican Republic'
      />
      <div className='p-4 leading-relaxed'>
        <h2 className='text-2xl mb-2 font-bold'>Dominican Republic</h2>
        <p>
          <span className='font-bold'>Population:</span> <span>10847904</span>
        </p>
        <p>
          <span className='font-bold'>Region:</span> <span>America</span>
        </p>
        <p>
          <span className='font-bold'>Capital:</span> <span>Santo Domingo</span>
        </p>
      </div>
    </div>
  );
};
