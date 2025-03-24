import '../component/allStyles.css';
import emoji from '../assets/emoji-r.png'

export default function Navigator() {
    return (
        <nav className="bgcolor navbar navbar-expand-md p-0 navbar-fixed-top sticky-top">
            <img className="navbar-brand" src={emoji} width="60" style={{ marginLeft: "30px" }} alt="Logo" />

            <button className="navbar-toggler ms-auto" id="btn" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{ backgroundColor: "rgba(255, 255, 255, 0.49)" }}></span>
            </button>

            <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
                <ul className="navbar-nav float-lg-end ml-auto">
                    <li className="nav-item itm">
                        <a className="nav-link p-4 text-white" href="#about">ABOUT</a>
                    </li>
                    <li className="nav-item itm">
                        <a className="nav-link p-4 text-white" href="#quali">QUALIFICATIONS</a>
                    </li>
                    <li className="nav-item itm">
                        <a className="nav-link p-4 text-white" href="#skill">SKILLS</a>
                    </li>
                    <li className="nav-item itm">
                        <a className="nav-link p-4 text-white" href="#project">PROJECTS</a>
                    </li>
                    <li className="nav-item itm">
                        <a className="nav-link p-4 text-white" href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
