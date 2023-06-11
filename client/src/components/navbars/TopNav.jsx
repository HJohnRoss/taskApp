import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BoardService from "../services/BoardService";

const navProps = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "About",
    link: "",
  },
  {
    title: "Login",
    link: "login"
  },
  {
    title: "Register",
    link: ""
  }
];

const TopNav = () => {
  const [searchState, setSearchState] = useState(false);
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [queryOpen, setQueryOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [boards, setBoards] = useState()

  const handleMouseEnter = (i) => {
    setIsHovered(true);
    setSelectedIndex(i);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSelectedIndex(null);
  };

  const toggleSearch = () => {
    setSearchState(!searchState);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const filterBoards = query === ""
    ? boards
    : boards.filter((item) => (
      item.boardName.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ));

  const queryBoard = (item, id) => {
    setQuery("");
    setQueryOpen(false);
  };

  useEffect(() => {
    BoardService.getAll()
      .then(res => {
        setBoards(res.data)
      })
      .catch(err => console.error(err))
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchState(false);
        setQueryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);


  return (
    <nav className="topNav">
      <div className="topNav__left">
        <ul className="topNav__left--list">
          <li>
            {/* <img className="topNav__left--list-logo" src={"/"} alt="Logo" /> */}
          </li>
          {navProps.map((item, i) => (
            <li key={i}>
              <Link className="topNav__left--list-link" to={`/${item.link}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="topNav__right">
        <ul className="topNav__right--list">
          <li className="topNav__right--list-search" ref={searchRef} onClick={toggleSearch}>
            <i className="fa-solid fa-magnifying-glass topNav__right--list-search--icon"></i>
            <input
              className="topNav__right--list-search--input"
              placeholder="Search Boards"
              value={query}
              onChange={(e) => handleChange(e)}
              onClick={() => setQueryOpen(true)}
            />
            {query && queryOpen && (
              <div className="query-selection-box" ref={searchRef}>
                {filterBoards.length > 0 ? filterBoards.map((item, i) => (
                  <Link className="query-selection-box__item--link" to={`/boards/${item.id}`} key={item.id}>
                    <div
                      className={`query-selection-box__item ${isHovered && selectedIndex === i ? "query-selection-box__item--hover-effect" : ""
                        }`}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => {
                        queryBoard(item);
                      }}
                    >
                      <i className="fa-solid fa-magnifying-glass topNav__right--list-search--icon"></i>
                      <span>{item.boardName}</span>
                    </div>
                  </Link>
                ))
                  :
                  <div style={{ textAlign: "center" }}>
                    No Results found
                  </div>
                }
              </div>
            )}
          </li>
          <li>
            <Link to={"/"} className="topNav__right--list-link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;