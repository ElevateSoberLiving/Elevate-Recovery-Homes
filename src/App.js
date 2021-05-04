import './App.scss';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import Location from './pages/Location'
import Program from './pages/Program'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'

import FixedHeader from './Components/FixedHeader'
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
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/location" component={Location} />
          <Route path="/program" component={Program} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
