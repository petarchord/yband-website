import React from "react";
import { Header, Slider, Footer } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
