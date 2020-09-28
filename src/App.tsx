import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page">
      <Header/>
      <div className="page-content">
        <div className="container">
          <Hero/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
