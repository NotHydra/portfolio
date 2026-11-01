import moment from "moment";
import React, { JSX } from "react";

export type TimelineDate = {
    start: Date;
    end?: Date | "Present";
    showDay?: boolean;
    showDuration?: boolean;
};

export function formatTimelineDate(date: TimelineDate, showDuration: boolean = true): string {
    const formatDate = (d: Date) => moment(d).format(date.showDay ? "MMMM D, YYYY" : "MMMM YYYY");
    const startStr = formatDate(date.start);
    if (!date.end) return startStr;

    const endStr = date.end === "Present" ? "Present" : formatDate(date.end);
    const rangeStr = `${startStr} - ${endStr}`;

    const isDurationEnabled = date.showDuration ?? showDuration;
    if (!isDurationEnabled) {
        return rangeStr;
    }

    const endMoment = date.end === "Present" ? moment() : moment(date.end);
    const totalMonths = endMoment.diff(moment(date.start), "months") + 1;
    if (totalMonths <= 0) return rangeStr;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];
    if (years > 0) parts.push(years === 1 ? "1 yr" : `${years} yrs`);
    if (months > 0) parts.push(months === 1 ? "1 mo" : `${months} mos`);

    const duration = parts.join(" ");
    return duration ? `${rangeStr} · ${duration}` : rangeStr;
}

export default function QualificationTimelineItemDate({
    date,
    showDuration = true,
}: {
    date: TimelineDate;
    showDuration?: boolean;
}): JSX.Element {
    return (
        <div className="item-date">
            <div>
                <i className="uil uil-calender" /> {formatTimelineDate(date, showDuration)}
            </div>
        </div>
    );
}
