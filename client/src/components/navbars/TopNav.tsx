import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="topNav">
      <ul className="topNav__list">
        <li>
          <img className="topNav__list-logo" src={"/"} alt="Logo" />
        </li>
        <li>
          <Link className="topNav__list-link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/"} className="topNav__list-link">
            About
          </Link>
        </li>
      </ul>
      <div>
        <Link to={"/"} className="topNav__profile">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;
