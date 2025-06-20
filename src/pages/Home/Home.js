import { useEffect, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FAQ } from "./components/FAQ";

import "./homepagestyle.css";
import "./homepageresponsive.css";
import "swiper/css";
import { useTitle } from "../../hooks/useTitle";

export const Home = () => {
  const elementOneRef = useRef(null);
  const elementTwoRef = useRef(null);
  const elementThreeRef = useRef(null);

  useTitle("Home");

  const isElementInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const handleScroll = useCallback(() => {
    const elements = [
      { ref: elementOneRef.current, className: "animateone" },
      { ref: elementTwoRef.current, className: "animatetwo" },
      { ref: elementThreeRef.current, className: "animatethree" },
    ];

    elements.forEach(({ ref, className }) => {
      if (ref) {
        if (isElementInViewport(ref)) {
          ref.classList.add(className);
        } else {
          ref.classList.remove(className);
        }
      }
    });
  }, []); // safe because refs don't change

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial trigger
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // ✅ add handleScroll here

  const [timeLeft, setTimeLeft] = useState({});
  // const [expired, setExpired] = useState(false);

  const targetDate = "2025-08-28T23:59:59";

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        // setExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // initial call

    return () => clearInterval(interval);
  }, [targetDate]);

  const ourClients = [
    {
      name: "Drew Houston",
      position: "Co-founder and CEO",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Melanis Collins",
      position: "VP of People",
      image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Melanis Collins",
      position: "VP of People",
      image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Melanis Collins",
      position: "VP of People",
      image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Melanis Collins",
      position: "VP of People",
      image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  //

  const faqs = [
    {
      id: 1,
      question: "What services does Passionate Futurist provide?",
      answer:
        "Among the services we offer are workshops, scenario planning, innovation consulting, trend analysis, strategic foresight, and future- readiness assessments.We assist firms in anticipating future issues and provide them with the information and tactics they need to prosper in a constantly changing environment.",
    },
    {
      id: 2,
      question: "How can Passionate Futurist help my business?",
      answer:
        "By identifying emerging trends, technological advancements, and shifting societal issues, our services help your business stay competitive. We collaborate with you to build innovation pipelines, formulate strategies that are ready for the future, and make sure your company can keep up with the quick changes.",
    },
    {
      id: 3,
      question: "How do I get started with your services?",
      answer:
        "It is simple to get started! Just schedule a free consultation or get in touch with us via our website. To assist you in being ready for the future, we will evaluate your needs, talk with you about your objectives, and suggest the best services.",
    },
    {
      id: 4,
      question: "Do you offer workshops or training for teams?",
      answer:
        "Indeed! We provide specialized training sessions and workshops that are intended to provide your teams the abilities and attitude required to successfully innovate and adapt to change. Our active approach helps your company develop a culture that is prepared for the future.",
    },
    {
      id: 5,
      question:
        "What digital marketing services does Passionate Futurist offer?",
      answer:
        "Search engine optimization (SEO), pay-per-click (PPC), social media marketing, content marketing, email marketing, conversion rate optimization, and digital strategy consulting are just a few of the many digital marketing services that Passionate Futurist provides. We assist companies in establishing a powerful web presence and obtaining quantifiable outcomes.",
    },
    {
      id: 6,
      question: "Who can benefit from your services?",
      answer:
        "Our services are ideal for businesses, entrepreneurs, and organizations looking to future-proof their operations, explore emerging trends, or integrate sustainable practices into their models.",
    },
    {
      id: 7,
      question: "Do you offer content writing services?",
      answer:
        "Yes, we create SEO-optimized and engaging content for websites, blogs, and social media to help you boost your website with relevant keywords.",
    },
    {
      id: 8,
      question: "What are the cost of your services?",
      answer:
        "We offer customized pricing model depending on the scope of work and business needs of the specific project.",
    },
    {
      id: 9,
      question: "With which industries do you work with?",
      answer:
        "We offer our services to diverse industries like e-commerce, real estate, healthcare, education, and more.",
    },
    {
      id: 10,
      question: "How can I get a quote for your services?",
      answer:
        "To submit your quote , visit our website directly to avail our services, or you can contact us via our website, email, and call us, and we’ll provide you customized quote based on your demands.",
    },
  ];

  const sliderSettings = {
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
  };

  const slides = [
    "Top-notch Leads",
    "Lead Generation Form"
  ];

  return (
    <div className="home">
      {/*header start*/}

      {/*header end*/}
      {/*banner start*/}
      <div className="home_page_banner position-relative">
        <div className="container">
          <img
            src="./images/Untitled design (4) (4).png"
            className="img-fluid dinkjnewrewr_img"
            alt=""
          />
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <div className="iuhduiewrewr_left">
                <div className="ihndkjewurewr d-flex align-items-center">
                  <img
                    src="./images/message.png"
                    className="me-3"
                    width={35}
                    alt=""
                  />
                  <span>Lead Generation</span>
                </div>
                <h1 class="mt-2 position-relative">
                  Convert Visitors to Customers with
                  <span>
                    <div
                      class="hero__title overflow-hidden"
                      id="animatedHeading"
                    >
                      <Slider {...sliderSettings}>
                        {slides.map((text, index) => (
                          <div className="slick-dupe" key={index}>
                            <span className="hero__title-misc animate">{text}</span>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </span>
                </h1>

                <p class="mt-4 mb-5">
                  Boost the potential of your website traffic with a curated
                  lead-generation form, especially for converting more visitors
                  to customers.
                </p>

                <button
                  className="btn btn-custm-bttn me-3"
                  id="frm-modal-button"
                >
                  <a href="/business-register">Get Started</a>
                </button>

                <button className="btn btn-custm-bttn-2">
                  <a href="/contact-us">Contact Us</a>
                </button>
              </div>
            </div>

            <div className="col-lg-6 mb-3">
              <div className="iuhduiewrewr_right position-relative">
                <div className="duhweurw position-absolute bg-white p-2">
                  <div className="uidhewrewrer frtfrewrtret p-2">
                    <span />
                    <p className="mb-0 mt-2">Live visitores on your site</p>
                  </div>
                </div>
                <div className="duewghrewrewr">
                  <div className="duhweurw position-absolute bg-white p-2">
                    <div className="uidhewrewrer p-2">
                      <span className="d-flex">
                        <span className="count">76</span>%
                      </span>
                      <p className="mb-0 mt-2">
                        Visitors need a human
                        <br />
                        agent
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="iundkerer position-relative overflow-hidden"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <form
                    action=""
                    className="position-relative bg-white"
                    id="cstm-mdal-frm"
                  >
                    <div className="dojmlkjrer">
                      <div className="bnnr-frm-start d-flex align-items-center p-3">
                        <img
                          src="./images/pf logo.png"
                          className="me-3"
                          alt=""
                        />
                        <h5>PF AI Form</h5>
                      </div>
                      <div className="bnnr-frm-main p-3">
                        <div className="form-group">
                          <div className="position-relative mb-3">
                            <input
                              type="text"
                              className="form-control"
                              required=""
                            />
                            <label className="form-label">
                              <i className="bi me-1 bi-person-circle" /> Full
                              Name
                            </label>
                          </div>
                          <div className="position-relative mb-3">
                            <input
                              type="text"
                              className="form-control"
                              required=""
                            />
                            <label className="form-label">
                              <i className="bi me-1 bi-envelope" /> Email
                            </label>
                          </div>
                          <div className="position-relative mb-3">
                            <input
                              type="text"
                              className="form-control"
                              required=""
                            />
                            <label className="form-label">
                              <i className="bi me-1 bi-phone" /> Phone No.
                            </label>
                          </div>
                          <div className="dfdrserfrstretr tposition-relative mb-3">
                            <label className="form-label position-relative mb-3">
                              <i className="bi me-1 bi-backpack" /> Enquiry For
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected="">Open this select menu</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                          <div className="position-relative my-4">
                            <textarea
                              type="text"
                              className="form-control"
                              required=""
                              defaultValue={""}
                            />
                            <label className="form-label">
                              <i className="bi me-1 bi-chat-left-text" />{" "}
                              Message
                            </label>
                          </div>
                          <div className="duweruihewrewr">
                            <button className="btn btn-custm-bttn py-2">
                              Submit{" "}
                              <i className="fa-regular ms-1 fa-paper-plane" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="bnnr-frm-end" />
                    </div>
                  </form>
                  <div className="border-blur" />
                </div>
                <div className="duhweurw uinkhwerwer position-absolute bg-white p-2">
                  <div className="uidhewrewrer p-2">
                    <span className="d-flex">
                      <span className="count">100</span>%
                    </span>
                    <p className="mb-0 mt-2">Project success rate</p>
                  </div>
                </div>
                <div className="uinbkjhwuiere">
                  <div className="duhweurw position-absolute bg-white p-2">
                    <div className="uidhewrewrer p-2">
                      <span>1,000</span>
                      <p className="mb-0 mt-2" id="typetext">
                        avg. increase in campaign leads
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*banner end*/}
      {/*middle start*/}
      <main>
        <div className="home-section-1 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 vfdgdfgdvdftgdg">
                <div className="uihndewrewr_left sticky-top">
                  <div className="idhejwirhewr_circle">
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                  </div>
                  <img
                    src="./images/img-05.png"
                    className="img-fluid okclkdsnfoidsnfjdsiuhf"
                    width="95%"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={1500}
                  />
                  <div className="oodoeworere bg-white p-2">
                    <div className="iuhnihewre p-2">
                      <span className="uibiheknwir" />
                      <p className="mb-0 mt-2">Live visitores on your site</p>
                    </div>
                  </div>
                  <div className="duhweurw position-absolute bg-white p-2">
                    <div className="iuhnihewre p-2">
                      <span className="d-flex">
                        <span className="count">100</span>%
                      </span>
                      <p className="mb-0 mt-2">
                        Visitors need a human <br /> agent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 offset-sm-0 offset-0">
                <div className="uihndewrewr_right">
                  <div className="cseerrtyery d-flex align-items-center">
                    {/* <img src="./images/" width="35" class="me-2" alt=""> */}
                    <span>How We Work?</span>
                  </div>
                  <h2 className="mt-2">
                    Result-Oriented Business Planning Made Easy
                  </h2>
                  <p className="mt-3 mb-5">
                    Navigate your Path to success with our modernized,
                    result-oriented business planning process. Turn your
                    ambitions into actionable strategies with our expert-driven
                    business strategy.
                  </p>
                  <div className="diuewrewre_wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="iuniuewrrer_inner">
                          <div className="nbgerwerwer position-relative">
                            <img
                              src="./images/idea.png"
                              width="70%"
                              className="mb-3"
                              alt=""
                            />
                          </div>
                          <h5>Goal Alignment</h5>
                          <p>
                            Understanding the Client’s Vision to Create a
                            Strategic Plan.
                          </p>
                          <img
                            src="./images/Untitled design (5) (1).png"
                            className="inbewrew_img position-absolute"
                            alt=""
                          />
                          <span
                            ref={elementOneRef}
                            className="iuhndnhuiwer_one"
                          >
                            1
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 offset-lg-6 mb-3">
                        <div className="iuniuewrrer_inner">
                          <div className="nbgerwerwer position-relative">
                            <img
                              src="./images/idea.png"
                              width="70%"
                              className="mb-3"
                              alt=""
                            />
                          </div>
                          <h5>Research &amp; Analysis</h5>
                          <p>
                            Competitor Research and Market Analysis for Accurate
                            Decision Making
                          </p>
                          <img
                            src="./images/Untitled design (5) (1).png"
                            className="inbewrew_img position-absolute"
                            alt=""
                          />
                          <span
                            ref={elementTwoRef}
                            className="iuhndnhuiwer_two"
                          >
                            2
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="iuniuewrrer_inner">
                          <div className="nbgerwerwer position-relative">
                            <img
                              src="./images/idea.png"
                              width="70%"
                              className="mb-3"
                              alt=""
                            />
                          </div>
                          <h5>Strategic Road Mapping</h5>
                          <p>
                            Craft a Roadmap for an actionable plan for
                            sustainable business growth.
                          </p>
                          <img
                            src="./images/Untitled design (5) (1).png"
                            className="inbewrew_img position-absolute"
                            alt=""
                          />
                          <span
                            ref={elementThreeRef}
                            className="iuhndnhuiwer_three"
                          >
                            3
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-12 offset-lg-6 mb-3">
                        <div className="iuniuewrrer_inner">
                          <div className="nbgerwerwer position-relative">
                            <img
                              src="./images/idea.png"
                              width="70%"
                              className="mb-3"
                              alt=""
                            />
                          </div>
                          <h5>Action &amp; Adaption</h5>
                          <p>
                            Executing the Plan with ongoing adjustments and
                            continuous tracking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-none csdrdecsrddadasd mt-5">
                <div className="uihndewrewr_left sticky-top">
                  <div className="idhejwirhewr_circle">
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                    <div className="particles" />
                  </div>
                  <img
                    src="./images/img-05.png"
                    className="img-fluid okclkdsnfoidsnfjdsiuhf"
                    width="95%"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-duration={1500}
                  />
                  <div className="oodoeworere bg-white p-2">
                    <div className="iuhnihewre p-2">
                      <span className="uibiheknwir" />
                      <p className="mb-0 mt-2">Live visitores on your site</p>
                    </div>
                  </div>
                  <div className="duhweurw position-absolute bg-white p-2">
                    <div className="iuhnihewre p-2">
                      <span className="d-flex">
                        <span className="count">100</span>%
                      </span>
                      <p className="mb-0 mt-2">
                        Visitors need a human <br /> agent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dihenwriherer position-relative">
          <div className="ihniuhiewrwer text-center">
            <h1>
              What We <span>Offer</span>
            </h1>
          </div>
          <div className="inuiuihewrewrewr_wrapper position-absolute">
            <div
              className="uihnkjdiwuherwer"
              data-aos="fade-left"
              data-aos-duration={1000}
            />
            <div
              className="unkjhiewre"
              data-aos="fade-left"
              data-aos-duration={1500}
            />
            <div
              className="uinkiwnrwier"
              data-aos="fade-left"
              data-aos-duration={2000}
            />
            <div
              className="opoeworewrre"
              data-aos="fade-left"
              data-aos-duration={3000}
            />
          </div>
          <ul
            className="nav nav-tabs bg-white sticky-top"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <i className="fa-solid me-3 fa-circle-check" />
                <span>Web Designing</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <i className="fa-solid me-3 fa-circle-check" />
                <span>Web Development</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                <i className="fa-solid me-3 fa-circle-check" />
                <span>Digital Marketing</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#charno"
                type="button"
                role="tab"
                aria-controls="charno"
                aria-selected="false"
              >
                <i className="fa-solid me-3 fa-circle-check" />
                <span>Content Marketing</span>
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="iuhjniehwrewr">
                      <div className="iieiwrewr">
                        <img
                          src="./images/pf_logo-removebg-preview (1).png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h1>
                        Web <span>Designing</span>
                      </h1>
                      <p>
                        Does the website fail to convert? Looking for the best
                        web designing company? Website is the online identity
                        and it should be very impressive and attractive. Hire
                        Passionate Futurist - a top-notch web designing company
                        in India.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="iuhjniehwrewrinihewr">
                      <div className="col-lg-8 uiniuhewrhiewr bg-white p-4 rounded-3">
                        <i className="fa-brands fa-2x fa-servicestack" />
                        <h5 className="my-2">Responsive Website Design</h5>
                        <p className="mb-4">
                          We create designs that utilize flexible layouts,
                          images, and cascading style sheet media queries.
                        </p>
                        <div className="iudhewrewr_bar position-relative overflow-hidden">
                          <div className="inkoiweriwer_bar_progress" />
                        </div>
                      </div>
                      <div className="col-lg-8 uihniuheroir bg-white p-4 rounded-3 offset-lg-4">
                        <h4>
                          Hire a trusted web designing company and take your
                          business online
                        </h4>
                        <p>
                          If you are not satisfied with your current website
                          design and looking for a modern web design service,
                          then look no further than Passionate Futurist. Check
                          our Web designing packages now!
                        </p>
                        <button className="btn btn-custm-bttn">
                          <a href="/contact-us">Get In Touch</a>
                        </button>
                        <button className="btn btn-custm-bttn-2">
                          <i className="fa-solid me-1 fa-phone-volume" />{" "}
                          <span>
                            <a href="tel:+918420202891">Call Back</a>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="iuhjniehwrewr">
                      <div className="iieiwrewr">
                        <img
                          src="./images/pf_logo-removebg-preview (1).png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h1>
                        Web <span>Development</span>
                      </h1>
                      <p>
                        Do you want highly interactive functions in your
                        website? Get top-most trending functions and easy
                        handling functions to enhance your website by getting in
                        touch with Passionate Futurist team. Make the decision
                        right now!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="iuhjniehwrewrinihewr">
                      <div className="col-lg-8 uiniuhewrhiewr bg-white p-4 rounded-3">
                        <i className="fa-brands fa-2x fa-servicestack" />
                        <h5 className="my-2">
                          Efficient Website Functionalities
                        </h5>
                        <p className="mb-4">
                          Build ultimate dynamic website to create strong online
                          visibility with the help of our Skilled Developers.
                        </p>
                        <div className="iudhewrewr_bar position-relative overflow-hidden">
                          <div className="inkoiweriwer_bar_progress" />
                        </div>
                      </div>
                      <div className="col-lg-8 uihniuheroir bg-white p-4 rounded-3 offset-lg-4">
                        <h4>
                          Hire The Most Eligible Web Developers to your Brand
                        </h4>
                        <p className="my-4">
                          Our team have years of experience that not only
                          enhances your website performance but also helps to
                          align with the customer expectations. Grab our service
                          to build your dream website!
                        </p>
                        <button className="btn btn-custm-bttn">
                          <a href="/contact-us">Get In Touch</a>
                        </button>
                        <button className="btn btn-custm-bttn-2">
                          <i className="fa-solid me-1 fa-phone-volume" />{" "}
                          <span>
                            <a href="tel:+918420202891">Call Back</a>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="iuhjniehwrewr">
                      <div className="iieiwrewr">
                        <img
                          src="./images/pf_logo-removebg-preview (1).png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h1>
                        Digital <span>Marketing</span>
                      </h1>
                      <p>
                        With our best digital marketing services you will be
                        getting everything which you need for your digital
                        marketing campaigns from strategies to specialists.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="iuhjniehwrewrinihewr">
                      <div className="col-lg-8 uiniuhewrhiewr bg-white p-4 rounded-3">
                        <i className="fa-brands fa-2x fa-servicestack" />
                        <h5 className="my-2">
                          Grow your brand with Passionate Futurist
                        </h5>
                        <p className="mb-4">
                          Boost your brand visibility and increase the targeted
                          traffic to achieve higher sales with our top digital
                          marketing services.
                        </p>
                        <div className="iudhewrewr_bar position-relative overflow-hidden">
                          <div className="inkoiweriwer_bar_progress" />
                        </div>
                      </div>
                      <div className="col-lg-8 uihniuheroir bg-white p-4 rounded-3 offset-lg-4">
                        <h4>
                          Unleash the potential with our Digital Marketing
                          service
                        </h4>
                        <p className="my-4">
                          Partner with our best digital marketing agency to
                          increase your brand awareness reach out to the
                          targeted audience and grow your brand online.
                        </p>
                        <button className="btn btn-custm-bttn">
                          <a href="/contact-us">Get In Touch</a>
                        </button>
                        <button className="btn btn-custm-bttn-2">
                          <i className="fa-solid me-1 fa-phone-volume" />{" "}
                          <span>
                            <a href="tel:+918420202891">Call Back</a>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="charno"
              role="tabpanel"
              aria-labelledby="charno-tab"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="iuhjniehwrewr">
                      <div className="iieiwrewr">
                        <img
                          src="./images/pf_logo-removebg-preview (1).png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <h1>
                        Content <span>Writing</span>
                      </h1>
                      <p>
                        Are you worried about having lucrative content for your
                        website? Our experienced creative writers are here to
                        write exclusive content according to your target
                        audience. Use our experience and creativity to build
                        your empire!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="iuhjniehwrewrinihewr">
                      <div className="col-lg-8 uiniuhewrhiewr bg-white p-4 rounded-3">
                        <i className="fa-brands fa-2x fa-servicestack" />
                        <h5 className="my-2">
                          Target Your Audience with Impactful Content
                        </h5>
                        <p className="mb-4">
                          Capture the minds of your potential clients by making
                          them read your content and turning them into your
                          loyal customers.
                        </p>
                        <div className="iudhewrewr_bar position-relative overflow-hidden">
                          <div className="inkoiweriwer_bar_progress" />
                        </div>
                      </div>
                      <div className="col-lg-8 uihniuheroir bg-white p-4 rounded-3 offset-lg-4">
                        <h4>
                          Unbelievable Growth in Your Business with Top-Notch
                          Content
                        </h4>
                        <p className="my-4">
                          Build ultimate audience for your brand with
                          heart-catching content and gain the trust of the
                          viewers. Spread brand awareness with the help of our
                          creative team in Passionate Futurist.
                        </p>
                        <button className="btn btn-custm-bttn">
                          <a href="/contact-us">Get In Touch</a>
                        </button>
                        <button className="btn btn-custm-bttn-2">
                          <i className="fa-solid me-1 fa-phone-volume" />{" "}
                          <span>
                            <a href="tel:+918420202891">Call Back</a>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="iuhieuiriewhrewr position-relative pb-5">
          <img
            src="./images/Add a subheading (1).png"
            className="inkjnuiewrewr_image position-absolute"
            alt=""
          />
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="ot-heading v3 mb-0">
                  <span>We Are Passionate Futurist</span>
                  <h2 className="main-heading mt-3">
                    Over <span>10+</span> Countries Trust us <br /> for Their
                    Success
                  </h2>
                </div>
              </div>
              <div className="space-10" />
              <div className="col-lg-12">
                <img
                  src="./images/image1-home3.png"
                  className="mkdiermewrer"
                  alt=""
                />
              </div>
            </div>
            <div className="space-55" />
            <div className="row inhiewrewr_wrapper justify-content-center">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="service-box s-box">
                  <span className="big-number">01</span>
                  <div className="content-box d-flex">
                    <i className="fa-solid me-3 fa-2x fa-circle-check" />
                    <div className="ijndwuierew">
                      <h5>Lead Generation</h5>
                      <p>Get Genuine Leads</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="service-box s-box">
                  <span className="big-number">02</span>
                  <div className="content-box d-flex">
                    <i className="fa-solid me-3 fa-2x fa-circle-check" />
                    <div className="ijndwuierew">
                      <h5>Digital Marketing</h5>
                      <p>Enhance Social Presence</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-box s-box">
                  <span className="big-number">03</span>
                  <div className="icon-main color-s3">
                    <span className="flaticon-correct" />
                  </div>
                  <div className="content-box d-flex">
                    <i className="fa-solid me-3 fa-2x fa-circle-check" />
                    <div className="ijndwuierew">
                      <h5>Content Writing</h5>
                      <p>Enrich your Website</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ihuidnweirewrewr py-5 my-5">
          <img
            src="./images/Group-min-744x1024.png"
            className="iudnewherer img-fluid position-absolute"
            alt=""
          />
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-7 mb-3">
                <div className="ihnewhrwer_inner position-relative">
                  <h1 className="mb-5">
                    Book an Appointment with <span>Our Expert</span> to{" "}
                    <span>Boost Your Business!</span>
                  </h1>
                  {/*<p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius culpa aliquam qui sapiente, ipsam dicta.</p>*/}
                  <div className="uihiqwhee p-4 rounded-3 bg-white">
                    <div className="row">
                      <div className="col-lg-5 mb-3">
                        <div className="dihewhrewr">
                          <span className="erijretret">
                            #Hurryup! Book Now!
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="dihewhrewr_oijekmr">
                          <p>
                            Avail our expert Guidance to boost your business in
                            multiple ways. Book your slot and Our team will
                            contact you.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="iunierr row mt-4">
                      <div className="col-lg-5">
                        <div className="iieiwerewr">
                          <span className="erijretret">
                            Remaining Time for Free Consultation
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="iieworiwerewr">
                          <div id="countdown">
                            <ul className="ps-0">
                              <li>
                                days
                                <span id="days">{timeLeft.days}</span>
                              </li>
                              <li>
                                Hours
                                <span id="hours">{timeLeft.hours}</span>
                              </li>
                              <li>
                                Minutes
                                <span id="minutes">{timeLeft.minutes}</span>
                              </li>
                              <li>
                                Seconds
                                <span id="seconds">{timeLeft.seconds}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ihniewrwer d-flex justify-content-between mt-3">
                      <button className="btn col-lg-5 btn-custm-bttn">
                        <a href="/contact-us">Get In Touch</a>
                      </button>
                      <button className="btn col-lg-5 btn-custm-bttn-2">
                        <a href="tel:+918420202891">Call Now</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mb-3">
                <div className="ihnewhgtyrwer_inner sticky-top">
                  <div
                    className="ikniher position-relative"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <img
                      src="./images/banner-img.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ihidihewirewnriewr pb-5">
          <div className="dfvghhgfdvggyre container text-center pb-5">
            <span>Full Service Digital Agency</span>

            <h2 className="mt-2">
              Our <span>Works</span>
            </h2>

            <p>
              Our clients are not just clients, they are out partners. We truly{" "}
              <br /> believe in collaboration to make brands grow.
            </p>

            <button className="btn btn-custm-bttn mt-3">
              View All Projects
            </button>
          </div>
        </div>

        <div className="home-review-section py-5">
          <div className="dfvghhgfdvggyre container text-center pb-5">
            <span>Full Service Digital Agency</span>
            <h2 className="mt-2">
              Our <span>Clients</span>
            </h2>
            <p>
              Our clients are not just clients, they are out partners. We truly{" "}
              <br /> believe in collaboration to make brands grow.
            </p>
          </div>
          <div className="portfolio-slider">
            <div className="sliderdsfrr">
              <div className="swiper people__slide">
                <Swiper
                  spaceBetween={30}
                  slidesPerView="auto"
                  grabCursor={true}
                  centeredSlides={false}
                  loop={false}
                  autoplay={false}
                >
                  {ourClients.map((ourClient, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="people__card">
                        <div className="people__info">
                          <ul className="people__social">
                            <li>
                              <a href="/">
                                <i className="fa-solid fa-globe" />
                              </a>
                            </li>
                          </ul>
                          <h3 className="people__name d-flex align-items-center">
                            <div className="people__image">
                              <img src={ourClient.image} alt={ourClient.name} />
                            </div>
                            {ourClient.name}
                          </h3>
                          <p className="people__position">
                            {ourClient.position}
                          </p>
                          <p className="people__desc">{ourClient.desc}</p>
                        </div>
                        <div className="people__btn">
                          <a href="/">Contact Us</a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <FAQ faqs={faqs} />
      </main>
      {/*middle end*/}
      <div className="over-white-layer position-fixed bg-white" />
    </div>
  );
};
