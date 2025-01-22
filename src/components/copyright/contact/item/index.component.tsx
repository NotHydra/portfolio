import { JSX } from "react";

export default function CopyrightContactItem({ icon, link }: { icon: string; link: string }): JSX.Element {
    return (
        <a target="_blank" href={link}>
            <i className={`bx bxl-${icon}`} />
        </a>
    );
}
