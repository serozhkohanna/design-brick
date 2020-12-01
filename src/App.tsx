import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Cards from './components/Cards/Cards';
import Tooltip from "./components/Tooltip/Tooltip";
import { connect } from "react-redux";

function App({tooltipData}) {
  console.log(tooltipData, 'data');

  return (
    <div className="page">
      <Header/>
      <div className="tooltips">
        {tooltipData?.map((item, i) => {
          return <Tooltip type={item.type} key={i} message={item.message}/>
        })}
      </div>
      <div className="page-content">
        <div className="container">
          <Hero/>
          <Cards/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

const mapStateToProps = ({tooltip}) => {
  return {
    tooltipData: tooltip.tooltips
  }
}

export default connect(mapStateToProps)(App);
