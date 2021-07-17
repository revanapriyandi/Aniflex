import { motion } from "framer-motion";
import { useState } from "react";
import { signOutStart } from "../../redux/auth/auth.actions";
import Searchbar from "../Searchbar/Searchbar";
import { selectCurrentUser } from "../../redux/auth/auth.selectors";
import { useDispatch, useSelector } from "react-redux";
import { isMobile } from 'react-device-detect';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [isMobiles, setIsMobiles] = useState(false);
  const location = useLocation();
  
  return (
    <header className={`header header--fixed ${isMobiles ? 'header--menu' : ''}`}>
      <motion.div className="container">
        <motion.div className="row">
          <motion.div className="col-12">
            <motion.div className="header__content">
              <motion.button className={`header__menu ${isMobiles ? 'header__menu--active' : ''}`} type="button" onClick={() => isMobiles ? setIsMobiles(false) : setIsMobiles(true)} >
                <span></span>
                <span></span>
                <span></span>
              </motion.button>

              <a href="/" className="header__logo">
                <img src="img/logo.svg" alt="Anime & Movie, Online stream" />
              </a>

              <ul className={`header__nav ${isMobiles ? 'header__nav--active' : ''}`} >
                <li className="header__nav-item">
                  <a
                    className={`header__nav-link ${location.pathname === '/' ? 'header__nav-link--active' : ''}`}
                    href="#"
                    role="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                </li>
                <li className="header__nav-item">
                  <a
                    className={`header__nav-link ${location.pathname === '/anime' ? 'header__nav-link--active' : ''}`}
                    href="#"
                    role="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Anime
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    Movie
                  </a>
                </li>
                <li className="header__nav-item">
                  <a
                    className="header__nav-link header__nav-link--more"
                    href="#"
                    role="button"
                    id="lainnya"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.93893 14.3033C6.08141 14.3033 5.38477 13.6067 5.38477 12.7505C5.38477 11.8943 6.08141 11.1963 6.93893 11.1963C7.79644 11.1963 8.49309 11.8943 8.49309 12.7505C8.49309 13.6067 7.79644 14.3033 6.93893 14.3033Z" />
                      <path d="M12.7501 14.3033C11.8926 14.3033 11.1959 13.6067 11.1959 12.7505C11.1959 11.8943 11.8926 11.1963 12.7501 11.1963C13.6076 11.1963 14.3042 11.8943 14.3042 12.7505C14.3042 13.6067 13.6076 14.3033 12.7501 14.3033Z" />
                      <path d="M18.5608 14.3033C17.7032 14.3033 17.0066 13.6067 17.0066 12.7505C17.0066 11.8943 17.7032 11.1963 18.5608 11.1963C19.4183 11.1963 20.1149 11.8943 20.1149 12.7505C20.1149 13.6067 19.4183 14.3033 18.5608 14.3033Z" />
                    </svg>
                  </a>

                  <ul
                    className="dropdown-menu header__nav-menu header__nav-menu--scroll"
                    aria-labelledby="lainnya"
                  >
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <motion.div className="header__actions">
                <Searchbar />
                {currentUser ? 
                  <ul>
                  {currentUser && (
                  <li>
                    <a
                    className="header__user"
                    href="#"
                    role="button"
                    id="profile"
                    data-toggle={`${isMobile ? '' : 'dropdown'}`}
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>
                      {currentUser
                        ? currentUser.displayName
                        : currentUser.email}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" />
                    </svg>
                  </a>
                  <ul
                    className="dropdown-menu header__nav-menu header__nav-menu--scroll"
                    aria-labelledby="profile"
                  >
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#"  onClick={() => dispatch(signOutStart())}>Logout</a>
                    </li>
                      </ul>
                      
                    </li>
                  ) }
                </ul>
                  :
                    <Link to="/login" className="header__user">
                  <span>Sign in</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z"></path></svg>
                </Link>
                }
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Navbar;
