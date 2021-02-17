import './top.scss'
import { SLIDERNAV } from './constants'

const Hero = () => {
  return (
    <section className="top">
      <div className="container">
        <div className="top-wrap">
          <div className="top-content">
            <span className="top__subtitle">Creative Template</span>
            <h2 className="top__title">Welcome<br /> to MoGo</h2>
            <button className="top__btn">Learn more</button>
          </div>
        </div>
        <div className="slider">
          <div className="slider-nav">
            {SLIDERNAV.map((item, idx) =>
              <span key={idx} className={`slider-nav__item ${item.isActive ? 'slider-nav--active' : ''}`}>
                <b>{item.number}</b> {item.name}
              </span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero