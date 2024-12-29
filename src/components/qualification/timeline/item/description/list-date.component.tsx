import React, { JSX } from "react";

export default function QualificationTimelineItemDescriptionListDate({ items }: { items: { text: string; date: string }[] }): JSX.Element {
    return (
        <ul className="item-list">
            {items.map((item: { text: string; date: string }, index: number) => (
                <div key={index}>
                    <li>{item.text}</li>
                    <div className="item-list-date">
                        <i className="uil uil-calender" /> {item.date}
                    </div>
                </div>
            ))}
        </ul>
    );
}
