import type { AppProps } from "next/app";
import { JSX } from "react";

import "@/styles/css/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}
