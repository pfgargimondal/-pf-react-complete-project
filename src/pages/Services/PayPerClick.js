import "./Css/PayPerClick.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const PayPerClick = () => {

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
      const response = await http.post("/add-payPerClick-enquiry", inputs);

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

    const [ppcManagmentServiceDetails, setPpcManagmentServiceDetails] = useState({
        data: {},
        image_path: ""
    });

    useEffect(() => {
        const fetchData = async () => {
        try {
            const getresponse = await http.get("/get-ppc-managment-service-details");
            setPpcManagmentServiceDetails({
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
          <h1 className="mt-0 mb-0">{ppcManagmentServiceDetails.data?.banner_title && (ppcManagmentServiceDetails.data.banner_title)}</h1>

          <p className="mt-3 mb-5">{ppcManagmentServiceDetails.data?.banner_description && (ppcManagmentServiceDetails.data.banner_description)}</p>

          <div className="vbddds">
            <Link to="/contact-us" className="btn125">
                Contact Us
            </Link>
            <button className="btn126">Get In Touch With Us</button>
          </div>
        </div>

        <div className="dbfghsdf col-lg-6">
          {ppcManagmentServiceDetails.data?.banner_image && (
                <img
                src={`${ppcManagmentServiceDetails.image_path}/${ppcManagmentServiceDetails.data.banner_image}`}
                alt=""
                />
          )}
        </div>
      </div>

      <div className="fjhfdfgdfg">
        <div className="custom-container">
          <div className="sdfsdfsdf">
            <h2>{ppcManagmentServiceDetails.data?.second_section_title && (ppcManagmentServiceDetails.data.second_section_title)}</h2>
            <div
              className="pt-4"
              dangerouslySetInnerHTML={{
                __html: ppcManagmentServiceDetails.data?.second_section_description && (ppcManagmentServiceDetails.data.second_section_description),
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

      <div className="dfbjhfdfgdf">
        <div className="custom-container10">
          <div className="vgbfdf">
            <div className="row">
              <div className="col-lg-7">
                <div className="fbgdfgdfgdf">
                  <h2>{ppcManagmentServiceDetails.data?.third_section_title && (ppcManagmentServiceDetails.data.third_section_title)}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: ppcManagmentServiceDetails.data?.third_section_description && (ppcManagmentServiceDetails.data.third_section_description),
                    }}
                  />
                  <button>Get started</button>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="dgndfgdfgdf">
                  {ppcManagmentServiceDetails.data?.third_section_image && (
                        <img
                        src={`${ppcManagmentServiceDetails.image_path}/${ppcManagmentServiceDetails.data.third_section_image}`}
                        alt=""
                        />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fjhfdfgdfg">
        <div className="custom-container">
          <div className="sdfsdfsdf">
            <h2>{ppcManagmentServiceDetails.data?.fourth_section_title && (ppcManagmentServiceDetails.data.fourth_section_title)}</h2>
        
            <div className="pt-4"
              dangerouslySetInnerHTML={{
                __html: ppcManagmentServiceDetails.data?.fourth_section_description && (ppcManagmentServiceDetails.data.fourth_section_description),
              }}
            />
          </div>
        </div>
      </div>

      <div className="vhfdhhgfdfdg">
        <div className="custom-container">
          <div className="sdnuidsds">
            <div className="row">
              <div className="col-lg-4">
                <div className="njvfdgfd">
                  <div className="bhyudfdg">
                    {ppcManagmentServiceDetails.data?.fourth_section_image_one && (
                      <img
                      src={`${ppcManagmentServiceDetails.image_path}/${ppcManagmentServiceDetails.data.fourth_section_image_one}`}
                      alt=""
                      />
                    )}
                  </div>
                  <div className="fnhjifdfdg">
                    <h6>{ppcManagmentServiceDetails.data?.fourth_section_title_one && (ppcManagmentServiceDetails.data.fourth_section_title_one)}</h6>
                    <p>{ppcManagmentServiceDetails.data?.fourth_section_description_one && (ppcManagmentServiceDetails.data.fourth_section_description_one)}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="njvfdgfd">
                  <div className="bhyudfdg">
                    {ppcManagmentServiceDetails.data?.fourth_section_image_two && (
                      <img
                      src={`${ppcManagmentServiceDetails.image_path}/${ppcManagmentServiceDetails.data.fourth_section_image_two}`}
                      alt=""
                      />
                    )}
                  </div>
                  <div className="fnhjifdfdg">
                    <h6>{ppcManagmentServiceDetails.data?.fourth_section_title_two && (ppcManagmentServiceDetails.data.fourth_section_title_two)}</h6>
                    <p>{ppcManagmentServiceDetails.data?.fourth_section_description_two && (ppcManagmentServiceDetails.data.fourth_section_description_two)}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="njvfdgfd">
                  <div className="bhyudfdg">
                    {ppcManagmentServiceDetails.data?.fourth_section_image_three && (
                      <img
                      src={`${ppcManagmentServiceDetails.image_path}/${ppcManagmentServiceDetails.data.fourth_section_image_three}`}
                      alt=""
                      />
                    )}
                  </div>
                  <div className="fnhjifdfdg">
                    <h6>{ppcManagmentServiceDetails.data?.fourth_section_title_three && (ppcManagmentServiceDetails.data.fourth_section_title_three)}</h6>
                    <p>{ppcManagmentServiceDetails.data?.fourth_section_description_three && (ppcManagmentServiceDetails.data.fourth_section_description_three)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fjhfdfgdfg">
        <div className="custom-container">
          <div className="sdfsdfsdf">
            <h2>{ppcManagmentServiceDetails.data?.fifth_section_title && (ppcManagmentServiceDetails.data.fifth_section_title)}</h2>
            <div className="pt-4"
              dangerouslySetInnerHTML={{
                __html: ppcManagmentServiceDetails.data?.fifth_section_description && (ppcManagmentServiceDetails.data.fifth_section_description),
              }}
            />
          </div>
        </div>
      </div>

      <div className="dfbjhfdfgdf">
        <div className="custom-container10">
          <div className="vgbfdf">
            <div className="row">
              <div className="col-lg-5">
                <div className="dgndfgdfgdf">
                  {ppcManagmentServiceDetails.data?.section_six_image && (
                        <img
                        src={`${ppcManagmentServiceDetails.image_path}/${ppcManagmentServiceDetails.data.section_six_image}`}
                        alt=""
                        />
                  )}
                </div>
              </div>
              <div className="col-lg-7">
                <div className="fbgdfgdfgdf">
                  <h2>{ppcManagmentServiceDetails.data?.section_six_title && (ppcManagmentServiceDetails.data.section_six_title)}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: ppcManagmentServiceDetails.data?.section_six_description && (ppcManagmentServiceDetails.data.section_six_description),
                    }}
                  />
                  <button>Get started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LastSectionComponent />
    </main>
    </>
  );
};
