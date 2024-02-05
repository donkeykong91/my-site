import NavbarLayout from '../../layouts/NavbarLayout';
import { Outlet } from 'react-router-dom';

const NavbarLayoutPage = () => {
  return (
    <>
      <NavbarLayout />
      <Outlet />
    </>
  );
};

export default NavbarLayoutPage;
