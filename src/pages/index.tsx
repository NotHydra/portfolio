import { NextFont } from "next/dist/compiled/@next/font";
import { Rubik } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { JSX, useEffect, useState } from "react";

const rubik: NextFont = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Head>
                <meta name="description" content="Rizky Irswanda's Portofolio Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />

                <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js" referrerPolicy="no-referrer" />
                <script src="https://unpkg.com/scrollreveal" />

                <link rel="shortcut icon" href="image/icon.png" type="image/x-icon" />
                <title>Rizky Irswanda | Portofolio</title>
            </Head>

            <header>
                <a href="#home" className="logo">
                    R<span>Z</span>
                </a>

                <div className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`} id="menu-icon" onClick={toggleMenu}></div>

                <ul className={`navbar ${isMenuOpen ? "active" : ""}`}>
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#experience">Qualification</a>
                    </li>

                    <li>
                        <a href="#project">Project</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </header>

            <section className="home" id="home">
                <div className="home-text">
                    <h1>
                        Rizky <span>Irswanda</span>
                    </h1>

                    <h6>
                        Experienced in <span className="typing"></span>
                    </h6>

                    <p style={{ textAlign: "justify", fontSize: "1rem", fontWeight: 400 }}>
                        A second-year <span>Computer Science</span> student who likes to spend time on <span>Software</span> & <span>Internet of Things</span>{" "}
                        Engineering
                    </p>

                    <a style={{ marginRight: "1rem" }} href="#about" className="btn">
                        Read More
                    </a>

                    <a target="_blank" href="https://drive.google.com/file/d/1f3naCSF5b0VDV5cROJFspEJlFaARyASP/view?usp=sharing" className="btn">
                        View CV
                    </a>
                </div>

                <div className="home-img">
                    <img src="image/profile.jpg" alt="Profile" />
                </div>
            </section>

            <br />
            <br />
            <br />

            <Script src="static/script.js" />
        </>
    );
}
