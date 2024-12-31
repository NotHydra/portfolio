import moment from "moment";
import { JSX } from "react";

import AboutItem from "./item.component";

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
                    <AboutItem count={moment().diff(moment("20200601", "YYYYMMDD"), "years")} text="Years of Experience" delay={1000} />

                    <AboutItem count={1} text="Internship Programs" delay={1200} />

                    <AboutItem count={2} text="National Certificates of Competence" delay={1400} />

                    <AboutItem count={8} text="Projects" delay={1600} />
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
