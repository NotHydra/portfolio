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
import QualificationTimelineItemDate from "./timeline/item/date/index.component";

export default function Qualification(): JSX.Element {
    return (
        <div id="qualification">
            <QualificationTimeline title="WORK EXPERIENCE">
                <QualificationTimelineItem title="Software & Internet of Things Engineer Freelancer">
                    <QualificationTimelineItemSubtitle subtitle="Part Time" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <p>
                                Developed a wide range of projects. Starting from, the implementation of full-stack applications, development of REST API servers, and engineered complex relational
                                databases.
                            </p>
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "March 2022 - Present", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Back-End Developer & Database Engineer Intern">
                    <QualificationTimelineItemSubtitleLink subtitle="At Balikpapan's Department of Labor and Social" link="https://disnaker.balikpapan.go.id" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Back-End Developer" />

                            <p>Created and developed a REST API Server that is capable of efficiently handling multiple and various HTTPS request using NestJS and FastAPI.</p>
                        </QualificationTimelineItemDescriptionGroup>

                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Database Engineer" />

                            <p>Constructed a database that contains relational data using MongoDB.</p>
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "April 2022 - July 2022", //
                        ]}
                    />
                </QualificationTimelineItem>
            </QualificationTimeline>

            <QualificationTimeline title="RESEARCH EXPERIENCE">
                <QualificationTimelineItem title="Evolution of ITK's LMS">
                    <QualificationTimelineItemSubtitle subtitle="Assistant" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Contribution" />

                            <QualificationTimelineItemDescriptionList
                                items={[
                                    "Developed digital attedance system alongside with automatic attendance recap", //
                                ]}
                            />
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "October 2024 - Present", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Ambulance Siren Audio Classification Using Convolutional Neural Network for Medical Emergency Detection">
                    <QualificationTimelineItemSubtitle subtitle="Assistant" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Head Researcher" />

                            <p>Ramadhan Paninggalih S.Si., M.Si., M.Sc.</p>
                        </QualificationTimelineItemDescriptionGroup>

                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Contribution" />

                            <QualificationTimelineItemDescriptionList
                                items={[
                                    "Searched for audio datasets & performed slicing resulting in 500 different audio datasets using Python", //
                                    "Created & developed a REST API Server to be able to use the classification model using FastAPI",
                                    "Created & developed a Website as an interface to upload audio file to the server using NextJS",
                                    "Performed deployment of server & website on a VPS",
                                ]}
                            />
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "May 2024 - Present", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Evolution of ITK's SIMPAS LPPM">
                    <QualificationTimelineItemSubtitle subtitle="Assistant" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Head Researcher" />

                            <p>Nur Fajri Azhar, S.Kom., M.Kom.</p>
                        </QualificationTimelineItemDescriptionGroup>

                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Contribution" />

                            <QualificationTimelineItemDescriptionList
                                items={[
                                    "Implemented minor features", //
                                    "Bug fixes & improvements",
                                    "Performed manual testing on features",
                                ]}
                            />
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "March 2024 - Present", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="ITK's SUMMIT">
                    <QualificationTimelineItemSubtitle subtitle="Assistant" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Head Researcher" />

                            <p>Nur Fajri Azhar, S.Kom., M.Kom.</p>
                        </QualificationTimelineItemDescriptionGroup>

                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Contribution" />

                            <QualificationTimelineItemDescriptionList
                                items={[
                                    "Performed manual testing on the system's features", //
                                ]}
                            />
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "June 2024 - September 2024", //
                        ]}
                    />
                </QualificationTimelineItem>
            </QualificationTimeline>

            <QualificationTimeline title="TEACHING EXPERIENCE">
                <QualificationTimelineItem title="Lab Assistant for Algorithm & Programming Subject">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <p>Assisted in teaching students about the Algorithm & Programming subject, with a focus on teaching Python and the PyQt library for developing simple applications.</p>
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "February 2024 - May 2024", //
                            "September 2024 - December 2024",
                        ]}
                    />
                </QualificationTimelineItem>
            </QualificationTimeline>

            <QualificationTimeline title="PROFESSIONAL CERTIFICATION">
                <QualificationTimelineItem title="IT Software Solution for Bussines (BNSP)">
                    <QualificationTimelineItemSubtitleLink subtitle="Held By Professional Certification Body BBPLK of Bekasi" link="https://kelembagaan.kemnaker.go.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "September 2023 - September 2026", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Software Engineering (BNSP)">
                    <QualificationTimelineItemSubtitleLink subtitle="Held By Professional Certification Authority of State 6 Vocational High School of Balikpapan" link="https://smkn6-bpn.sch.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "June 2023 - June 2026", //
                        ]}
                    />
                </QualificationTimelineItem>
            </QualificationTimeline>

            <QualificationTimeline title="COMPETITION AWARD">
                <QualificationTimelineItem title="Finalist in Balikpapan's IoT and Data Analytic Smart City Competition 2024">
                    <QualificationTimelineItemSubtitleLink
                        subtitle="Held By Balikpapan's Department of Communication and Information Technology"
                        link="https://www.instagram.com/diskominfo.balikpapan"
                    />

                    <QualificationTimelineItemDate
                        dates={[
                            "February 2024", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Finalist in Schematics's National Programming Contest Senior 2023">
                    <QualificationTimelineItemSubtitleLink subtitle="Held By Schematics ITS" link="https://www.instagram.com/schematics.its" />

                    <QualificationTimelineItemDate
                        dates={[
                            "October 2023", //
                        ]}
                    />
                </QualificationTimelineItem>
            </QualificationTimeline>

            <QualificationTimeline title="FORMAL EDUCATION">
                <QualificationTimelineItem title="Undergraduate Computer Science Student">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="GPA" />

                            <p>3.86 / 4.00 (36 Credits)</p>
                        </QualificationTimelineItemDescriptionGroup>

                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Organizations & Experiences" />

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
                            <QualificationTimelineItemDescriptionPoint text="Relevant Courses" />

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

                    <QualificationTimelineItemDate
                        dates={[
                            "July 2023 - Present", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Software Engineering Student">
                    <QualificationTimelineItemSubtitleLink subtitle="At Balikpapan's Public Vocational High School 2" link="https://smkn2balikpapan.sch.id" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Grade" />

                            <p>91.40 / 100.00</p>
                        </QualificationTimelineItemDescriptionGroup>

                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Relevant Courses" />

                            <QualificationTimelineItemDescriptionList
                                items={[
                                    "Basics of Programming",
                                    "Computer & Network Basics",
                                    "Computer System",
                                    "Database",
                                    "Object-Oriented Programming",
                                    "Software Development",
                                    "Web & Mobile Development",
                                ]}
                            />
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "July 2020 - June 2023", //
                        ]}
                    />
                </QualificationTimelineItem>
            </QualificationTimeline>

            <QualificationTimeline title="NON-FORMAL EDUCATION">
                <QualificationTimelineItem title="IT Software Solution for Bussines Participant">
                    <QualificationTimelineItemSubtitleLink subtitle="At Bekasi's Vocational and Productivity Training Center" link="https://kelembagaan.kemnaker.go.id" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <p>Created & developed graphical desktop based application that can be used by companies with C#, .NET Framework and MySQL.</p>
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "May 2023 - July 2023", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="English Conversation at the Intermediate Two Level Student">
                    <QualificationTimelineItemSubtitleLink subtitle="At Balikpapans Business & Intensive English College (BIEC)" link="https://www.instagram.com/biecbpn" />

                    <QualificationTimelineItemDate
                        dates={[
                            "July 2021 - January 2022", //
                        ]}
                    />
                </QualificationTimelineItem>
            </QualificationTimeline>

            <QualificationTimeline title="ORGANIZATION & COMMITTEE">
                <QualificationTimelineItem title="Intern Staff of Electrical Division in Robotics Student Activity">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "December 2024 - Present", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Member of Web Development Team in Infinite Volume 4 ">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "December 2024 - Present", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Expert Staff of Event Division in Infinite Volume 4">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "December 2024 - Present", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Staff of Research and Technology Department in Ouroboros Technology">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "September 2024 - Present", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Staff of Expo Sub Division Committee in Informatics Welcome Party">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "August 2024 - September 2024", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Member of FGD Committee for Department of Mathematics and Information Technology">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "19 July 2024 - 20 July 2024", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Member of LAM Infokom Accreditation Assessment Committee for Informatics">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "26 February 2024 - 27 February 2024", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Intern Staff of Talent Development Department in Informatics Student Association">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "April 2024 - September 2024", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Head of Prototype Division Committee in Major of Informatics ITK Open House">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "January 2024 - February 2024", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Member of Prototype Division Committee in Department of Mathematics and Information Technology Expo">
                    <QualificationTimelineItemSubtitleLink subtitle="At Kalimantan's Institute of Technology" link="https://itk.ac.id" />

                    <QualificationTimelineItemDate
                        dates={[
                            "October 2023 - November 2023", //
                        ]}
                    />
                </QualificationTimelineItem>
            </QualificationTimeline>

            <QualificationTimeline title="LANGUAGE TEST">
                <QualificationTimelineItem title="Internal Academic English Test (IAET)">
                    <QualificationTimelineItemSubtitleLink subtitle="Held By Language and Culture Hub of Kalimantan's Institute of Technology" link="https://www.instagram.com/lch.itk.ac.id" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Score" />

                            <p>515</p>
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "August 2023", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Test of English for International Communication (TOEIC)">
                    <QualificationTimelineItemSubtitleLink subtitle="Held By Balikpapan's Vocational High School 2" link="https://smkn2balikpapan.sch.id" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Score" />

                            <p>865 / 990</p>
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "September 2022", //
                        ]}
                    />
                </QualificationTimelineItem>

                <QualificationTimelineItem title="Test of English as a Foreign Language Paper Based Test (TOEFL PBT)">
                    <QualificationTimelineItemSubtitleLink subtitle="Held By Balikpapans Business & Intensive English College (BIEC)" link="https://www.instagram.com/biecbpn" />

                    <QualificationTimelineItemDescription>
                        <QualificationTimelineItemDescriptionGroup>
                            <QualificationTimelineItemDescriptionPoint text="Score" />

                            <p>510 / 677</p>
                        </QualificationTimelineItemDescriptionGroup>
                    </QualificationTimelineItemDescription>

                    <QualificationTimelineItemDate
                        dates={[
                            "January 2022", //
                        ]}
                    />
                </QualificationTimelineItem>
            </QualificationTimeline>
        </div>
    );
}
