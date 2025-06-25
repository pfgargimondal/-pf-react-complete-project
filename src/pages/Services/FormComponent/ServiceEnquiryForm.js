import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { validateInputs } from "../../../utils/validation";
import http from "../../../http";
const ServiceEnquiryForm = ({ loading, slug}) => {
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
      <div className="sdnfjhsdfsdfsdf">
        <div className="custom-container">
          <div className="jhgsdfg">
            <div className="row">
              <div className="col-lg-6">
                <div className="dfhbfgd">
                  <img src="./images/form-left.png" alt="" />
                </div>
              </div> 

              <div className="col-lg-6">
                <div className="fhbdfdfgd">
                  <div className="dfbnhdfdf">
                    <h2>Get Free SEO Analysis?</h2>
                    <p>
                      Ne summo dictas pertinacia nam. Illum cetero vocent ei
                      vim,
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="fgjhdfg">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                          value={inputs.name}
                            onChange={(e) =>
                              setInputs({ ...inputs, name: e.target.value })
                            }
                        />
                        <span style={{ color: "red" }}>{errors.name}</span>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="fgjhdfg">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email*"
                          value={inputs.email}
                          onChange={(e) =>
                            setInputs({ ...inputs, email: e.target.value })
                          }
                        />
                        <span style={{ color: "red" }}>{errors.email}</span>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="fgjhdfg">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                          name="phone_number"
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

                    <div className="col-lg-6">
                      <div className="fgjhdfg">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website URL"
                          name="website_url"
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

                    <div className="col-lg-12">
                      <div className="fgjhdfg">
                        <textarea
                          name="message"
                          id=""
                          rows="4"
                          cols="4"
                          className="form-control"
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

                    <div className="dfgbfdf">
                      <button type="button" className="btn125" onClick={submitForm}>Send Message</button>
                    </div>
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
  );
};
export default ServiceEnquiryForm;
