import { useEffect, useState } from "react";
import http from "../../http";
import Loader from "../../component/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contactus = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phone_number: "",
    email: "",
    subject: "",
    contact_message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateInputs = (inputs) => {
    const errors = {};

    if (!inputs.name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(inputs.name)) {
      errors.name = "Name can only contain letters and spaces";
    }

    if (!inputs.phone_number.trim()) {
      errors.phone_number = "Phone number is required";
    } else if (!/^\d{10}$/.test(inputs.phone_number)) {
      errors.phone_number = "Enter a valid 10-digit phone number";
    }

    if (!inputs.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!inputs.subject.trim()) {
      errors.subject = "Subject field is required";
    }
    if (!inputs.contact_message.trim()) {
      errors.contact_message = "Message field is required";
    }

    return errors;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const validationErrors = validateInputs(inputs);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await http.post("/add-contuct-us-enquiry", inputs);

      if (response.data.success) {
        toast.success(response.data.message, {
          style: {
            background: "#2ecc71",
            color: "#fff",
          },
        });

        setInputs({
          name: "",
          phone_number: "",
          email: "",
          subject: "",
          contact_message: "",
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
      <div className="about-us-banner">
        <section className="ban_sec">
          <div className="ban_img">
            <img src="./images/contact-smart-technology.webp" alt="banner" border="0" />

            <div className="ban_text">
              <strong>
                <span>Contact</span>
              </strong>

              <a href="#">Learn More</a>
            </div>
          </div>
        </section>
      </div>

      <main style={{paddingBottom: '0'}}>
        <div className="contact-us-section-1">
          <div className="c-u-s-1-wrap">
            <div className="container">
              <h2>Contact</h2>

              <div className="row">
                <div className="col-lg-8 mb-4">
                  <div className="c-u-s-1-inner">
                    <form>
                      <div className="row">
                        <div className="col-lg-6 mb-4">
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              Name
                            </label>
                            <input type="text" className="form-control" name="name" id="name" aria-describedby="emailHelp" value={inputs.name}
                            onChange={(e) =>
                              setInputs({ ...inputs, name: e.target.value })
                            } />
                            <span style={{ color: "red" }}>{errors.name}</span>
                          </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                          <div className="mb-3">
                            <label htmlFor="emailid" className="form-label">
                              Email
                            </label>

                            <input type="email" name="email" className="form-control" id="emailid" value={inputs.email}
                            onChange={(e) =>
                              setInputs({ ...inputs, email: e.target.value })
                            } />
                            <span style={{ color: "red" }}>{errors.email}</span>
                          </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                          <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                              Phone No
                            </label>
                            <input type="text" className="form-control" name="phone_number" maxLength="10" 
                              oninput="this.value = this.value.replace(/[^0-9.]/g, '');" id="phone" value={inputs.phone_number}
                              onChange={(e) =>
                                setInputs({
                                  ...inputs,
                                  phone_number: e.target.value,
                                })
                              } />
                            <span style={{ color: "red" }}> 
                              {errors.phone_number}
                            </span>
                          </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                          <div className="mb-3">
                            <label htmlFor="subject" className="form-label">
                              Subject
                            </label>

                            <input type="text" name="subject" className="form-control" id="subject" aria-describedby="emailHelp" value={inputs.subject}
                              onChange={(e) =>
                                setInputs({
                                  ...inputs,
                                  subject: e.target.value,
                                })
                              }  />
                              <span style={{ color: "red" }}> 
                                {errors.subject}
                              </span>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-4">
                          <div className="mb-3">
                            <textarea type="text" name="contact_message" id="" cols="30" rows="10" style={{width: '100%'}} placeholder="Type something here..." value={inputs.contact_message}
                              onChange={(e) =>
                                setInputs({
                                  ...inputs,
                                  contact_message: e.target.value,
                                })
                              }></textarea>
                              <span style={{ color: "red" }}> 
                                {errors.contact_message}
                              </span>
                          </div>
                        </div>
                      </div>
                      <button type="submit" onClick={submitForm} className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>

                <div className="col-lg-4 mb-4 pt-4">
                  <div className="c-u-s-1-inner">
                    <div className="col-lg-12 mb-4">
                      <div className="c-u-s-1-i">
                        <h4>Address</h4>

                        <p>
                          Passionate Futurist | Digital Marketing Company in
                          Kolkata, DLF Galleria, Room No: DK1405, Action Area 1,
                          Newtown, Kolkata 700156, West Bengal
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-12 mb-4">
                      <div className="c-u-s-1-i">
                        <h4>Contact Info</h4>

                        <a href="mailto:admin@passionatefuturist.com">
                          admin@passionatefuturist.com
                        </a>

                        <br />

                        <span className="c-u-nu">8420202891</span>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="c-u-s-1-i">
                        <h4>Follow Us</h4>

                        <ul className="c-u-s">
                          <li>
                            <a href="https://www.facebook.com/passionatefuturist/" target="blank">
                              <i className="fa-brands fa-facebook-f"></i>
                              <div className="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/company/passionate-futurist-solutions-pvt-ltd/" target="blank">
                              <i className="fa-brands fa-linkedin"></i>
                              <div className="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-us-section-2">
          <h2>Get The Direction</h2>

          <hr style={{ width: '5%', margin: 'auto', opacity: '1', paddingBottom: '2px', backgroundColor: 'var(--main-blue-color)' }}/>

          <div className="contact-us-section-2-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9273613988603!2d88.45831831446243!3d22.581819938324188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753defab8509%3A0x2f82e81a6184b569!2sPassionate%20Futurist%20%7C%20Digital%20Marketing%20Company%20in%20Kolkata!5e0!3m2!1sen!2sus!4v1680077642675!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border:'0'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            style={{ zIndex: 9999999999 }}
          />
      </main>
    </div>
  );
};
