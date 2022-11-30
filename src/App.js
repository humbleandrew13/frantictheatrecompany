import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './Main';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Productions from './Productions';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Header />
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/productions">
            <Productions />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;