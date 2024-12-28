import { JSX } from "react";

export default function About(): JSX.Element {
    return (
        <section className="about" id="about">
            <div className="image scroll-bottom-200">
                <img src="image/about.jpg" alt="About" style={{ borderRadius: "12.5%" }} />
            </div>

            <div className="text">
                <h3 className="scroll-bottom-600">ABOUT</h3>

                <p className="scroll-bottom-600" style={{ textAlign: "justify", fontSize: "1rem", fontWeight: 500 }}>
                    Rizky Irswanda, born in Balikpapan, Indonesia. A multi-purpose <span>Programmer</span> with experience in <span>Software</span> Engineering, <span>Back-End</span> Development &{" "}
                    <span>Database</span> Engineering fields. Developed a wide range of projects. Starting from, the implementation of <span>full-stack applications</span>, development of{" "}
                    <span>REST API servers</span>, and engineered complex relational <span>databases</span>. Currently taking an interest in <span>Internet of Things</span> Engineering.
                </p>

                <div className="count">
                    <div className="scroll-bottom-1000">
                        <span>4</span> Years of Experience
                    </div>

                    <div className="scroll-bottom-1200">
                        <span>1</span> Internship Program
                    </div>

                    <div className="scroll-bottom-1400">
                        <span>2</span> National Certificates of Competence
                    </div>

                    <div className="scroll-bottom-1600">
                        <span>8</span> Projects
                    </div>
                </div>

                <div className="scroll-bottom-2000">
                    <a href="#qualification" className="button bigger-margin-right">
                        More
                    </a>
                </div>
            </div>
        </section>
    );
}
