import { JSX } from "react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import type { Badge } from "@/types/badge";
import type { Project } from "@/types/project";

import { badges } from "@/libraries/constants";

import Title from "../common/title.component";

export default function Project(): JSX.Element {
    const projects: Project[] = [
        {
            title: "Public Complaint Report",
            image: "image/project/public-complaint-report.png",
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
            title: "Tuition Payment Application",
            image: "image/project/tuition-payment-application.png",
            url: "https://github.com/NotHydra/aplikasi-pembayaran-spp",
            subtitle: "Exam Project at",
            organization: {
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
