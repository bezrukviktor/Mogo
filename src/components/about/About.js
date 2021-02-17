import './about.scss'
import SectionTitle from '../common/SectionTitle'
import { IMAGES } from './constants'

const About = () => {
  return (
    <section className="section about">
      <div className="container">
        <div className="about-wrap">
          <SectionTitle
            subtitle='What we do'
            title='Story about us'
          />
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="about-images">
            {IMAGES.map((img, idx) => 
            <div key={idx} className="content">
              <div className="content-overlay"></div>
              <img src={`/images/${img.name}.jpg`} alt={img.alt} />
              <div className="content-details">
                <h4 className="content-text">{img.alt}</h4>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  )
}


// <img key={idx} src={`/images/${img.name}.jpg`} alt={img.alt} />

export default About