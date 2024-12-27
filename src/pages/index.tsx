import Head from "next/head";
import Image from "next/image";
import { JSX } from "react";

import styles from "@/styles/Home.module.css";

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <meta name="description" content="Rizky Irswanda's Portofolio Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="shortcut icon" href="image/icon.png" type="image/x-icon" />
                <title>Rizky Irswanda | Portofolio</title>
            </Head>

            <div></div>
        </>
    );
}
