import { JSX, useEffect, useState } from "react";
import HeaderNavigationItem from "./item.component";

export default function HeaderNavigation(): JSX.Element {
    const [isNavigationBarOpen, setIsNavigationBarOpen] = useState<boolean>(false);

    const toggleNavigationBar = () => {
        setIsNavigationBarOpen(!isNavigationBarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsNavigationBarOpen(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`bx ${isNavigationBarOpen ? "bx-x" : "bx-menu"}`} id="navigation-bar-icon" onClick={toggleNavigationBar} />

            <ul className={`navigation-bar ${isNavigationBarOpen ? "active" : ""}`}>
                <HeaderNavigationItem href="#home" text="Home" />

                <HeaderNavigationItem href="#about" text="About" />

                <HeaderNavigationItem href="#qualification" text="Qualification" />

                <HeaderNavigationItem href="#project" text="Project" />

                <HeaderNavigationItem href="#contact" text="Contact" />
            </ul>
        </>
    );
}
