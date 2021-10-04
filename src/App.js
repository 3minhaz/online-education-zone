import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound'
import Courses from './components/Courses/Courses';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Courses></Courses>
          </Route>
          <Route path="/home">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route >
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
