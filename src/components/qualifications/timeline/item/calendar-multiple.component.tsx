import React, { JSX } from "react";

export default function QualificationTimelineItemCalendarMultiple({ texts }: { texts: string[] }): JSX.Element {
    return (
        <div className="item-calender">
            {texts.map(
                (text: string, index: number): React.ReactNode => (
                    <div key={index}>
                        <i className="uil uil-calender"></i> {text}
                    </div>
                )
            )}
        </div>
    );
}
