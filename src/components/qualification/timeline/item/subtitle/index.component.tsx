import React, { JSX } from "react";

export default function QualificationTimelineItemSubtitle({ subtitle }: { subtitle: string }): JSX.Element {
    return <span className="item-subtitle">{subtitle}</span>;
}
