import { Html, Head, Main, NextScript } from "next/document";
import { JSX } from "react";

export default function Document(): JSX.Element {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
            </Head>

            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
    );
}
