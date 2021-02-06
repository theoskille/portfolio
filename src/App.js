import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/about" exact component={About}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
