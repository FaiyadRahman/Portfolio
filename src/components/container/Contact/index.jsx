import React, { useEffect } from "react";
import "./index.scss";
import { motion, useAnimate, useInView } from "framer-motion";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { GrMail, GrLinkedin } from "react-icons/gr";

const Contact = () => {
    const contacts = [
        {
            id: 1,
            icon: <GrLinkedin />,
            infoText: "Faiyad Rahman",
        },
        {
            id: 2,
            icon: <GrMail />,
            infoText: "faiyad@ualberta.ca",
        },
        {
            id: 3,
            icon: <FaPhoneAlt />,
            infoText: "+1 (587) 598-2500",
        },
    ];

    const socialIcons = [
        { icon: <FaLinkedin />, link: "https://linkedin.com/in/faiyad" },
        { icon: <AiFillGithub />, link: "https://github.com/FaiyadRahman" },
        { icon: <GrMail />, link: "mailto:faiyad@ualberta.ca" },
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
        <div className="container" id="contact">
            <motion.div ref={scope} className="title">
                <span>get in touch</span>
                <h1>Contact Me</h1>
            </motion.div>
            <div className="contact_form">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="contact_left_container"
                >
                    <h3>Just Say Hi</h3>
                    <p className="contact_text">
                        I am actively seeking new opportunities, especially for
                        Summer/Fall 2023. If you have any questions or are
                        interested in working with me, please feel free to reach
                        out!
                    </p>
                    {contacts.map((contact) => {
                        return (
                            <div className="contact_left" key={contact.id}>
                                <div className="icon">{contact.icon}</div>
                                <p>{contact.infoText}</p>
                            </div>
                        );
                    })}
                    <div className="social_icons">
                        {socialIcons.map((socialIcon, index) => {
                            return (
                                <div key={index}>
                                    <a
                                        className="social_icon"
                                        href={socialIcon.link}
                                        target="_blank"
                                    >
                                        {socialIcon.icon}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="contact_right"
                >
                    <h3>Get In Touch</h3>
                    <form method="POST" data-netlify="true" name="contact">
                        <div className="row">
                            <input name="name" type="text" placeholder="name" />
                        </div>
                        <div className="row">
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                            />
                        </div>
                        <div className="row">
                            <textarea
                                name="message"
                                placeholder="message"
                            ></textarea>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className="btn"
                        >
                            <button type="submit" class="styled-button">
                                Send
                            </button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
