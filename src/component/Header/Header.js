import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import ServiceDropdown  from "./ServiceDropdown";
// import ServicesDropdown from "./ServiceDropdown";

import "./Header.css";

export const Header = ({CategoryDetails}) => {
    const [isActive, setIsActive] = useState(false);
    const [resMenuActive, setResMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleResMenu = () => {        
        setResMenuActive(!resMenuActive);        
    }

    useEffect(() => {
        const html = document.querySelector("html");

        if (resMenuActive) {
            html.classList.add("overflow-hidden");
        } else {
            html.classList.remove("overflow-hidden");
        }

        return () => {
            html.classList.remove("overflow-hidden");
        };
    }, [resMenuActive]);


    return (
        <header className={`header ${isActive ? "headeractive" : ""}`}>
            <div className="container px-0">
                <div className="header-top">
                    <div className="row">
                        <div className="col-lg-8 h-t-contact">
                            <p className="section-info">
                                <span>Phone Number: </span>
                                <a href="tel:033-4071-8121">
                                    {" "}
                                    033-4071-8121{" "}
                                </a>{" "}
                                / <a href="tel:8420202891">
                                    +91 8420202891
                                </a>{" "}
                                &amp;
                                <span> Email: </span>
                                <a href="mailto:admin@passionatefuturist.com">
                                    {" "}
                                    admin@passionatefuturist.com{" "}
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="header-top-right">
                                <div className="header-top-socials">
                                    <div className="h-t-s-1">
                                        <a
                                            href="https://twitter.com/passionatefutu1"
                                            
                                        >
                                            {" "}
                                            <img
                                                src={"./images/twitter1.webp"}
                                                alt="twitter logo"
                                            />{" "}
                                        </a>
                                    </div>

                                    <div className="h-t-s-1">
                                        <a
                                            href="https://www.linkedin.com/company/passionate-futurist-solutions-pvt-ltd/"
                                            
                                        >
                                            {" "}
                                            <img
                                                src={
                                                    "./images/linkedin (2).webp"
                                                }
                                                alt="linkedin logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="h-t-s-1">
                                        <a
                                            href="https://www.facebook.com/passionatefuturist/"
                                            
                                        >
                                            {" "}
                                            <img
                                                src={
                                                    "./images/facebook (4).webp"
                                                }
                                                alt="facebook logo"
                                            />{" "}
                                        </a>
                                    </div>
                                    <div className="h-t-s-1">
                                        <a
                                            href="https://www.youtube.com/channel/UCRA6X9Cu-DHTTaWFkgSEtAw"
                                            
                                        >
                                            <img
                                                src={
                                                    "./images/youtube (1).webp"
                                                }
                                                alt="youtube logo"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img src={"./images/pf logo.webp"}
                                alt="passionate futurist logo"
                            />
                        </Link>
                        
                        <button onClick={handleResMenu}
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample"
                            aria-controls="offcanvasExample"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        {/*responsive start*/}
                        <div
                            className="offcanvas offcanvas-start"
                            tabIndex={-1}
                            id="offcanvasExample"
                            aria-labelledby="offcanvasExampleLabel"
                        >
                            <div className="offcanvas-header">
                                <button
                                    type="button"
                                    className="btn-close text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>

                            <div className="offcanvas-body uguydfgsuf_rs_menu">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink end className="nav-link" aria-current="page" to="/">
                                            <i className="fa fa-home" aria-hidden="true" />{" "}
                                            Home
                                        </NavLink>
                                    </li>
                                    <ServiceDropdown/>
                                    {/* <div className="dropdown">
                                        <button className="btn h-nav-services btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                                            <NavLink to="/services">
                                                <i className="fa fa-handshake-o" aria-hidden="true" />{" "}

                                                Services
                                            </NavLink>
                                        </button>

                                        <ul className="dropdown-menu ifjsff__dpdn" aria-labelledby="dropdownMenuButton">
                                            <li>
                                                <div className="d-flex ishdifhiddd align-items-center">
                                                    <NavLink className="dropdown-item" to="/digital-marketing-services-india">
                                                        <i className="fa fa-heart" aria-hidden="true" />{" "}

                                                        Digital Marketing
                                                    </NavLink>

                                                    <div className="sdihfisdfttt"> » </div>
                                                </div>

                                            </li>
                                            <li>
                                                <div className="d-flex ishdifhiddd align-items-center">
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="/professional-graphic-design-services"
                                                    >
                                                        <i
                                                            className="fa fa-paint-brush"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        Graphic Design{" "}
                                                    </NavLink>
                                                    <div className="sdihfisdfttt">
                                                        »
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex ishdifhiddd align-items-center">
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="/content-writing-services-india"
                                                    >
                                                        <i
                                                            className="fa fa-edit"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        Content Writing
                                                    </NavLink>
                                                    <div className="sdihfisdfttt">
                                                        »
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex ishdifhiddd align-items-center">
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="/web-design-services-kolkata"
                                                    >
                                                        <i
                                                            className="fa fa-laptop"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        Web Design
                                                    </NavLink>
                                                    <div className="sdihfisdfttt">
                                                        »
                                                    </div>
                                                </div>
                                            
                                            </li>
                                            <li>
                                                <div className="d-flex ishdifhiddd align-items-center">
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="/professional-website-development-services"
                                                    >
                                                        <i
                                                            className="fa fa-globe"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        Web Development
                                                    </NavLink>
                                                    <div className="sdihfisdfttt">
                                                        »
                                                    </div>
                                                </div>
                                               
                                            </li>
                                            <li>
                                                <div className="d-flex ishdifhiddd align-items-center">
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="/domain-registration-services"
                                                    >
                                                        <i
                                                            className="fa fa-desktop"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        Website Domain
                                                    </NavLink>
                                                    <div className="sdihfisdfttt">
                                                        »
                                                    </div>
                                                </div>
                                             
                                            </li>
                                            <li>
                                                <div className="d-flex ishdifhiddd align-items-center">
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="/mobile-app-development-services-india"
                                                    >
                                                        <i
                                                            className="fa fa-mobile"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        App Development
                                                    </NavLink>
                                                    <div className="sdihfisdfttt">
                                                        »
                                                    </div>
                                                </div>
                                              
                                            </li>
                                            <li>
                                                <div className="d-flex ishdifhiddd align-items-center">
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to="/online-business-promotion-services"
                                                    >
                                                        <i
                                                            className="fa fa-bandcamp"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        Branding And <br />{" "}
                                                        Online Promotion
                                                    </NavLink>
                                                    <div className="sdihfisdfttt">
                                                        »
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div> */}
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/about-us"
                                        >
                                            <i
                                                className="fa fa-users"
                                                aria-hidden="true"
                                            />{" "}
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/our-portfolio"
                                        >
                                            <i
                                                className="fa fa-briefcase"
                                                aria-hidden="true"
                                            />{" "}
                                            Portfolio
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/business-register"
                                        >
                                            <i
                                                className="fa fa-pencil-square-o"
                                                aria-hidden="true"
                                            />{" "}
                                            Business Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/careers">
                                            <i
                                                className="fa fa-signal"
                                                aria-hidden="true"
                                            />{" "}
                                            Career
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/blogs">
                                            <i
                                                className="fa fa-file-text-o"
                                                aria-hidden="true"
                                            />{" "}
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/contact-us"
                                        >
                                            <i
                                                className="fa-solid fa-phone"
                                                aria-hidden="true"
                                            />{" "}
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*responsive end*/}
                        {/*desktop start*/}
                        <div className={`collapse ${resMenuActive ? "resmenushow" : ""} navbar-collapse inieuirjndsirferer`} id="navbarSupportedContent">
                            <div className="d-flex d-none mb-5 align-items-center justify-content-between">
                                <img src="./images/pf logo.webp" alt="passionate futurist logo" />

                                <i class="fa-solid fa-xmark" onClick={() => setResMenuActive(!resMenuActive)}></i>
                            </div>

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        to="/"
                                    >
                                        <i className="fa fa-home" aria-hidden="true"/>{" "}
                                        Home
                                    </NavLink>
                                </li>
                              <ServiceDropdown CategoryDetails={CategoryDetails}/>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about-us">
                                        <i
                                            className="fa fa-users"
                                            aria-hidden="true"
                                        />{" "}
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/our-portfolio"
                                    >
                                        <i
                                            className="fa fa-briefcase"
                                            aria-hidden="true"
                                        />{" "}
                                        Portfolio
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/business-register"
                                    >
                                        <i
                                            className="fa fa-pencil-square-o"
                                            aria-hidden="true"
                                        />{" "}
                                        Business Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/careers">
                                        <i
                                            className="fa fa-signal"
                                            aria-hidden="true"
                                        />{" "}
                                        Career
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blogs">
                                        <i
                                            className="fa fa-file-text-o"
                                            aria-hidden="true"
                                        />{" "}
                                        Blog
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact-us">
                                        <i
                                            className="fa-solid fa-phone"
                                            aria-hidden="true"
                                        />{" "}
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        {/*desktop end*/}
                    </nav>
                </div>
            </div>
        </header>
    );
};
