import { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {

  const [navCollapse, setNavCollapse] = useState(true)
  // const [navWidth, setNavWidth] = useState(15)
  const [isOpen, setIsOpen] = useState(false);

  const collapseNav = () => {
    setNavCollapse(prev => !prev)
    // setNavWidth(1)
  }

  const boards = [
    {
      title: "board 1"
    },

    {
      title: "board 2"
    },

    {
      title: "board 3"
    }
  ]

  const navProps = [

  ]


  return (
    <>
      <nav className="sideNav" style={{ width: `${navCollapse ? "20" : "1"}rem` }}>
        {navCollapse ?
          <i className="fa-solid fa-angle-left sideNav__collapse sideNav__collapse--close" onClick={collapseNav}></i>
          :
          <i className="fa-solid fa-angle-right sideNav__collapse sideNav__collapse--close" onClick={collapseNav}></i>
        }

        {navCollapse &&
          <ul className="sideNav__list">

            {/* <li className="sideNav__list-item">
              <Link className="sideNav__list-link" to={"/"}>
                <span>Create Board</span>
                <i className="fa-regular fa-clipboard"></i>
              </Link>
            </li> */}


            <li className="sideNav__list-item sideNav__list-dropdown">
              <Link className="sideNav__list-link" to={"/boards/1"}>Recent Boards <span className="sideNav__list-dropdown-arrow">&rsaquo;</span></Link>
              <ul className="sideNav__dropdown">
                {boards.map((board, i) => (<li key={i}><Link className="sideNav__list-link" to={"/"}>{board.title}</Link></li>))}
              </ul>
            </li>

            <li className="sideNav__list-item">
              <Link className="sideNav__list-link" to={"/"}>Favorite Boards</Link>
            </li>

            {/* <li className="sideNav__list-item">
              <Link className="sideNav__list-link" to={"/"}>All Boards</Link>
            </li> */}
          </ul>}
      </nav>
    </>
  );
};

export default SideNav;
