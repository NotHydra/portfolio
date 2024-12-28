import { JSX } from "react";

import QualificationTimeline from "./timeline";
import QualificationTimelineItemCalendarMultiple from "./timeline/item/calendar-multiple.component";
import QualificationTimelineItemCalendar from "./timeline/item/calendar.component";
import QualificationTimelineItemDescriptionPoint from "./timeline/item/description-point.component";
import QualificationTimelineItemDescriptionText from "./timeline/item/description-text.component";
import QualificationTimelineItemDescription from "./timeline/item/description.component";
import QualificationTimelineItem from "./timeline/item/index.component";
import QualificationTimelineItemSubtitleLink from "./timeline/item/subtitle-link.component";
import QualificationTimelineItemSubtitle from "./timeline/item/subtitle.component";

export default function Qualification(): JSX.Element {
    return (
        <div id="qualification">
            <QualificationTimeline
                title="EXPERIENCE"
                items={[
                    <QualificationTimelineItem title="Software & Internet of Things Engineer Freelancer">
                        <QualificationTimelineItemSubtitle subtitle="Part Time" />

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionText text="Developed a wide range of projects. Starting from, the implementation of full-stack applications, development of REST API servers, and engineered complex relational databases." />
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendar text="March 2022 - Present" />
                    </QualificationTimelineItem>,

                    <QualificationTimelineItem title="Lab Assistant for Algorithm & Programming Subject">
                        <QualificationTimelineItemSubtitleLink subtitle="Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionText text="Assisted in teaching students about the Algorithm & Programming subject, with a focus on teaching Python and the PyQt library for developing simple applications." />
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendarMultiple texts={["February 2024 - May 2024", "September 2024 - December 2024"]} />
                    </QualificationTimelineItem>,

                    <QualificationTimelineItem title="IT Software Solution for Bussines Participant">
                        <QualificationTimelineItemSubtitleLink subtitle="Bekasi's Vocational and Productivity Training Center" link="https://kelembagaan.kemnaker.go.id" />

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionText text="Created & developed graphical desktop based application that can be used by companies with C#, .NET Framework and MySQL." />
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendar text="May 2023 - July 2023" />
                    </QualificationTimelineItem>,

                    <QualificationTimelineItem title="Back-End Developer & Database Engineer Intern">
                        <QualificationTimelineItemSubtitleLink subtitle="Balikpapan's Department of Labor and Social" link="https://disnaker.balikpapan.go.id" />

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionPoint
                                title="Back-End Developer"
                                text="Created and developed a REST API Server that is capable of efficiently handling multiple and various HTTPS request using NestJS and FastAPI."
                            />

                            <QualificationTimelineItemDescriptionPoint title="Database Engineer" text="Constructed a database that contains relational data using MongoDB." />
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendar text="April 2022 - July 2022" />
                    </QualificationTimelineItem>,
                ]}
            />
        </div>
    );
}
