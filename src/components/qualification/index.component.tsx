import { JSX } from "react";

import QualificationTimeline from "./timeline";
import QualificationTimelineItem from "./timeline/item/index.component";
import QualificationTimelineItemSubtitle from "./timeline/item/subtitle/index.component";
import QualificationTimelineItemSubtitleLink from "./timeline/item/subtitle/link.component";
import QualificationTimelineItemDescription from "./timeline/item/description/index.component";
import QualificationTimelineItemDescriptionGroup from "./timeline/item/description/group.component";
import QualificationTimelineItemDescriptionPoint from "./timeline/item/description/point.component";
import QualificationTimelineItemDescriptionList from "./timeline/item/description/list.component";
import QualificationTimelineItemDescriptionListDate from "./timeline/item/description/list-date.component";
import QualificationTimelineItemCalendar from "./timeline/item/calendar/index.component";

export default function Qualification(): JSX.Element {
    return (
        <div id="qualification">
            <QualificationTimeline title="EXPERIENCE">
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
                </QualificationTimelineItem>

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
                </QualificationTimelineItem>

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
                </QualificationTimelineItem>

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
                </QualificationTimelineItem>
            </QualificationTimeline>

            <QualificationTimeline title="EDUCATION">
                <QualificationTimelineItem title="Undergraduate Computer Science Student">
                    <QualificationTimelineItemSubtitleLink link="https://itk.ac.id">Kalimantan's Institute of Technology</QualificationTimelineItemSubtitleLink>

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint>GPA</QualificationTimelineItemDescriptionPoint>
                            <p>3.86 / 4.00 (36 Credits)</p>
                        </QualificationTimelineItemDescriptionGroup>

                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint>Organizations & Experiences</QualificationTimelineItemDescriptionPoint>
                            <QualificationTimelineItemDescriptionListDate
                                items={[
                                    {
                                        text: "Member of Ouroboros Technology",
                                        date: "October 2023 - Present",
                                    },
                                    {
                                        text: "Member of Prototype Division in Department of Mathematics and Information Technology Expo",
                                        date: "October 2023 - November 2023",
                                    },
                                    {
                                        text: "Head of Prototype Division in Major of Informatics ITK Open House",
                                        date: "January 2024 - February 2024",
                                    },
                                    {
                                        text: "Lab Assistant for Algorithm & Programming Subject Even Semester 2023/2024",
                                        date: "February 2024 - May 2024",
                                    },
                                    {
                                        text: "Intern Staff in the Talent Development Department of the Informatics Student Association",
                                        date: "April 2024 - September 2024",
                                    },
                                    {
                                        text: "Lab Assistant for Algorithm & Programming Subject Odd Semester 2024/2025",
                                        date: "August 2024 - Present",
                                    },
                                ]}
                            />
                        </QualificationTimelineItemDescriptionGroup>

                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint>Relevant Courses</QualificationTimelineItemDescriptionPoint>
                            <QualificationTimelineItemDescriptionList
                                items={[
                                    "Introduction to Informatics", //
                                    "Algorithm & Programming",
                                    "Digital System",
                                    "Object Oriented Programming",
                                ]}
                            />
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemCalendar>
                        <p>July 2023 - Present</p>
                    </QualificationTimelineItemCalendar>
                </QualificationTimelineItem>
            </QualificationTimeline>
        </div>
    );
}
