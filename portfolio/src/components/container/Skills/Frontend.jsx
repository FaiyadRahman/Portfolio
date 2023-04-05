import React from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaFigma,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiRedux} from "react-icons/si";

const Frontend = () => {
    return (
        <motion.div
            className="skills_content"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h3 className="skills_title">Frontend</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <div className="skills_icon">
                            <FaHtml5 />
                        </div>
                        <div>
                            <h3 className="skills_name">HTML</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <SiJavascript />
                        </div>
                        <div>
                            <h3 className="skills_name">Javascript</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <FaReact/>
                        </div>
                        <div>
                            <h3 className="skills_name">React</h3>
                        </div>
                    </div>
                </div>
                <div className="skills_group">
                    <div className="skills_data">
                        <div className="skills_icon">
                            <FaCss3 />
                        </div>
                        <div>
                            <h3 className="skills_name">CSS</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <SiTypescript />
                        </div>
                        <div>
                            <h3 className="skills_name">Typescript</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <SiRedux />
                        </div>
                        <div>
                            <h3 className="skills_name">Redux</h3>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Frontend;
