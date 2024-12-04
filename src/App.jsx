import { createContext } from "react";
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Dummy from "./components/Dummy";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
const contextapi = createContext();
function App() {
  return (
    <>
      {/* <h1>Lorem ipsum dolor sit amet.</h1> */}
      {/* <contextapi.Provider value={}> */}
      <Header />
      {/* <Home /> */}
      <About />
      <Service />
      <Blog />
      <Footer />
      <Dummy />
      {/* </contextapi.Provider> */}
    </>
  );
}

export default App;
