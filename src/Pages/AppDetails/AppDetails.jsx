import { useState,useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router';
import { installApp, isAppInstalled } from '../../utilities/loacalStorageUtils';
import { ToastContainer, toast } from 'react-toastify';
import { formatDlNumber } from '../../utilities/formatDlNumber';
import { FiDownload } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import { BarChart, Bar, XAxis, YAxis, Tooltip,ResponsiveContainer } from 'recharts';
import AppNotFoundPage from '../ErrPage/AppNotFound';
import { Mosaic } from "react-loading-indicators";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const app = data?.find((a) => a.id === parseInt(id));

const [loading, setLoading] = useState(true);
const [installed, setInstalled] = useState(false);

// added a forced delay because using useLoaderData does not show the loader
useEffect(() => {
  if (app) {
    const timer = setTimeout(() => {
      setLoading(false);
      setInstalled(isAppInstalled(app.id));
    }, 1000); 

    return () => clearTimeout(timer);
  }
}, [app]);

  const notify = (title) => toast(`${title} installed successfully!`);

  const handleInstall = () => {
    installApp(app);
    setInstalled(true);
    notify(app.title);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Mosaic color="#704cc3" size="large" text="LOADING" textColor="#6b479b" />
      </div>
    );
  }

  if (!app) return <AppNotFoundPage />;

  const ratingData = app.ratings.map((r) => ({
    name: r.name,
    count: r.count,
  }));


  return (
    <div className='max-w-6xl mx-auto px-4 my-10'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-8'>
        <img
          src={app.image}
          alt={app.title}
          className='w-48 h-48 md:w-80 md:h-80 object-cover rounded-lg shadow-md'
        />

        <div className='flex flex-col items-center xl:items-start'>
          <h2 className='text-3xl font-bold mt-2'>{app.title}</h2>
          <p className='text-gray-600 mb-4 '>Developed by {app.companyName}</p>

          <div className='grid grid-cols-3 gap-6 text-center my-6 '>
            <div>
              <FiDownload className='mx-auto text-green-500 w-8 h-8' />
              <p>Downloads</p>
              <p className='text-2xl font-bold'>
                {formatDlNumber(app.downloads)}
              </p>
            </div>
            <div>
              <FaStar className='mx-auto text-yellow-500 w-8 h-8' />
              <p>Average Rating</p>
              <p className='text-2xl font-bold'>{app.ratingAvg}</p>
            </div>
            <div>
              <MdReviews className='mx-auto text-purple-600 w-8 h-8' />
              <p>Total Reviews</p>
              <p className='text-2xl font-bold'>
                {formatDlNumber(app.reviews)}
              </p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 mt-5 rounded-lg text-white transition-all duration-300  ${
              installed
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#bf81f9] hover:to-[#4821a4]'
            }`}
          >
            {installed ? 'Installed' : 'Install'}
          </button>
        </div>
      </div>

      {/*   rechart chart   */}
       <div className='w-full h-[400px] mt-16'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={[...ratingData].reverse()}
            layout='vertical'
            margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
          >
            <XAxis type='number' axisLine={false} tickLine={false} />
            <YAxis dataKey='name' type='category' axisLine={false} tickLine={false} />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Bar dataKey='count' fill='#FF8811' barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className='border-t border-gray-200 pt-6'>
        <h3 className='text-2xl font-bold mb-2'>Description</h3>
        <p className='text-gray-700 leading-relaxed'>{app.description}</p>
      </div>

      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default AppDetails;
