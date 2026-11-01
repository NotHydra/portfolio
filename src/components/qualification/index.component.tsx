import { JSX } from "react";

import QualificationTimeline from "./timeline";
import QualificationTimelineItemDate, { TimelineDate } from "./timeline/item/date.component";
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
    date: TimelineDate;
    overview?: string;
    highlights?: string[];
};

const workExperience: TimelineEntry[] = [
    {
        title: "Internet of Things Engineer Intern",
        subtitle: "At PT Komatsu Remanufacturing Asia",
        link: "https://www.komi.co.id/komatsu-remanufacturing-asia",
        date: { start: new Date(2026, 6, 1), end: "Present" },
        overview:
            "Architected and implemented end-to-end industrial IoT asset tracking infrastructure for heavy machinery parts across remanufacturing workshops, spanning Android and Rust edge gateway daemons, operator handheld apps, real-time spatial localization services, and a central modular monolith.",
        highlights: [
            "Built headless Android edge daemons in Kotlin for Chainway URA4 fixed readers, managing Impinj Indy R2000 engines, sequential round-robin antenna polling, and dynamic RF power convergence from 5 to 30 dBm.",
            "Engineered edge fault tolerance with Room SQLite WAL persistent outboxes, guaranteed FIFO replay upon reconnect, storage pressure safeguards, and Direct Boot autonomous cold-boot recovery.",
            "Developed Main Gate edge gateway daemons in Rust on industrial Mini-PCs with tokio and rusqlite, parsing binary protocol frames from Electron HW-VX6346KL-V1 readers over RS-232 serial and TCP for authenticated HTTP telemetry dispatch.",
            "Created operator-facing mobile applications for Zebra TC21 touch computers paired with Chainway R6 RFID sleds via BLE using Jetpack Compose, featuring Zebra DataWedge 2D QR decoding and 3-step physical part linking workflows.",
            "Architected the central modular monolith backend using Laravel 13, PostgreSQL, Redis, Inertia.js, and Vue 3, implementing Domain-Driven Design bounded contexts, token-authenticated ingress, and high-contrast machinist consoles backed by Pest test suites.",
            "Implemented real-time spatial localization inference microservices with Python and FastAPI, estimating continuous 2D coordinates within workshop bounds from multi-antenna RSSI observations and reference tag geometry.",
        ],
    },
    {
        title: "Project Manager - FSTI ITK's Quality Assurance System",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        date: { start: new Date(2026, 3, 1), end: "Present" },
        overview:
            "Directed project management alongside hands-on software development for Web Penjaminan Mutu FSTI (SIMJAMU FSTI), an institutional quality assurance platform for ITK's Faculty of Science and Information Technology.",
        highlights: [
            "Directed development roadmaps and multi-team deliverables across 19 sprints, reviewing and merging over 500 pull requests across application and documentation repositories.",
            "Architected Domain-Driven Design (DDD) domain specifications and database schemas for faculty accreditation, internal quality audits, and lecturer tridharma records.",
            "Engineered period-centric course evaluation sheets with living evaluation states, immutable run snapshots, and target batch synchronization orchestration.",
            "Built an authenticated FastAPI inference server container to integrate and serve pre-trained models for learning evaluation and activity clustering.",
            "Developed interactive learning evaluation matrix with evidence verification drawers, course attendance checks, and automated email notification dispatch.",
        ],
    },
    {
        title: "Back-End Developer & DevOps Engineer",
        subtitle: "At CV. Val Tech",
        link: "https://valtech.id",
        date: { start: new Date(2026, 1, 1), end: "Present" },
        overview:
            "Contributed to backend architecture and DevOps pipelines utilizing Domain-Driven Design (DDD), CQRS patterns, and containerized CI/CD workflows.",
        highlights: [
            "Engineered domain services and transactional outbox event publishers for asynchronous event dispatch across bounded contexts.",
            "Implemented idempotent message consumers with structured event logging, deduplication safeguards, and strict input validation pipelines.",
            "Provisioned self-hosted GitHub Actions runner infrastructure on Linux VPS hosts to automate pull request validation and end-to-end API testing.",
            "Configured containerized multi-service development and testing environments with Docker Compose isolating PostgreSQL, DragonflyDB caching, and Hasura engines.",
            "Built MinIO S3 object storage integration supporting public and private buckets with HTTP presigned URL generation for secure direct client uploads.",
            "Standardized monetary BigInt and basis points string wire formats to eliminate floating-point precision loss across distributed transactions.",
            "Authored comprehensive integration and unit test suites using Testcontainers, Drizzle ORM, and PostgreSQL instances to validate distributed workflows.",
        ],
    },
    {
        title: "Mobile & Full-Stack Developer Intern",
        subtitle: "At PT Komatsu Remanufacturing Asia",
        link: "https://www.komi.co.id/komatsu-remanufacturing-asia",
        date: { start: new Date(2025, 0, 1), end: new Date(2026, 1, 1) },
        overview:
            "The Employee Information System (EIS) is a full-stack HR platform built for PT Komatsu Remanufacturing Asia that digitizes reimbursement claims, request approvals, assignment letters, time tracking, and announcements for approximately 600 employees.",
        highlights: [
            "Developed and maintained the Laravel REST API backend spanning 48 Eloquent models, 25 domain services, and 21 controllers.",
            "Implemented defensive relation loading and optimized eager loading strategies to eliminate N+1 queries across multi-tier divisional approval hierarchies.",
            "Built the Livewire and Blade web portal across 7 HR modules including dashboard, attendance monitoring, announcements, and contact support.",
            "Engineered the Filament admin panel with 51 resources, role-based permission gates, and automated bulk data exports.",
            "Contributed to the Flutter mobile client by refining reimbursement, assignment letter, approval, and time management screens.",
            "Authored comprehensive software documentation in Typst, including Data Flow Diagrams, Entity Relationship Diagrams, state machines, and black-box test matrices.",
        ],
    },
    {
        title: "Full-Stack Developer - ITK's LMS",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        date: { start: new Date(2024, 9, 1), end: new Date(2026, 0, 1) },
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
        date: { start: new Date(2024, 5, 1), end: new Date(2025, 8, 1) },
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
        date: { start: new Date(2024, 2, 1), end: new Date(2025, 7, 1) },
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
        date: { start: new Date(2024, 4, 1), end: new Date(2024, 11, 1) },
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
        date: { start: new Date(2022, 3, 1), end: new Date(2022, 6, 1) },
        overview: "Developed Administrare and Finance Recap to digitize asset tracking and financial recap workflows for over 70 staff members.",
        highlights: [
            "Built RESTful API services using NestJS, FastAPI, TypeScript, Python, and MongoDB.",
            "Engineered automated Excel report generation and data extraction pipelines.",
            "Authored system architecture documents including ER diagrams, flowcharts, and class diagrams.",
        ],
    },
];

const projectExperience: TimelineEntry[] = [
    {
        title: "Rancang Bangun Sistem Lokalisasi Part Alat Berat Berbasis UHF RFID",
        subtitle: "Undergraduate Thesis at PT Komatsu Remanufacturing Asia & ITK",
        link: "https://itk.ac.id",
        date: { start: new Date(2026, 6, 1), end: "Present" },
        highlights: [
            "Evaluated Log-Distance Path Loss models and trilateration algorithms for passive UHF RFID localization in heavy machinery pre-machining workshops.",
            "Analyzed antenna radiation patterns and multipath signal scattering across dense metallic machinery parts using circularly polarized antennas.",
            "Engineered a hardware interrogation pipeline that bridges EPC Gen2 RFID tag scanning to local MQTT messaging for real-time asset coordinates.",
            "Presented research findings at the 6th BICAME 2026 international conference on industrial asset tracking and logistics remanufacturing.",
        ],
    },
    {
        title: "Web Penjaminan Mutu FSTI (SIMJAMU FSTI)",
        subtitle: "Institutional Quality Assurance Platform at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        date: { start: new Date(2026, 3, 1), end: "Present" },
        highlights: [
            "Led full-stack architecture, Domain-Driven Design (DDD) modeling, and sprint management across 19 development cycles.",
            "Engineered period-centric course evaluation sheets with immutable run snapshots, manual review verification, and audit logs.",
            "Built an authenticated FastAPI inference microservice to integrate and serve pre-trained models for learning evaluation and activity clustering.",
            "Developed interactive learning evaluation matrix with evidence verification drawers and automated notification delivery.",
        ],
    },
    {
        title: "DermaScope: AI-Powered Dermatological Lesion Classification",
        subtitle: "Capstone Project at Coding Camp powered by DBS Foundation",
        link: "https://www.dicoding.com",
        date: { start: new Date(2026, 4, 1), end: new Date(2026, 6, 1) },
        highlights: [
            "Served as AI Engineer in cohort capstone team CC26-PSU288 developing deep learning models for clinical skin lesion classification.",
            "Designed a multi-input neural network with TensorFlow Functional API combining 224x224 dermoscopic images via EfficientNetB0 and patient metadata via a custom tabular embedding layer.",
            "Implemented custom Focal Loss and gradient tape training loops to address extreme class imbalance across 7 dermatological disease categories.",
            "Engineered a high-performance FastAPI inference microservice with automated model checkpoint loading and prediction confidence scoring.",
            "Graduated from the DBS Foundation Coding Camp, earning a final Grade A with Distinction.",
        ],
    },
    {
        title: "ITK's LMS",
        subtitle: "Research Project at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        date: { start: new Date(2024, 9, 1), end: new Date(2026, 0, 1) },
        highlights: [
            "Integrated Moodle Web Service functions through a NestJS API.",
            "Built a responsive attendance dashboard and Excel export workflow.",
            "Containerized the full-stack application with Docker Compose profiles.",
        ],
    },
    {
        title: "SmartMedGuard: Inovasi Modular untuk Pemantauan Ruang Rawat Berbasis IoT di Puskesmas dan RSUD",
        subtitle: "Research Project at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id/en/berita/smartmedguard-cara-cerdas-memantau-ruang-rawat-dengan-teknologi-iot",
        date: { start: new Date(2025, 7, 1), end: new Date(2025, 11, 1) },
        highlights: [
            "Engineered ESP32 firmware in C++ integrating DHT22 temperature and humidity sensing, PIR motion detection, and custom circuit schematics.",
            "Implemented a DS3231 real-time clock module alongside network time protocol synchronization and offline mode caching to guarantee zero telemetry loss during outages.",
            "Developed a NestJS backend handling hybrid MQTT telemetry ingestion and Socket.IO real-time event broadcasting to client applications.",
            "Built a responsive NextJS monitoring portal with live metric visualization, device connection health tracking, and automated offline state detection.",
            "Delivered the research prototype under Kemdiktisaintek BIMA grant funding achieving TRL 4 validation, featured by ITK News and LPPM ITK video documentation.",
        ],
    },
    {
        title: "EcoBoo: Inovasi Produk Bambu melalui Workshop Berbasis Pemberdayaan Masyarakat",
        subtitle: "Community Service at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id/en/berita/5-tim-mahasiswa-itk-lolos-p2mw-2026-usung-inovasi-wirausaha-berbasis-keberlanjutan-dan-pemberdayaan",
        date: { start: new Date(2025, 6, 1), end: new Date(2025, 11, 1) },
        highlights: [
            "Built a NestJS REST API with Prisma and PostgreSQL using dual JWT refresh token rotation, strict rate limiting, and reusable SQL search query builders.",
            "Developed the administrative NextJS CMS dashboard with custom design systems, responsive dialog workflows, and role-based access.",
            "Implemented public-facing web endpoints and containerized the multi-service architecture using Docker Compose.",
            "Secured official copyright registration (HKI EC002025209430) and co-authored community empowerment research published in the E-DIMAS journal.",
        ],
    },
    {
        title: "ITK's SUMMIT",
        subtitle: "Research Project at Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        date: { start: new Date(2024, 5, 1), end: new Date(2025, 8, 1) },
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
        date: { start: new Date(2024, 2, 1), end: new Date(2025, 7, 1) },
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
        date: { start: new Date(2024, 4, 1), end: new Date(2024, 11, 1) },
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
        date: { start: new Date(2024, 3, 1), end: new Date(2024, 6, 1) },
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
        date: { start: new Date(2024, 0, 1), end: new Date(2024, 2, 1) },
        highlights: [
            "Built the NestJS and PostgreSQL API across 8 resource modules.",
            "Implemented citizen reports, operator feedback, status workflows, and analytics endpoints.",
            "Prototyped ESP32 firmware for trash bin capacity measurements.",
        ],
    },
];

const volunteering: TimelineEntry[] = [
    {
        title: "Lecturer Assistant for Digital System Subject Odd Semester 2026/2027",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        date: { start: new Date(2026, 8, 1), end: "Present" },
        overview:
            "Supervised laboratory sessions and practical activities on electrical circuits, including logic gates, JK flip-flops, and shift registers.",
        highlights: [
            "Guided students through hands-on breadboard circuit assembly and logic state verification.",
            "Supervised laboratory experiments covering Boolean logic gates, combinational circuits, JK flip-flops, and shift registers.",
            "Evaluated student laboratory reports and practical circuit design assignments.",
        ],
    },
    {
        title: "Lecturer Assistant for Data Structure Subject Odd Semester 2025/2026",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        date: { start: new Date(2025, 8, 1), end: new Date(2025, 11, 1) },
        overview: "Assisted in teaching students about the Data Structure subject during the Odd Semester of 2025/2026.",
    },
    {
        title: "Lecturer Assistant for Algorithm & Programming Subject Odd Semester 2024/2025",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        date: { start: new Date(2024, 8, 1), end: new Date(2024, 11, 1) },
        overview: "Assisted in teaching Python and PyQt for desktop based applications.",
    },
    {
        title: "Lecturer Assistant for Algorithm & Programming Subject Even Semester 2023/2024",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        date: { start: new Date(2024, 1, 1), end: new Date(2024, 4, 1) },
        overview: "Assisted in teaching Python and PyQt for desktop based applications.",
    },
];

const certifications: TimelineEntry[] = [
    {
        title: "Coding Camp 2026 powered by DBS Foundation - AI Engineer (Distinction Graduate)",
        subtitle: "Issued by DBS Foundation & Dicoding",
        link: "https://www.dicoding.com",
        date: { start: new Date(2026, 6, 1) },
        highlights: ["Certificate ID: CC26/DIST/XXVI-07/CACC116D6Y2077", "Graduated with Distinction in AI Engineer Cohort"],
    },
    {
        title: "Certificate of Internship - EIS Development (Web & Mobile Apps)",
        subtitle: "Issued by PT Komatsu Remanufacturing Asia",
        link: "https://www.komi.co.id/komatsu-remanufacturing-asia",
        date: { start: new Date(2025, 0, 1), end: new Date(2026, 1, 1) },
    },
    { title: "BNSP - Junior Network Administrator", subtitle: "Issued by LSP Teknologi Digital", date: { start: new Date(2025, 7, 1), end: new Date(2028, 7, 1) } },
    {
        title: "Digital Talent Scholarship VSGA - Junior Network Administrator",
        subtitle: "Issued by BPSDMP Komdigi Banjarmasin",
        date: { start: new Date(2025, 7, 1) },
    },
    { title: "BNSP - IT Software Solution For Business", subtitle: "Issued by BBPVP Bekasi", link: "https://kelembagaan.kemnaker.go.id", date: { start: new Date(2023, 8, 1), end: new Date(2026, 8, 1) } },
    {
        title: "Pelatihan Berbasis Kompetensi (PBK) - IT Software Solution for Business (340 JP)",
        subtitle: "Issued by BBPVP Bekasi - Kemnaker RI",
        link: "https://kelembagaan.kemnaker.go.id",
        date: { start: new Date(2023, 6, 1) },
    },
    { title: "BNSP - KKNI Level II Scheme - Software Engineering", subtitle: "Issued by SMK Negeri 2 Balikpapan", link: "https://smkn2balikpapan.sch.id", date: { start: new Date(2023, 5, 1), end: new Date(2026, 5, 1) } },
    {
        title: "Certificate of Internship - Bidang Sekretariat (Grade: Sangat Baik)",
        subtitle: "Issued by Dinas Ketenagakerjaan Kota Balikpapan",
        link: "https://disnaker.balikpapan.go.id",
        date: { start: new Date(2022, 3, 1), end: new Date(2022, 6, 1) },
    },
];

const education: TimelineEntry[] = [
    {
        title: "Undergraduate, Computer Science",
        subtitle: "At Kalimantan's Institute of Technology",
        link: "https://itk.ac.id",
        date: { start: new Date(2023, 6, 1), end: "Present" },
        highlights: ["GPA: 3.94 / 4.00 (129 Credits)"],
    },
    {
        title: "AI Engineer Cohort",
        subtitle: "At Coding Camp powered by DBS Foundation",
        link: "https://www.dicoding.com",
        date: { start: new Date(2026, 1, 1), end: new Date(2026, 6, 1) },
        overview:
            "Completed an intensive 934-hour specialized AI Engineering track developed by DBS Foundation and Dicoding, graduating with Distinction.",
        highlights: [
            "Distinction Graduate (Average Score: 96.90 / 100.00, Grade A, 100% Attendance Rate).",
            "Completed courses across Python, Machine Learning, Fundamental Deep Learning, and Advanced Deep Learning.",
            "Developed capstone project DermaScope in cross-functional cohort team CC26-PSU288.",
        ],
    },
    {
        title: "Training, IT Software Solution for Business",
        subtitle: "At BBPLK Cevest Bekasi",
        link: "https://kelembagaan.kemnaker.go.id",
        date: { start: new Date(2023, 4, 1), end: new Date(2023, 6, 1) },
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
        date: { start: new Date(2020, 6, 1), end: new Date(2023, 4, 1) },
        overview: "Graduated from the Software Engineering major with a final average grade of 91.40 out of 100.00.",
        highlights: ["Grade: 91.40 / 100.00"],
    },
];

const awards: TimelineEntry[] = [
    {
        title: "Finalist in KIDECO Innovation Challenge (KIC) 2026",
        subtitle: "Issued by PT Kideco Jaya Agung & Institut Teknologi Kalimantan",
        date: { start: new Date(2026, 7, 1) },
    },
    {
        title: "Finalist in IoT and Data Analytic Smart City Competition 2024",
        subtitle: "Issued by Dinas Komunikasi dan Informatika Balikpapan",
        link: "https://www.instagram.com/diskominfo.balikpapan",
        date: { start: new Date(2024, 1, 1) },
    },
    {
        title: "Finalist in Schematics National Programming Contest Senior 2023",
        subtitle: "Issued by Schematics ITS",
        link: "https://www.instagram.com/schematics.its",
        date: { start: new Date(2023, 9, 1) },
    },
];

const languageTests: TimelineEntry[] = [
    {
        title: "English & Professional Skill Assessment - Score: 88%",
        subtitle: "Issued by Dicoding Indonesia",
        date: { start: new Date(2026, 5, 1) },
    },
    {
        title: "TOEIC (Test of English for International Communication) - Score: 865 / 990",
        subtitle: "Issued by Educational Testing Service (ETS) & PT International Test Center",
        date: { start: new Date(2022, 8, 1), end: new Date(2024, 8, 1) },
        highlights: ["Listening: 475 / 495", "Reading: 390 / 495", "Total Score: 865 / 990"],
    },
    { title: "Internal Academic English Test (IAET) - Score: 515", subtitle: "Issued by Institut Teknologi Kalimantan", link: "https://itk.ac.id", date: { start: new Date(2023, 7, 1) } },
    {
        title: "TOEFL PBT (Test of English as a Foreign Language Paper Based Test)",
        subtitle: "Issued by Business & Intensive English College (BIEC)",
        link: "https://www.instagram.com/biecbpn",
        date: { start: new Date(2022, 0, 1) },
    },
];

const publications: TimelineEntry[] = [
    {
        title: "Developing an Integrated Academic Quality Assurance Website Using Kanban Methodology",
        subtitle: "Presented at The 6th BICAME Borneo International Conference | LPPM ITK",
        link: "https://itk.ac.id",
        date: { start: new Date(2026, 8, 16), showDay: true },
    },
    {
        title: "Ambulance Siren Audio Classification Using Convolutional Neural Network for Medical Emergency Detection",
        subtitle: "Published by Prisma Sains (DOI: 10.33394/j-ps.v14i2.20099)",
        link: "https://doi.org/10.33394/j-ps.v14i2.20099",
        date: { start: new Date(2026, 3, 29), showDay: true },
    },
    {
        title: "Membangun Identitas Ekowisata melalui Inovasi Produk Bambu Berbasis Pemberdayaan Komunitas",
        subtitle: "Published by E-DIMAS: Jurnal Pengabdian kepada Masyarakat",
        link: "https://journal.upgris.ac.id/index.php/e-dimas/article/view/26686",
        date: { start: new Date(2026, 2, 1) },
    },
    {
        title: "Evolution of Research and Community Service Information System (SIMPAS LPPM) Institut Teknologi Kalimantan",
        subtitle: "Published by SPECTA Journal of Technology (DOI: 10.35718/specta.v9i2.1309)",
        link: "https://doi.org/10.35718/specta.v9i2.1309",
        date: { start: new Date(2025, 7, 21), showDay: true },
    },
];

const patents: TimelineEntry[] = [
    {
        title: "Poster Ilmiah EcoBoo Inovasi Produk Bambu melalui Workshop Berbasis Pemberdayaan Masyarakat sebagai Pilar Branding Ekowisata",
        subtitle: "Patent number EC002025209430",
        link: "https://journal.upgris.ac.id/index.php/e-dimas/article/view/26686",
        date: { start: new Date(2025, 11, 10), showDay: true },
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

                    <QualificationTimelineItemDate date={entry.date} />
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
