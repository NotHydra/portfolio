import React, { JSX } from "react";

export default function QualificationTimelineItemDescriptionPoint({ title, text }: { title: string; text: string }): JSX.Element {
    return (
        <li>
            <div className="item-point">{title}</div>
            {text}
        </li>
    );
}
