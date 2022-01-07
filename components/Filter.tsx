export const Filter = () => {
  return (
    <select
      defaultValue='default'
      placeholder='Filter by Region'
      className='ml-4 p-2 bg-slate-800 rounded cursor-pointer w-1/2 md:w-auto md:mr-8'
    >
      <option value='default' disabled hidden>
        Filter by Region
      </option>
      <option value='africa'>Africa</option>
      <option value='amercia'>America</option>
      <option value='asia'>Asia</option>
      <option value='europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  );
};
