import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaPython, FaUserLock } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbApi } from "react-icons/tb";
const Frontend = () => {
    return (
        <motion.div
            className="skills_content"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h3 className="skills_title">Backend</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <div className="skills_icon">
                            <FaNodeJs />
                        </div>
                        <div>
                            <h3 className="skills_name">Node</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <SiMongodb />
                        </div>
                        <div>
                            <h3 className="skills_name">MongoDB</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <TbApi />
                        </div>
                        <div>
                            <h3 className="skills_name">REST</h3>
                        </div>
                    </div>
                </div>
                <div className="skills_group">
                    <div className="skills_data">
                        <div className="skills_icon">
                            <SiExpress />
                        </div>
                        <div>
                            <h3 className="skills_name">Express</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <FaPython />
                        </div>
                        <div>
                            <h3 className="skills_name">Python</h3>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_icon">
                            <FaUserLock />
                        </div>
                        <div>
                            <h3 className="skills_name">OAuth</h3>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Frontend;
