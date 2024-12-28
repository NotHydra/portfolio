import { JSX } from "react";

export default function Qualification(): JSX.Element {
    return (
        <div id="qualification">
            <section className="timeline" id="experience">
                <div className="title">
                    <h3 className="scroll-top-200">EXPERIENCE</h3>
                </div>

                <div className="content-container">
                    <div>
                        <div className="content scroll-bottom-1200">
                            <div className="content-section">
                                <div className="item-container">
                                    <div className="item">
                                        <div>
                                            <h3 className="item-title">Software & Internet of Things Engineer Freelancer</h3>

                                            <span className="item-subtitle">Part Time</span>

                                            <ul className="item-subtitle">
                                                <li>
                                                    Developed a wide range of projects. Starting from, the implementation of full-stack applications, development of REST API servers, and engineered
                                                    complex relational databases.
                                                </li>
                                            </ul>

                                            <div className="item-calender">
                                                <i className="uil uil-calender"></i> March 2022 - Present
                                            </div>
                                        </div>

                                        <div>
                                            <span className="item-rounder"></span>
                                            <span className="item-line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
