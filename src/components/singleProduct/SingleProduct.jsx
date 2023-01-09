import React from 'react'

import style from './SigleProduct.module.css'
import Icon from './../icons/Icon'

const SingleProduct = ({
  imgSrc,
  imgAlt,
  amount,
  percentage,
  icon,
  isUpTrend,
}) => {
  return (
    <div className='d-flex justify-content-between'>
      <img src={imgSrc} alt={imgAlt} className={style.img} />
      <div>
        <h4 className={style.amount}>
          <Icon classes='me-4' icon={icon} />
          {amount}
        </h4>
        <p className={`text-${isUpTrend ? 'success' : 'danger'}`}>
          <Icon
            classes='me-4'
            icon={isUpTrend ? 'stats' : 'downtrend'}
            color={isUpTrend ? '#198754' : '#dc3545'}
          />
          {percentage} %
        </p>
      </div>
    </div>
  )
}

export default SingleProduct
