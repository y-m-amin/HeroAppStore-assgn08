import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <Header />

      <main className='flex-grow'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
