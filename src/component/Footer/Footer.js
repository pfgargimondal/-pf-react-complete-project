import "./Footer.css";

export const Footer = () => {
  return (
    <section className="footer">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-2">
        <h4>Navigate</h4>
        <ul className="footer-menu">
          <li>
            <a href="/">
              <i className="fa fa-home" /> Home
            </a>
          </li>
          <li>
            <a href="/about-us">
              <i className="fa fa-users" /> About Us
            </a>
          </li>
          <li>
            
            <a href="/services">
              <i className="fa fa-handshake-o" /> Services
            </a>
          </li>
          <li>
            <a href="/our-portfolio">
              <i className="fa fa-briefcase" /> Portfolio
            </a>
          </li>
          <li>
            <a href="/business-register">
              <i className="fa fa-pencil-square-o" /> Business Register
            </a>
          </li>
          <li>
            <a href="/careers">
              <i className="fa fa-signal" /> Career
            </a>
          </li>
          <li>
            <a href="/blogs">
              <i className="fa fa-file-text-o" /> Blog
            </a>
          </li>
          <li>
            <a href="/contact-us">
              <i className="fa fa-envelope-o" /> Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-5">
        <h4>Recent Blogs</h4>
        <ul className="recent-blogs">
          <li>
            <a href="/blog-details/{{$blogs->id}}">
              Is Your Business Getting Noticed? Get a Logo.  <br />{" "}
              <strong>
              October 25, 2017
              </strong>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-5">
        <h4>Our Address</h4>
        <ul className="contact-ul">
          <li>
            <strong>Address:</strong> DLF Galleria, Room No: DK1405, Action Area
            1, Newtown, Kolkata 700156, West Bengal
          </li>
          <li>
            <strong>Phone:</strong> +91 8420202891
          </li>
          <li>
            <strong>Email:</strong> admin@passionatefuturist.com
          </li>
        </ul>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/passionatefuturist/"
            className="s_facebook"
          >
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a
            href="https://twitter.com/passionatefutu1"
            className="s_twitter"
          >
            <i className="fa-brands fa-twitter" />
          </a>
          <a
            href="https://www.linkedin.com/company/passionate-futurist-solutions-pvt-ltd/"
            className="s_linkedin"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCRA6X9Cu-DHTTaWFkgSEtAw"
            className="s_youtube"
          >
            <i className="fa-brands fa-youtube" />
          </a>
        </div>
      </div>
      {/*<div class="col-12 col-md-3">*/}
      {/*    <h4>Reach Us</h4>*/}
      {/*    <div class="newsletter" bis_skin_checked="1">*/}
      {/*            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2190.472098341375!2d88.4592213866153!3d22.582085117589667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753defab8509%3A0x2f82e81a6184b569!2sPassionate%20Futurist%20%7C%20Digital%20Marketing%20Company%20in%20Kolkata!5e0!3m2!1sen!2sin!4v1710921302507!5m2!1sen!2sin" width="100%" height="40%" frameborder="0" style="border:0" allowfullscreen=""></iframe>*/}
      {/*        </div>*/}
      {/*</div>*/}
    </div>
  </div>
  <p className="copyright">
    Copyright © Passionate Futurist All Rights Reserved.
  </p>
</section>

  )
}
