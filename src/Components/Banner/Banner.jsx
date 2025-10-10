import heroImg from '../../assets/hero.png';
import appStoreImg from '../../assets/aStore.png';
import playStoreImg from '../../assets/gPlay.png';

const Banner = () => {
  return (
    <section className='text-center pt-20  bg-[#f1f1f1] flex flex-col  justify-center items-center gap-10 px-4 md:px-20'>
      <div>
        <h1 className='text-7xl  mb-4'>
          We Build
          <br />{' '}
          <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>
            Productive
          </span>{' '}
          Apps
        </h1>
        <p className='mb-6 text-lg'>
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className='flex justify-center gap-4'>
          <a
            href='https://play.google.com/'
            target='_blank'
            rel='noreferrer'
            className='bg-white  px-5 py-2 outline-1 outline-gray-200 rounded-lg font-semibold hover:bg-gray-100'
          >
            <img src={playStoreImg} className='w-6 inline mr-2' />
            Google Play
          </a>
          <a
            href='https://www.apple.com/app-store/'
            target='_blank'
            rel='noreferrer'
            className='bg-white px-5 py-2 outline-1  outline-gray-200 rounded-lg font-semibold hover:bg-gray-100'
          >
            <img src={appStoreImg} className='w-6 inline mr-2' />
            App Store
          </a>
        </div>
      </div>
      <img src={heroImg} />
    </section>
  );
};

export default Banner;
