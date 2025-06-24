import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { validateInputs } from "../../../utils/validation";
import http from "../../../http";


export const EnquiryForm = ({loading, serviceCategory}) => {

    const [inputs, setInputs] = useState({
    name: "",
    phone_number: "",
    email: "",
    service_category: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // 🔹 Validation logic
  const validateInputs = (inputs) => {
    const newErrors = {};

    if (!inputs.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(inputs.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!inputs.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
    } else if (!/^\d{10}$/.test(inputs.phone_number)) {
      newErrors.phone_number = "Enter a valid 10-digit phone number";
    }

    if (!inputs.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!inputs.service_category) {
      newErrors.service_category = "Please select a category";
    }

    if (!inputs.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // 🔹 Form submission
  const submitForm = async (e) => {
    e.preventDefault();

    const validationErrors = validateInputs(inputs);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    loading(true); // loader ON

    try {
      const response = await http.post("/add-services-enquiry", inputs);
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
          service_category: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      loading(false); // loader OFF
    }
  };

  return (
    <div>
      <form className="position-relative bg-white" id="cstm-mdal-frm">
        <div className="dojmlkjrer">
          <div className="bnnr-frm-start d-flex align-items-center p-3">
            <img src="./images/pf logo.png" className="me-3" alt="" />
            <h5>PF AI Form</h5>
          </div>
          <div className="bnnr-frm-main p-3">
            <div className="form-group">
              <div className="position-relative mb-3">
                <label className="form-label">
                  <i className="bi me-1 bi-person-circle" /> Full Name
                </label>
                <input type="text" className="form-control" name="name"
                    value={inputs.name}
                    onChange={handleChange}
                />
                <p style={{ color: "red" }}>{errors.name}</p>
              </div>
              <div className="position-relative mb-3">
                <label className="form-label">
                  <i className="bi me-1 bi-envelope" /> Email
                </label>
                <input type="email" className="form-control"  name="email"
                    value={inputs.email} onChange={handleChange}
                />
                <p style={{ color: "red" }}>{errors.email}</p>
              </div>
              <div className="position-relative mb-3">
                <label className="form-label">
                  <i className="bi me-1 bi-phone" /> Phone No.
                </label>
                <input type="text" className="form-control"
                    name="phone_number"
                    value={inputs.phone_number}
                    onChange={handleChange} />
                
                <p style={{ color: "red" }}> 
                    {errors.phone_number}
                </p>
              </div>
              <div className="dfdrserfrstretr tposition-relative mb-3">
                <label className="form-label position-relative mb-3">
                  <i className="bi me-1 bi-backpack" /> Enquiry For
                </label>
                <select name="service_category"
                  className="form-select"
                  aria-label="Default select example"
                  value={inputs.service_category}
                  onChange={handleChange}
                >
                  <option value="">Open this select menu</option>
                  {serviceCategory.map((category, index) => (
                    <option value={category.id}>{category.category_name}</option>
                  ))}
                </select>
                <p style={{ color: "red" }}> 
                    {errors.service_category}
                </p>
              </div>
              <div className="position-relative my-4">
                <label className="form-label">
                  <i className="bi me-1 bi-chat-left-text" /> Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="form-control"
                  value={inputs.message}
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>
                    {errors.message}
                </p>
              </div>
              <div className="duweruihewrewr">
                <button type="button" className="btn btn-custm-bttn py-2" onClick={submitForm}>
                  Submit <i className="fa-regular ms-1 fa-paper-plane" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="bnnr-frm-end" />
        </div>
        </form>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            style={{ zIndex: 9999999999 }}
        />
    </div>
  );
};
