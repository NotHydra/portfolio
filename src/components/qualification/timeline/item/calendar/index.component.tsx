import React, { JSX } from "react";

export default function QualificationTimelineItemCalendar({ text }: { text: string }): JSX.Element {
    return (
        <div className="item-calender">
            <i className="uil uil-calender"></i> {text}
        </div>
    );
}
