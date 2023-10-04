import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App=()=>{
  return (
<main className="text-gray-900 bg-white-600 body-font ">

  <Navbar/>
  <About/>
  <Projects/>
  <Skills/>
  <Contact/>
  <Footer/>

</main>
  )
}

export default App;