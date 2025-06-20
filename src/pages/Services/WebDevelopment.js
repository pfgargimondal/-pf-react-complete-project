import "./Css/WebDevelopment.css";
import { useState } from 'react';
import { toast} from "react-toastify";
import ServiceForm  from "./FormComponent/ServiceForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from '../../http';
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import 'react-toastify/dist/ReactToastify.css';

export const WebDevelopment = () => {

    const [inputs, setInputs] = useState({
      name: "",
      phone_number: "",
      email: "",
      website_url: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
  
    const submitForm = async (e) => {
      e.preventDefault();
  
      const validationErrors = validateInputs(inputs); // 👈 pass inputs
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      setErrors({}); // Clear errors
      setLoading(true); // show loader
  
      try {
        const response = await http.post("/add-web-development-enquiry", inputs);
  
        if (response.data.success) {
          toast(response.data.message, {
            style: {
              background: "#2ecc71",
              color: "#fff",
            },
          });
  
          setInputs({
            name: "",
            phone_number: "",
            email: "",
            website_url: "",
            message: "",
          });
        }
      } catch (error) {
        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    };


  return (
    <div>
      {loading && <Loader />}
      <main>
        <div
          className="bannerbg"
          style={{
            backgroundImage:
              "url(./images/497a54c0-92ed-4d12-afe0-6fd9ae13350b.png)",
          }}
        >
          <div className="container">
            <div className="jhfdfgdf">
              <div className="row">
                <div className="col-lg-6">
                  <div className="bhjdfdfgdfg">
                    <div className="ngg55 d-flex">
                      <h6>Delight your Customers</h6>
                      <div className="dfngfg"></div>
                    </div>
                    <h2>Web Development Services Company</h2>
                    <p>
                      We are equipped with an updated technical knowledge to
                      serve our customers properly. Our method of application
                      maintains the industry.
                    </p>

                    <div className="btn-group">
                      <button className="fgdfg">View More Details</button>
                      <button className="fgdfg55">Contact Us</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bgbgft">
                    <img src="./images/webdevelopment.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="secondwebd">
          <div className="container">
            <div className="bfhdfgf">
              <div className="row">
                <div className="col-lg-6">
                  <div className="dffgfg">
                    <img src="./images/webdleft.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="fjhdfd">
                    <div className="fgjfdg">
                      <h6>About Us</h6>
                      <h2>
                        We are here to IT Solution with 20 years of{" "}
                        <span>experience</span>
                      </h2>
                      <p>
                        Web designing in a powerful way of just not an only
                        professions, however, in a passion for our Company. We
                        have to a tendency to believe the idea that smart
                        looking of any website is the first impression on
                        visitors. And the smart design of any website is the
                        starting point.
                      </p>
                      <p>
                        We have a special team for website style who has been
                        involved in designing professional websites of all
                        categories.
                      </p>
                      <div className="dfbgf mb-3"></div>
                    </div>
                    <div className="dfbgdfg">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="dgdfg">
                            <p>
                              <i className="fa-brands fa-digital-ocean"></i> Web
                              And Mobile Application
                            </p>
                            <p>
                              <i className="fa-brands fa-digital-ocean"></i> Web
                              And Mobile Application
                            </p>
                            <p>
                              <i className="fa-brands fa-digital-ocean"></i> Web
                              And Mobile Application
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="dgdfg">
                            <p>
                              <i className="fa-brands fa-digital-ocean"></i> Web
                              And Mobile Application
                            </p>
                            <p>
                              <i className="fa-brands fa-digital-ocean"></i> Web
                              And Mobile Application
                            </p>
                            <p>
                              <i className="fa-brands fa-digital-ocean"></i> Web
                              And Mobile Application
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fgjbdfgdfgdfg">
          <div className="container">
            <div className="fhgjfgdfg">
              <h6>Services</h6>
              <h2>
                We are here to IT Solution with 20 years of{" "}
                <span>experience</span>
              </h2>
              <div className="dfbgf2"></div>
            </div>

            <div className="jhfsdfgsdf">
              <div className="row">
                <div className="col-lg-4">
                  <div className="dfhgdfg">
                    <div className="nfgjhf">
                      <img src="./images/grid(1).png" alt="" />
                    </div>
                    <div className="dfghdfgfd">
                      <div className="jkfbgdfg">
                        <img src="./images/customer-loyalty.png" alt="" />
                      </div>
                      <div className="fghjdfg25">
                        <h6>IT Consultancy</h6>
                      </div>
                    </div>
                    <div className="hdfgfd">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis
                        incididunt ut labore dolore magna believe the idea
                        aliqua.
                      </p>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="dfhgdfg">
                    <div className="nfgjhf">
                      <img src="./images/grid(2).png" alt="" />
                    </div>
                    <div className="dfghdfgfd">
                      <div className="jkfbgdfg">
                        <img src="./images/customer-service (5).png" alt="" />
                      </div>
                      <div className="fghjdfg25">
                        <h6>Digital Services</h6>
                      </div>
                    </div>
                    <div className="hdfgfd">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis
                        incididunt ut labore dolore magna believe the idea
                        aliqua.
                      </p>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="dfhgdfg">
                    <div className="nfgjhf">
                      <img src="./images/grid(3).png" alt="" />
                    </div>
                    <div className="dfghdfgfd">
                      <div className="jkfbgdfg">
                        <img src="./images/advisor.png" alt="" />
                      </div>
                      <div className="fghjdfg25">
                        <h6>Advisory Services</h6>
                      </div>
                    </div>
                    <div className="hdfgfd">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipis
                        incididunt ut labore dolore magna believe the idea
                        aliqua.
                      </p>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gdfgdfgdgdfg">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="dfgfg">
                  <img src="./images/company (1).png" alt="" />
                </div>
              </div>

              <div className="col-lg-2">
                <div className="dfgfg">
                  <img src="./images/company (2).png" alt="" />
                </div>
              </div>

              <div className="col-lg-2">
                <div className="dfgfg">
                  <img src="./images/company (3).png" alt="" />
                </div>
              </div>

              <div className="col-lg-2">
                <div className="dfgfg">
                  <img src="./images/uber.png" alt="" />
                </div>
              </div>

              <div className="col-lg-2">
                <div className="dfgfg">
                  <img src="./images/shopify.png" alt="" />
                </div>
              </div>

              <div className="col-lg-2">
                <div className="dfgfg">
                  <img src="./images/company (6).png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fghhbdfgdfg">
          <div className="container">
            <div className="vdfgfg">
              <div className="row">
                <div className="col-lg-6">
                  <div className="jfgdfg">
                    <img src="./images/downleft.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="fhdfdsfdsf">
                    <div className="fgjfdg2">
                      <h6>About Us</h6>
                      <h2>
                        We deal with the aspects of professional
                        <span> IT Services</span>
                      </h2>
                      <p>
                        Web designing in a powerful way of just not an only
                        professions, however, in a passion for our Company. We
                        have to a tendency to believe the idea that smart
                        looking of any website is the first impression on
                        visitors. And the smart design of any website is the
                        starting point.
                      </p>
                      <p>
                        We have a special team for website style who has been
                        involved in designing professional websites of all
                        categories.
                      </p>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="sdfdfgdfgf"
          style={{ backgroundImage: "url(./images/downbanner.png)" }}
        >
          <div className="container">
            <div className="ghsdfg">
              <h2>
                We Provide Outsourced IT Services For Small & Mid-Sized Business
              </h2>
              <p>
                Appropriate for your specific business, making it easy for you
                to have quality IT services. What We Do
              </p>
              <button>More Service</button>
            </div>
          </div>
        </div>

        <div className="dsfghdfsdf">
          <div className="container">
            <div className="fhgjfgdfg">
              <h6>How It Works</h6>
              <h2>
                Check Out Our Work <span>Process</span>
              </h2>
              <div className="dfbgf2"></div>
            </div>
          </div>
        </div>

        <div className="fdghdfgdfgdfg">
          <div className="container">
            <div className="dhgfgfg">
              <div className="row">
                <div className="col-lg-3">
                  <div className="fgjdfgdfg">
                    <img src="./images/tasty (4).png" alt="" />
                  </div>
                  <div className="ghfgf">
                    <h6>1</h6>
                  </div>

                  <div className="ghjgdfg">
                    <h6>Choose a Service</h6>
                    <p>
                      Aute irure dolor reprehenderit velit esse cillum dolore
                      fugiat
                    </p>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="fgjdfgdfg">
                    <img src="./images/tasty (1).png" alt="" />
                  </div>
                  <div className="ghfgf">
                    <h6>2</h6>
                  </div>

                  <div className="ghjgdfg">
                    <h6>Choose a Service</h6>
                    <p>
                      Aute irure dolor reprehenderit velit esse cillum dolore
                      fugiat
                    </p>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="fgjdfgdfg">
                    <img src="./images/tasty (2).png" alt="" />
                  </div>
                  <div className="ghfgf">
                    <h6>3</h6>
                  </div>

                  <div className="ghjgdfg">
                    <h6>Choose a Service</h6>
                    <p>
                      Aute irure dolor reprehenderit velit esse cillum dolore
                      fugiat
                    </p>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="fgjdfgdfg">
                    <img src="./images/tasty (3).png" alt="" />
                  </div>
                  <div className="ghfgf">
                    <h6>4</h6>
                  </div>

                  <div className="ghjgdfg">
                    <h6>Choose a Service</h6>
                    <p>
                      Aute irure dolor reprehenderit velit esse cillum dolore
                      fugiat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServiceForm inputs={inputs} setInputs={setInputs} submitForm={submitForm} errors={errors}/>
        <LastSectionComponent />
      </main>
    </div>
  );
};
