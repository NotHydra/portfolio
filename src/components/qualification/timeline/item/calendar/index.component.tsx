import React, { JSX } from "react";

export default function QualificationTimelineItemCalendar({ dates }: { dates: string[] }): JSX.Element {
    return (
        <div className="item-calender">
            {dates.map((date: string, index: number) => (
                <div key={index}>
                    <i className="uil uil-calender" /> <span>{date}</span>
                </div>
            ))}
        </div>
    );
}
