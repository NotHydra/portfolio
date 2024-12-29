import React, { JSX } from "react";

export default function QualificationTimelineItemCalendar({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className="item-calender">
            {React.Children.map(children, (child: React.ReactNode, index: number) => (
                <div key={index} style={{ display: "flex" }}>
                    <i className="uil uil-calender" style={{ marginRight: "0.25rem" }} /> {child}
                </div>
            ))}
        </div>
    );
}
