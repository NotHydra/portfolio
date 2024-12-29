import React, { JSX } from "react";

export default function QualificationTimelineItemDescriptionPoint({ text }: { text: string }): JSX.Element {
    return <div className="item-point">{text}:</div>;
}
