import logo from "./images/logo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="container footer-container">
                <li className="footer-left">
                    <img src={logo} className="logo" alt="logo" style={{ width: 95 }} />
                    <p>
                        I don't have anything to write. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Repellendus, vero.
                    </p>
                    <div className="sm-links">
                        <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </li>
                <li className="footer-center">
                    <h4 className="footer-heading">Quick Links</h4>
                    <hr className="footer-divider" />
                    <ul className="footer-quick-links">
                        <li><a href="#" className="footer-links">About Us</a></li>
                        <li><a href="#" className="footer-links">More Tools</a></li>
                        <li><a href="#" className="footer-links">Team</a></li>
                    </ul>
                </li>
                <li className="footer-right">
                    <h4 className="footer-heading">Address</h4>
                    <hr className="footer-divider" />
                    <ul className="footer-address">
                        <li><i className="fas fa-map-marker-alt"></i>Tushar ka ghar</li>
                        <li><i className="fas fa-phone"></i>+91 6203284946</li>
                        <li><i className="fas fa-envelope-square"></i>TusharKhandelwal@gmail.com</li>
                    </ul>
                </li>
            </ul>
            <div className="copyright footer-container">
                <p>&copy; 2021 youtool All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;