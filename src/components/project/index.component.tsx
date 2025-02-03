import type { Badge } from "@/types/badge";
import type { Project } from "@/types/project";

import useProjectStore from "@/stores/project-store";

import { JSX } from "react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Title from "../common/title.component";

export default function Project(): JSX.Element {
    const { projects } = useProjectStore();

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
                                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                                {project.title} <i className="bx bxl-github"></i>
                                            </a>
                                        </h3>

                                        <p className="subtitle">
                                            {project.subtitle}{" "}
                                            <a className="link" href={project.link.url} target="_blank" rel="noopener noreferrer">
                                                {project.link.name}
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
