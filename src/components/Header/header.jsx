import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="sticky z-50 top-0">
            <ul class="nav nav-tabs  borders">
                
                
                <li class="nav-item px-3">
                    <NavLink
                        to="./"
                        className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"}lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Home
                    </NavLink>
                </li >
                <NavLink
                            to="about"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"}lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            About
                        </NavLink>


                <li class="nav-item px-3">
                   
                </li>
                <li class="nav-item  px-3">
                <NavLink
                            to="Contact"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"}lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Contact
                        </NavLink>
                </li>
                <li class="nav-item px-3">
                <NavLink
                            to="https://github.com/Vikramsingh863"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"}lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            GitHub
                        </NavLink>
                </li>
            </ul>
        </div>
    );
}

