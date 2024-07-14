import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contacto from "./components/Contacto/contacto";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills/>
      <Works/>
      <Contacto/>
      <Footer/>

    </div>
  );
}

export default App;
