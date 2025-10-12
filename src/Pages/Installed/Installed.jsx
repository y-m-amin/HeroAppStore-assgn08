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

  const handleUninstall = (id, title) => {
    uninstallApp(id);
    setApps(getInstalledApps());
    toast.success(`${title} uninstalled successfully!`);
  };

  // Sorting logic
  const handleSort = (criteria) => {
    setSortBy(criteria);
    let sorted = [...apps];

    if (criteria === 'High-Low') {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (criteria === 'Low-High') {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    // } else if (criteria === 'Size') {
    //   sorted.sort((a, b) => b.size - a.size);
    // }

    setApps(sorted);
  };

  return (
    <div className='max-w-3xl mx-auto my-10'>
      <h2 className='text-3xl font-bold mb-4'>My Installed Apps</h2>

      <div className='flex justify-between items-center'>
        <p className='p-4 pb-2 text-xs opacity-60 tracking-wide'>
          {apps.length} Apps Found
        </p>

        <div className='dropdown dropdown-start'>
          <div tabIndex={0} role='button' className='btn m-1'>
            Sort By {sortBy ? `(${sortBy})` : '()'}
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow-sm'
          >
            <li>
              <button onClick={() => handleSort('High-Low')}>High-Low</button>
            </li>
            <li>
              <button onClick={() => handleSort('Low-High')}>Low-High</button>
            </li>
            {/* <li>
              <button onClick={() => handleSort('Size')}>Size</button>
            </li> */}
          </ul>
        </div>
      </div>

      {apps.length ? (
        <ul className='list bg-base-100 rounded-box shadow-md'>
          {apps.map((app) => (
            <li key={app.id} className='list-row items-center'>
              <div>
                <img
                  className='size-12 rounded-box'
                  src={app.image}
                  alt={app.title}
                />
              </div>

              <div className='flex flex-col'>
                <div className='font-semibold'>{app.title}</div>

                <div className='flex gap-2 mt-1'>
                  <div className='text-sm text-[#00D390]  flex items-center gap-1 py-1 px-2 rounded-sm'>
                    <FiDownload />
                    {formatDlNumber(app.downloads)}
                  </div>
                  <div className='text-sm text-[#FF8811]  flex items-center gap-1 py-1 px-2 rounded-sm'>
                    <FaStar />
                    {app.ratingAvg}
                  </div>
                  <div className='flex items-center text-sm text-[#627382]'>
                    {app.size} MB
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id, app.title)}
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

      <ToastContainer position='bottom-right' autoClose={2000} />
    </div>
  );
};

export default Installed;
