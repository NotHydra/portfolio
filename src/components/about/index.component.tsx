import useProjectStore from "@/stores/project-store";

import moment from "moment";
import { JSX } from "react";

import AboutCountItem from "./count/item.component";
import AboutCountItemLink from "./count/link.component";

export default function About(): JSX.Element {
    const { projects } = useProjectStore();

    return (
        <section className="about" id="about">
            <div className="image scroll-bottom-200">
                <img src="image/about.jpg" alt="About Section Profile Picture" style={{ borderRadius: "12.5%" }} />
            </div>

            <div className="text">
                <h3 className="scroll-bottom-600">ABOUT</h3>

                <p className="scroll-bottom-600" style={{ textAlign: "justify", fontSize: "1rem", fontWeight: 500 }}>
                    Rizky Irswanda, born in Balikpapan, Indonesia. A multi-purpose <span>Programmer</span> with experience in <span>Software</span> Engineering, <span>Back-End</span> Development &{" "}
                    <span>Database</span> Engineering fields. Developed a wide range of projects. Starting from, the implementation of <span>full-stack applications</span>, development of{" "}
                    <span>REST API servers</span>, and engineered complex relational <span>databases</span>. Currently taking an interest in <span>Internet of Things</span> Engineering.
                </p>

                <div className="count">
                    <AboutCountItem count={moment().diff(moment("20200601", "YYYYMMDD"), "years")} text="Years of Experience" delay={1000} />

                    <AboutCountItem count={1} text="Internship Programs" delay={1200} />

                    <AboutCountItem count={2} text="National Certificates of Competence (BNSP)" delay={1400} />

                    <AboutCountItemLink count={projects.length} text="Projects" delay={1600} icon="github" url="https://github.com/NotHydra" />
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
