import './App.scss';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import OurHouses from './pages/OurHouses'
import WhyUs from './pages/WhyUs'
import Faq from './pages/Faq'
import FixedHeader from './Components/FixedHeader'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <FixedHeader />
        <Hero />
        <Switch>
          <Route path="/" exact  component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/our-houses" component={OurHouses} />
          <Route path="why-us" component={WhyUs} />
          <Route path="faq" component={Faq} />
          <Route path="contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
