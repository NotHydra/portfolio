import React, { JSX } from "react";

export default function QualificationTimelineItemSubtitleLink({ subtitle, link }: { subtitle: string; link: string }): JSX.Element {
    return (
        <a href={link} target="_blank">
            <span className="item-subtitle item-link">{subtitle}</span>
        </a>
    );
}
