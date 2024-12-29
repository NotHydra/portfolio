import React, { JSX } from "react";

export default function QualificationTimeline({ title, items }: { title: string; items: React.ReactNode[] }): JSX.Element {
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
                                {items.map(
                                    (item: React.ReactNode, index: number): React.ReactNode => (
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

                                            {item}

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
