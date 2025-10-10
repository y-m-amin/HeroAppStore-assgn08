import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { installApp, isAppInstalled } from '../../utilities/loacalStorageUtils';
import { ToastContainer, toast } from 'react-toastify';
import { formatDlNumber } from '../../utilities/formatDlNumber';
import { FiDownload, FiStar } from 'react-icons/fi';
import { MdReviews } from 'react-icons/md';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  const notify = () => toast('App installed successfully!');

  useEffect(() => {
    fetch('/appData.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id === parseInt(id));
        setApp(found);
        if (found) setInstalled(isAppInstalled(found.id));
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <span className='loading loading-infinity loading-xl'></span>;
  if (!app) return <p className='text-center text-gray-500'>App Not Found</p>;

  const handleInstall = () => {
    installApp(app);
    setInstalled(true);
    notify();
  };

  const ratingData = app.ratings.map((r) => ({
    name: r.name,
    count: r.count,
  }));

  return (
    <div className='max-w-4/5 mx-auto my-10'>
      <div className='flex items-left'>
        <img
          src={app.image}
          alt={app.title}
          className='w-80 h-80 object-cover rounded-lg'
        />
        <div className='flex flex-col items-start mt-4 px-4'>
          <h2 className='text-3xl font-bold mt-4'>{app.title}</h2>
          <p className='text-gray-600'>Developed by {app.companyName}</p>

          <div className='flex items-center gap-6 my-4'>
            <div className='flex flex-col items-center'>
              <FiStar className='inline text-yellow-500' />
              <p>Average Ratings</p>
              <p>⭐ {app.ratingAvg}</p>
            </div>
            <div className='flex flex-col items-center'>
              <FiDownload className='inline text-green-500' />
              <p>Downloads</p>
              <p>{formatDlNumber(app.downloads)}</p>
            </div>
            <div className='flex flex-col items-center'>
              <MdReviews className='inline text-purple-600' />
              <p>Total Reviews</p>
              <p>Reviews: {formatDlNumber(app.reviews)}</p>
            </div>
          </div>
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 rounded-lg text-white ${
              installed
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {installed ? 'Installed' : 'Install'}
          </button>
        </div>
      </div>

      <div className='flex justify-center my-6'>
        <BarChart
          width={1440}
          height={350}
          data={[...ratingData].reverse()}
          layout='vertical'
          margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
        >
          <XAxis
            type='number'
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#555' }}
          />

          <YAxis
            dataKey='name'
            type='category'
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: '#333' }}
          />

          <Tooltip cursor={{ fill: 'transparent' }} />

          <Bar dataKey='count' fill='#FF8811' barSize={32} />
        </BarChart>
      </div>
      <div>
        <h3 className='text-2xl font-bold'>Description</h3>
        <p className='mt-2'>{app.description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
