import { useState, useEffect } from "react";
import "./Css/SocialMediaMarketingCompany.css";
import { Link } from "react-router-dom";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import { ToastContainer, toast } from "react-toastify";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const SocialMediaMarketingCompany = () => {
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
        "/add-socialMediaMarketing-enquiry",
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

  const [socialMediaMarketingDetails, setSocialMediaMarketingDetails] =
    useState({
      data: {},
      image_path: "",
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getresponse = await http.get(
          "/get-social-media-marketing-details"
        );
        setSocialMediaMarketingDetails({
          data: getresponse.data.data,
          image_path: getresponse.data.image_path,
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
            <h1 className="mt-0 mb-0">{socialMediaMarketingDetails.data?.banner_title && (socialMediaMarketingDetails.data.banner_title)}</h1>

            <p className="mt-3 mb-5">
              {socialMediaMarketingDetails.data?.banner_description && (socialMediaMarketingDetails.data.banner_description)}
            </p>

            <div className="vbddds">
              <Link to="/contact-us" className="btn125">
                Contact Us
              </Link>
              <button className="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div className="dbfghsdf col-lg-6">
            {socialMediaMarketingDetails.data?.banner_image && (
              <img
                src={`${socialMediaMarketingDetails.image_path}/${socialMediaMarketingDetails.data.banner_image}`}
                alt=""
              />
            )}
          </div>
        </div>

        <div className="fjhfdfgdfg">
          <div className="custom-container">
            <div className="sdfsdfsdf">
              <h2>{socialMediaMarketingDetails.data?.second_section_title && (socialMediaMarketingDetails.data.second_section_title)}</h2>

              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html: socialMediaMarketingDetails.data?.second_section_description && (socialMediaMarketingDetails.data.second_section_description),
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
              <h2 className="mb-4">
                {socialMediaMarketingDetails.data?.third_section_title && (socialMediaMarketingDetails.data.third_section_title)}
              </h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: socialMediaMarketingDetails.data?.third_section_description && (socialMediaMarketingDetails.data.third_section_description),
                }}
              />
            </div>
          </div>
        </div>

        <div className="duiewmjroiweorrr">
          <div className="custom-container">
            <div className="row mb-5">
              <div className="col-lg-8 mb-4">
                <div className="dienwm_iuemrer position-relative">
                  <h2 className="my-4">
                    {socialMediaMarketingDetails.data?.fourth_section_title && (socialMediaMarketingDetails.data.fourth_section_title)}
                  </h2>

                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: socialMediaMarketingDetails.data?.fourth_section_description && (socialMediaMarketingDetails.data.fourth_section_description),
                      }}
                    />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="dlkeomwlkmroewr_inner sticky-top">
                  {socialMediaMarketingDetails.data?.fourth_section_image && (
                    <img
                      src={`${socialMediaMarketingDetails.image_path}/${socialMediaMarketingDetails.data.fourth_section_image}`}
                      className="img-fluid" alt=""
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="dlkeomwlkmroewr_inner sticky-top">
                  {socialMediaMarketingDetails.data?.fifth_section_image && (
                    <img
                      src={`${socialMediaMarketingDetails.image_path}/${socialMediaMarketingDetails.data.fifth_section_image}`}
                      className="img-fluid" alt=""
                    />
                  )}
                </div>
              </div>

              <div className="col-lg-8 mb-4">
                <div className="dienwm_iuemrer uienniuhwerwewe_jdiuewr position-relative">
                  <h2 className="my-4">
                     {socialMediaMarketingDetails.data?.fifth_section_title && (socialMediaMarketingDetails.data.fifth_section_title)}
                  </h2>

                  <div className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: socialMediaMarketingDetails.data?.fifth_section_description && (socialMediaMarketingDetails.data.fifth_section_description),
                      }}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xnjhxffgdf">
          {socialMediaMarketingDetails.data?.featured_image && (
            <img
              src={`${socialMediaMarketingDetails.image_path}/${socialMediaMarketingDetails.data.featured_image}`}
              alt=""
            />
          )}
        </div>

        <LastSectionComponent />
      </main>
    </>
  );
};
