import React, { useEffect, useState } from "react";
import { FiGithub, FiEye } from "react-icons/fi";
import { motion, useAnimate, useInView } from "framer-motion";
import estately from "../../../assets/estately.png";
import chatGPT from "../../../assets/chatapp.png";
import adminDashboard from "../../../assets/dashboard.png";
import secrets from "../../../assets/secrets.png";
import "./index.scss";

const Portfolio = () => {
    const workImages = [
        {
            id: 1,
            img: estately,
            category: "Full-Stack",
            title: "Estately",
            description:
                "Real-estate portfolio manager that keeps track of your properties, income, and agents",
            github: "https://github.com/FaiyadRahman/Estately",
            link: "https://estately.onrender.com",
        },
        {
            id: 2,
            img: chatGPT,
            category: "Full-Stack",
            title: "ChatGPT Chat App",
            description:
                "A chat application that allows users to chat with other users and ChatGPT",
            github: "https://github.com/FaiyadRahman/ChatGPT-Chat-App",
            link: "https://chatgpt-chatapp.onrender.com",
        },
        {
            id: 3,
            img: adminDashboard,
            category: "Front-End",
            title: "Admin Dashboard",
            description:
                "A mock dashboard for visualizing data and managing admin tasks",
            github: "https://github.com/FaiyadRahman/admin-dashboard",
            link: "https://admin-dashboard-we44.onrender.com",
        },
        {
            id: 4,
            img: secrets,
            category: "Back-End",
            title: "Secrets",
            description:
                "A social media app that allows users to share their secrets annonymously",
            github: "https://github.com/FaiyadRahman/Secrets",
            link: "https://secrets-oeso.onrender.com",
        },
    ];

    const workNavs = ["All", "Full-Stack", "Front-End", "Back-End"];

    const [tab, setTab] = useState({ name: "all" });
    const [works, setWorks] = useState([]);
    const [active, setActive] = useState(0);

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    const [scopeButton, animateButton] = useAnimate();
    const ButtonInView = useInView(scopeButton);

    useEffect(() => {
        if (ButtonInView) {
            animateButton(
                scopeButton.current,
                { opacity: [0, 1], y: [-50, 0] },
                { duration: 1 }
            );
        }
    }, [ButtonInView]);

    useEffect(() => {
        if (isInView) {
            animate(
                scope.current,
                { opacity: [0, 1], y: [-50, 0] },
                { duration: 1 }
            );
        }
    }, [isInView]);

    useEffect(() => {
        if (tab.name === "all") {
            setWorks(workImages);
        } else {
            const newWork = workImages.filter((workImage) => {
                return workImage.category.toLowerCase() === tab.name;
            });
            setWorks(newWork);
        }
    }, [tab]);

    const activeTab = (e, index) => {
        setTab({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <div className="container" id="portfolio">
            <motion.div ref={scope} className="title">
                <span>My Work</span>
                <h1>Awesome Projects</h1>
            </motion.div>
            <motion.div ref={scopeButton} className="buttons">
                {workNavs.map((workNav, index) => {
                    return (
                        <button
                            onClick={(e) => activeTab(e, index)}
                            className={`${active === index ? "active" : ""}`}
                            key={index}
                        >
                            {workNav}
                        </button>
                    );
                })}
            </motion.div>
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [-250, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, y: -50 }}
                className="workImages"
            >
                {works.map((work) => {
                    return (
                        <div className="workCard" key={work.id}>
                            <div className="workImage">
                                <img src={work.img} alt="workImg" />

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="hoverLayer"
                                >
                                    <motion.a
                                        href={work.github}
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 1.1] }}
                                        transition={{ duration: 0.3 }}
                                        target="_blank"
                                    >
                                        <FiGithub />
                                    </motion.a>

                                    <motion.a
                                        href={work.link}
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 1.1] }}
                                        transition={{ duration: 0.3 }}
                                        target="_blank"
                                    >
                                        <FiEye />
                                    </motion.a>
                                </motion.div>
                            </div>
                            <div className="workInfo">
                                <h3 className="workTitle">{work.title}</h3>
                                <p className="workParagraph">
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Portfolio;
