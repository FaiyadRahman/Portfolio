import { AiOutlineCalendar } from "react-icons/ai";

const Experience = () => {
    return (
        <div className="timeline-section">
            <div class="timeline-items">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date"> Sept 2020 - present</div>
                    <div class="timeline-content">
                        <h3>BSc. in Computer Science</h3>
                        <h4>University of Alberta</h4>
                        <p>
                            Gained strong foundation knowledge in networks, data
                            structures and algorithms, and design principles.
                        </p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Sept 2021 - Apr 2022</div>
                    <div class="timeline-content">
                        <h3>Software Developer</h3>
                        <h4>Google Developer Student Club</h4>
                        <p>
                            Led a team of 6 developers to create a Discord bot
                            that notifies students when new internship
                            opportunities are posted online. Helped over 50
                            students discover 200+ opportunities.
                        </p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">Jan - Mar 2023</div>
                    <div class="timeline-content">
                        <h3>The Complete 2023 Web Development Bootcamp</h3>
                        <h4>Udemy</h4>
                        <p>
                            Learned strong web development skills with the MERN
                            stack. Developed 14 projects with a focus on
                            professional best practices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
