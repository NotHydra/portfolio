import React, { JSX } from "react";

export default function QualificationTimelineItemDescriptionList({ items }: { items: string[] }): JSX.Element {
    return (
        <ul className="item-list">
            {items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
