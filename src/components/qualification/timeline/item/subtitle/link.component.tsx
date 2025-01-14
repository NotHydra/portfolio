import React, { JSX } from "react";

export default function QualificationTimelineItemSubtitleLink({ subtitle, link }: { subtitle: string; link: string }): JSX.Element {
    return (
        <a className="item-subtitle item-link" href={link} target="_blank">
            {subtitle}
        </a>
    );
}
