import React, { JSX } from "react";

export default function QualificationTimelineItemDescriptionListDate({ items }: { items: { text: string; dates: string[] }[] }): JSX.Element {
    return (
        <ul className="item-list">
            {items.map(
                (item: { text: string; dates: string[] }, index: number): React.ReactNode => (
                    <div key={index}>
                        <li>{item.text}</li>

                        {item.dates.map(
                            (date: string, index: number): React.ReactNode => (
                                <div className="item-list-date" key={index}>
                                    <i className="uil uil-calender" /> {date}
                                </div>
                            )
                        )}
                    </div>
                )
            )}
        </ul>
    );
}
