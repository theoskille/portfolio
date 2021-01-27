import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import Projects from './pages/Projects';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
