import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "./Css/DigitalMarketing.css";
import "react-toastify/dist/ReactToastify.css"; 

export const DigitalMarketing = () => {
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
      const response = await http.post("/add-digital-enquiry", inputs);

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

  const [digitalMarketingDetails, setDigitalMarketingDetails] = useState({
    data: {},
    image_path: "" 
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getresponse = await http.get("/get-digital-marketing-details");
        setDigitalMarketingDetails({
          data: getresponse.data.data,
          image_path: getresponse.data.image_path
        });

      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <main>
      <div className="dfgjhfgd">
        <div className="sdfghdfgdf col-lg-6">
          <h1 className="mt-0 mb-0">{digitalMarketingDetails.data?.banner_title && (digitalMarketingDetails.data.banner_title)}</h1>

          <p className="mt-3 mb-5">{digitalMarketingDetails.data?.banner_description && (digitalMarketingDetails.data.banner_description)}</p>

          <div className="vbddds">
            <Link to="/contact-us" className="btn125">
              Contact Us
            </Link>
            <button className="btn126">Get In Touch With Us</button>
          </div>
        </div>

        <div className="dbfghsdf col-lg-6">
          {digitalMarketingDetails.data?.banner_image && (
            <img
              src={`${digitalMarketingDetails.image_path}/${digitalMarketingDetails.data.banner_image}`}
              alt="Banner"
            />
          )}
        </div>
      </div>

      <div className="fjhfdfgdfg">
        <div className="custom-container">
          <div className="sdfsdfsdf">
            <h2>{digitalMarketingDetails.data?.second_section_title && (digitalMarketingDetails.data.second_section_title)}</h2>
            <div
              className="pt-4"
              dangerouslySetInnerHTML={{
                __html: digitalMarketingDetails.data?.second_section_description && (digitalMarketingDetails.data.second_section_description),
              }}
            />
          </div>
        </div>
      </div>

      <ServiceEnquiryForm
        inputs={inputs}
        setInputs={setInputs}
        submitForm={submitForm}
        errors={errors}
      />

      <div className="dfbghdfgdfgdf">
        <div className="custom-container">
          <div className="mgjhbdfg">
            <div
              dangerouslySetInnerHTML={{
                __html: digitalMarketingDetails.data?.second_section_another_description && (digitalMarketingDetails.data.second_section_another_description),
              }}
            />
          </div>
        </div>
      </div>

      <div className="dfbjhfdfgdf">
        <div className="custom-container">
          <div className="vgbfdf">
            <div className="row">
              <div className="col-lg-7">
                <div className="fbgdfgdfgdf">
                  <h2>{digitalMarketingDetails.data?.third_section_title && (digitalMarketingDetails.data.third_section_title)}</h2>
                  <div
                    className="pt-4 mb-0"
                    dangerouslySetInnerHTML={{
                      __html: digitalMarketingDetails.data?.third_section_description && (digitalMarketingDetails.data.third_section_description),
                    }}
                  />
                  <button>Get started</button>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="dgndfgdfgdf">
                  {digitalMarketingDetails.data?.third_section_image && (
                    <img
                      src={`${digitalMarketingDetails.image_path}/${digitalMarketingDetails.data.third_section_image}`}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dfbjhfdfgdf">
        <div className="custom-container">
          <div className="vgbfdf">
            <div className="row">
              <div className="col-lg-5">
                <div className="dgndfgdfgdf">
                  {digitalMarketingDetails.data?.fourth_section_image && (
                    <img
                      src={`${digitalMarketingDetails.image_path}/${digitalMarketingDetails.data.fourth_section_image}`}
                      alt=""
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-7">
                <div className="fbgdfgdfgdf">
                  <h2>{digitalMarketingDetails.data?.fourth_section_title && (digitalMarketingDetails.data.fourth_section_title)}</h2>
                  <div
                    className="pt-4 mb-0"
                    dangerouslySetInnerHTML={{
                      __html: digitalMarketingDetails.data?.fourth_section_description && (digitalMarketingDetails.data.fourth_section_description),
                    }}
                  />
                  <button>Get started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fdnbvgdfgdfgdf">
        <div className="custom-container">
          <div className="cfbvhdfgdf">
            <h2 className="text-center">{digitalMarketingDetails.data?.fifth_section_title && (digitalMarketingDetails.data.fifth_section_title)}</h2>
            <div
              className="text-center pt-4 mb-0"
              dangerouslySetInnerHTML={{
                __html: digitalMarketingDetails.data?.fifth_section_description && (digitalMarketingDetails.data.fifth_section_description),
              }}
            />
          </div>
        </div>
      </div>

      <div className="xnjhxffgdf">
        {digitalMarketingDetails.data?.fifth_section_image && (
          <img
            src={`${digitalMarketingDetails.image_path}/${digitalMarketingDetails.data.fifth_section_image}`}
            alt=""
          />
        )}
      </div>

      <LastSectionComponent />
      </main>
    </div>
  );
};
