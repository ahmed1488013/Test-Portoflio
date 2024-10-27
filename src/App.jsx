import "./App.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Nabar from "./components/navbar/Nabar";
import Paralex from "./components/paralex/Paralex";
import Portoflio from "./components/portoflio/Portoflio";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Nabar />
        <Hero/>
      </section>
      <section id="Services"><Paralex type="Services"/></section>
      <section><Services/></section>
      <section id="Portoflio"><Paralex type="Portoflio"/></section>
      <Portoflio/>
      <section id="Contact"><Contact/></section>
    </div>
  );
};

export default App;
