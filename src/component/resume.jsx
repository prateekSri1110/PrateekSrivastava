import Prateek_Srivastava from "../assets/Prateek Srivastava.pdf";

export default function PDF() {
    return (
        <div>
            <button className="btn btn-primary">
                <a className="text-white text-decoration-none" href={Prateek_Srivastava} download="Prateek_Srivastava.pdf">
                    Download Resume
                </a>
            </button>
        </div>
    );
};