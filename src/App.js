import './App.scss';
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import OurHouses from './pages/OurHouses'
import WhyUs from './pages/WhyUs'
import Faq from './pages/Faq'
import AboutUs from './pages/AboutUs'
import FixedHeader from './Components/FixedHeader'
import Hero from './Components/Hero'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <FixedHeader />
      <Hero />

      <Router>
        <Switch>
          <Route path="/" exact/>
          <Route path="/about" component={AboutUs} />
          <Route path="/our-houses" component={OurHouses}/>
          <Route path="why-us" component={WhyUs}/>
          <Route path="faq" component={Faq}/>
          <Route path="contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
