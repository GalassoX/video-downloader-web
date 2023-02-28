import { useEffect, useRef, useState } from 'react'
import Loading from './components/Loading/Loading';
import Modal from './components/Modal/Modal';
import Search from './components/Search'
import { fetchVideo } from './services/videos';
import './index.css'
import translate from './translate';
import ButtonRed from './components/Buttons/Red';

const socials = ['Facebook', 'Instagram'];

function App() {

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [urlDownload, setUrlDownload] = useState('');
  const [error, setError] = useState('');
  const [linksOpen, setLinksOpen] = useState(false);
  const downloadButton = useRef(null);

  useEffect(() => {
    if (search.length <= 0) return;
    async function fetching() {
      setIsLoading(true);
      const data = await fetchVideo(search);
      if (!data) {
        setError(translate('INVALID_LINK'))
      } else if (data.error) {
        setError(translate(data.error));
      } else {
        setUrlDownload(`${data.url}&dl=1`);
        setError('');
      }

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
      <div className='bg-blue-400 dark:bg-stone-700 text-black dark:text-white flex flex-col items-center justify-center min-h-screen'>
        <div className='bg-stone-100 dark:bg-stone-800 flex flex-col items-center justify-center min-h-max p-20 rounded-2xl drop-shadow-xl'>
          <div className='pb-10 font-bold dark:text-slate-100 text-center mx-5'>
            <h1 className='text-3xl'>VidSaver</h1>
            <p className='font-thin'>{translate('PAGE_DESCRIPTION')}</p>
          </div>
          <div className='p-3 w-full'>
            <Search search={search} setSearch={setSearch} error={error} />
          </div>
          {urlDownload.length > 0
            ?
            <div className='p-3'>
              <a
                href={urlDownload}
                download={search}
                target='_blank'
                ref={downloadButton}
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                {translate('RE_DOWNLOAD')}
              </a>
            </div>
            : null
          }
          <div className='pt-10'>
            <ButtonRed onClick={() => setLinksOpen(true)}>{translate('SEE_LINKS')}</ButtonRed>
          </div>
        </div>
        <Modal
          open={isLoading}
          setOpen={() => { }}
          body={<Loading text={translate('GENERATING_VIDEO')} />}
        />
        <Modal
          open={linksOpen}
          onClose={() => setLinksOpen(false)}
          title='Links'
          body={
            <>
              <p>{translate('LINKS_AVAILABLE')}</p>
              <ul className='list-disc list-inside m-5'>
                {socials.map(social => <li key={social}>{social}</li>)}
              </ul>
            </>
          }
        />
      </div>
    </>
  )
}

export default App;