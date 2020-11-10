import './App.scss';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom'
import Header from "./js/Header";
import Carusele from "./js/Carusele";
import AboutMe from "./js/AboutMe";
import Oferts from "./js/Oferts";
import Collaboration from "./js/Collaboration";
import Statistick from "./js/Statistick";
import Footer from "./js/Footer";
import Picters from "./js/Picters";
import Form from "./js/Form";
import References from "./js/References";
import AboutMeSections from "./js/AboutMeSections";
import OfertsSection from "./js/OfertsSection";
import CollaborrationSection from "./js/CollaborrationSection";

function App() {
  return (
      <HashRouter>
          <div className="App">
              <header><Header/></header>
              <Switch>
                  <Route exact path="/">
                      <>
                          <Header/>
                          <Carusele/>
                          <AboutMe/>
                          <Statistick/>
                          <Oferts/>
                          <Collaboration/>
                          <Picters/>
                          <References/>
                      </>
                  </Route>

                  <Route path="/o mnie">
                      <AboutMeSections/>
                  </Route>
                  <Route path="/oferta">
                      <OfertsSection/>
                  </Route>
                  <Route path="/zasady wspolpracy">
                      <CollaborrationSection/>
                  </Route>
                  <Route path="/kontakt">
                      <Form/>
                  </Route>

              </Switch>

              <footer><Footer/></footer>
          </div>
      </HashRouter>
  );
}

export default App;

