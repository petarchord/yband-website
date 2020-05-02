import React from "react";
import { Header, Slider, Footer, Video } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
