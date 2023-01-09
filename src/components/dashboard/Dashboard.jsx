import React, { Fragment } from 'react'
import style from './Dashboard.module.css'
import Icon from './../icons/Icon'
import Card from '../card/Card'
import SingleProduct from '../singleProduct/SingleProduct'
import airPodImg from './../../assets/airpods.jpg'

const Dashboard = () => {
  return (
    <Fragment>
      <header className='d-flex align-items-center'>
        <Icon icon='dashboard' width={19} />
        <h5 className='mb-0 ms-4'>Dashboard</h5>
      </header>
      <div className={style.gridContainer}>
        
        <div className={style.gridItem}>
          <Card headline='Best Selling Products'>

            <SingleProduct
              imgSrc={airPodImg}
              imgAlt='Airpod Pro'
              amount='12.545'
              percentage='3.54'
              icon='usd'
              isUpTrend
            />

          </Card>
        </div>

        <div className={style.gridItem2}>
          <Card headline='Most Viewed Products' />
        </div>

        <div className={style.gridItem3}>
          <Card headline='Most Profitable Sections' />
        </div>

        <div className={style.gridItem4}>
          <Card headline='Most Profitable Categories' />
        </div>

        <div className={style.gridItem5}>
          <Card headline='Tob Selling Products' />
        </div>

        <div className={style.gridItem6}>
          <Card headline='Most Viewed Products' />
        </div>

        <div className={style.gridItem7}>
          <Card headline='General Statistic' />
        </div>

      </div>
    </Fragment>
  )
}

export default Dashboard
