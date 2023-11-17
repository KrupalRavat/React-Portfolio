import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa
        autem nesciunt voluptatibus, nam minima iusto nulla minus adipisci
        veniam dolor ipsam magnam commodi asperiores! Ea tempora optio ipsam,
        eligendi unde architecto ratione sed odio.
      </span>
      <div className="skillsBars">
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>Demo text</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Website Design</h2>
                <p>Demo text</p>
            </div>
        </div> <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>App Design</h2>
                <p>Demo text</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
