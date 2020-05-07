import React from "react";
import { Header, Home, Footer, Video, Term, Contact } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/video" component={Video} />
          <Route path="/terms" component={Term} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
