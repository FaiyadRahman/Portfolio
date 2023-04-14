import { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import "./index.scss";

const Experience = () => {
    const [scopeTitle, animate] = useAnimate();
    const isInView = useInView(scopeTitle);

    const [scope1, animate1] = useAnimate();
    const isInView1 = useInView(scope1);

    const [scope2, animate2] = useAnimate();
    const isInView2 = useInView(scope2);

    const [scope3, animate3] = useAnimate();
    const isInView3 = useInView(scope3);

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
        if (isInView1) {
            animate1(scope1.current, { opacity: [0, 1] }, { duration: 1.5 });
        }
    }, [isInView1]);

    useEffect(() => {
        if (isInView2) {
            animate2(scope2.current, { opacity: [0, 1] }, { duration: 1 });
        }
    }, [isInView2]);

    useEffect(() => {
        if (isInView3) {
            animate3(scope3.current, { opacity: [0, 1] }, { duration: 1 });
        }
    }, [isInView3]);

    return (
        <div className="container" id="experience">
            <motion.div ref={scopeTitle} className="title">
                <span>What I have done</span>
                <h1>Experience</h1>
            </motion.div>
            <div className="timeline-section">
                <div ref={scope1} className="timeline-items">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">
                            {" "}
                            Sept. 2020 - Present
                        </div>
                        <div className="timeline-content">
                            <h3>BSc. in Computer Science</h3>
                            <h4>University of Alberta</h4>
                            <p>
                                Gained strong foundation knowledge in networks,
                                data structures and algorithms, and design
                                principles
                            </p>
                        </div>
                    </div>
                    <div ref={scope2} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">
                            Sept. 2021 - Apr. 2022
                        </div>
                        <div className="timeline-content">
                            <h3>Software Developer</h3>
                            <h4>Google Developer Student Club</h4>
                            <p>
                                Led a team of 6 developers to create a Discord
                                bot that notifies students when new internship
                                opportunities are posted online. Helped over 50
                                students discover 200+ opportunities
                            </p>
                        </div>
                    </div>
                    <div ref={scope3} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">
                            Dec. 2022 - Jan. 2023
                        </div>
                        <div className="timeline-content">
                            <h3>The Complete 2023 Web Development Bootcamp</h3>
                            <h4>Udemy</h4>
                            <p>
                                Learned strong web development skills with the
                                MERN stack. Developed 14 projects with a focus
                                on professional best practices
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
