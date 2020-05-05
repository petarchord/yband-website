import React from "react";
import { Header, Slider, Footer, Video, Term, Contact } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
