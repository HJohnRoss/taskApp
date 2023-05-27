import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <nav className="sideNav">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="sideNav__btn-open"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>

      <ul className="sideNav__list">
        <li className="sideNav__list-item">
          <Link className="sideNav__list-link" to={"/"}>search</Link>
        </li>
        <li className="sideNav__list-item">
          <Link className="sideNav__list-link" to={"/"}>Create Board</Link>
        </li>
        {/* dropdown */}
        <li className="sideNav__list-item sideNav__list-dropdown">
          <Link className="sideNav__list-link" to={"/"}>Recent Boards <span className="sideNav__list-dropdown-arrow">&rsaquo;</span></Link>
          <ul className="sideNav__dropdown">
            <li><Link className="sideNav__list-link" to={"/"}>Board 1</Link></li>
            <li><Link className="sideNav__list-link" to={"/"}>Board 2</Link></li>
            <li><Link className="sideNav__list-link" to={"/"}>Board 3</Link></li>
          </ul>
        </li>
        <li  className="sideNav__list-item">
          <Link className="sideNav__list-link" to={"/"}>Favorite Boards</Link>
        </li>
        <li  className="sideNav__list-item">
          <Link className="sideNav__list-link" to={"/"}>All Boards</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
