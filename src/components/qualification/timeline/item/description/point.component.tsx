import React, { JSX } from "react";

export default function QualificationTimelineItemDescriptionPoint({ children }: { children: React.ReactNode }): JSX.Element {
    return <div className="item-point">{children}:</div>;
}
