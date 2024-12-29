import React, { JSX } from "react";

export default function QualificationTimelineItem({ children, title }: { children: React.ReactNode; title: string }): JSX.Element {
    return (
        <div>
            <h3 className="item-title">{title}</h3>

            {children}
        </div>
    );
}
