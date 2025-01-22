import { JSX } from "react";

export default function HeaderNavigationItem({ href, text }: { href: string; text: string }): JSX.Element {
    return (
        <li>
            <a href={href}>{text}</a>
        </li>
    );
}
