import React from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaFigma } from "react-icons/fa";
import { DiLinux } from "react-icons/di";
import { SiBootstrap, SiMaterialdesign } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";

const Frontend = () => {
    return (
        <motion.div
            className="skills_content"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h3 className="skills_title">Tools & Frameworks</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <div className="skills_icon">
                            <TbBrandTailwind />
                        </div>
                        <div>
                            <h3 className="skills_name">Tailwind</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <SiMaterialdesign />
                        </div>
                        <div>
                            <h3 className="skills_name">Material UI</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <FaGitAlt />
                        </div>
                        <div>
                            <h3 className="skills_name">Git</h3>
                        </div>
                    </div>
                </div>
                <div className="skills_group">
                    <div className="skills_data">
                        <div className="skills_icon">
                            <SiBootstrap />
                        </div>
                        <div>
                            <h3 className="skills_name">Bootstrap</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <FaFigma />
                        </div>
                        <div>
                            <h3 className="skills_name">Figma</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <DiLinux />
                        </div>
                        <div>
                            <h3 className="skills_name">Linux</h3>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Frontend;
