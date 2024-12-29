import { JSX } from "react";

export default function Copyright(): JSX.Element {
    return (
        <div className="copyright" id="contact">
            <h3 style={{ marginBottom: "1rem" }}>
                <b>Contact</b>
            </h3>

            <div className="icon">
                <a target="_blank" href="https://github.com/NotHydra">
                    <i className="bx bxl-github"></i>
                </a>

                <a target="_blank" href="https://www.instagram.com/rz_irswanda/">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/rizky-irswanda-b068b6216/">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="mailto: rizky.irswanda115@gmail.com">
                    <i className="bx bxl-gmail"></i>
                </a>
            </div>

            <p>
                <b>Copyright © 2024 Rizky Irswanda - All Rights Reserved</b>
            </p>
        </div>
    );
}
