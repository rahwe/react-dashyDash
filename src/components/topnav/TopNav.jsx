import React from "react";
import SearchBar from "../searchbar";
import style from './TopNav.module.css';


const TopNav = () => {
    return <nav className={style.topNav}>
        <p className={style.brand}>Dashy Dash</p>
        <SearchBar/>
    </nav>
}

export default TopNav;