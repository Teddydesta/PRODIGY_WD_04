import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
const App=()=>{
  return (
<main>
  <Header/>
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