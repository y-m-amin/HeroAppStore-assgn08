import Banner from '../../Components/Banner/Banner';
import StateCard from '../../Components/StateCard/StateCard';
import AppCard from '../../Components/AppCard/AppCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { FaGooglePlay } from 'react-icons/fa';
import { PiDownloadFill } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/appData.json')
      .then((res) => res.json())
      .then((data) => {
        setApps(data.slice(0, 8));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Skeleton for StateCards
  const SkeletonStateCard = () => (
    <div className='flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm'>
      <Skeleton height={20} width='80%' className='mb-2' />
      <div className='flex items-center gap-3 mb-2'>
        <Skeleton circle height={40} width={40} />
        <Skeleton height={32} width={80} />
      </div>
      <Skeleton height={15} width='90%' />
    </div>
  );

  // Skeleton for cards
  const SkeletonAppCard = () => (
    <div className='border rounded-lg p-4 shadow-md'>
      <Skeleton height={150} className='mb-2 rounded' />
      <Skeleton height={20} width='60%' className='mb-1' />
      <Skeleton height={15} width='80%' className='mb-1' />

      <Skeleton height={15} width='40%' />
    </div>
  );

  // Skeleton for Banner section
  const SkeletonBanner = () => (
    <div className='relative h-[400px] bg-gray-200 rounded-lg overflow-hidden'>
      <Skeleton height={400} className='w-full' />
    </div>
  );

  return (
    <SkeletonTheme baseColor='#e0e0e0' highlightColor='#f5f5f5'>
      <div>
        {loading ? <SkeletonBanner /> : <Banner />}

        <section className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white py-5 mb-6'>
          <div className='max-w-3/5 mx-auto flex flex-col gap-4 my-10'>
            <div className='text-[50px] font-bold text-center'>
              <h2>
                {loading ? (
                  <Skeleton height={60} width='70%' className='mx-auto' />
                ) : (
                  'Trusted by Millions, Built for You'
                )}
              </h2>
            </div>
            <div className='mx-auto flex flex-col xl:flex-row gap-4'>
              {loading ? (
                <>
                  <SkeletonStateCard />
                  <SkeletonStateCard />
                  <SkeletonStateCard />
                </>
              ) : (
                <>
                  <StateCard
                    title='Total Downloads'
                    data={{ text: '32M', image: <PiDownloadFill /> }}
                    description='Our most downloaded category this month.'
                  />
                  <StateCard
                    title='Total Reviews'
                    data={{ text: '4.9', image: <FaStar /> }}
                    description='Apps with the highest average user rating.'
                  />
                  <StateCard
                    title='Active Apps'
                    data={{ text: '132+', image: <FaGooglePlay /> }}
                    description='Rising fast in user installs this week.'
                  />
                </>
              )}
            </div>
          </div>
        </section>

        <section className='max-w-7xl mx-auto px-4 md:px-0 mb-20'>
          <div>
            <h2 className='text-5xl font-bold mb-4 text-center flex justify-center items-center gap-2'>
              {loading ? (
                <Skeleton height={50} width='60%' className='mx-auto' />
              ) : (
                <>
                  Trending Apps{' '}
                  <span className='text-[#632EE3]'>
                    <FaArrowTrendUp />
                  </span>
                </>
              )}
            </h2>

            <p className='text-center text-[20px] mb-6 text-gray-500'>
              {loading ? (
                <Skeleton height={20} width='80%' className='mx-auto' />
              ) : (
                'Explore All Trending Apps on the Market developed by us'
              )}
            </p>
          </div>
          <div className='grid md:grid-cols-2 xl:grid-cols-4  gap-4'>
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <SkeletonAppCard key={i} />
                ))
              : apps.map((app) => <AppCard key={app.id} app={app} />)}
          </div>

          <div className='text-center mt-8 font-bold'>
            <Link
              to='/apps'
              className='bg-gradient-to-bl from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-lg inline-block'
            >
              {loading ? (
                <Skeleton height={40} width={100} className='mx-auto' />
              ) : (
                'Show All'
              )}
            </Link>
          </div>
        </section>
      </div>
    </SkeletonTheme>
  );
};

export default Home;
