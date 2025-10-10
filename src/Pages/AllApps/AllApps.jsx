import { useEffect, useState } from 'react';
import AppCard from '../../Components/AppCard/AppCard';

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/appData.json')
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
      });
  }, []);

  const filtered = apps.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='max-w-4/5 mx-auto px-4 '>
      <div className=' mx-auto px-4  mb-10 mt-10'>
        <h2 className='text-5xl font-bold mb-4 text-center flex justify-center items-center gap-2'>
          Our All Applications
        </h2>

        <p className='text-center text-[20px] mb-6 text-gray-500'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className='flex justify-between mb-4'>
        <p>({filtered.length}) Apps Found</p>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search app...'
          className='border rounded-lg px-3 py-1'
        />
      </div>

      {filtered.length ? (
        <div className='grid md:grid-cols-4 gap-4'>
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-500'>No App Found</p>
      )}
    </div>
  );
};

export default AllApps;
