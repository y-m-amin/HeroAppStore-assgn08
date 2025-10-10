import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { IoLogoGithub } from 'react-icons/io';

const Header = () => {
  return (
    <div className=' max-w-full mx-auto bg-white  py-4 px-6 flex justify-between items-center shadow-md'>
      <div className='text-2xl font-bold cursor-pointer flex items-center gap-2 pl-6'>
        <img src={logo} className='w-8 h-8' />
        <NavLink
          to='/'
          className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
        >
          HERO.IO
        </NavLink>
      </div>

      <nav className='flex gap-6 font-semibold '>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#9F62F2] decoration-2 underline-offset-4'
              : 'hover:text-purple-600    '
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/apps'
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#9F62F2] decoration-2 underline-offset-4'
              : 'hover:text-purple-600    '
          }
        >
          Apps
        </NavLink>
        <NavLink
          to='/installed'
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#9F62F2] decoration-2 underline-offset-4'
              : 'hover:text-purple-600    '
          }
        >
          Installation
        </NavLink>
      </nav>

      <a
        href='https://github.com/y-m-amin/HeroAppStore-assgn08'
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#bf81f9] hover:to-[#4821a4] transition-all duration-300 text-white py-2 px-4 rounded-md mr-6'
      >
        <IoLogoGithub className='text-xl' />
        Contribute
      </a>
    </div>
  );
};

export default Header;
