import React from "react";
import { H1 } from "../../font-library";
import "./styles.css";
import Experiences from "./card";
// import StyledResume from "./styled-resume";

const Resume = () => {
    return (
        <section id="resume">
            <div className="resume-container">
                <H1>Experience</H1>
                <Experiences/>
            </div>
        </section>
    );
}

export default Resume;