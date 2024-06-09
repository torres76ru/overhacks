import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <Link className={classes.navbar__link} to="/hackathons">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4.5C7.04067 4.5 5.37381 3.24779 4.75606 1.5L13.2439 1.5C12.6262 3.24779 10.9593 4.5 9 4.5Z"
                fill="white"
                stroke="white"
                stroke-width="3"
              />
              <circle
                cx="9"
                cy="15"
                r="7.5"
                transform="rotate(90 9 15)"
                fill="white"
                stroke="white"
                stroke-width="3"
              />
            </svg>
            <span>Hackatons</span>
          </Link>
        </li>
        <li>
          <Link className={classes.navbar__link} to="/people">
            <svg
              width="36"
              height="18"
              viewBox="0 0 36 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9"
                cy="9"
                r="7.5"
                fill="white"
                stroke="white"
                stroke-width="3"
              />
              <circle
                cx="27"
                cy="9"
                r="7.5"
                fill="white"
                stroke="white"
                stroke-width="3"
              />
            </svg>

            <span>People</span>
          </Link>
        </li>
        <li>
          <Link className={classes.navbar__link} to="/earn">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="8.25"
                cy="15.381"
                rx="8.25"
                ry="7.28574"
                fill="white"
              />
              <ellipse
                cx="13.75"
                cy="9.71433"
                rx="8.25"
                ry="7.28574"
                fill="white"
              />
              <ellipse
                cx="13.75"
                cy="7.28574"
                rx="8.25"
                ry="7.28574"
                fill="white"
              />
              <path
                d="M20.9337 7.28566C20.9337 10.7626 17.7356 13.6119 13.7503 13.6119C9.76502 13.6119 6.56699 10.7626 6.56699 7.28566C6.56699 3.80877 9.76502 0.959448 13.7503 0.959448C17.7356 0.959448 20.9337 3.80877 20.9337 7.28566Z"
                fill="#D9D9D9"
                stroke="#3F3F3F"
                stroke-width="0.3"
              />
              <path
                d="M16.35 12.9524C16.35 16.8763 12.7416 20.0881 8.25 20.0881C3.75843 20.0881 0.15 16.8763 0.15 12.9524C0.15 9.02838 3.75843 5.81663 8.25 5.81663C12.7416 5.81663 16.35 9.02838 16.35 12.9524Z"
                fill="white"
                stroke="#3F3F3F"
                stroke-width="0.3"
              />
              <path
                d="M15.4337 12.9524C15.4337 16.4293 12.2356 19.2786 8.25033 19.2786C4.26502 19.2786 1.06699 16.4293 1.06699 12.9524C1.06699 9.47552 4.26502 6.6262 8.25033 6.6262C12.2356 6.6262 15.4337 9.47552 15.4337 12.9524Z"
                fill="#D9D9D9"
                stroke="#3F3F3F"
                stroke-width="0.3"
              />
            </svg>
            <span>Earn</span>
          </Link>
        </li>
        <li>
          <Link className={classes.navbar__link} to="/profile">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 19.5C10.9593 19.5 12.6262 20.7522 13.2439 22.5H4.75606C5.37381 20.7522 7.04067 19.5 9 19.5Z"
                fill="white"
                stroke="white"
                stroke-width="3"
              />
              <circle
                cx="9"
                cy="9"
                r="7.5"
                transform="rotate(-90 9 9)"
                fill="white"
                stroke="white"
                stroke-width="3"
              />
            </svg>

            <span>My profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
