import logo from "./images/logo.png"

const Navbar = () => {
    return (
        <header>
            <div className="container header-container">
                <a href="#"><img src={logo} className="logo" alt="logo" style={{ width: 100 }} /></a>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">More Tools</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </nav>
                <a href="#" className="cta"><button className="btn nav-btn">contact</button></a>
            </div>
        </header>
    );
}

export default Navbar;