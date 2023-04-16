import React from "react";
import { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import "./index.scss";
import portfolio from "../../../assets/portfolio.jpeg";
import resume from "../../../assets/Faiyad_Rahman_Resume_2023.pdf";
import { FaUser, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const About = () => {
    const bios = [
        {
            id: 1,
            icon: <FaUser />,
            key: "Name",
            value: "Faiyad Rahman",
        },
        {
            id: 2,
            icon: <FaPhoneAlt />,
            key: "Phone",
            value: "(587) 598-2500",
        },
        {
            id: 3,
            icon: <FaPaperPlane />,
            key: "Email",
            value: "faiyad@ualberta.ca",
        },
    ];

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            animate(
                scope.current,
                { opacity: [0, 1], y: [-50, 0] },
                { duration: 1 }
            );
        }
    }, [isInView]);

    return (
        <div className="container" id="about">
            <motion.div ref={scope} className="title">
                <span>Who Am I?</span>
                <h1>About Me</h1>
            </motion.div>
            <div className="parent">
                <div className="about_container">
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: [-250, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="about_left"
                    >
                        <motion.img
                            src={portfolio}
                            whileHover={{ y: -48, x: -55 }}
                            transition={{ duration: 0.3 }}
                            alt="portfolio-img"
                        />
                    </motion.div>
                    <motion.div
                        className="about_right"
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: [250, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="bio_text">
                            Hi! I'm Faiyad Rahman, a 3rd-year Computer Science
                            student at the University of Alberta. My passion
                            lies in full-stack web development, and I love
                            creating innovative and user-friendly web
                            applications that provide exceptional experiences.
                            Over the years, I have completed several successful
                            projects that showcase my skills and expertise. I'm
                            constantly growing and expanding my knowledge, and
                            I'm excited to take on new challenges and projects.
                        </p>
                        <div className="bio_section">
                            {bios.map((bio) => {
                                return (
                                    <div className="bio" key={bio.id}>
                                        <span className="bioKey">
                                            <span className="bio_key_icon">
                                                {bio.icon}
                                            </span>

                                            {bio.key}
                                        </span>
                                        <span className="bioValue">
                                            {bio.value}
                                        </span>
                                    </div>
                                );
                            })}

                            <motion.a
                                href={resume}
                                target="_blank"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="resume_button"
                            >
                                View Resume
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
