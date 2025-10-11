import { useEffect, useState } from 'react';
import AppCard from '../../Components/AppCard/AppCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/appData.json')
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const filtered = apps.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  // Skeleton for cards
  const SkeletonCard = () => (
    <div className='border rounded-lg p-4 shadow-md'>
      <Skeleton height={150} className='mb-2 rounded' />{' '}
      <Skeleton height={20} width='60%' className='mb-1' />
      <Skeleton height={15} width='80%' className='mb-1' />{' '}
      <Skeleton height={15} width='40%' />
    </div>
  );

  return (
    <SkeletonTheme baseColor='#e0e0e0' highlightColor='#f5f5f5'>
      <div className='max-w-4/5 mx-auto px-4 '>
        <div className=' mx-auto px-4  mb-10 mt-10'>
          <h2 className='text-5xl font-bold mb-4 text-center flex justify-center items-center gap-2'>
            Our All Applications
          </h2>

          <p className='text-center text-[20px] mb-6 text-gray-500'>
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className='flex flex-col md:flex-row text-xl font-bold justify-between mb-4'>
          <p>
            {isLoading ? (
              <Skeleton width={120} height={16} />
            ) : (
              `(${filtered.length}) Apps Found`
            )}
          </p>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search app...'
            className='border rounded-lg px-3 py-2 mt-4 md:mt-0'
            disabled={isLoading}
          />
        </div>

        {isLoading ? (
          <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length ? (
          <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <p className='text-center text-gray-500'>No App Found</p>
        )}
      </div>
    </SkeletonTheme>
  );
};

export default AllApps;
