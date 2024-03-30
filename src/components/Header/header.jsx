import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    
    return (

        <div className="nav">
            
            <ul className="navul">
                <li class="nav-item px-3 ">
                    <NavLink
                        to="./"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:hover:bg-black lg:border-0 hover:text-pink-500 lg:p-0`
                        }
                    >
                        Home
                    </NavLink>
                </li >

                <li class="nav-item px-3">
                    <NavLink
                        to="about"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:hover:bg-black lg:p-0 `
                        }
                    >
                        About
                    </NavLink>
                </li>


                <li class="nav-item  px-3">
                    <NavLink
                        to="Contact"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:hover:lg:hover:bg-black lg:border-0  hover:text-pink-500  lg:p-0`
                        }
                    >
                        Contact
                    </NavLink>
                </li>

                <li class="nav-item px-3">
                    <NavLink
                        to="https://github.com/Vikramsingh863"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700 " : "text-gray-700"}lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:hover:bg-black lg:p-0`
                        }
                    >
                        GitHub
                    </NavLink>
                </li>
            </ul>
            <img src="portfolio-white.png" className="navimg" alt="error" />

        </div>


    );
}

