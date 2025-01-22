import { JSX } from "react";

export default function AboutCountItemLink({ count, text, delay, icon, url }: { count: number; text: string; delay: number; icon: string; url: string }): JSX.Element {
    return (
        <div className={`scroll-bottom-${delay}`}>
            <a className="link" href={url} target="_blank" rel="noopener noreferrer">
                <span>{count}</span> {text}
                <i className={`bx bxl-${icon}`} />
            </a>
        </div>
    );
}
