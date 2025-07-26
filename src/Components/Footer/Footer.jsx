import "./Footer.css";
import linkedinIcon from "../../assets/square-linkedin-brands-solid-full.svg";
import githubIcon from "../../assets/github-brands-solid-full.svg";
import discordIcon from "../../assets/discord-brands-solid-full.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__socials">
        <li className="footer__link">
          <img
            src={linkedinIcon}
            alt="linkedin link"
            className="footer__link_image"
          />
        </li>
        <li className="footer__link">
          <img
            src={githubIcon}
            alt="github link"
            className="footer__link_image"
          />
        </li>
        <li className="footer__link">
          <img
            src={discordIcon}
            alt="discord link"
            className="footer__link_image"
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
