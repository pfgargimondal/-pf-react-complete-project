import React, { useState } from "react";
import "./OurPortfolio.css"; // Ensure you have the required CSS

const Panel = ({ image, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleActive = (e) => {
    if (e.propertyName.includes("flex")) {
      setIsActive(!isActive);
    }
  };

  return (
    <div
      className={`panel ${isOpen ? "open" : ""} ${isActive ? "open-active" : ""}`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={toggleOpen}
      onTransitionEnd={toggleActive}
    >
      {text.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};
export const OurPortfolio = () => {
  const panelData = [
    {
      image: "./images/1686748240_surface-coCGW4SsxX4-unsplash.webp",
      text: ["Hey", "Let's", "Go"],
    },
    {
      image: "./images/1686745460_portfolio_banner.webp",
      text: ["Give", "Take", "Receive"],
    },
    {
      image: "./images/1686748252_p-i.webp",
      text: ["Experience", "It", "Today"],
    },
    {
      image: "./images/1686748252_hand_portfolio.webp",
      text: ["Give", "All", "You Can"],
    },
    {
      image: "./images/1686748253_settings.webp",
      text: ["Life", "In", "Motion"],
    },
  ];

  return (
    <div>
      {/* <!--banner start--> */}

      <div className="about-us-banner">
        <section className="ban_sec">
          <div className="ban_img">
            <img
              src="./images/1686745460_portfolio banner.webp"
              alt="Porfolio banner"
              border="0"
            />
            <div className="ban_text pt-5">
              <div className="col-lg-6">
                <h1 style={{ fontSize: '47px' }}>
                  Fulfilling the preconceived fancies through facilities <br />{" "}
                  <span
                    style={{ color: "var(--orange-main-highlighted-color)" }}
                  >
                    <i className="fa-brands fa-servicestack"></i> experience.
                  </span>
                </h1>

                {/* <!--<p className="pt-3">{!! $data->desc !!} </p>--> */}

                <div className="centered">
                  {/* <!--<div className="search"><input type="text" name="search" placeholder="Search something" />-->
                        <!--    <button> <label for="search">search</label>-->
                        <!--        <div className="search-icon"></div>-->
                        <!--    </button>-->
                        <!--</div>--> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!--banner end--> */}

      {/* <!--middle start--> */}

      <main className="pb-0">
        {/* <!--portfolio section 1 start--> */}

        <div className="portfolio-section-1">
          <div className="container py-5">
            <h2 className="text-center">Passionate Futurist</h2>
            <p className="text-center">
              Passionate Futurist, a digital marketing company has set their
              motto to accomplish customer’s dreams through the extraordinary
              services they are providing.
            </p>

            <div className="row pt-4">
              <div className="col-lg-3 mb-4">
                <div className="p-s-1-inner text-center">
                  <h2>
                    <span className="count">200</span>
                  </h2>

                  <p>extraordinary and different service</p>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <div className="p-s-1-inner text-center">
                  <h2>
                    <span className="count">5000</span>
                  </h2>

                  <p>receiver of the services</p>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <div className="p-s-1-inner text-center">
                  <h2>
                    <span className="count">10</span>
                  </h2>

                  <p>Outstanding customer service</p>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <div className="p-s-1-inner text-center">
                  <h2>
                    <span className="count">72</span>
                  </h2>

                  <p>Everything reach at a reasonable rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--portfolio section 1 end--> */}
        {/* <!--portfolio section 2 start--> */}

        <div className="portfolio-section-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 position-relative mb-4">
                <div className="p-s-2-left position-absolute">
                  <div>
                    <img
                      src="./images/1686748252_hand portfolio.webp"
                      alt="Porfolio count"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div>
                  <div className="p-s-2-right">
                    <h2>
                      <i className="fa-solid fa-ranking-star"></i> Some
                      introduction with us
                    </h2>

                    <p>
                      We are the convenient and most affordable digital
                      marketing company in Kolkata. We provide excellent and
                      qualitative services to our customers. Customer
                      satisfaction is our primary motto. We provide services in
                      the fields such as digital marketing, graphic design,
                      content writing, app development, and many others. We are
                      comprised of the most eligible service providers who are
                      experts in their respective fields. We always prioritize
                      our customers' choices and needs. Our professional and
                      trustworthy approach toward customers always allows them
                      to get superior services from us. we help our customers to
                      make tactful decisions innovatively.
                    </p>
                    <a href="/contact-us">
                      <button className="btn btn-warning mt-3">
                        Get In Touch With Us{" "}
                        <i className="fa-solid p-s-2-r-icon fa-arrow-right-long"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--portfolio section 2 end--> */}
        {/* <!--portfolio section 3 start--> */}

        <div className="portfolio-section-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div>
                  <div className="p-s-3-left">
                    <img
                      src="./images/1686748240_surface-coCGW4SsxX4-unsplash.webp"
                      alt="Porfolio info"
                    />

                    <img
                      className="p-s-3-l-image"
                      src="./images/1686748252_p-i.webp"
                      alt="Porfolio info"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div>
                  <div className="p-s-3-right">
                    <h5>
                      About <br />{" "}
                      <span
                        style={{
                          fontSize: "35px",
                          fontWeight: "600",
                          color: "var(--orange-main-highlighted-color)",
                        }}
                      >
                        Passionate Futurist
                      </span>
                    </h5>

                    <p className="pt-3">
                      You can contact us if you are passionate about your
                      future. We help you plan your future goals and also help
                      you in accomplishing them. We always provide standard and
                      qualitative services at a cost-effective range. At
                      present, we provide service to thousands of users. We
                      always care about our customers and always provide
                      priority to qualitative work. We never compromise work on
                      behalf of money, it is beyond our ethics. You will get all
                      the convenience from our expert service providers related
                      to your services. You will get unique and extraordinary
                      services from us.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--portfolio section 3 end--> */}
        {/* <!--portfolio section 4 start--> */}

        <div className="portfolio-section-4">
          <div className="container">
            <div className="p-s-4-inner text-center pb-5">
              <h2>The expertise of passionate futurist</h2>

              <p>
                our expert team has provided a bunch of successful projects to
                the customers previously and there are many more to come in the
                way.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="panels">
            {panelData.map((panel, index) => (
              <Panel key={index} image={panel.image} text={panel.text} />
            ))}
          </div>
        </div>

        {/* <!--portfolio section 4 end--> */}
      </main>
    </div>
  );
};
