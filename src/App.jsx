import { useEffect, useRef, useState } from 'react'
import Loading from './components/Loading/Loading';
import Modal from './components/Modal/Modal';
import Search from './components/Search'
import { fetchVideo } from './services/videos';
import './index.css'
import translate from './translate';

function App() {

    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [urlDownload, setUrlDownload] = useState('');
    const downloadButton = useRef(null);

    useEffect(() => {
        if (search.length <= 0) return;
        async function fetching() {
            setIsLoading(true);
            const data = await fetchVideo(search);
            console.log(data.url)
            setUrlDownload(`${data.url}&dl=1`);

            setIsLoading(false);
        }
        fetching();
    }, [search]);

    useEffect(() => {
        if (downloadButton.current === null) return;
        downloadButton.current.click();
    }, [urlDownload]);

    return (
        <>
            <div className='bg-zinc-100 dark:bg-zinc-800 min-h-screen flex flex-col items-center justify-center'>
                <div className='pb-10 font-bold dark:text-slate-100 text-center'>
                    <h1 className='text-3xl'>Social Videos Downloader</h1>
                    <p className='font-thin'>{translate('PAGE_DESCRIPTION')}</p>
                </div>
                <div className='p-3 w-3/4'>
                    <Search search={search} setSearch={setSearch} />
                </div>
                <div className='p-3'>
                    {urlDownload.length > 0
                        ? <a
                            href={urlDownload}
                            download={search}
                            target='_blank'
                            ref={downloadButton}
                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                            {translate('RE_DOWNLOAD')}
                        </a>
                        : null
                    }
                </div>
                <Modal
                    open={isLoading}
                    setOpen={() => { }}
                    body={<Loading text={translate('GENERATING_VIDEO')} />}
                />
            </div>
        </>
    )
}

export default App;
