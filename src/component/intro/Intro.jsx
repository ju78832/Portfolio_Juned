import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 500,
      backSpeed:50,
      strings: ['Developer', 'Designer', 'Content Creator'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
     <div className="left">
      <div className="imgContainer">
        <img src="assets/man2.png" alt=""/>
      </div>
     </div>
     <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Mohd Juned</h1>
        <h3>
          Mern <span ref = {textRef}></span>
        </h3>
      </div>
      <a href="#portfolio">
        <img src="assets/down.png" alt=""/>
      </a>
     </div>
    </div>
  );
}
