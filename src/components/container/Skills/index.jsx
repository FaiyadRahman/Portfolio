import React, { useEffect } from "react";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import "./index.scss";
import Frontend from "./Frontend";
import Backend from "./Backend";
import GeneralProgramming from "./GeneralProgramming";

const Skills = () => {
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

    const [scopeTitle, animate] = useAnimate();
    const isInView = useInView(scopeTitle);

    const [scopeButton, animateButton] = useAnimate();
    const ButtonInView = useInView(scopeButton);

    const [scopeFinishes, animateFinishes] = useAnimate();
    const FinishesInView = useInView(scopeFinishes);

    const [scopeCards, animateCards] = useAnimate();
    const CardsInView = useInView(scopeCards);

    useEffect(() => {
        if (isInView) {
            animate(
                scopeTitle.current,
                { opacity: [0, 1], y: [-50, 0] },
                { duration: 1 }
            );
        }
    }, [isInView]);

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
        if (FinishesInView) {
            animateFinishes(
                scopeFinishes.current,
                { opacity: [0, 1], y: [-50, 0] },
                { duration: 1 }
            );
        }
    }, [FinishesInView]);

    useEffect(() => {
        if (CardsInView) {
            animateCards(
                "div",
                { opacity: [0, 1], x: [100, 0] },
                { delay: stagger(0.05) }
            );
        }
    }, [CardsInView]);

    return (
        <div className="container" id="skills">
            <motion.div ref={scopeTitle} className="title">
                <span>What I am Good at</span>
                <h1>Tchnical Skills</h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
            >
                <div ref={scopeCards} className="skills_container">
                    <Frontend />
                    <Backend />
                    <GeneralProgramming />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                className=""
            >

            </motion.div>
            <motion.div ref={scopeFinishes} className="finishes_container">
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
