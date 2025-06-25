import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { validateInputs } from "../../../utils/validation";
import http from "../../../http";

const ServiceForm = ({ loading, slug}) => {
    const [inputs, setInputs] = useState({
      name: "",
      phone_number: "",
      email: "",
      website_url: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const submitForm = async (e) => {
      e.preventDefault();
      const validationErrors = validateInputs(inputs); 
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      setErrors({}); // Clear errors
      loading(true); // show loader
  
      try {
        const response = await http.post("/add-services-enquiry", inputs, {
          params: { slug: slug }
        });
  
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
        }else{
          toast.error(response.data.message, {
              style: {
                background: "#e74c3c", // red for error
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
        loading(false);
      }
    }; 
  return (
    <div>
      <div class="gjhfgfgdfg">
        <div class="container">
          <div class="fdfgdfgdfg">
            <div class="row">
              <div class="col-lg-6">
                <div class="gdfjkghdgsd">
                  <div class="gdfjkghdgsd555">
                    <h5>Contact Info</h5>
                    <p>
                      We're here to help! If you have any questions or would
                      like to discuss how our SEO and digital marketing services
                      can benefit your business,
                    </p>
                    <div class="jhgdf"></div>
                  </div>
                  <div class="drfghdfgfr">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="gdfhgdfg">
                          <i class="fa-solid fa-location-dot"></i>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="ggdfgdfg">
                          <h6>Our Location</h6>
                          <p>
                            Stesalit Tower, E-2-3, GP Block, Sector V,
                            Bidhannagar, Kolkata, West Bengal 700091
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="drfghdfgfr">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="gdfhgdfg">
                          <i class="fa-solid fa-phone"></i>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="ggdfgdfg">
                          <h6>Phone Number</h6>
                          <p>
                            Stesalit Tower, E-2-3, GP Block, Sector V,
                            Bidhannagar, Kolkata, West Bengal 700091
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="drfghdfgfr">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="gdfhgdfg">
                          <i class="fa-solid fa-message"></i>
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="ggdfgdfg">
                          <h6>Email Address</h6>
                          <p>
                            Stesalit Tower, E-2-3, GP Block, Sector V,
                            Bidhannagar, Kolkata, West Bengal 700091
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="dfjhdfbgdfgdfg">
                  <h2>What are you looking for?</h2>
                  <div class="dfgjhdfgd">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="dfjbfg">
                          <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            class="form-control"
                            value={inputs.name}
                            onChange={(e) =>
                              setInputs({ ...inputs, name: e.target.value })
                            }
                          />
                          <span style={{ color: "red" }}>{errors.name}</span>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="dfjbfg">
                          <input
                            type="text"
                            placeholder="Phone"
                            name="phone_number"
                            class="form-control"
                            maxLength={10}
                            value={inputs.phone_number}
                            onChange={(e) =>
                              setInputs({
                                ...inputs,
                                phone_number: e.target.value,
                              })
                            }
                          />
                          <span style={{ color: "red" }}> 
                            {errors.phone_number}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="dfjbfg">
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            class="form-control"
                            value={inputs.email}
                            onChange={(e) =>
                              setInputs({ ...inputs, email: e.target.value })
                            }
                          />
                          <span style={{ color: "red" }}>{errors.email}</span>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="dfjbfg">
                          <input
                            type="text"
                            placeholder="Website URL"
                            name="website_url"
                            class="form-control"
                            value={inputs.website_url}
                            onChange={(e) =>
                              setInputs({
                                ...inputs,
                                website_url: e.target.value,
                              })
                            }
                          />
                          <span style={{ color: "red" }}>
                            {errors.website_url}
                          </span>
                        </div>
                      </div>

                      <div class="col-lg-12">
                        <div class="dfjbfg">
                          <textarea
                            name="message"
                            id=""
                            rows="4"
                            cols="4"
                            class="form-control"
                            placeholder="Message"
                            value={inputs.message}
                            onChange={(e) =>
                              setInputs({ ...inputs, message: e.target.value })
                            }
                          ></textarea>
                          <span style={{ color: "red" }}>
                            {errors.message}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="dfjbfg">
                          <button type="button" onClick={submitForm}>Submit</button>
                        </div>
                      </div>
                    </div>
                    <ToastContainer
                      position="top-right"
                      autoClose={3000}
                      style={{ zIndex: 9999999999 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceForm;
