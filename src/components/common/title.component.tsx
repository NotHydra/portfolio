import { JSX } from "react";

export default function Title({ title, subtitle }: { title: string, subtitle?: string }): JSX.Element {
    return (
        <div className="title">
            <h3 className="scroll-top-200">
                {title}
                {subtitle !== undefined && <div style={{marginTop: "0.5rem"}}>{subtitle}</div>}
            </h3>
        </div>
    );
}
