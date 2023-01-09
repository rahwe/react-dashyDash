import React from "react";
import style from './Card.module.css'
import Icon from './../icons/Icon'

const Card = ({headline, children}) => {
 return (
   <div className={style.card}>
     <div className='d-flex justify-content-between align-items-baseline'>
       <h6 className={`${style.headline} mb-0`}>{headline}</h6>
       <Icon icon='options' />
     </div>
     <div className="d-flex align-items-center h-100">{children}</div>
   </div>
 )
}

export default Card;