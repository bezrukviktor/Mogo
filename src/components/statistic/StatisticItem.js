import React from 'react'

const StatisticItem = ({item}) => {
  return (
    <div className="statistic-item">
      <span className="statistic__number">{item.number}</span>
      <span className="statistic__text">{item.text}</span>
    </div>
  )
}

export default StatisticItem