import './statistic.scss'
import React from 'react'
import StatisticItem from './StatisticItem'
import {STATISTIC} from './constants'

const Statistic = () => {
  return (
    <section className="statistic">
      <div className="container">
        <div className="statistic-block">
          {STATISTIC.map((item, idx) => <StatisticItem key={idx} item={item} />)}
        </div>
      </div>
    </section>
  )
}

export default Statistic