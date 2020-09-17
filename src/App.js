import React, { useState } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import HookEffectOne from "./components/HookEffectOne";
import { IconName, FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { IconContext } from "react-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tippy from "react-tippy";
import "react-tippy/dist/tippy.css";
import CountUp, { useCountUp } from "react-countup";
import IdeaTimerCointainer from "./components/IdeaTimerCointainer";
import Modal from "react-modal";
import ColorPicker from "./components/ColorPicker";
import CreditCard from "./components/CreditCard";
import DatePickerd from "./components/DatePicker";
import DatePicker from "./components/DatePicker";
import ReactPlayer from "react-player";
import ReactSpinners from "./components/ReactSpinners";
import Charts from "./components/ReactCharts/Charts";
import LineChart from "../src/components/ReactCharts/Charts";
import BarChart from "./components/ReactCharts/BarChart";
import DoughnutChart from "./components/ReactCharts/DoughnutChart";
import ReactProps from "./components/ReactProps";
import ReactClass from "./components/ReactClass";
import StateMessage from "./components/StateMessage";
import Header from "./AirBnB/Header";
import Home from "./AirBnB/Home";
import FneventHandler from "./components/FneventHandler";
import StateHandler from "./components/StateHandler";
import Banner from "./AirBnB/Banner";
import Footer from "./AirBnB/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./AirBnB/SearchPage";
import Contact from "./AirBnB/Contact";
import DropDown from "./AirBnB/DropDown";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <div>
      {/*<Pagination />*/}
      <Router>
        <Header />
        <Switch>
          <Route path="/pagination">
            <Pagination />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
