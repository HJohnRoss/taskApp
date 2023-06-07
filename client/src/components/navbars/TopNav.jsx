import { Link } from "react-router-dom";

const navProps = [
  {
    title: "Home",
    to: "",
  },
  {
    title: "About",
    to: "",
  },
]

const TopNav = () => {
  return (
    <nav className="topNav">
      <ul className="topNav__list">
        <li>
          <img className="topNav__list-logo" src={"/"} alt="Logo" />
        </li>
        {navProps.map((item, i) => (<li key={i} ><Link className="topNav__list-link" to={"/"}>{item.title}</Link></li>))}
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
