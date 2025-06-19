import React, { useState, useEffect } from "react";
import "./Css/AffordableSeoServices.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm from "./FormComponent/ServiceForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const AffordableSeoServices = () => {
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
      const response = await http.post("/add-seoService-enquiry", inputs);

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

    const [seoServiceDetails, setSeoServiceDetails] = useState({
        data: {},
        image_path: ""
    });

    useEffect(() => {
        const fetchData = async () => {
        try {
            const getresponse = await http.get("/get-affordable-seo-service-details");
            setSeoServiceDetails({
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
    <>
      {loading && <Loader />}
      <main>
      <div className="gdfbdfdfgdf554">
        <div className="dfgjhfgd">
          <div className="sdfghdfgdf col-lg-6">
            <h1 className="mt-0 mb-0">{seoServiceDetails.data?.banner_title && (seoServiceDetails.data.banner_title)}</h1>

            <p className="mt-3 mb-5">{seoServiceDetails.data?.banner_description && (seoServiceDetails.data.banner_description)}</p>

            <div className="vbddds">
               <Link to="/contact-us" className="btn125">
                    Contact Us
                </Link>
              <button className="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div className="dbfghsdf col-lg-6">
            {seoServiceDetails.data?.banner_image && (
                <img
                src={`${seoServiceDetails.image_path}/${seoServiceDetails.data.banner_image}`}
                alt=""
                />
            )}
          </div>
        </div>
      </div>

      <div className="fjhfdfgdfg">
        <div className="custom-container">
          <div className="sdfsdfsdf">
            <h2>{seoServiceDetails.data?.second_section_title && (seoServiceDetails.data.second_section_title)}</h2>
            <div
              className="pt-4"
              dangerouslySetInnerHTML={{
                __html: seoServiceDetails.data?.second_section_description && (seoServiceDetails.data.second_section_description),
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

      <div className="fjhfdfgdfg">
        <div className="custom-container">
          <div className="sdfsdfsdf">
            <div
              className="pt-4"
              dangerouslySetInnerHTML={{
                __html: seoServiceDetails.data?.second_section_another_description && (seoServiceDetails.data.second_section_another_description),
              }}
            />
          </div>
        </div>
      </div>

      <div className="fjhjdfdfgdf">
        <div className="container-grid">
          <div className="fndfdf">
            <div className="row">
              <div className="col-lg-4">
                <div className="dfdfdfg">
                  <div className="njhfbg5654">
                    {seoServiceDetails.data?.section_three_image_one && (
                        <img
                        src={`${seoServiceDetails.image_path}/${seoServiceDetails.data.section_three_image_one}`}
                        alt=""
                        />
                    )}
                  </div>
                  <div className="gdfhbgdfgdfg">
                    <h4>{seoServiceDetails.data?.section_three_heading_one && (seoServiceDetails.data.section_three_heading_one)}</h4>
                    <button>Try for new</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="dfdfdfg">
                  <div className="njhfbg5654">
                    {seoServiceDetails.data?.section_three_image_two && (
                        <img
                        src={`${seoServiceDetails.image_path}/${seoServiceDetails.data.section_three_image_two}`}
                        alt=""
                        />
                    )}
                  </div>
                  <div className="gdfhbgdfgdfg">
                    <h4>{seoServiceDetails.data?.section_three_heading_two && (seoServiceDetails.data.section_three_heading_two)}</h4>
                    <button>Try for new</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="dfdfdfg">
                  <div className="njhfbg5654">
                    {seoServiceDetails.data?.section_three_image_three && (
                        <img
                        src={`${seoServiceDetails.image_path}/${seoServiceDetails.data.section_three_image_three}`}
                        alt=""
                        />
                    )}
                  </div>
                  <div className="gdfhbgdfgdfg">
                    <h4>{seoServiceDetails.data?.section_three_heading_three && (seoServiceDetails.data.section_three_heading_three)}</h4>
                    <button>Try for new</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sdmsdjhsds">
        {seoServiceDetails.data?.featured_image && (
            <img
            src={`${seoServiceDetails.image_path}/${seoServiceDetails.data.featured_image}`}
            alt=""
            />
        )}
      </div>
      <LastSectionComponent />
      </main>
    </>
  );
};
