import useProjectStore from "@/stores/project-store";

import moment from "moment";
import { JSX } from "react";

import AboutCountItem from "./count/item/index.component";
import AboutCountItemLink from "./count/item/link.component";

export default function About(): JSX.Element {
    const { projects } = useProjectStore();

    return (
        <section className="about" id="about">
            <div className="image scroll-bottom-200">
                <img src="image/about.webp" alt="About Section Profile Picture" style={{ borderRadius: "12.5%" }} />
            </div>

            <div className="text">
                <h3 className="scroll-bottom-600">ABOUT</h3>

                <p className="scroll-bottom-600" style={{ textAlign: "justify", fontSize: "1rem", fontWeight: 500 }}>
                    Rizky Irswanda, born in Balikpapan, Indonesia. A <span>Software</span> and <span>Internet of Things</span> engineer working on <span>full-stack applications</span>, <span>API servers</span>, relational <span>databases</span>, and <span>AIoT</span> systems.
                </p>

                <div className="count">
                    <AboutCountItem count={moment().diff(moment("20200601", "YYYYMMDD"), "years")} text="Years of Experience" delay={1000} />

                    <AboutCountItem count={9} text="Professional Experiences" delay={1200} />

                    <AboutCountItem count={3} text="National Certificates of Competence (BNSP)" delay={1400} />

                    <AboutCountItemLink count={projects.length} text="Projects & Research" delay={1600} icon="github" url="https://github.com/NotHydra" />
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
