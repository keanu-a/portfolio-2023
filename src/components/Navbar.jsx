import React, { useEffect, useState } from 'react';
import {
  GitHub,
  LinkedIn,
  MenuOutlined,
  CloseOutlined,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  {
    title: 'Home',
    navTo: '/',
  },
  {
    title: 'About',
    navTo: '/about',
  },
  {
    title: 'Experience',
    navTo: '/experience',
  },
];

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // In case user refreshes page
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, []);

  const handleOnNavTabChange = (url) => {
    setCurrentPage(url);
    navigate(url);

    if (isMenuOpen) toggleMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-16 pt-4 pb-4 pl-2 pr-2 flex items-center justify-between text-xl border-b-4 border-white">
      {/* LOGO */}
      <div className="select-none">Hello</div>

      {/* PAGE NAV */}
      <div className="flex w-96 justify-between max-sm:hidden">
        {navItems.map((navItem, idx) => {
          return (
            <button
              key={idx}
              className={`nav-page ${
                navItem.navTo === currentPage ? 'active' : ''
              }`}
              onClick={() => handleOnNavTabChange(navItem.navTo)}
            >
              {navItem.title}
            </button>
          );
        })}
      </div>

      {/* SOCIAL LINKS */}
      <div className="w-24 flex justify-between max-sm:hidden">
        <a
          className="hover:text-red duration-200"
          href="https://github.com/keanu-a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fontSize="large" />
        </a>
        <a
          className="hover:text-red duration-200"
          href="https://www.linkedin.com/in/keanu-aloua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn fontSize="large" />
        </a>
      </div>

      {/* MOBILE NAV MENU */}
      <div className="sm:hidden">
        {!isMenuOpen ? (
          <button
            className="hover:text-red duration-200 w-10"
            onClick={toggleMenu}
          >
            <MenuOutlined />
          </button>
        ) : (
          <div className="fixed top-0 left-0 w-screen h-screen bg-white">
            <button
              className="hover:text-red duration-200 w-10 fixed right-2 top-4"
              onClick={toggleMenu}
            >
              <CloseOutlined />
            </button>

            <ul className="flex flex-col items-center justify-center h-full gap-5">
              {navItems.map((navItem, idx) => {
                return (
                  <button
                    key={idx}
                    className={`w-fit nav-page ${
                      navItem.navTo === currentPage ? 'active' : ''
                    }`}
                    onClick={() => handleOnNavTabChange(navItem.navTo)}
                  >
                    {navItem.title}
                  </button>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
