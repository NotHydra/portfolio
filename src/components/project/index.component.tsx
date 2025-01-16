import { JSX } from "react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Title from "../common/title.component";

export default function Project(): JSX.Element {
    interface Badge {
        title: string;
        link: string;
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
        badges: Badge[];
    }

    const badges: { [key: string]: Badge } = {
        arduino: {
            title: "Arduino",
            link: "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
        },
        bootstrap: {
            title: "Bootstrap",
            link: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
        },
        bulma: {
            title: "Bulma",
            link: "https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white",
        },
        capacitor: {
            title: "Capacitor",
            link: "https://img.shields.io/badge/Capacitor-black.svg?style=for-the-badge&logo=capacitor&logoColor=01bdfe",
        },
        chartJS: {
            title: "ChartJS",
            link: "https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white",
        },
        chakraUI: {
            title: "Chakra UI",
            link: "https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white",
        },
        cpp: {
            title: "C++",
            link: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
        },
        espressif: {
            title: "Espressif",
            link: "https://img.shields.io/badge/espressif-E7352C.svg?style=for-the-badge&logo=espressif&logoColor=white",
        },
        expressJS: {
            title: "ExpressJS",
            link: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
        },
        fastAPI: {
            title: "FastAPI",
            link: "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi",
        },
        ionic: {
            title: "Ionic",
            link: "https://img.shields.io/badge/Ionic-%233880FF.svg?style=for-the-badge&logo=Ionic&logoColor=white",
        },
        java: {
            title: "Java",
            link: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
        },
        javaFX: {
            title: "JavaFX",
            link: "https://img.shields.io/badge/javafx-%23FF0000.svg?style=for-the-badge&logo=javafx&logoColor=white",
        },
        laravel: {
            title: "Laravel",
            link: "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
        },
        mongoDB: {
            title: "MongoDB",
            link: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
        },
        mySQL: {
            title: "MySQL",
            link: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
        },
        nestJS: {
            title: "NestJS",
            link: "https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white",
        },
        nextJS: {
            title: "NextJS",
            link: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
        },
        nx: {
            title: "Nx",
            link: "https://img.shields.io/badge/nx-143055?style=for-the-badge&logo=nx&logoColor=white",
        },
        nodeJS: {
            title: "NodeJS",
            link: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
        },
        php: {
            title: "PHP",
            link: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
        },
        pnpm: {
            title: "PNPM",
            link: "https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220",
        },
        postgreSQL: {
            title: "PostgreSQL",
            link: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
        },
        prisma: {
            title: "Prisma",
            link: "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
        },
        python: {
            title: "Python",
            link: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        },
        raspberryPi: {
            title: "Raspberry Pi",
            link: "https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi",
        },
        reactJS: {
            title: "ReactJS",
            link: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        },
        redux: {
            title: "Redux",
            link: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
        },
        socketIO: {
            title: "Socket IO",
            link: "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
        },
        sass: {
            title: "SASS",
            link: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
        },
        tailwindCSS: {
            title: "Tailwind CSS",
            link: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
        },
        typeScript: {
            title: "TypeScript",
            link: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
        },
        vite: {
            title: "Vite",
            link: "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
        },
        yarn: {
            title: "Yarn",
            link: "https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white",
        },
    };

    const projects: Project[] = [
        {
            title: "Public Complaint Report",
            image: "image/project/public-complaint-reporting-system.png",
            url: "https://github.com/NotHydra/pelaporan-pengaduan-masyarakat",
            subtitle: "Exam Project at",
            organization: {
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
            title: "Finance Recap",
            image: "image/project/finance-recap.png",
            url: "https://github.com/astrantialabs/finance-recap",
            subtitle: "Intern Project at",
            organization: {
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
            image: "image/project/siruang.png",
            url: "https://github.com/NotHydra/siruang",
            subtitle: "Object Oriented Programming Course Project at",
            organization: {
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
            title: "TrashTrack",
            image: "image/project/trash-track.png",
            url: "https://github.com/trashtrack-team/trashtrack",
            subtitle: "Finalist Project for",
            organization: {
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
    ];

    return (
        <section className="project" id="project">
            <Title title="PROJECT" />

            <div className="container scroll-bottom-200">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={16}
                    coverflowEffect={{
                        rotate: 120,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                >
                    {projects.map(
                        (project: Project, index: number): React.ReactNode => (
                            <SwiperSlide className="swiper" key={index}>
                                <div className="content">
                                    <img className="image" src={project.image} alt={`${project.title}, ${project.description}`} onClick={() => window.open(project.url, "_blank")} loading="lazy" />

                                    <div className="data">
                                        <h3 className="title">
                                            <a className="link" href={project.url} target="_blank" rel="noopener noreferrer">
                                                {project.title} <i className="bx bxl-github"></i>
                                            </a>
                                        </h3>

                                        <p className="subtitle">
                                            {project.subtitle}{" "}
                                            <a className="link" href={project.organization.url} target="_blank" rel="noopener noreferrer">
                                                {project.organization.name}
                                            </a>
                                        </p>

                                        <p className="description">{project.description}</p>

                                        <div className="badges">
                                            {project.badges.map(
                                                (badge: Badge, techStackIndex: number): React.ReactNode => (
                                                    <img key={techStackIndex} className="badge" src={badge.link} alt={badge.title} loading="lazy" />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </section>
    );
}
