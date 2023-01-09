import React from "react";
import style from "./SideNav.module.css"
import Icon from "../icons/Icon"
import SideNavLink from "../sidenavlinks/SideNavLink";

const SideNav = () => {

    

    return <aside className={style.sidenav}>

        <div className={style.image}></div>

        <SideNavLink/>
        
        <Icon icon="arrow" classes={style.arrow}/>
       
    </aside>
}

export default SideNav;