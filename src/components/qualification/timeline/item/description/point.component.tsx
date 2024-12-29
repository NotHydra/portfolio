import React, { JSX } from "react";

export default function QualificationTimelineItemDescriptionPoint({ title }: { title: string }): JSX.Element {
    return <div className="item-point">{title}</div>;
}
