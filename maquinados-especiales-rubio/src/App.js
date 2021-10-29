// First import react
import React from "react";

// import router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import materialize
import "materialize-css";

// Import css stylesheet
import "./App.css";

// Import components to build the routes
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import the subpages to test our routes
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Philosophy from "./pages/Philosophy";
import Politics from "./pages/Politics";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="application-header">
        <Header />
        <div className="main-sections">
          <Switch>
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/filosofia">
              <Philosophy />
            </Route>
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/servicios">
              <Services />
            </Route>
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/politica">
              <Politics />
            </Route>
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/certificaciones">
              <Certifications />
            </Route>
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/contacto">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
