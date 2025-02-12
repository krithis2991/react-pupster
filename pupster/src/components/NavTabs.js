import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Pupster
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/about"
                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                    About
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/blog"
                    className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
                >
                    Discover
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/contact"
                    className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                >
                    Search
        </Link>
            </li>
        </ul>
    );
}

export default NavTabs;