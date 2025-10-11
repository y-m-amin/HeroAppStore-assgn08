import { Link } from 'react-router';
import errImg from '../../assets/App-Error.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const AppNotFoundPage = () => {
  return (
    <>
      <div className='text-center py-8 flex flex-col justify-center items-center gap-4 min-h-[70vh]'>
        <img
          src={errImg}
          alt='App Not Found'
          className='w-[350px] object-cover'
        />
        <h1 className='text-4xl font-bold mb-2'>OPPS!! APP NOT FOUND</h1>
        <p className='text-gray-500 mb-3'>
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link
          to='/apps'
          className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-lg'
        >
          Browse All Apps
        </Link>
      </div>
    </>
  );
};

export default AppNotFoundPage;
