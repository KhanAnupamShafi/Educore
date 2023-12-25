import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar';

const DefaultLayout = () => {
  const currentLocation = useLocation();

  const isDefault =
    currentLocation.pathname.includes('login') ||
    currentLocation.pathname.includes('signup');

  return (
    <div>
      {isDefault || <NavBar></NavBar>}
      <Outlet></Outlet>
      {/* {isDefault || <NavBar></NavBar>} */}
    </div>
  );
};

export default DefaultLayout;
