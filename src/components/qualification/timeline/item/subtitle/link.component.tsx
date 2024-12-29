import React, { JSX } from "react";

export default function QualificationTimelineItemSubtitleLink({ children, link }: { children: React.ReactNode; link: string }): JSX.Element {
    return (
        <a href={link} target="_blank">
            <span className="item-subtitle item-link">{children}</span>
        </a>
    );
}
