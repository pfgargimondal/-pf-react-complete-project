import React, { useState, useEffect } from "react";
import "./Css/KeywordResearchServices.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm from "./FormComponent/ServiceForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const KeywordResearchServices = () => {

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
          const response = await http.post("/add-keyword-research-enquiry", inputs);
    
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
    
        const [keywordResearchDetails, setKeywordResearchDetails] = useState({
            data: {},
            image_path: ""
        });
    
        useEffect(() => {
            const fetchData = async () => {
            try {
                const getresponse = await http.get("/get-keyword-research-service-details");
                setKeywordResearchDetails({
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
        <div className="gdfbdfdfgdf554">
          <div className="dfgjhfgd" style={{
            backgroundImage:
                "url(./images/afros.png)",
            }}>
            <div className="sdfghdfgdf col-lg-6">
              <h1 className="mt-0 mb-0">{keywordResearchDetails.data?.banner_title && (keywordResearchDetails.data.banner_title)}</h1>

              <p className="mt-3 mb-5">
                {keywordResearchDetails.data?.banner_description && (keywordResearchDetails.data.banner_description)}
              </p>

              <div className="vbddds">
                <Link to="/contact-us" className="btn125">
                  Contact Us
                </Link>
                <button className="btn126">Get In Touch With Us</button>
              </div>
            </div>

            <div className="dbfghsdf col-lg-6">
              {keywordResearchDetails.data?.banner_image && (
                <img
                  src={`${keywordResearchDetails.image_path}/${keywordResearchDetails.data.banner_image}`}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <div className="fjhfdfgdfg">
          <div className="custom-container">
            <div className="sdfsdfsdf">
              <h2>
                {keywordResearchDetails.data?.second_section_title && (keywordResearchDetails.data.second_section_title)}
              </h2>

              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html: keywordResearchDetails.data?.second_section_description && (keywordResearchDetails.data.second_section_description),
                }}
              />
            </div>
          </div>
        </div>

        <ServiceForm
          inputs={inputs}
          setInputs={setInputs}
          submitForm={submitForm}
          errors={errors}
        />

        <div className="fjhfdfgdfg pb-5">
          <div className="custom-container pb-5">
            <div className="sdfsdfsdf">
              <h2>
                {keywordResearchDetails.data?.third_section_title && (keywordResearchDetails.data.third_section_title)}
              </h2>

              <div className="pt-4"
                dangerouslySetInnerHTML={{
                  __html: keywordResearchDetails.data?.third_section_description && (keywordResearchDetails.data.third_section_description),
                }}
              />
            </div>
          </div>
        </div>

        <div className="lkfsdmfuisdnfsdf position-relative mb-4 mt-5">
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-7 mb-4">
                <div className="doksjoijfrerr_right">
                  <h2 className="mb-4">
                    {keywordResearchDetails.data?.fourth_section_title && (keywordResearchDetails.data.fourth_section_title)}
                  </h2>

                  <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: keywordResearchDetails.data?.fourth_section_description && (keywordResearchDetails.data.fourth_section_description),
                      }}
                  />
                </div>
              </div>

              <div className="col-lg-5 mb-4">
                <div className="doksjoijfrerr_left">
                  {keywordResearchDetails.data?.fourth_section_image && (
                    <img
                      src={`${keywordResearchDetails.image_path}/${keywordResearchDetails.data.fourth_section_image}`}
                      className="img-fluid" alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ndkasedfnsdifsdff position-relative mb-4 mt-5 pt-5">
          <div className="custom-container pt-5">
            <div className="row">
              <div className="col-lg-5 mb-4">
                <div className="doksjoijfrerr_right">
                  {keywordResearchDetails.data?.fifth_section_image && (
                    <img
                      src={`${keywordResearchDetails.image_path}/${keywordResearchDetails.data.fifth_section_image}`}
                      className="img-fluid" alt=""
                    />
                  )}
                </div>
              </div>

              <div className="col-lg-7 mb-4">
                <div className="doksjoijfrerr_left">
                  <h2 className="mb-4">{keywordResearchDetails.data?.fifth_section_title && (keywordResearchDetails.data.fifth_section_title)}</h2>

                    <div className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: keywordResearchDetails.data?.fifth_section_description && (keywordResearchDetails.data.fifth_section_description),
                      }}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sdmsdjhsds">
          {keywordResearchDetails.data?.featured_image && (
            <img
              src={`${keywordResearchDetails.image_path}/${keywordResearchDetails.data.featured_image}`}
              alt=""
            />
          )}
        </div>

        <LastSectionComponent />
      </main>
    </div>
  );
};
