import { useState, useRef, useEffect } from "react";
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

  const [searchState, setSearchState] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setSearchState(!searchState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchState(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <nav className="topNav">
      <div className="topNav__left">
        <ul className="topNav__left--list">
          <li>
            {/* <img className="topNav__left--list-logo" src={"/"} alt="Logo" /> */}
          </li>
          {navProps.map((item, i) => (<li key={i} ><Link className="topNav__left--list-link" to={"/"}>{item.title}</Link></li>))}

        </ul>
      </div>
      <div className="topNav__right">
        <ul className="topNav__right--list">
          <li className="topNav__right--list-search" ref={searchRef} style={{width: `${searchState ? "100%" : "15rem"}`}} onClick={toggleSearch}>
            <i className="fa-solid fa-magnifying-glass topNav__right--list-search--icon"></i>
            <input className="topNav__right--list-search--input" placeholder="Search Boards"  style={{width: `${searchState ? "100%" : "15rem"}`}}/>
          </li>
          <li>
            <Link to={"/"} className="topNav__right--list-link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav >
  );
};

export default TopNav;
