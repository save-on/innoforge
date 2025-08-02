import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" elment={<Contact />} />
        </Routes>
        <Footer />
        <Nav />
      </div>
    </div>
  );
}

export default App;
