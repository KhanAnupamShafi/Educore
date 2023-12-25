import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../app/hook';
import Avatar from '../../assets/Avatar.png';
import BellImg from '../../assets/bell.svg';
import SearchImg from '../../assets/search.svg';
import SettingsImg from '../../assets/settings.svg';
import MobileNav from './MobileNav';

const NavBar = () => {
  const styles = {
    className:
      'block px-3 py-2  hover:text-white drop-shadow-xl hover:underline transition',
    activeClassName:
      'block px-3 py-2 backdrop-saturate-125 bg-white/30 rounded-[6px] ease-in',
  };
  const navItems = [
    { name: `Home`, path: `/` },
    { name: `Users`, path: `/users` },
    { name: `Project`, path: `/project` },
    { name: `Task`, path: `/task` },
    { name: `Reporting`, path: `/reporting` },
  ];

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };
  return (
    <nav className="bg-primary w-full !z-40">
      <div className="max-w-screen-md px-2  md:max-w-screen-2xl h-[72px] flex gap-5 items-center mx-auto ">
        <Link
          to={'/'}
          className="flex items-center gap-5 cursor-pointer">
          <img
            className="w-20 h-full"
            src="/images/educor.svg"
            alt=""
          />
          <h1 className="text-white text-xl font-extrabold">
            Educor
          </h1>
        </Link>
        <div className="ml-0 md:ml-12 flex flex-1 justify-end md:justify-between">
          <div className="md:hidden block">
            <MobileNav />
          </div>
          <ul className="text-soft hidden md:flex  gap-1 text-base">
            {navItems.map((link) => (
              <NavLink
                key={link.name}
                className={({
                  isActive,
                  isPending,
                  isTransitioning,
                }) =>
                  [
                    isPending ? 'pending' : '',
                    isActive
                      ? styles.activeClassName
                      : styles.className,
                    isTransitioning ? 'transitioning' : '',
                  ].join(' ')
                }
                to={link.path}>
                {link.name}
              </NavLink>
            ))}
          </ul>
          <div className="flex gap-2 items-center">
            <div className="flex gap-0 cursor-pointer">
              <img className="p-2.5" src={SearchImg} alt="" />
              <div className='dropdown inline-block relative"'>
                <img className="p-2.5 " src={SettingsImg} alt="" />
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-50">
                  <li className="">
                    <div className="py-1 ">
                      <div aria-label="footer" className="pt-3 ">
                        <button
                          type="button"
                          className="backdrop-opacity-90 bg-gray-50 flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-purple-500 focus:outline-none hover:bg-gray-100">
                          <div className="invisible">
                            <img
                              className="w-full"
                              src="/images/logout_icon.svg"
                              alt=""
                            />
                          </div>
                          <span>Profile</span>
                        </button>
                        <button
                          onClick={handleLogout}
                          type="button"
                          className="backdrop-opacity-90 bg-gray-50 flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-purple-500 focus:outline-none hover:bg-gray-100 rounded-b-md">
                          <img
                            className="w-full"
                            src="/images/logout_icon.svg"
                            alt=""
                          />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <img className="p-2.5" src={BellImg} alt="" />
            </div>
            <img className="dropdown" src={Avatar} alt="User Image" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
