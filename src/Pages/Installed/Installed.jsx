import { useState, useEffect } from 'react';
import {
  getInstalledApps,
  uninstallApp,
} from '../../utilities/loacalStorageUtils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiDownload } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { formatDlNumber } from '../../utilities/formatDlNumber';

const Installed = () => {
  const [apps, setApps] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const stored = getInstalledApps();
    setApps(stored);
  }, []);

  const handleUninstall = (id) => {
    uninstallApp(id);
    setApps(getInstalledApps());
    toast.success('App uninstalled successfully!');
  };

  // Sorting logic
  const handleSort = (criteria) => {
    setSortBy(criteria);
    let sorted = [...apps];

    if (criteria === 'Downloads') {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (criteria === 'Ratings') {
      sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
    }

    setApps(sorted);
  };

  return (
    <div className='max-w-3xl mx-auto my-10'>
      <h2 className='text-3xl font-bold mb-4'>My Installed Apps</h2>

      <div className='flex justify-between items-center'>
        <p className='p-4 pb-2 text-xs opacity-60 tracking-wide'>
          {apps.length} Apps Found
        </p>

        {/* Sort Dropdown */}
        <div className='dropdown dropdown-start'>
          <div tabIndex={0} role='button' className='btn m-1'>
            Sort By {sortBy ? `(${sortBy})` : '⬇️'}
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow-sm'
          >
            <li>
              <button onClick={() => handleSort('Downloads')}>Downloads</button>
            </li>
            <li>
              <button onClick={() => handleSort('Ratings')}>Ratings</button>
            </li>
          </ul>
        </div>
      </div>

      {apps.length ? (
        <ul className='list bg-base-100 rounded-box shadow-md'>
          {apps.map((app) => (
            <li key={app.id} className='list-row items-center'>
              {/* App icon */}
              <div>
                <img
                  className='size-12 rounded-box'
                  src={app.image}
                  alt={app.title}
                />
              </div>

              {/* App details */}
              <div className='flex flex-col'>
                <div className='font-semibold'>{app.title}</div>
                {/* Downloads and Rating side by side */}
                <div className='flex gap-2 mt-1'>
                  <div className='text-sm text-[#00D390] bg-[#F1F5E8] flex items-center gap-1 py-1 px-2 rounded-sm'>
                    <FiDownload />
                    {formatDlNumber(app.downloads)}
                  </div>
                  <div className='text-sm text-[#FF8811] bg-[#FFF0E1] flex items-center gap-1 py-1 px-2 rounded-sm'>
                    <FaStar />
                    {app.ratingAvg}
                  </div>
                </div>
              </div>

              {/* Uninstall button */}
              <button
                onClick={() => handleUninstall(app.id)}
                className='btn btn-sm btn-error text-white ml-auto'
              >
                Uninstall
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-center text-gray-500 mt-10'>
          No installed apps yet.
        </p>
      )}

      <ToastContainer position='bottom-right' />
    </div>
  );
};

export default Installed;
