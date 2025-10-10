import { Link } from 'react-router';
import { formatDlNumber } from '../../utilities/formatDlNumber';
import { FiDownload } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const AppCard = ({ app }) => {
  return (
    <Link
      to={`/apps/${app.id}`}
      className=' rounded-xl p-4 shadow-md hover:shadow-xl transition bg-white'
    >
      <img
        src={app.image}
        alt={app.title}
        className='w-full h-[316px] object-cover rounded-md'
      />
      <h3 className='font-semibold text-lg mt-2'>{app.title}</h3>
      <div className='flex justify-between items-center mt-1'>
        <p className='text-sm text-[#00D390] bg-[#F1F5E8] flex justify-between items-center gap-1 py-1 px-2 rounded-sm'>
          <FiDownload />
          {formatDlNumber(app.downloads)}
        </p>
        <p className='text-sm text-[#FF8811] bg-[#FFF0E1] flex justify-between items-center gap-1 py-1 px-2 rounded-sm'>
          <FaStar /> {app.ratingAvg}
        </p>
      </div>
    </Link>
  );
};

export default AppCard;
