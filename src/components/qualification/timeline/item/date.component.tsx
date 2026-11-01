import moment from "moment";
import React, { JSX } from "react";

function formatDuration(dateStr: string): string | null {
    if (!dateStr.includes(" - ")) return null;
    const [startStr, endStr] = dateStr.split(" - ").map((s) => s.trim());
    if (!startStr || !endStr) return null;

    const start = moment(startStr, ["MMMM YYYY", "YYYY"], true);
    const end = endStr.toLowerCase() === "present" ? moment() : moment(endStr, ["MMMM YYYY", "YYYY"], true);

    if (!start.isValid() || !end.isValid()) return null;

    const totalMonths = end.diff(start, "months") + 1;
    if (totalMonths <= 0) return null;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];
    if (years > 0) {
        parts.push(years === 1 ? "1 yr" : `${years} yrs`);
    }
    if (months > 0) {
        parts.push(months === 1 ? "1 mo" : `${months} mos`);
    }

    return parts.length > 0 ? parts.join(" ") : null;
}

export default function QualificationTimelineItemDate({ dates }: { dates: string[] }): JSX.Element {
    return (
        <div className="item-date">
            {dates.map((date: string, index: number) => {
                const duration = formatDuration(date);
                return (
                    <div key={index}>
                        <i className="uil uil-calender" /> {date}
                        {duration && ` · ${duration}`}
                    </div>
                );
            })}
        </div>
    );
}
