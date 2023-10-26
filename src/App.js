import './App.css';
import React, { Component} from 'react'
import Navbar from './compnents/Navbar';
import News from './compnents/News';
import {
  BrowserRouter as Router,
  Routes,Route
} from 'react-router-dom';



export default class App extends Component {

  pageSize=6;


  render() {
   
    return (
      <div id='app-bg'>
        <Router>
        <Navbar></Navbar>
        <Routes>
        <Route exact path="/" element={<News key={"business"} country = "us" category="Business" pageSize = {this.pageSize}/>}></Route>
        <Route exact path="/business" element={<News key={"business"} country = "us" category="Business" pageSize = {this.pageSize}/>}></Route>
        <Route exact path="/entertainment"element={<News key={"entertainment"} country = "us" category="Entertainment" pageSize = {this.pageSize}/>}></Route>
        <Route exact path="/health" element={<News key={"health"} country = "us" category="Health" pageSize = {this.pageSize}/>}></Route>
        <Route exact path="/science" element={<News key={"science"} country = "us" category="Science" pageSize = {this.pageSize}/>}></Route>
        <Route exact path="/sports" element={<News key={"sports"} country = "us" category="Sports" pageSize = {this.pageSize}/>}></Route>
        <Route exact path="/technology" element={<News key={"technology"} country = "us" category="Technology" pageSize = {this.pageSize}/>}></Route>
        </Routes>
        </Router>
      </div>
    ) 
  }
}
