import { JSX } from "react";
import { ReactTyped } from "react-typed";

export default function Home(): JSX.Element {
    const skills: string[] = ["Web Development", "Desktop Development", "Back-End Development", "Database Engineering", "Internet of Things Engineering"];

    return (
        <section className="home" id="home">
            <div className="text">
                <h1>
                    Rizky <span>Irswanda</span>
                </h1>

                <h6>
                    Experienced in{" "}
                    <span>
                        <ReactTyped strings={skills} typeSpeed={30} backSpeed={5} loop />
                    </span>
                </h6>

                <p style={{ textAlign: "justify", fontSize: "1rem", fontWeight: 400 }}>
                    A second-year <span>Computer Science</span> student who likes to spend time on <span>Software</span> & <span>Internet of Things</span>{" "}
                    Engineering
                </p>

                <a style={{ marginRight: "1rem" }} href="#about" className="button bigger-margin-right">
                    Read More
                </a>

                <a target="_blank" href="https://drive.google.com/file/d/1f3naCSF5b0VDV5cROJFspEJlFaARyASP/view?usp=sharing" className="button">
                    View CV
                </a>
            </div>

            <div className="image">
                <img src="image/profile.jpg" alt="Profile" />
            </div>
        </section>
    );
}
