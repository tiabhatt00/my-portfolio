import React from "react";
import { H1 } from "../../font-library";
import data from './data';
import { ReactComponent as CodeIcon } from '../images/codeicon.svg';
import "./styles.css";

const Experience = () => {
    return (
        <section id="resume">
            <div className="resume-container">
                <H1>Experience</H1>
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
            </div>
        </section>
    );
}

export default Experience;