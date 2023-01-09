import React from "react";
import Icon from "../icons/Icon";

import style from './SideNavLink.module.css';


const SideNavLink = () => {

    const menu = ["dashboard", "tasks", "grid", "list", "basket", "user", "stats", "cog"]


    return <div className={style.panel}>

    {menu.map(function(item, i){
        return <div key={`${i}-${item}`} className={style.icon}>
            <Icon icon={item}/>
        </div>
    })}


    {/* <div className={style.icon}><Icon icon="dashboard" /></div>*/}

</div>
}

export default SideNavLink;