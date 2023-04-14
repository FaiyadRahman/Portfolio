import React from "react";
import portfolio from "../../../assets/faiyad-memoji.jpg";
import "./index.scss";
import { motion } from "framer-motion";

const Home = () => {


    
    const moveVariants = {
        animation: {
            y: [0, 15,0],
            transition: {
                duration: 4,
                repeat: Infinity,
            },
        },
    };

    return (
        <motion.div
            className="container"
            id="home"
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 2,
                delay: 0.5,
            }}
        >
            <div className="profile">
                <img src={portfolio} alt="portfolio" />
            </div>
            <div className="profile_text">
                <h3 className="name">
                    Hi, I'm <span>Faiyad Rahman</span>{" "}
                </h3>
                <span className="job">Full-Stack Developer</span>
                <span className="text">
                    Passionate
                    <br /> to craft innovative <br /> web products.
                </span>
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.1 }}
                    variants={moveVariants}
                    transition={{ duration: 0.3 }}
                    animate="animation"
                >
                    connect with me
                </motion.a>
                <div className="front-end">Front-End</div>
                <div className="ui">UI/UX Designer</div>
                <div className="back-end">Back-End</div>
            </div>
        </motion.div>
    );
};

export default Home;