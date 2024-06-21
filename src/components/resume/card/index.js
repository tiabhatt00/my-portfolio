import React from "react";
import { ReactComponent as CodeIcon } from '../../images/codeicon.svg';
import data from './data';
import "./styles.css";
// import StyledResume from "./styled-resume";

const Experiences = () => {
    return (
        <div className="card-container">
            {data.experiences.map((experience, index) => (
                <div key={index} className="experience">
                    <h3 className="company">{experience.company}</h3>
                    <p className="position">{experience.position}</p>
                    <ul>
                        {experience.responsibilities.slice(0, 2).map((responsibility, idx) => (
                            <li className="responsibility" key={idx}>{responsibility}</li>
                        ))}
                    </ul>
                    <div className="stack-container">
                        <CodeIcon />
                        <p className="stack">{experience.stack}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experiences;
