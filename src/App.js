import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cursor from './Components/Cursor/Cursor';
import Home from './Components/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  return (
    <div className="app__container">
      <Router>
      <Cursor/>
        <Switch>
          <Route to='/' exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
