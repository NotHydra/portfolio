import Head from "next/head";
import Script from "next/script";
import { JSX } from "react";

import Header from "@/components/header/index.component";
import Home from "@/components/home/index.component";
import About from "@/components/about/index.component";
import Qualification from "@/components/qualification/index.component";
import Project from "@/components/project/index.component";
import Copyright from "@/components/copyright/index.component";

export default function Index(): JSX.Element {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Rizky Irswanda's Portofolio Website. A multi-purpose Programmer with experience in Software Engineering, Back-End Development & Database Engineering fields. Developed a wide range of projects. Starting from, the implementation of full-stack applications, development of REST API servers, and engineered complex relational databases. Currently taking an interest in Internet of Things Engineering."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="shortcut icon" href="image/icon.png" type="image/x-icon" />
                <title>Rizky Irswanda | Portofolio</title>
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
