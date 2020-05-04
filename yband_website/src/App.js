import React from "react";
import { Header, Slider, Footer, Video, Term } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Term />
      <Footer />
    </div>
  );
}

export default App;
