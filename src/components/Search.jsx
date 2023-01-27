import ButtonBlue from "./Buttons/Blue";

export default function Search({ search, setSearch }) {

    const onFormSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        setSearch(form.get('query'));
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div className='p-3'>
                    <input
                        type="text"
                        name="query"
                        placeholder='Coloca el link aquí'
                        className='block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-2xl sm:text-xl outline-none p-2'
                    />
                </div>
                {/* <button type="submit">Buscar y descargar</button> */}
                <div className='p-3 text-center'>
                    <ButtonBlue>Buscar y descargar</ButtonBlue>
                </div>
            </form>
        </>
    )
}