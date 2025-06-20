import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Careers = () => {
  const bannerSlides = [
    {
      id: 1,
      image: "/images/1686739945-business-registration-banner.jpg",
      title: "We are Best!!",
      desc: "Passionate Futurist Solutions Pvt. Ltd. offers content writer jobs and back office jobs in Kolkata.",
    },
    {
      id: 2,
      image:
        "./images/1686741173-hydrangea-flowers-in-the-garden-picture-id927499422_1024x1024.webp",
      title:
        "Also known as a JD, this document describes the type of work performed.",
      desc: "A job descriptionsummarizes the essential responsibilities, activities, qualifications and skills for a role.",
    },
  ];

  // Slider Settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
  };


  return (
    <div>
      <div className="career-us-banner">
        <div className="bn-wrapp">
          <Slider {...sliderSettings} className="bn__slider">
            {bannerSlides.map((slide) => (
              <div key={slide.id} className="bn__slide bn__template">
                <div class="bn__item">
                  <div
                    className="bn__image v-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  ></div>
                  <div className="bn__content v-center">
                    <div className="bn__title">{slide.title}</div>
                    <div className="bn__desc">{slide.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div class="bn__slider"></div>
          <div class="bn__arrows">
            <div class="bn__prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="16"
                viewBox="0 0 22 16"
              >
                <path
                  fill-rule="nonzero"
                  d="M13.063 13.33c-1.075 1.105.59 2.818 1.666 1.713L20.9 8.698a1.25 1.25 0 0 0 0-1.713c-2.06-2.115-4.119-4.23-6.178-6.347-1.074-1.108-2.739.607-1.664 1.713L18.4 7.843c-1.78 1.827-3.558 3.658-5.338 5.487zm-1.705-3.842c-.853 0-1.544-.711-1.544-1.589 0-.877.69-1.586 1.544-1.586.854 0 1.544.71 1.544 1.586 0 .878-.69 1.59-1.544 1.59zm-4.632 0c-.853 0-1.545-.711-1.545-1.589 0-.877.692-1.586 1.545-1.586s1.543.71 1.543 1.586c0 .878-.69 1.59-1.543 1.59zm-4.941 0C.93 9.488.24 8.777.24 7.9c0-.877.691-1.586 1.545-1.586.852 0 1.543.71 1.543 1.586 0 .878-.69 1.59-1.543 1.59z"
                />
              </svg>
            </div>
            <div class="bn__next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="16"
                viewBox="0 0 22 16"
              >
                <path
                  fill-rule="nonzero"
                  d="M13.063 13.33c-1.075 1.105.59 2.818 1.666 1.713L20.9 8.698a1.25 1.25 0 0 0 0-1.713c-2.06-2.115-4.119-4.23-6.178-6.347-1.074-1.108-2.739.607-1.664 1.713L18.4 7.843c-1.78 1.827-3.558 3.658-5.338 5.487zm-1.705-3.842c-.853 0-1.544-.711-1.544-1.589 0-.877.69-1.586 1.544-1.586.854 0 1.544.71 1.544 1.586 0 .878-.69 1.59-1.544 1.59zm-4.632 0c-.853 0-1.545-.711-1.545-1.589 0-.877.692-1.586 1.545-1.586s1.543.71 1.543 1.586c0 .878-.69 1.59-1.543 1.59zm-4.941 0C.93 9.488.24 8.777.24 7.9c0-.877.691-1.586 1.545-1.586.852 0 1.543.71 1.543 1.586 0 .878-.69 1.59-1.543 1.59z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="career-section-1">
          <div className="container">
            <div className="c-s-1-heading text-center">
              <h2>We are Best!!</h2>

              <hr
                style={{
                  width: "8%",
                  marginTop: "0",
                  opacity: "1",
                  paddingBottom: "2px",
                  backgroundColor: "var(--main-blue-color)",
                }}
              />

                <p>A job description&nbsp;<strong>summarizes the essential responsibilities, activities, qualifications and skills for a role</strong>. Also known as a JD, this document describes the type of work performed.</p>

              <h5></h5>
            </div>

            <div className="c-s-1-inner-form">
              <div className="row">
                <div className="col-lg-7 mb-4">
                  <div className="c-s-1-wrap">
                    <form
                      className="my-form"
                      method="post"
                      action="/career-form-submit"
                      enctype="multipart/form-data"
                      id="basic-form"
                    >
                      <ul className="c-s-1-w-inner">
                        <li>
                          <div className="row">
                            <div className="col-lg-6">
                              <label for="">First Name:</label>
                              <input
                                type="text"
                                placeholder="Name"
                                name="f_name"
                                required
                              />
                            </div>

                            <div className="col-lg-6">
                              <label for="">Last Name:</label>
                              <input
                                type="text"
                                placeholder="Surname"
                                name="l_name"
                                required
                              />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="row">
                            <div className="col-lg-6">
                              <label for="">Contact No.:</label>
                              <input
                                type="text"
                                placeholder="Number"
                                name="number"
                                required
                              />
                            </div>

                            <div className="col-lg-6">
                              <label for="">Email:</label>
                              <input
                                type="text"
                                placeholder="Type Email"
                                name="email"
                                required
                              />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="row">
                            <div className="col-lg-6">
                              <label for="">Highest Education Level:</label>

                              <select name="education">
                                <option selected disabled>
                                  -- Please choose an option --
                                </option>
                                <option>10th</option>
                                <option>12th</option>
                                <option>Deploma</option>
                                <option>Graduation</option>
                                <option>Post Graduation</option>
                                <option>Other</option>
                              </select>
                            </div>

                            <div className="col-lg-6">
                              <label for="">Specification:</label>
                              <input
                                type="text"
                                name="spe"
                                placeholder="Name"
                                required
                              />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="row">
                            <div className="col-lg-6">
                              <label for="">Post Applied For:</label>

                              <select name="paf">
                                <option selected disabled>
                                  -- Please choose an option --
                                </option>
                                <option>Web Design</option>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Web Domain</option>
                                <option>Content Writing</option>
                                <option>Graphic Design</option>
                                <option>App Development</option>
                                <option>Branding And Online Promotion</option>
                              </select>
                            </div>

                            <div className="col-lg-6">
                              <label for="">Date of Birth</label>
                              <input type="date" name="date" />
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="col-lg-12">
                            <label for="">
                              Resume (Upload resume only .doc/.docx/.pdf file)
                            </label>
                            <div className="col-lg-6">
                              <input
                                className="i-t-c"
                                type="file"
                                name="file"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                        </li>

                        <li>
                          <label for="">Address</label>
                          <textarea
                            placeholder="Message"
                            name="desc"
                          ></textarea>
                        </li>

                        <li>
                          <input
                            className="f-l-chkbx"
                            type="checkbox"
                            id="terms"
                          />
                          <label for="terms">
                            I have read and agreed with{" "}
                            <a href="">the terms and conditions.</a>
                          </label>
                        </li>

                        <li>
                          <div className="row">
                            <div className="col-lg-8">
                              <div className="required-msg">
                                REQUIRED FIELDS
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <button
                                className="btn-grid"
                                type="submit"
                                disabled
                              >
                                <span className="back">
                                  <i className="fa-solid fa-2x fa-envelope-open-text"></i>
                                </span>
                                <span className="front">SUBMIT</span>
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="c-s-1-wrap sticky-top">
                    <img src="./images/1686741188-we-hiring-now-banner-job-offer-background-vector-28490507.jpg" alt="" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
