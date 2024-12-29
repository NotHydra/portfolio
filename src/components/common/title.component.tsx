import { JSX } from "react";

export default function Title({ title }: { title: string }): JSX.Element {
    return (
        <div className="title">
            <h3 className="scroll-top-200">{title}</h3>
        </div>
    );
}
