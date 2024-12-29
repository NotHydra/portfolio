import React, { JSX } from "react";

export default function QualificationTimeline({ children, title }: { children: React.ReactNode; title: string }): JSX.Element {
    return (
        <section className="timeline">
            <div className="title">
                <h3 className="scroll-top-200">{title}</h3>
            </div>

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
