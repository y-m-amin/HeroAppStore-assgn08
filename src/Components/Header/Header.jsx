import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { IoLogoGithub } from 'react-icons/io';

const Header = () => {
  const activeStyle =
    'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline decoration-[#9F62F2] decoration-2 underline-offset-4';
  const inactiveStyle = 'hover:text-purple-600';

  const links = (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/apps'
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/installed'
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='navbar bg-white shadow-md px-6'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 font-semibold'
          >
            {links}
          </ul>
        </div>

        <div className='flex items-center gap-2 pl-2 cursor-pointer'>
          <img src={logo} alt='logo' className='w-8 h-8' />
          <NavLink
            to='/'
            className='text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'
          >
            HERO.IO
          </NavLink>
        </div>
      </div>

      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 font-semibold'>{links}</ul>
      </div>

      <div className='navbar-end'>
        <a
          href='https://github.com/y-m-amin/HeroAppStore-assgn08'
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#bf81f9] hover:to-[#4821a4] transition-all duration-300 text-white py-2 px-4 rounded-md'
        >
          <IoLogoGithub className='text-xl' />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Header;
