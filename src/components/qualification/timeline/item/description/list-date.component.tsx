import React, { JSX } from "react";

export default function QualificationTimelineItemDescriptionListSubText({ icon, items }: { icon?: string; items: { text: string; subTexts: string[] }[] }): JSX.Element {
    return (
        <ul className="item-list" style={{ marginLeft: icon !== undefined ? "0" : "1rem" }}>
            {items.map(
                (item: { text: string; subTexts: string[] }, index: number): React.ReactNode => (
                    <li key={index} style={{ listStyleType: icon !== undefined ? "none" : "disc" }}>
                        <p>
                            {icon !== undefined && <i className={`uil uil-${icon}`} />} {item.text}
                        </p>

                        <ul className="item-list-sub-text" style={{ marginLeft: icon !== undefined ? "2rem" : "1rem" }}>
                            {item.subTexts.map(
                                (subText: string, index: number): React.ReactNode => (
                                    <li key={index}>{subText}</li>
                                )
                            )}
                        </ul>
                    </li>
                )
            )}
        </ul>
    );
}
