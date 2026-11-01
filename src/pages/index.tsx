import Head from "next/head";
import Script from "next/script";
import { JSX } from "react";

import Header from "@/components/header/index.component";
import Home from "@/components/home/index.component";
import About from "@/components/about/index.component";
import Qualification from "@/components/qualification/index.component";
import Project from "@/components/project/index.component";
import Copyright from "@/components/copyright/index.component";

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://irswanda.com/#person",
            name: "Rizky Irswanda",
            url: "https://irswanda.com",
            image: "https://irswanda.com/image/profile.webp",
            jobTitle: "Software and Internet of Things Engineer",
            description: "Software and Internet of Things engineer working on full-stack applications, API servers, relational databases, and AIoT systems.",
            alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Institut Teknologi Kalimantan",
            },
            sameAs: [
                "https://github.com/NotHydra",
                "https://www.linkedin.com/in/rizky-irswanda",
                "https://www.instagram.com/rz_irswanda",
            ],
            knowsAbout: [
                "Full-Stack Web Development",
                "Next.js",
                "TypeScript",
                "Internet of Things",
                "Embedded Systems",
                "REST APIs",
                "FastAPI",
                "Node.js",
                "Database Engineering",
                "AIoT",
            ],
        },
        {
            "@type": "ProfilePage",
            "@id": "https://irswanda.com/#webpage",
            url: "https://irswanda.com",
            name: "Rizky Irswanda | Portfolio",
            isPartOf: {
                "@type": "WebSite",
                "@id": "https://irswanda.com/#website",
                url: "https://irswanda.com",
                name: "Rizky Irswanda Portfolio",
                description: "Personal portfolio website of Rizky Irswanda showcasing software engineering and IoT projects.",
            },
            about: {
                "@id": "https://irswanda.com/#person",
            },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://irswanda.com/image/profile.webp",
            },
        },
    ],
};

export default function Index(): JSX.Element {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Rizky Irswanda's portfolio website. Software and Internet of Things engineer working on full-stack applications, API servers, relational databases, and AIoT systems."
                />
                <meta
                    name="keywords"
                    content="Rizky Irswanda, Software Engineer, IoT Engineer, Full-Stack Developer, AIoT, Computer Science, ITK"
                />
                <meta name="author" content="Rizky Irswanda" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#1f242d" />

                <link rel="canonical" href="https://irswanda.com" />

                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content="https://irswanda.com" />
                <meta property="og:site_name" content="Rizky Irswanda | Portfolio" />
                <meta property="og:title" content="Rizky Irswanda | Software & IoT Engineer" />
                <meta
                    property="og:description"
                    content="Software and Internet of Things engineer working on full-stack applications, API servers, relational databases, and AIoT systems."
                />
                <meta property="og:image" content="https://irswanda.com/image/profile.webp" />
                <meta property="og:image:alt" content="Rizky Irswanda Profile" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Rizky Irswanda | Software & IoT Engineer" />
                <meta
                    name="twitter:description"
                    content="Software and Internet of Things engineer working on full-stack applications, API servers, relational databases, and AIoT systems."
                />
                <meta name="twitter:image" content="https://irswanda.com/image/profile.webp" />

                <link rel="shortcut icon" href="image/icon.png" type="image/x-icon" />
                <title>Rizky Irswanda | Portfolio</title>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </Head>

            <Header />

            <Home />

            <About />

            <Qualification />

            <Project />

            <Copyright />

            <script src="https://unpkg.com/scrollreveal" referrerPolicy="no-referrer" />
            <Script src="static/script.js" />
        </>
    );
}
