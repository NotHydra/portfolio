import React, { JSX } from "react";

export default function QualificationTimelineItemSubtitle({ children }: { children: React.ReactNode }): JSX.Element {
    return <span className="item-subtitle">{children}</span>;
}
