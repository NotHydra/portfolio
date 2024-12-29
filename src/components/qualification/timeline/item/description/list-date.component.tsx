import React, { JSX } from "react";

export default function QualificationTimelineItemDescriptionListDate({ items }: { items: { text: string; date: string }[] }): JSX.Element {
    return (
        <ul className="item-list">
            {items.map((item: { text: string; date: string }, index: number) => (
                <>
                    <li key={index}>{item.text}</li>
                    <div className="item-list-calendar">{item.date}</div>
                </>
            ))}
        </ul>
    );
}
