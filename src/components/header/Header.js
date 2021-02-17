import './header.scss'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <h1 className="logo">MoGo</h1>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header