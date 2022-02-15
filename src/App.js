import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routes from "./config/Routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
