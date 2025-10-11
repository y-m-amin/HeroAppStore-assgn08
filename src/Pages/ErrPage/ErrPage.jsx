import { Link } from 'react-router';
import errImg from '../../assets/error-404.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const ErrPage = () => {
  return (
    <>
      <Header />
      <div className='text-center py-4 flex flex-col justify-center items-center gap-4'>
        <img src={errImg} className='w-[400px] object-cover' />
        <h1 className='text-5xl font-bold mb-4'>Oops, page not found!</h1>
        <p className='text-gray-500 mb-3'>
          The page you are looking for is not available.
        </p>
        <Link
          to='/'
          className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-lg'
        >
          Go Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ErrPage;
