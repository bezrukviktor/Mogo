const ServicesItem = ({item}) => {
  return(
    <div className={`services-item`}>
      <h3 className={`services__title ${item.className}`}>{item.title}</h3>
      <p className="services__text">{item.text}</p>
    </div>
  )
}

export default ServicesItem