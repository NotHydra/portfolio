import { JSX } from "react";

import QualificationTimeline from "./timeline";
import QualificationTimelineItem from "./timeline/item/index.component";
import QualificationTimelineItemSubtitle from "./timeline/item/subtitle/index.component";
import QualificationTimelineItemSubtitleLink from "./timeline/item/subtitle/link.component";
import QualificationTimelineItemDescription from "./timeline/item/description/index.component";
import QualificationTimelineItemDescriptionGroup from "./timeline/item/description/group.component";
import QualificationTimelineItemDescriptionPoint from "./timeline/item/description/point.component";
import QualificationTimelineItemCalendar from "./timeline/item/calendar/index.component";

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
                                <p>
                                    Developed a wide range of projects. Starting from, the implementation of full-stack applications, development of REST API servers, and engineered complex relational
                                    databases.
                                </p>
                            </QualificationTimelineItemDescriptionGroup>
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendar>
                            <p>March 2022 - Present</p>
                        </QualificationTimelineItemCalendar>
                    </QualificationTimelineItem>,

                    <QualificationTimelineItem title="Lab Assistant for Algorithm & Programming Subject">
                        <QualificationTimelineItemSubtitleLink link="https://itk.ac.id">Kalimantan's Institute of Technology</QualificationTimelineItemSubtitleLink>

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionGroup>
                                <p>Assisted in teaching students about the Algorithm & Programming subject, with a focus on teaching Python and the PyQt library for developing simple applications.</p>
                            </QualificationTimelineItemDescriptionGroup>
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendar>
                            <p>February 2024 - May 2024</p>
                            <p>September 2024 - December 2024</p>
                        </QualificationTimelineItemCalendar>
                    </QualificationTimelineItem>,

                    <QualificationTimelineItem title="IT Software Solution for Bussines Participant">
                        <QualificationTimelineItemSubtitleLink link="https://kelembagaan.kemnaker.go.id">Bekasi's Vocational and Productivity Training Center</QualificationTimelineItemSubtitleLink>

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionGroup>
                                <p>Created & developed graphical desktop based application that can be used by companies with C#, .NET Framework and MySQL.</p>
                            </QualificationTimelineItemDescriptionGroup>
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendar>
                            <p>May 2023 - July 2023</p>
                        </QualificationTimelineItemCalendar>
                    </QualificationTimelineItem>,

                    <QualificationTimelineItem title="Back-End Developer & Database Engineer Intern">
                        <QualificationTimelineItemSubtitleLink link="https://disnaker.balikpapan.go.id">Balikpapan's Department of Labor and Social</QualificationTimelineItemSubtitleLink>

                        <QualificationTimelineItemDescription>
                            <QualificationTimelineItemDescriptionGroup>
                                <QualificationTimelineItemDescriptionPoint>Back-End Developer</QualificationTimelineItemDescriptionPoint>

                                <p>Created and developed a REST API Server that is capable of efficiently handling multiple and various HTTPS request using NestJS and FastAPI.</p>
                            </QualificationTimelineItemDescriptionGroup>

                            <QualificationTimelineItemDescriptionGroup>
                                <QualificationTimelineItemDescriptionPoint>Database Engineer</QualificationTimelineItemDescriptionPoint>

                                <p>Constructed a database that contains relational data using MongoDB.</p>
                            </QualificationTimelineItemDescriptionGroup>
                        </QualificationTimelineItemDescription>

                        <QualificationTimelineItemCalendar>
                            <p>April 2022 - July 2022</p>
                        </QualificationTimelineItemCalendar>
                    </QualificationTimelineItem>,
                ]}
            />
        </div>
    );
}
