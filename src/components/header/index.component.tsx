import { JSX } from "react";

import HeaderNavigation from "./navigation/index.component";

export default function Header(): JSX.Element {
    return (
        <header>
            <a href="#home" className="logo">
                R<span>Z</span>
            </a>

            <HeaderNavigation />
        </header>
    );
}
