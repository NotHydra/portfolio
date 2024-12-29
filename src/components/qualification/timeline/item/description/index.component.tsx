import React, { JSX } from "react";

export default function QualificationTimelineItemDescription({ children }: { children: React.ReactNode }): JSX.Element {
    return <ul className="item-subtitle">{children}</ul>;
}
