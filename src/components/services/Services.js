import './services.scss'
import SectionTitle from '../common/SectionTitle'
import ServicesItem from './ServicesItem'
import { SERVICESITEMS } from './constants'

const Services = () => {
  return (
    <section className="section services">
      <div className="container">
        <div className="services-wrap">
          <SectionTitle
            subtitle='We work with'
            title='Amazing Services'
          />
          <div className="services-block">
            {SERVICESITEMS.map(((item, idx) =>
              <ServicesItem
                key={idx}
                item={item}
              />))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services