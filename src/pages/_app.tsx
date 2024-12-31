import { Analytics } from "@vercel/analytics/react";
import { NextFont } from "next/dist/compiled/@next/font";
import { Rubik } from "next/font/google";

import type { AppProps } from "next/app";
import { JSX } from "react";

import "@/styles/css/globals.css";

const rubik: NextFont = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <style jsx global>{`
                html,
                body {
                    font-family: ${rubik.style.fontFamily};
                }
            `}</style>

            <Component {...pageProps} />

            <Analytics />
        </>
    );
}
