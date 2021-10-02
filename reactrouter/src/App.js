import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Home';
import './About';
import './Contact';
import Contact from './Contact';
import About from './About';
import Home from './Home';

function App() {


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React Router</h1>
        </header>
        <main>

          <div className="routes">
              <Link to="/">Home</Link>{' '}
              <Link to="/about">About</Link>{' '}
              <Link to="/contact">Contact</Link>{' '}
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>

        </main>
      </div>
    </Router>
  );
}

export default App;
