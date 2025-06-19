import { useState, useEffect } from "react";
import "./Css/CreativeDigitalMarketing.css";
import { Link } from "react-router-dom";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import { ToastContainer, toast } from "react-toastify";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const CreativeDigitalMarketing = () => {

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
      const response = await http.post(
        "/add-creativeDigitalMarketing-enquiry",
        inputs
      );

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

  const [creativeDigitalMarketingDetails, setCreativeDigitalMarketingDetails] = useState({
      data: {},
      image_path: ""
    });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const getresponse = await http.get("/get-creative-digital-marketing-details");
          setCreativeDigitalMarketingDetails({
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
        <div className="dfgjhfgd">
          <div className="sdfghdfgdf col-lg-6">
            <h1 className="mt-0 mb-0">{creativeDigitalMarketingDetails.data?.banner_title && (creativeDigitalMarketingDetails.data.banner_title)}</h1>

            <p className="mt-3 mb-5">{creativeDigitalMarketingDetails.data?.banner_description && (creativeDigitalMarketingDetails.data.banner_description)}</p>

            <div className="vbddds">
              <Link to="/contact-us" className="btn125">
                Contact Us
              </Link>
              <button className="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div className="dbfghsdf col-lg-6">
            {creativeDigitalMarketingDetails.data?.banner_image && (
            <img
              src={`${creativeDigitalMarketingDetails.image_path}/${creativeDigitalMarketingDetails.data.banner_image}`}
              alt=""
            />
          )}
          </div>
        </div>

        <div className="fjhfdfgdfg">
          <div className="custom-container">
            <div className="sdfsdfsdf">
              <h2>{creativeDigitalMarketingDetails.data?.second_section_title && (creativeDigitalMarketingDetails.data.second_section_title)}</h2>

              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html: creativeDigitalMarketingDetails.data?.second_section_description && (creativeDigitalMarketingDetails.data.second_section_description),
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

        <div className="dfbghdfgdfgdf sfmlkdfdff">
          <div className="custom-container">
            <div className="mgjhbdfg">
              <h2 className="mb-4">{creativeDigitalMarketingDetails.data?.third_section_title && (creativeDigitalMarketingDetails.data.third_section_title)}</h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html: creativeDigitalMarketingDetails.data?.third_section_description && (creativeDigitalMarketingDetails.data.third_section_description),
                }}
              />
            </div>
          </div>
        </div>

        <div className="doieflmeoiwjrowe pt-5">
          <div className="container-fluid px-5">
            <div className="idewhrwer_inner_wrapper mt-5">
              <div className="col-lg-4">
                <div className="asedifoje_inner p-5">
                  {creativeDigitalMarketingDetails.data?.fourth_section_image && (
                    <img
                      src={`${creativeDigitalMarketingDetails.image_path}/${creativeDigitalMarketingDetails.data.fourth_section_image}`}
                      className="img-fluid" alt=""
                    />
                  )}
                </div>
              </div>

              <div className="offset-lg-3 col-lg-9">
                <div className="odijweirwerr_right bg-white">
                  <h2 className="mb-4">
                    {creativeDigitalMarketingDetails.data?.fourth_section_title && (creativeDigitalMarketingDetails.data.fourth_section_title)}
                  </h2>

                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: creativeDigitalMarketingDetails.data?.fourth_section_description && (creativeDigitalMarketingDetails.data.fourth_section_description),
                      }}
                    />
                </div>
              </div>
            </div>

            <div className="idewhrwer_inner_wrapper bg-white cdfbikerfsdfsfeeqwe mt-5">
              <div className="col-lg-9">
                <div className="odijweirwerr_right bg-white">
                  <h2 className="mb-4">
                     {creativeDigitalMarketingDetails.data?.fifth_section_title && (creativeDigitalMarketingDetails.data.fifth_section_title)}
                  
                  </h2>

                  <div className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: creativeDigitalMarketingDetails.data?.fifth_section_description && (creativeDigitalMarketingDetails.data.fifth_section_description),
                      }}
                    />
                </div>
              </div>

              <div className="offset-lg-8 col-lg-4">
                <div className="asedifoje_inner p-5">
                  {creativeDigitalMarketingDetails.data?.fifth_section_image && (
                    <img
                      src={`${creativeDigitalMarketingDetails.image_path}/${creativeDigitalMarketingDetails.data.fifth_section_image}`}
                      className="img-fluid" alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xnjhxffgdf">
          {creativeDigitalMarketingDetails.data?.featured_image && (
            <img
              src={`${creativeDigitalMarketingDetails.image_path}/${creativeDigitalMarketingDetails.data.featured_image}`}
              alt=""
            />
          )}
        </div>

        <LastSectionComponent />
      </main>
    </>
  );
};
