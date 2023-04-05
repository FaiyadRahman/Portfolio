import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaReact,
    FaSass,
    FaFigma,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import "./index.scss";
import Frontend from "./Frontend";
import Backend from "./Backend";
import GeneralProgramming from "./GeneralProgramming";

const Skills = () => {
    const experiences = [
        {
            id: 1,
            year: "2022",
            position: "Software Developer",
            company: "Google Developer Student Club",
        },
    ];

    const finishes = [
        {
            id: 1,
            number: "3",
            itemName: "Years Experience",
        },
        {
            id: 2,
            number: "30+",
            itemName: "Projects Completed",
        },
        {
            id: 3,
            number: "5",
            itemName: "Teams Managed",
        },
    ];

    const [active, setActive] = useState(1);

    return (
        <div className="container" id="skills">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="title"
            >
                <span>My Technical skills</span>
                <h1>Skills And Experience</h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="select"
            >
                <button
                    onClick={() => setActive(1)}
                    className={active === 1 ? "active" : ""}
                >
                    Skills
                </button>
                <button
                    onClick={() => setActive(2)}
                    className={active === 2 ? "active" : ""}
                >
                    Experiences
                </button>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
            >
                {active === 1 && (
                    <div className="skills_container">
                        <Frontend />
                        <Backend />
                        <GeneralProgramming />
                    </div>
                )}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="experiences"
            >
                {active === 2 &&
                    experiences.map((experience) => {
                        return (
                            <div className="experience" key={experience.id}>
                                <span>{experience.year}</span>
                                <div className="position">
                                    <h3>{experience.position}</h3>
                                    <p>{experience.company}</p>
                                </div>
                            </div>
                        );
                    })}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className="finishes_container"
            >
                {finishes.map((finish) => {
                    return (
                        <div className="finishes" key={finish.id}>
                            <div className="number">{finish.number}</div>
                            <h4 className="item_name">{finish.itemName}</h4>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Skills;
