import { JSX } from "react";

import QualificationTimeline from "./timeline";
import QualificationTimelineItem from "./timeline/item/index.component";
import QualificationTimelineItemSubtitle from "./timeline/item/subtitle/index.component";
import QualificationTimelineItemSubtitleLink from "./timeline/item/subtitle/link.component";
import QualificationTimelineItemDescription from "./timeline/item/description/index.component";
import QualificationTimelineItemDescriptionGroup from "./timeline/item/description/group.component";
import QualificationTimelineItemDescriptionPoint from "./timeline/item/description/point.component";
import QualificationTimelineItemCalendar from "./timeline/item/calendar/index.component";
import QualificationTimelineItemCalendarMultiple from "./timeline/item/calendar/multiple.component";

export default function Qualification(): JSX.Element {
    return (
        <div id="qualification">
            <QualificationTimeline
                title="EXPERIENCE"
                items={[
                    <QualificationTimelineItem title="Software & Internet of Things Engineer Freelancer">
                        <QualificationTimelineItemSubtitle>Part Time</QualificationTimelineItemSubtitle>

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionGroup>
                                Developed a wide range of projects. Starting from, the implementation of full-stack applications, development of REST API servers, and engineered complex relational
                                databases.
                            </QualificationTimelineItemDescriptionGroup>
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendar text="March 2022 - Present" />
                    </QualificationTimelineItem>,

                    <QualificationTimelineItem title="Lab Assistant for Algorithm & Programming Subject">
                        <QualificationTimelineItemSubtitleLink link="https://itk.ac.id">Kalimantan's Institute of Technology</QualificationTimelineItemSubtitleLink>

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionGroup>
                                Assisted in teaching students about the Algorithm & Programming subject, with a focus on teaching Python and the PyQt library for developing simple applications.
                            </QualificationTimelineItemDescriptionGroup>
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendarMultiple texts={["February 2024 - May 2024", "September 2024 - December 2024"]} />
                    </QualificationTimelineItem>,

                    <QualificationTimelineItem title="IT Software Solution for Bussines Participant">
                        <QualificationTimelineItemSubtitleLink link="https://kelembagaan.kemnaker.go.id">Bekasi's Vocational and Productivity Training Center</QualificationTimelineItemSubtitleLink>

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionGroup>
                                Created & developed graphical desktop based application that can be used by companies with C#, .NET Framework and MySQL.
                            </QualificationTimelineItemDescriptionGroup>
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendar text="May 2023 - July 2023" />
                    </QualificationTimelineItem>,

                    <QualificationTimelineItem title="Back-End Developer & Database Engineer Intern">
                        <QualificationTimelineItemSubtitleLink link="https://disnaker.balikpapan.go.id">Balikpapan's Department of Labor and Social</QualificationTimelineItemSubtitleLink>

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionGroup>
                                <QualificationTimelineItemDescriptionPoint title="Back-End Developer" />
                                Created and developed a REST API Server that is capable of efficiently handling multiple and various HTTPS request using NestJS and FastAPI.
                            </QualificationTimelineItemDescriptionGroup>

                            <QualificationTimelineItemDescriptionGroup>
                                <QualificationTimelineItemDescriptionPoint title="Database Engineer" />
                                Constructed a database that contains relational data using MongoDB.
                            </QualificationTimelineItemDescriptionGroup>
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendar text="April 2022 - July 2022" />
                    </QualificationTimelineItem>,
                ]}
            />
        </div>
    );
}
