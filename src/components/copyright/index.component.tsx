import { JSX } from "react";
import moment from "moment";

import CopyrightContactItem from "./contact/item/index.component";

export default function Copyright(): JSX.Element {
    return (
        <div className="copyright" id="contact">
            <h3 className="scroll-bottom-200" style={{ marginBottom: "1rem" }}>
                <b>Contact</b>
            </h3>

            <div className="icon scroll-bottom-200">
                <CopyrightContactItem icon="github" link="https://github.com/NotHydra" />

                <CopyrightContactItem icon="instagram" link="https://www.instagram.com/rz_irswanda" />

                <CopyrightContactItem icon="linkedin" link="https://www.linkedin.com/in/rizky-irswanda-b068b6216" />

                <CopyrightContactItem icon="gmail" link="mailto: rizky.irswanda115@gmail.com" />
            </div>

            <div className="scroll-bottom-200">
                <p>
                    <b>Copyright © {moment().format("YYYY")} Rizky Irswanda</b>
                </p>

                <p>
                    <b>All Rights Reserved</b>
                </p>
            </div>
        </div>
    );
}
