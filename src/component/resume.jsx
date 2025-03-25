import React from "react";
import resume from "../assets/Prateek_Srivastava.pdf";

export default function PDF() {
    return (
        <div>
            <button className="btn btn-primary">
                <a className="text-white text-decoration-none" href={resume} download="resume.pdf">
                    Download Resume
                </a>
            </button>
        </div>
    );
};