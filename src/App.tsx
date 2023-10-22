import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {Routes,Route} from 'react-router-dom'
const App=()=>{
  return (
<main className="">
  <Header/>
  {/* {/* <Navbar/> */}
  <Home/>
  <About/>
  <Projects/>
  <Skills/>
  <Contact/>
  <Footer/> 

</main>
  )
}

export default App;