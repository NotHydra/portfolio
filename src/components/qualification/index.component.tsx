import { JSX } from "react";

import QualificationTimeline from "./timeline";
import QualificationTimelineItemDate from "./timeline/item/date.component";
import QualificationTimelineItemDescriptionGroup from "./timeline/item/description/group.component";
import QualificationTimelineItemDescription from "./timeline/item/description/index.component";
import QualificationTimelineItemDescriptionList from "./timeline/item/description/list/index.component";
import QualificationTimelineItemDescriptionPoint from "./timeline/item/description/point.component";
import QualificationTimelineItem from "./timeline/item/index.component";
import QualificationTimelineItemSubtitle from "./timeline/item/subtitle/index.component";
import QualificationTimelineItemSubtitleLink from "./timeline/item/subtitle/link.component";

type TimelineEntry = {
    title: string;
    subtitle: string;
    link?: string;
    dates: string[];
    overview?: string;
    highlights?: string[];
};

const workExperience: TimelineEntry[] = [
    {
        title: "Back-End Developer",
        subtitle: "At CV. Val Tech",
        dates: ["February 2026 - Present"],
    },
    {
        title: "Mobile & Full-Stack Developer Intern",
        subtitle: "At PT Komatsu Remanufacturing Asia",
        link: "https://www.komi.co.id/komatsu-remanufacturing-asia",
        dates: ["January 2025 - February 2026"],
        overview:
            "The Employee Information System (EIS) is a full-stack HR platform built for PT Komatsu Remanufacturing Asia that digitizes reimbursement claims, request approvals, assignment letters, time tracking, and announcements for approximately 600 employees.",
        highlights: [
            "Developed and maintained the Laravel REST API server spanning 48 models, 25 services, and 21 controllers.",
            "Built the Livewire and Blade web portal across 7 HR modules including dashboard, attendance monitoring, announcements, and contact support.",
            "Engineered the Filament admin panel with 51 resources and optimized performance through eager loading.",
            "Contributed to the Flutter mobile app by refining reimbursement, assignment letter, approval, and time management modules.",
            "Integrated Firebase Cloud Messaging across the Laravel server, Go microservice, Flutter app, and web client.",
        ],
    },
    {
        title: "Full-Stack Developer - ITK's LMS",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["October 2024 - January 2026"],
        overview: "Extended ITK's Moodle-based LMS with external reporting tools that automate attendance data extraction, visualization, and Excel export through Moodle's Web Service API.",
        highlights: [
            "Built a NestJS REST API integrating 5 Moodle Web Service functions for attendance, session, enrollment, and group data.",
            "Developed a NextJS attendance dashboard with cascading dropdowns, color-coded attendance grids, and Excel export.",
            "Created custom Moodle Database activity templates including a 16-week attendance recap matrix.",
        ],
    },
    {
        title: "Back-End Developer - ITK's SUMMIT",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["June 2024 - September 2025"],
        overview: "SUMMIT is a Laravel admissions portal managing registration, document verification, payment processing, exam scoring, ranking, and acceptance for independent pathway admissions.",
        highlights: [
            "Built a Flask microservice that bridges ITK's Moodle LMS with the admissions system for postgraduate grade extraction.",
            "Implemented grade synchronization in Laravel using authenticated API calls and persisted scores into applicant records.",
            "Developed grade input, bulk update, and Excel import interfaces for postgraduate applicants.",
        ],
    },
    {
        title: "Full-Stack Developer - ITK's SIMPAS LPPM",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["March 2024 - August 2025"],
        overview: "SIMPAS is a research and community service management platform for proposal submission, reviewer assignment, revision tracking, monitoring, evaluation, and reporting.",
        highlights: [
            "Developed user registration, customized email verification, and role-aware account activation flows.",
            "Built bulk submission approval, multi-reviewer assignment, and revision tracking workflows.",
            "Standardized data tables across 30+ master data pages with latest-data sorting, exports, and consistent formatting.",
        ],
    },
    {
        title: "Full-Stack Developer - Ambulance Siren Audio Classification",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["May 2024 - December 2024"],
        overview: "Contributed to an AI-powered emergency sound detection system that classifies ambulance sirens and traffic noise from uploaded or recorded audio.",
        highlights: [
            "Curated and segmented 500 audio samples into standardized 5-second WAV clips.",
            "Built a FastAPI inference server supporting multi-format audio uploads and FFmpeg conversion.",
            "Developed the NextJS web app and deployed the proof of concept to production on an Ubuntu VPS.",
        ],
    },
    {
        title: "Back-End Developer & Database Engineer Intern",
        subtitle: "At Balikpapan's Department of Labor and Social",
        link: "https://disnaker.balikpapan.go.id",
        dates: ["April 2022 - July 2022"],
        overview: "Developed Administrare and Finance Recap to digitize inventory management and financial recap workflows for over 70 staff members.",
        highlights: [
            "Built RESTful API services using NestJS, FastAPI, TypeScript, Python, and MongoDB.",
            "Engineered automated Excel report generation and data extraction pipelines.",
            "Authored system architecture documents including ER diagrams, flowcharts, and class diagrams.",
        ],
    },
];

const projectExperience: TimelineEntry[] = [
    {
        title: "ITK's LMS",
        subtitle: "Research Project at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["October 2024 - January 2026"],
        highlights: [
            "Integrated Moodle Web Service functions through a NestJS API.",
            "Built a responsive attendance dashboard and Excel export workflow.",
            "Containerized the full-stack application with Docker Compose profiles.",
        ],
    },
    {
        title: "EcoBoo: Inovasi Produk Bambu melalui Workshop Berbasis Pemberdayaan Masyarakat",
        subtitle: "Community Service at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["July 2025 - December 2025"],
        highlights: [
            "Built a NestJS, Prisma, and PostgreSQL API with CRUD, pagination, search, and sorting across 5 modules.",
            "Developed the NextJS CMS with shadcn/ui, Tailwind CSS, image upload, and cropping workflows.",
            "Built public-facing Nuxt website endpoints and deployed the stack with Docker Compose.",
        ],
    },
    {
        title: "SmartMedGuard: Inovasi Modular untuk Pemantauan Ruang Rawat Berbasis IoT di Puskesmas dan RSUD",
        subtitle: "Research Project at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["August 2025 - December 2025"],
        highlights: [
            "Developed ESP32 firmware for DHT22, PIR, RTC, and OLED components with MQTT publishing.",
            "Built a NestJS hybrid REST, MQTT, and Socket.IO backend with Prisma and PostgreSQL.",
            "Developed a real-time NextJS monitoring dashboard with charts, connection tracking, and stale data detection.",
        ],
    },
    {
        title: "ITK's SUMMIT",
        subtitle: "Research Project at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["June 2024 - September 2025"],
        highlights: [
            "Built Moodle grade extraction through a Flask microservice.",
            "Integrated score synchronization into the Laravel admissions portal.",
            "Fixed grade calculation edge cases and secure HTTPS communication issues.",
        ],
    },
    {
        title: "ITK's SIMPAS LPPM",
        subtitle: "Research Project at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["March 2024 - August 2025"],
        highlights: [
            "Built account activation, submission approval, reviewer assignment, and revision tracking workflows.",
            "Created reusable JavaScript searchable dropdowns deployed across 30+ pages.",
            "Added submission quota validation across leader and member roles.",
        ],
    },
    {
        title: "Ambulance Siren Audio Classification Using CNN for Medical Emergency Detection",
        subtitle: "Research Project at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["May 2024 - December 2024"],
        highlights: [
            "Built the audio preprocessing dataset pipeline and FastAPI model server.",
            "Developed the NextJS upload and recording interface.",
            "Containerized and deployed the proof of concept with strict CORS and file validation.",
        ],
    },
    {
        title: "PARI (Papaya Ripeness Identification)",
        subtitle: "Project for Gemastik 2024 XVII Smart Device, Embedded System & IoT",
        link: "https://gemastik.kemdikbud.go.id",
        dates: ["April 2024 - July 2024"],
        highlights: [
            "Built a Raspberry Pi UHF RFID scanning pipeline for multi-frequency RSSI data.",
            "Implemented a NestJS, Prisma, PostgreSQL, and Socket.IO backend.",
            "Developed a NextJS dashboard with live RSSI charts and configuration interfaces.",
        ],
    },
    {
        title: "TrashTrack",
        subtitle: "Finalist Project for Balikpapan's IoT and Data Analytic Smart City Competition 2024",
        link: "https://www.instagram.com/p/C3zYWqGvtoH",
        dates: ["January 2024 - March 2024"],
        highlights: [
            "Built the NestJS and PostgreSQL API across 8 resource modules.",
            "Implemented citizen reports, operator feedback, status workflows, and analytics endpoints.",
            "Prototyped ESP32 firmware for trash bin capacity measurements.",
        ],
    },
];

const volunteering: TimelineEntry[] = [
    {
        title: "Lecturer Assistant for Data Structure Subject Odd Semester 2025/2026",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["September 2025 - December 2025"],
        overview: "Assisted in teaching students about the Data Structure subject during the Odd Semester of 2025/2026.",
    },
    {
        title: "Lecturer Assistant for Algorithm & Programming Subject Odd Semester 2024/2025",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["September 2024 - December 2024"],
        overview: "Assisted in teaching Python and PyQt for desktop based applications.",
    },
    {
        title: "Lecturer Assistant for Algorithm & Programming Subject Even Semester 2023/2024",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["February 2024 - May 2024"],
        overview: "Assisted in teaching Python and PyQt for desktop based applications.",
    },
];

const certifications: TimelineEntry[] = [
    { title: "BNSP - Junior Network Administrator", subtitle: "Issued by LSP Teknologi Digital", dates: ["August 2025 - August 2028"] },
    { title: "BNSP - IT Software Solution For Business", subtitle: "Issued by BBPVP Bekasi", link: "https://kelembagaan.kemnaker.go.id", dates: ["September 2023 - September 2026"] },
    { title: "BNSP - KKNI Level II Scheme - Software Engineering", subtitle: "Issued by SMK Negeri 2 Balikpapan", link: "https://smkn2balikpapan.sch.id", dates: ["June 2023 - June 2026"] },
];

const education: TimelineEntry[] = [
    {
        title: "Undergraduate, Computer Science",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        dates: ["July 2023 - Present"],
        highlights: ["GPA: 3.94 / 4.00 (108 Credits)"],
    },
    {
        title: "AI Engineer Cohort",
        subtitle: "At Coding Camp powered by DBS Foundation",
        dates: ["February 2026 - June 2026"],
    },
    {
        title: "Training, IT Software Solution for Business",
        subtitle: "At BBPLK Cevest Bekasi",
        link: "https://kelembagaan.kemnaker.go.id",
        dates: ["May 2023 - July 2023"],
        overview: "Completed an intensive 340-hour competency-based training program focused on IT Software Solutions for Business.",
        highlights: [
            "Implemented structured programming, Object-Oriented Programming, and programming algorithms.",
            "Designed entity relationships, utilized SQL, and implemented secure database access.",
            "Created program documentation, performed debugging, and integrated existing libraries and components.",
        ],
    },
    {
        title: "Vocational High School, Software Engineering",
        subtitle: "At SMK Negeri 2 Balikpapan",
        link: "https://smkn2balikpapan.sch.id",
        dates: ["July 2020 - May 2023"],
        overview: "Graduated from the Software Engineering major with a final average grade of 91.40 out of 100.00.",
        highlights: ["Grade: 91.40 / 100.00"],
    },
];

const awards: TimelineEntry[] = [
    {
        title: "Finalist in IoT and Data Analytic Smart City Competition 2024",
        subtitle: "Issued by Dinas Komunikasi dan Informatika Balikpapan",
        link: "https://www.instagram.com/diskominfo.balikpapan",
        dates: ["February 2024"],
    },
    {
        title: "Finalist in Schematics National Programming Contest Senior 2023",
        subtitle: "Issued by Schematics ITS",
        link: "https://www.instagram.com/schematics.its",
        dates: ["October 2023"],
    },
];

const languageTests: TimelineEntry[] = [
    { title: "Internal Academic English Test (IAET)", subtitle: "Issued by Institut Teknologi Kalimantan", link: "https://itk.ac.id", dates: ["August 2023"] },
    {
        title: "TOEFL PBT (Test of English as a Foreign Language Paper Based Test)",
        subtitle: "Issued by Business & Intensive English College (BIEC)",
        link: "https://www.instagram.com/biecbpn",
        dates: ["January 2022"],
    },
    {
        title: "TOEIC (Test of English for International Communication)",
        subtitle: "Issued by SMK Negeri 2 Balikpapan",
        link: "https://smkn2balikpapan.sch.id",
        dates: ["September 2022 - September 2024"],
    },
];

const publications: TimelineEntry[] = [
    {
        title: "Ambulance Siren Audio Classification Using Convolutional Neural Network for Medical Emergency Detection",
        subtitle: "Published by Prisma Sains",
        dates: ["April 29, 2026"],
    },
    {
        title: "Evolution of Research and Community Service Information System (SIMPAS LPPM) Institut Teknologi Kalimantan",
        subtitle: "Published by SPECTA Journal of Technology",
        dates: ["August 21, 2025"],
    },
];

const patents: TimelineEntry[] = [
    {
        title: "Poster Ilmiah EcoBoo Inovasi Produk Bambu melalui Workshop Berbasis Pemberdayaan Masyarakat sebagai Pilar Branding Ekowisata",
        subtitle: "Patent number EC002025209430",
        dates: ["December 10, 2025"],
    },
];

function TimelineSection({ title, subtitle, entries }: { title: string; subtitle?: string; entries: TimelineEntry[] }): JSX.Element {
    return (
        <QualificationTimeline title={title} subtitle={subtitle}>
            {entries.map((entry) => (
                <QualificationTimelineItem key={entry.title} title={entry.title}>
                    {entry.link ? <QualificationTimelineItemSubtitleLink subtitle={entry.subtitle} link={entry.link} /> : <QualificationTimelineItemSubtitle subtitle={entry.subtitle} />}

                    {(entry.overview || entry.highlights?.length) && (
                        <QualificationTimelineItemDescription>
                            {entry.overview && (
                                <QualificationTimelineItemDescriptionGroup>
                                    <p>{entry.overview}</p>
                                </QualificationTimelineItemDescriptionGroup>
                            )}

                            {!!entry.highlights?.length && (
                                <QualificationTimelineItemDescriptionGroup>
                                    <QualificationTimelineItemDescriptionPoint text="Highlights" />

                                    <QualificationTimelineItemDescriptionList items={entry.highlights} />
                                </QualificationTimelineItemDescriptionGroup>
                            )}
                        </QualificationTimelineItemDescription>
                    )}

                    <QualificationTimelineItemDate dates={entry.dates} />
                </QualificationTimelineItem>
            ))}
        </QualificationTimeline>
    );
}

export default function Qualification(): JSX.Element {
    return (
        <div id="qualification">
            <TimelineSection title="WORK EXPERIENCE" entries={workExperience} />
            <TimelineSection title="PROJECT & RESEARCH" subtitle="EXPERIENCE" entries={projectExperience} />
            <TimelineSection title="TEACHING EXPERIENCE" entries={volunteering} />
            <TimelineSection title="PROFESSIONAL CERTIFICATION" entries={certifications} />
            <TimelineSection title="FORMAL & NON-FORMAL EDUCATION" entries={education} />
            <TimelineSection title="PUBLICATION" entries={publications} />
            <TimelineSection title="INTELLECTUAL PROPERTY RIGHTS" entries={patents} />
            <TimelineSection title="COMPETITION AWARD" entries={awards} />
            <TimelineSection title="LANGUAGE TEST" entries={languageTests} />
        </div>
    );
}
