import './sectionTitle.scss'

const SectionTitle = ({subtitle, title}) => {
  return (
    <>
      <span className="section__subtitle">{subtitle}</span>
      <h3 className="section__title">{title}</h3>
    </>
  )
}

export default SectionTitle