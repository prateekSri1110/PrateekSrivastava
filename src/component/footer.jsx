import emoji from '../assets/emoji-r.png';
import './allStyles.css';

export default function Footer() {
    return (
        <div className="container-fluid p-0 bgcolor" id="contact">
            <footer className="text-center text-lg-start text-white">
                <div className="container-fluid p-4 foot">
                    <div className="row align-items-center">
                        {/* Profile Section */}
                        <div className="col-lg-3">
                            <div className="shadow-1-strong d-flex align-items-center justify-content-center mb-2 mx-auto">
                                <img src={emoji} height="150" alt="Profile Logo" />
                            </div>

                            <p className="text-center fw-bold">Prateek Srivastava</p>

                            <ul className="list-unstyled d-flex flex-row justify-content-center">
                                <li>
                                    <a className="text-white px-2 fs-4" href="https://www.linkedin.com/in/prateek-srivastava-1005/">
                                        <i className="bi bi-linkedin ps-2"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white px-2 fs-4" href="https://github.com/prateekSri1110">
                                        <i className="bi bi-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white px-2 fs-4" href="https://www.instagram.com/prateekxri">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white px-2 fs-4" href="mailto:prateek.sri2003@gmail.com">
                                        <i className="bi bi-envelope-at"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Google Map Section */}
                        <div className="col-lg-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28467.815486668507!2d80.97427434189254!3d26.888354806317746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd549ce377af%3A0xb88f53ecb02c52d8!2sIndira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1742829773032!5m2!1sen!2sin"
                                width="100%" height="210" allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        {/* Contact Section */}
                        <div className="col-lg-3">
                            <h4 className="text-uppercase fw-bold mb-4">Contact</h4>

                            <ul className="list-unstyled">
                                <li>
                                    <p><i className="bi bi-geo-alt pe-2"></i>Indira Nagar, Lucknow, Uttar Pradesh</p>
                                </li>
                                <li>
                                    <p><i className="bi bi-phone pe-2"></i>+91-8542049995</p>
                                </li>
                                <li>
                                    <p><i className="bi bi-envelope pe-2"></i>
                                        <a href="mailto:ramainteriors6789@gmail.com" className="text-white">prateek.sr@gmail.com</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Copyright Section */}
                <div className="text-center p-1 bgcolor2">
                    <span>© prateekxri</span>
                </div>
            </footer>
        </div>
    );
}
