import { badges } from "@/libraries/constants";
import { ProjectState } from "@/types/project";

import { create } from "zustand";

const useProjectStore = create<ProjectState>((set) => ({
    projects: [
        {
            title: "Employee Information System (EIS)",
            image: "image/project/employee-information-system.webp",
            subtitle: "Full-Stack HR Platform at",
            link: {
                name: "PT Komatsu Remanufacturing Asia",
                url: "https://www.komi.co.id/komatsu-remanufacturing-asia",
            },
            description:
                "A full-stack HR platform serving ~600 employees across a Flutter mobile app, Livewire web portal, and Filament admin panel for reimbursement, time tracking, assignment letters, and announcements.",
            badges: [
                badges.flutter, //
                badges.laravel,
                badges.livewire,
                badges.filament,
                badges.mySQL,
                badges.firebase,
                badges.docker,
            ],
        },
        {
            title: "PrimaCare ERP",
            image: "image/project/primacare-erp.webp",
            subtitle: "Enterprise System at",
            link: {
                name: "CV. Val Tech",
                url: "https://valtech.id",
            },
            description:
                "An enterprise web platform built with Domain-Driven Design (DDD), CQRS patterns, transactional outbox messaging, and distributed microservices architecture.",
            badges: [
                badges.nestJS, //
                badges.nodeJS,
                badges.postgreSQL,
                badges.nx,
                badges.typeScript,
                badges.docker,
            ],
        },
        {
            title: "Web Penjaminan Mutu FSTI (SIMJAMU FSTI)",
            image: "image/project/wpm-fsti.webp",
            subtitle: "Quality Assurance Platform at",
            link: {
                name: "Kalimantan's Institute of Technology",
                url: "https://itk.ac.id",
            },
            description:
                "Quality assurance and accreditation platform for ITK's Faculty of Science and Information Technology, with period-based course evaluation sheets, tridharma reporting, and ML-assisted evaluation.",
            badges: [
                badges.laravel, //
                badges.php,
                badges.mySQL,
                badges.python,
                badges.fastAPI,
                badges.docker,
                badges.tailwindCSS,
            ],
        },
        {
            title: "SmartMedGuard",
            image: "image/project/smart-med-guard.webp",
            url: "https://github.com/NotHydra/smart-med-guard",
            subtitle: "BIMA Kemdiktisaintek Research at",
            link: {
                name: "Kalimantan's Institute of Technology",
                url: "https://itk.ac.id",
            },
            description:
                "An IoT hospital ward environmental monitoring system streaming multi-sensor telemetry (temperature, humidity, occupancy) over MQTT to an offline-first Raspberry Pi server and live NextJS dashboard.",
            badges: [
                badges.cpp, //
                badges.espressif,
                badges.raspberryPi,
                badges.mqtt,
                badges.nestJS,
                badges.nextJS,
                badges.prisma,
                badges.postgreSQL,
            ],
            externalLinks: [
                {
                    name: "ITK News Coverage",
                    url: "https://itk.ac.id/en/berita/smartmedguard-cara-cerdas-memantau-ruang-rawat-dengan-teknologi-iot",
                    icon: "bx bx-news",
                },
                {
                    name: "LPPM ITK Video Documentation",
                    url: "https://www.youtube.com/watch?v=vut6_0W1o-E",
                    icon: "bx bxl-youtube",
                },
                {
                    name: "ITK Official Instagram Feature",
                    url: "https://www.instagram.com/itk_official/p/DUm28dkEdw2/",
                    icon: "bx bxl-instagram",
                },
            ],
        },
        {
            title: "EcoBoo",
            image: "image/project/ecoboo.webp",
            subtitle: "Empowerment & Branding Project at",
            link: {
                name: "Bamboe Wanadesa",
                url: "https://itk.ac.id",
            },
            description:
                "A full-stack ecotourism platform and CMS supporting community bamboo product innovation, recognized with an official Intellectual Property copyright (EC002025209430).",
            badges: [
                badges.nextJS, //
                badges.nuxtJS,
                badges.nestJS,
                badges.prisma,
                badges.postgreSQL,
                badges.tailwindCSS,
                badges.shadcnUI,
                badges.docker,
            ],
            externalLinks: [
                {
                    name: "ITK News Article",
                    url: "https://itk.ac.id/en/berita/5-tim-mahasiswa-itk-lolos-p2mw-2026-usung-inovasi-wirausaha-berbasis-keberlanjutan-dan-pemberdayaan",
                    icon: "bx bx-news",
                },
                {
                    name: "E-DIMAS Journal Publication",
                    url: "https://journal.upgris.ac.id/index.php/e-dimas/article/view/26686",
                    icon: "bx bx-book-open",
                },
            ],
        },
        {
            title: "DermaScope",
            image: "image/project/dermascope.webp",
            subtitle: "AI Capstone Project at",
            link: {
                name: "Coding Camp powered by DBS Foundation",
                url: "https://www.dicoding.com",
            },
            description:
                "Dermatological lesion classification application developed by cohort capstone team CC26-PSU288 during DBS Coding Camp 2026.",
            badges: [
                badges.python, //
                badges.keras,
                badges.fastAPI,
                badges.docker,
            ],
        },
        {
            title: "Emergency Sound Classification",
            image: "image/project/emergency-sound-classification.webp",
            url: "https://github.com/NotHydra/indonesian-emergency-sound-classification",
            subtitle: "Live Demo at",
            link: {
                name: "ambulance.irswanda.com",
                url: "https://ambulance.irswanda.com",
            },
            description: "A web-based application that classifies emergency sounds such as ambulance sirens using Convolutional Neural Network (CNN) models.",
            badges: [
                badges.keras, //
                badges.bulma,
                badges.sass,
                badges.nextJS,
                badges.fastAPI,
                badges.docker,
                badges.yarn,
                badges.nodeJS,
                badges.typeScript,
                badges.python,
            ],
            externalLinks: [
                {
                    name: "Prisma Sains Journal Paper (DOI)",
                    url: "https://doi.org/10.33394/j-ps.v14i2.20099",
                    icon: "bx bx-book-open",
                },
                {
                    name: "Live Web Demo",
                    url: "https://ambulance.irswanda.com",
                    icon: "bx bx-globe",
                },
            ],
        },
        {
            title: "PARI",
            image: "image/project/pari.webp",
            url: "https://github.com/NotHydra/pari",
            subtitle: "Project for",
            link: {
                name: "Gemastik 2024 XVII Smart Device, Embedded System & IoT",
                url: "https://gemastik.kemdikbud.go.id",
            },
            description: "PARI (PApaya Ripeness Identification) is a system designed to classify the ripeness of papaya (Carica papaya) using ultra-high frequency electromagnetic waves.",
            badges: [
                badges.raspberryPi, //
                badges.chartJS,
                badges.bulma,
                badges.sass,
                badges.nextJS,
                badges.socketIO,
                badges.nestJS,
                badges.prisma,
                badges.postgreSQL,
                badges.vite,
                badges.yarn,
                badges.nodeJS,
                badges.python,
                badges.typeScript,
            ],
        },
        {
            title: "TrashTrack",
            image: "image/project/trash-track.webp",
            url: "https://github.com/trashtrackteam/trashtrack",
            subtitle: "Finalist Project for",
            link: {
                name: "Balikpapan's IoT and Data Analytic Smart City Competition 2024",
                url: "https://www.instagram.com/p/C3zYWqGvtoH",
            },
            description: "Smart trash bin system that is capable of filtering and monitoring trash efficiently and real-time with the use of IoT technology and Data Analysis.",
            badges: [
                badges.espressif, //
                badges.tailwindCSS,
                badges.capacitor,
                badges.ionic,
                badges.reactJS,
                badges.socketIO,
                badges.nestJS,
                badges.prisma,
                badges.postgreSQL,
                badges.vite,
                badges.nx,
                badges.pnpm,
                badges.nodeJS,
                badges.cpp,
                badges.typeScript,
            ],
            externalLinks: [
                {
                    name: "Competition Finalist Instagram Announcement",
                    url: "https://www.instagram.com/p/C3zYWqGvtoH",
                    icon: "bx bxl-instagram",
                },
            ],
        },
        {
            title: "ITK's LMS Attendance Automation",
            image: "image/project/itk-lms.webp",
            subtitle: "Academic Tooling at",
            link: {
                name: "Kalimantan's Institute of Technology",
                url: "https://itk.ac.id",
            },
            description:
                "External reporting system integrating Moodle Web Services with a NestJS backend and NextJS dashboard to automate attendance data extraction, visualization, and Excel export.",
            badges: [
                badges.moodle, //
                badges.nestJS,
                badges.nextJS,
                badges.typeScript,
                badges.docker,
            ],
        },
        {
            title: "Portfolio",
            image: "image/project/portfolio-website.webp",
            url: "https://github.com/NotHydra/portfolio",
            subtitle: "Public Website at",
            link: {
                name: "irswanda.com",
                url: "https://irswanda.com",
            },
            description: "Personal website built to present projects, qualifications, and work background.",
            badges: [
                badges.sass, //
                badges.nextJS,
                badges.pnpm,
                badges.nodeJS,
                badges.typeScript,
            ],
        },
        {
            title: "Finance Recap",
            image: "image/project/finance-recap.webp",
            url: "https://github.com/astrantialabs/finance-recap",
            subtitle: "Intern Project at",
            link: {
                name: "Balikpapan's Department of Labor and Social",
                url: "https://disnaker.balikpapan.go.id",
            },
            description: "A web based application that is used for recapping financial expenses data of a company. Divide and summarize each data based on expenses that the company has.",
            badges: [
                badges.laravel, //
                badges.mongoDB,
                badges.python,
                badges.php,
            ],
        },
        {
            title: "Item & Asset Management",
            image: "image/project/inventory-management.webp",
            url: "https://github.com/astrantialabs/administrare",
            subtitle: "Intern Project at",
            link: {
                name: "Balikpapan's Department of Labor and Social",
                url: "https://disnaker.balikpapan.go.id",
            },
            description:
                "A web based application that is used for managing and tracking workplace items. Capable of the creation of a new item category and a request for item feature that is integrated into the program.",
            badges: [
                badges.chakraUI, //
                badges.redux,
                badges.nextJS,
                badges.nestJS,
                badges.fastAPI,
                badges.mongoDB,
                badges.typeScript,
                badges.python,
            ],
        },
        {
            title: "Signature",
            image: "image/project/signature.webp",
            url: "https://github.com/NotHydra/signature",
            subtitle: "Algorithm & Programming Course Project at",
            link: {
                name: "Kalimantan's Institute of Technology",
                url: "https://itk.ac.id",
            },
            description:
                "Signature is a desktop and a semi web based application that is capable of managing multiple documents online. Starting from uploading, downloading and signing documents digitally.",
            badges: [
                badges.bulma, //
                badges.reactJS,
                badges.fastAPI,
                badges.mongoDB,
                badges.vite,
                badges.yarn,
                badges.nodeJS,
                badges.typeScript,
                badges.python,
            ],
        },
        {
            title: "SIRuang",
            image: "image/project/siruang.webp",
            url: "https://github.com/NotHydra/siruang",
            subtitle: "Object Oriented Programming Course Project at",
            link: {
                name: "Kalimantan's Institute of Technology",
                url: "https://itk.ac.id",
            },
            description: "SIRuang is a Room Booking Information System developed by using Java alongside with the implementation of Object Oriented Programming (OOP) principles.",
            badges: [
                badges.javaFX, //
                badges.mySQL,
                badges.java,
            ],
        },
        {
            title: "School Super App",
            image: "image/project/school-super-app.webp",
            url: "https://github.com/NotHydra/school-super-app",
            subtitle: "Final Year Project at",
            link: {
                name: "Balikpapan's Public Vocational High School 2",
                url: "https://smkn2balikpapan.sch.id",
            },
            description:
                "School Super App is a project that I developed for my final school year project, its usage is for managing a lot of data such as student, teacher, class, alumni and lots more. Not only that it also have a system for a library and a student violations.",
            badges: [
                badges.sass, //
                badges.expressJS,
                badges.mongoDB,
                badges.yarn,
                badges.nodeJS,
                badges.typeScript,
                badges.python,
            ],
        },
        {
            title: "Public Complaint Report",
            image: "image/project/public-complaint-report.webp",
            url: "https://github.com/NotHydra/public-complaint-report",
            subtitle: "Exam Project at",
            link: {
                name: "Balikpapan's Public Vocational High School 2",
                url: "https://smkn2balikpapan.sch.id",
            },
            description: "A web based application for Competency Test (UKK) that allows people to submit reports in the form of complaints.",
            badges: [
                badges.bootstrap, //
                badges.mySQL,
                badges.php,
            ],
        },
        {
            title: "Tuition Payment",
            image: "image/project/tuition-payment-application.webp",
            url: "https://github.com/NotHydra/tuition-payment-application",
            subtitle: "Exam Project at",
            link: {
                name: "Balikpapan's Public Vocational High School 2",
                url: "https://smkn2balikpapan.sch.id",
            },
            description: "A web based application for Competency Test (UKK) used by a school to manage and record tuition payment data of their students.",
            badges: [
                badges.bootstrap, //
                badges.mySQL,
                badges.php,
            ],
        },
    ],
}));

export default useProjectStore;
