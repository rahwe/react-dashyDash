import React from "react";
import style from './Search.module.css'
import Icon from './../icons/Icon'
const SearchBar = () => {
    return <div className={style.searchBar}>
        <div classes={style.icon}>
            <Icon icon="search"/>
        </div>
        <input className={style.input} type="Search" placeholder="search"></input>
        <div classes={style.icon}>
            <Icon icon="arrow" classes={style.arrow} />
        </div>
    </div>
}


export default SearchBar