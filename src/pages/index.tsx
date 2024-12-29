import { NextFont } from "next/dist/compiled/@next/font";
import { Rubik } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { JSX } from "react";

import Header from "@/components/header/index.component";
import Home from "@/components/home/index.component";
import About from "@/components/about/index.component";
import Qualification from "@/components/qualification/index.component";
import Project from "@/components/project/index.component";
import Copyright from "@/components/copyright/index.component";

const rubik: NextFont = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Index(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="Rizky Irswanda's Portofolio Website" />
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
