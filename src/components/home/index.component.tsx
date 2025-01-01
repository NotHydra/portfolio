import { JSX } from "react";
import { ReactTyped } from "react-typed";

export default function Home(): JSX.Element {
    return (
        <section className="home" id="home">
            <div className="text">
                <h1 className="scroll-bottom-200">
                    Rizky <span>Irswanda</span>
                </h1>

                <h6 className="scroll-bottom-200">
                    Experienced in{" "}
                    <span>
                        <ReactTyped
                            strings={[
                                "Web Development", //
                                "Desktop Development",
                                "Back-End Development",
                                "Database Engineering",
                                "Internet of Things Engineering",
                            ]}
                            typeSpeed={30}
                            backSpeed={5}
                            loop
                        />
                    </span>
                </h6>

                <p className="scroll-bottom-400" style={{ textAlign: "justify", fontSize: "1rem", fontWeight: 400 }}>
                    A second-year <span>Computer Science</span> student who likes to spend time on <span>Software</span> & <span>Internet of Things</span> Engineering
                </p>

                <div className="scroll-bottom-600">
                    <a className="button bigger-margin-right" style={{ marginRight: "1rem" }} href="#about">
                        Read More
                    </a>

                    <a className="button" href="https://drive.google.com/file/d/1f3naCSF5b0VDV5cROJFspEJlFaARyASP/view?usp=sharing" target="_blank">
                        View CV
                    </a>
                </div>
            </div>

            <div className="image scroll-bottom-1000">
                <img src="image/profile.jpg" alt="Home Section Profile Picture" />
            </div>
        </section>
    );
}
