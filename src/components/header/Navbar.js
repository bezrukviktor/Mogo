import { useState, useEffect, useCallback } from 'react';
import { LINKS } from './constants'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    const targetElement = document.querySelector('.navbar')
    activeMenu ? disableBodyScroll(targetElement) : enableBodyScroll(targetElement)
  }, [activeMenu])

  const toggleMenu = useCallback(() => {
    setActiveMenu(!activeMenu)
  }, [activeMenu])

  return (
    <>
      <div className={`backdrop ${activeMenu ? 'backdrop--active' : ''}`}
      onClick={toggleMenu} />
      <nav className={`navbar ${activeMenu ? 'navbar--active' : ''}`}>
        {LINKS.map((item, idx) => <a href='#' key={idx} className={`navbar-link ${item.isActive ? 'navbar-link--active' : ''}`}>{item.name}</a>)}
      </nav>
      <div className={`hamburger ${activeMenu ? 'hamburger--active' : ''}`} onClick={toggleMenu}>
        <span />
      </div>
    </>
  )
}

export default Navbar