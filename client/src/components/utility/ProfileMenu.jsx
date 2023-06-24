import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProfileMenu() {

    const [menuState, setMenuState] = useState(false)

    const handleClick = () => {
        setMenuState(!menuState)
    }

    const menuRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // Clear the form data when clicking outside the form
                setMenuState(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            
        };
    }, [setMenuState]);

    return (
        <div className="profileHolder">
            <i class="fa-regular userNav fa-user" onClick={handleClick}></i>
            {menuState &&
                <div className='profileMenu' ref={menuRef}>
                    <div className='profileMenu__header'>
                        Brandon's Boards
                    </div>
                    <div className='profileContent'>
                        <div className='profileContent__cell'>
                            <h6 className='profileContent__cell-header'>
                                Account
                            </h6>
                            <div className='profileContent__cell--item'>
                                <Link className='profileContent__cell--link' style={{textDecoration: "none"}}>
                                    <div>
                                        <i class="fa-regular fa-user fa-2xs" style={{color: "white"}}></i>
                                        <div>My Profile</div>
                                    </div>
                                </Link>
                                <Link className='profileContent__cell--link' style={{textDecoration: "none"}}>
                                    <div>
                                        <i class="fa-solid fa-arrow-right-from-bracket" style={{color: "white"}}></i>
                                        <div>Log out</div>
                                    </div>
                                </Link>
                                <Link to={"/"} className='profileContent__cell--link' style={{textDecoration: "none"}}>
                                    <div>
                                        <i class="fa-solid fa-arrow-right-from-bracket" style={{color: "white"}}></i>
                                        <div>Log out</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='profileContent__cell'>
                            <h6 className='profileContent__cell-header'>
                                Other
                            </h6>
                            <div className='profileContent__cell--item'>
                                <Link className='profileContent__cell--link' style={{textDecoration: "none"}}>
                                    <div>
                                        <i class="fa-solid fa-question" style={{color: "white"}}></i>
                                        <div>Get Help</div>
                                    </div>
                                </Link>
                                <Link className='profileContent__cell--link' style={{textDecoration: "none"}}>
                                    <div>
                                    <i class="fa-regular fa-moon" style={{color: "white"}}></i>
                                        <div>Change Theme</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProfileMenu