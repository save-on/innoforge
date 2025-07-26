import "./AniLogo.css";
import sComp from "../../assets/S.png";
import lineComp from "../../assets/Line.png";
import circleComp from "../../assets/circle.png";
import { useState } from "react";

const AniLogo = () => {
  const [condition, setCondition] = useState(false);
  const handleAnimation = (input) => {
    setCondition(input);
  };

  return (
    <div className="anilogo">
      <ul className="anilogo__components">
        <li className="anilogo__component">
          <img
            src={sComp}
            alt="logo"
            className="anilogo__image anilogo__image_S"
          />
        </li>
        <li className="anilogo__component">
          <img
            src={lineComp}
            alt="logo"
            className={`anilogo__image ${condition && "anilogo__image_line"}`}
          />
        </li>
        <li
          className="anilogo__component"
          onMouseEnter={() => {
            handleAnimation(!condition);
          }}
          onMouseLeave={() => {
            handleAnimation(!condition);
          }}
        >
          <img
            src={circleComp}
            alt="logo"
            className={`anilogo__image ${condition && "anilogo__image_circle"}`}
          />
        </li>
      </ul>
    </div>
  );
};

export default AniLogo;
