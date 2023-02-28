import translate from "../translate";
import ButtonBlue from "./Buttons/Blue";

export default function Search({ setSearch, error }) {

  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    setSearch(form.get('query'));
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className='p-3 text-center'>
          <input
            type="text"
            name="query"
            placeholder={translate('COPY_LINK')}
            className='px-4 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-2xl sm:text-xl outline-none p-2'
          />
          {!error ? null : <p className='text-red-600'>{error}</p>}
        </div>
        <div className='p-3 text-center'>
          <ButtonBlue>{translate('SEARCH_AND_DOWNLOAD')}</ButtonBlue>
        </div>
      </form>
    </>
  )
}