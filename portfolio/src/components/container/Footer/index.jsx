import React from "react";
import "./index.scss";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { motion } from "framer-motion";

const Footer = () => {
    const socialIcons = [
        { icon: <GrMail />, link: "mailto:faiyad@ualberta.ca" },
        { icon: <FaLinkedin />, link: "https://linkedin.com/in/faiyad" },
        { icon: <AiFillGithub />, link: "https://github.com/FaiyadRahman" },
    ];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            className="footer"
        >
            <div className="copyright">
                <p>
                    &copy;2023 All rights reserved. Made 
                    by <span>Faiyad Rahman</span>
                </p>
            </div>
            <div className="followMe">
                <h4>Follow Me</h4>
                <div className="stick"></div>
                <div className="social_icons">
                    {socialIcons.map((socialIcon, index) => {
                        return (
                            <a
                                href={socialIcon.link}
                                target="_blank"
                                key={index}
                            >
                                {socialIcon.icon}
                            </a>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
