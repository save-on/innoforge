import "./Main.css";
import mainImage from "../../assets/main__image.png";

const Main = () => {
  return (
    <main className="main">
      <img src={mainImage} alt="hero image" className="main__image" />
      <p className="main__role">software engineer</p>
    </main>
  );
};

export default Main;
