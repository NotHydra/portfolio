import { JSX } from "react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Title from "../common/title.component";

export default function Project(): JSX.Element {
    enum Badge {
        ARDUINO = "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
        BULMA = "https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white",
        C_PLUS_PLUS = "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
        CAPACITOR = "https://img.shields.io/badge/Capacitor-black.svg?style=for-the-badge&logo=capacitor&logoColor=01bdfe",
        CHART_JS = "https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white",
        CHAKRA_UI = "https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white",
        ESPRESSIF = "https://img.shields.io/badge/espressif-E7352C.svg?style=for-the-badge&logo=espressif&logoColor=white",
        EXPRESS_JS = "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
        FAST_API = "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi",
        IONIC = "https://img.shields.io/badge/Ionic-%233880FF.svg?style=for-the-badge&logo=Ionic&logoColor=white",
        JAVA = "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
        JAVA_FX = "https://img.shields.io/badge/javafx-%23FF0000.svg?style=for-the-badge&logo=javafx&logoColor=white",
        LARAVEL = "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
        MONGO_DB = "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
        MY_SQL = "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
        NEST_JS = "https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white",
        NEXT_JS = "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
        NX = "https://img.shields.io/badge/nx-143055?style=for-the-badge&logo=nx&logoColor=white",
        NODE_JS = "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
        PHP = "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
        PNPM = "https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220",
        POSTGRE_SQL = "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
        PRISMA = "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
        PYTHON = "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        RASPBERRY_PI = "https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi",
        REACT_JS = "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        REDUX = "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
        SOCKET_IO = "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
        SASS = "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
        TAILWIND_CSS = "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
        TYPESCRIPT = "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
        VITE = "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
        YARN = "https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white",
    }

    interface Project {
        title: string;
        image: string;
        url: string;
        subtitle: string;
        organization: {
            name: string;
            url: string;
        };
        description: string;
        techStacks: Badge[];
    }

    const projects: Project[] = [
        {
            title: "Finance Recap",
            image: "image/project/finance-recap.png",
            url: "https://github.com/astrantialabs/finance-recap",
            subtitle: "Intern Project at",
            organization: {
                name: "Balikpapan's Department of Labor and Social",
                url: "https://disnaker.balikpapan.go.id",
            },
            description: "A web based application that is used for recapping financial expenses data of a company. Divide and summarize each data based on expenses that the company has.",
            techStacks: [
                Badge.LARAVEL, //
                Badge.MONGO_DB,
                Badge.PYTHON,
                Badge.PHP,
            ],
        },
        {
            title: "Inventory Management",
            image: "image/project/inventory-management.png",
            url: "https://github.com/astrantialabs/administrare",
            subtitle: "Intern Project at",
            organization: {
                name: "Balikpapan's Department of Labor and Social",
                url: "https://disnaker.balikpapan.go.id",
            },
            description:
                "A web based application that is used for managing items in an inventory. Capable of the creation of a new item category and a request for item feature that is integrated into the program.",
            techStacks: [
                Badge.CHAKRA_UI, //
                Badge.REDUX,
                Badge.NEXT_JS,
                Badge.NEST_JS,
                Badge.FAST_API,
                Badge.MONGO_DB,
                Badge.TYPESCRIPT,
                Badge.PYTHON,
            ],
        },
        {
            title: "School Super App",
            image: "image/project/school-super-app.png",
            url: "https://github.com/NotHydra/school-super-app",
            subtitle: "Final Year Project at",
            organization: {
                name: "Balikpapan's Public Vocational High School 2",
                url: "https://smkn2balikpapan.sch.id",
            },
            description:
                "School Super App is a project that I developed for my final school year project, its usage is for managing a lot of data such as student, teacher, class, alumni and lots more. Not only that it also have a system for a library and a student violations.",
            techStacks: [
                Badge.SASS, //
                Badge.EXPRESS_JS,
                Badge.MONGO_DB,
                Badge.YARN,
                Badge.NODE_JS,
                Badge.TYPESCRIPT,
                Badge.PYTHON,
            ],
        },
        {
            title: "Signature",
            image: "image/project/signature.png",
            url: "https://github.com/NotHydra/signature",
            subtitle: "Algorithm & Programming Course Project at",
            organization: {
                name: "Kalimantan's Institute of Technology",
                url: "https://itk.ac.id",
            },
            description:
                " Signature is a desktop and a semi web based application that is capable of managing multiple documents online. Starting from uploading, downloading and signing documents digitally.",
            techStacks: [
                Badge.BULMA, //
                Badge.REACT_JS,
                Badge.FAST_API,
                Badge.MONGO_DB,
                Badge.VITE,
                Badge.YARN,
                Badge.NODE_JS,
                Badge.TYPESCRIPT,
                Badge.PYTHON,
            ],
        },
        {
            title: "SIRuang",
            image: "image/project/siruang.png",
            url: "https://github.com/NotHydra/siruang",
            subtitle: "Object Oriented Programming Course Project at",
            organization: {
                name: "Kalimantan's Institute of Technology",
                url: "https://itk.ac.id",
            },
            description: "SIRuang is a Room Booking Information System developed by using Java alongside with the implementation of Object Oriented Programming (OOP) principles.",
            techStacks: [
                Badge.JAVA_FX, //
                Badge.MY_SQL,
                Badge.JAVA,
            ],
        },
        {
            title: "TrashTrack",
            image: "image/project/trash-track.png",
            url: "https://github.com/trashtrack-team/trashtrack",
            subtitle: "Finalist Project for",
            organization: {
                name: "Balikpapan's IoT and Data Analytic Smart City Competition 2024",
                url: "https://www.instagram.com/p/C3zYWqGvtoH",
            },
            description: "Smart trash bin system that is capable of filtering and monitoring trash efficiently and real-time with the use of IoT technology and Data Analysis.",
            techStacks: [
                Badge.ESPRESSIF, //
                Badge.TAILWIND_CSS,
                Badge.CAPACITOR,
                Badge.IONIC,
                Badge.REACT_JS,
                Badge.SOCKET_IO,
                Badge.NEST_JS,
                Badge.PRISMA,
                Badge.POSTGRE_SQL,
                Badge.VITE,
                Badge.NX,
                Badge.PNPM,
                Badge.NODE_JS,
                Badge.C_PLUS_PLUS,
                Badge.TYPESCRIPT,
            ],
        },
        {
            title: "PARI",
            image: "image/project/pari.png",
            url: "https://github.com/NotHydra/pari",
            subtitle: "Project for",
            organization: {
                name: "Gemastik 2024 XVII Smart Device, Embedded System & IoT",
                url: "https://gemastik.kemdikbud.go.id",
            },
            description: "PARI (PApaya Ripeness Identification) is a system designed to classify the ripeness of papaya (Carica papaya) using ultra-high frequency electromagnetic waves.",
            techStacks: [
                Badge.RASPBERRY_PI, //
                Badge.CHART_JS,
                Badge.BULMA,
                Badge.SASS,
                Badge.NEXT_JS,
                Badge.SOCKET_IO,
                Badge.NEST_JS,
                Badge.PRISMA,
                Badge.POSTGRE_SQL,
                Badge.VITE,
                Badge.YARN,
                Badge.NODE_JS,
                Badge.PYTHON,
                Badge.TYPESCRIPT,
            ],
        },
    ];

    return (
        <section className="project" id="project">
            <Title title="PROJECT" />

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 75,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[EffectCoverflow, Navigation, Autoplay]}
            >
                {projects.map(
                    (project: Project, index: number): React.ReactNode => (
                        <SwiperSlide key={index}>
                            <div className="portfolio-content">
                                <img src={project.image} alt={project.title} className="portfolio-img" onClick={() => window.open(project.url, "_blank")} />

                                <div className="portfolio-data">
                                    <h3 className="portfolio-title">
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                            {project.title} <i className="bx bxl-github"></i>
                                        </a>
                                    </h3>

                                    <p className="portfolio-subtitle">
                                        {project.subtitle}{" "}
                                        <a href={project.organization.url} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                                            {project.organization.name}
                                        </a>
                                    </p>

                                    <p className="portfolio-description">{project.description}</p>

                                    <div className="badges">
                                        {project.techStacks.map(
                                            (techStack: Badge, techStackIndex: number): React.ReactNode => (
                                                <img key={techStackIndex} className="badge" src={techStack} />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </section>
    );
}
