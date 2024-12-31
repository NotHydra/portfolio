import { JSX } from "react";

export default function AboutItem({ count, text, delay }: { count: number; text: string; delay: number }): JSX.Element {
    return (
        <div className={`scroll-bottom-${delay}`}>
            <span>{count}</span> {text}
        </div>
    );
}
