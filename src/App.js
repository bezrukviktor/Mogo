import './App.scss';
import Hero from './components/top/Top'
import About from './components/about/About'
import Services from './components/services/Services'
import Statistic from './components/statistic/Statistic'
import Header from './components/header/Header'

const App = () => {
  
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Statistic />
      <Services />
    </>
  )
}

export default App;
