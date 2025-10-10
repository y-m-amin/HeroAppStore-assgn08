import Banner from '../../Components/Banner/Banner';
import StateCard from '../../Components/StateCard/StateCard';
import AppCard from '../../Components/AppCard/AppCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaArrowTrendUp } from 'react-icons/fa6';

const Home = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/appData.json')
      .then((res) => res.json())
      .then((data) => {
        setApps(data.slice(0, 8));
        setLoading(false);
      });
  }, []);

  if (loading)
    return <span className='loading loading-infinity loading-xl'></span>;

  return (
    <div>
      <Banner />

      {/* <section className='grid md:grid-cols-3 gap-4 my-10'>
        <StateCard title='Most Popular' bgColor='bg-blue-500' />
        <StateCard title='Top Rated' bgColor='bg-green-500' />
        <StateCard title='Trending' bgColor='bg-purple-500' />
      </section> */}

      <section className='max-w-7xl mx-auto px-4 md:px-0 mb-20 '>
        <div>
          <h2 className='text-5xl font-bold mb-4 text-center flex justify-center items-center gap-2'>
            Trending Apps{' '}
            <span className='text-[#632EE3]'>
              <FaArrowTrendUp />
            </span>
          </h2>

          <p className='text-center text-[20px] mb-6 text-gray-500'>
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className='grid md:grid-cols-4 gap-4'>
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className='text-center mt-6'>
          <Link
            to='/apps'
            className='bg-blue-600 text-white px-6 py-2 rounded-lg'
          >
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
