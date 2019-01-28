import React from "react";
import "./RightSide.css";
const RightSide = props => (
  <div className="Right-side">
    <div className={"flex-middle " + props.rightExtra}>
      <div className="year">2019</div>
      <div className="profession">Front end developer</div>
      <div className="body">
        Hello! I am Beka, Front-end Developer from Georgia. I am a responsible
        and hard-working person with good communication and fast-learning
        skills. My highest priority when working with customers is to deliver a
        high-quality product.
      </div>

      <div className="Languages-home">
        <div>
          <span className="Languages-title">Languages:</span> #HTML5 , CSS3
        </div>
        <div>#JavaScript</div>
        <div>#React</div>
      </div>
    </div>
  </div>
);
export default RightSide;
