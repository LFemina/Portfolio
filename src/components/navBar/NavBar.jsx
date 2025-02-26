import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from './nav_bar.module.css';

function NavBar () {
    const location = useLocation();

    return (
        <div className={styles.navbar}>
            <Link
                to="/"
                className={location.pathname === "/" ? "active-link" : ""}
            >
                Главная
            </Link>
            <Link
                to="/project_1"
                className={location.pathname === "/project_1" ? "active_link" : ""}
            >
                Проект 1
            </Link>
            <Link
                to="/project_2"
                className={location.pathname === "/project_2" ? "active_link" : ""}
            >
                Проект 2
            </Link>
            <Link
                to="/project_3"
                className={location.pathname === "/project_3" ? "active_link" : ""}
            >
                Проект 3
            </Link>
            <Link
                to="/project_4"
                className={location.pathname === "/project_4" ? "active_link" : ""}
            >
                Проект 4
            </Link>
        </div>
    );
};

export default NavBar;