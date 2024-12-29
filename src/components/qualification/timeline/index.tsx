import React, { JSX } from "react";

import Title from "@/components/common/title.component";

export default function QualificationTimeline({ children, title }: { children: React.ReactNode; title: string }): JSX.Element {
    return (
        <section className="timeline">
            <Title title={title} />

            <div className="content-container">
                <div>
                    <div className="content scroll-bottom-1200">
                        <div className="content-section">
                            <div className="item-container">
                                {React.Children.map(
                                    children,
                                    (child: React.ReactNode, index: number): React.ReactNode => (
                                        <div className="item" key={index}>
                                            {index % 2 === 1 && (
                                                <>
                                                    <div></div>

                                                    <div>
                                                        <span className="item-rounder"></span>
                                                        <span className="item-line"></span>
                                                    </div>
                                                </>
                                            )}

                                            {child}

                                            {index % 2 === 0 && (
                                                <div>
                                                    <span className="item-rounder"></span>
                                                    <span className="item-line"></span>
                                                </div>
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
