import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

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
