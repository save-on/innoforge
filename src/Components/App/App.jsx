import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Main />
        <Footer />
        <Nav />
      </div>
    </div>
  );
}

export default App;
