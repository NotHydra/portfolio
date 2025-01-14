import React, { JSX } from "react";

export default function QualificationTimelineItemDescriptionListSubText({ items }: { items: { text: string; subTexts: string[] }[]; icon?: string }): JSX.Element {
    return (
        <ul className="item-list">
            {items.map(
                (item: { text: string; subTexts: string[] }, index: number): React.ReactNode => (
                    <li key={index}>
                        <p>{item.text}</p>

                        <ul className="item-list-sub-text">
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
