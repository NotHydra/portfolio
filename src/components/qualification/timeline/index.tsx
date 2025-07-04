import React, { JSX } from "react";

import Title from "@/components/common/title.component";

export default function QualificationTimeline({ children, title, subtitle }: { children: React.ReactNode; title: string, subtitle?: string }): JSX.Element {
    return (
        <section className="timeline">
            <Title title={title} subtitle={subtitle} />

            <div className="content-container">
                <div>
                    <div className="content">
                        <div className="content-section">
                            <div className="item-container">
                                {React.Children.map(
                                    children,
                                    (child: React.ReactNode, index: number): React.ReactNode => (
                                        <div className="item" key={index}>
                                            {index % 2 === 0 ? (
                                                <>
                                                    <div className={`scroll-bottom-200`}>{child}</div>

                                                    <div className="scroll-bottom-200">
                                                        <span className="item-rounder"></span>
                                                        <span className="item-line"></span>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div></div>

                                                    <div className="scroll-bottom-200">
                                                        <span className="item-rounder"></span>
                                                        <span className="item-line"></span>
                                                    </div>

                                                    <div className={`scroll-bottom-200`}>{child}</div>
                                                </>
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
