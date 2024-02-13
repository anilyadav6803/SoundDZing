import React from "react";
import { useState } from "react";
import "./Topic.css";
import {
  frequencies,
  daw,
  vocalsProcessing,
  mixing,
  mixingConsole,
  mastering,
  bgElement1,
} from "../../assets/index";
const Topic = () => {
  const [image, setImage] = useState(frequencies);
  return (
    <section className="black">
      <div className="text" >
        <h1>What will you learn?</h1>
        <div className="content-container ">
          <ul>
            <li onMouseEnter={() => setImage(frequencies)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setImage(daw)}>Using DAW</li>
            <li onMouseEnter={() => setImage(vocalsProcessing)}>
              Vocal Processing
            </li>
            <li onMouseEnter={() => setImage(mixing)}>Mixing</li>
            <li onMouseEnter={() => setImage(mixingConsole)}>Mixing Console</li>
            <li onMouseEnter={() => setImage(mastering)}>Mastering</li>
          </ul>

          <div className="topic-image">
            <img src={image}></img>
          </div>
        </div>
        <img src={bgElement1} className="bg-element-1"></img>
      </div>
    </section>
  );
};

export default Topic;
