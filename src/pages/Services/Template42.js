import "./Css/Template42.css";
import { useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template42 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div className="dfgjhfgd">
          <div className="sdfghdfgdf col-lg-6">
            <h1 className="mt-0 mb-0">
              {serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}
            </h1>

            <p className="mt-3 mb-5">
              {serviceResponse.data?.banner_description &&
                serviceResponse.data.banner_description}
            </p>

            <div className="vbddds">
              <Link to="/contact-us" className="btn125">
                Contact Us
              </Link>
              <button className="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div className="dbfghsdf col-lg-6">
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}
          </div>
        </div>

        <div className="fjhfdfgdfg">
          <div className="custom-container">
            <div className="sdfsdfsdf">
              <h2>
                {serviceResponse.data?.second_section_title &&
                  serviceResponse.data.second_section_title}
              </h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.second_section_description &&
                    serviceResponse.data.second_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div className="dfbjhfdfgdf">
          <div className="custom-container10">
            <div className="vgbfdf">
              <div className="row">
                <div className="col-lg-7">
                  <div className="fbgdfgdfgdf">
                    <h2>
                      {serviceResponse.data?.third_section_title &&
                        serviceResponse.data.third_section_title}
                    </h2>
                    <div
                      className="pt-4"
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data?.third_section_description &&
                          serviceResponse.data.third_section_description,
                      }}
                    />
                    <button>Get started</button>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="dgndfgdfgdf">
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="fgjbdfgdfgdfg position-relative py-0 my-5"
          style={{
            backgroundImage: "url('../images/holographic-foil-background-iridescent-holographic-foil-hologram-texture-pastel-neon-rainbow_961004-137.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="coidhswine_overlay py-5">
            <div className="custom-container py-5">
              <div className="row">
                <div className="col-lg-6">
                  <div className="duiewir_inner v_dfgddasf mb-4 p-4">
                    {serviceResponse.data?.fourth_section_image_one && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.fourth_section_image_one}`}
                        alt=""
                        className="img-fluid mb-3"
                      />
                    )}

                    <h4>
                      {serviceResponse.data?.fourth_section_title_one &&
                        serviceResponse.data.fourth_section_title_one}
                    </h4>

                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data
                            ?.fourth_section_description_one &&
                          serviceResponse.data.fourth_section_description_one,
                      }}
                    />
                  </div>

                  <div className="duiewir_inner v_dfgddasf mb-4 p-4">
                    <h4>
                      {serviceResponse.data?.fourth_section_title_two &&
                        serviceResponse.data.fourth_section_title_two}
                    </h4>

                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data
                            ?.fourth_section_description_two &&
                          serviceResponse.data.fourth_section_description_two,
                      }}
                    />
                    {serviceResponse.data?.fourth_section_image_two && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.fourth_section_image_two}`}
                        alt=""
                        className="img-fluid mb-3"
                      />
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="pt-5">
                    <div className="duiewir_inner v_dfgddasf mb-4 p-4">
                      {serviceResponse.data?.fourth_section_image_three && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.fourth_section_image_three}`}
                          alt=""
                          className="img-fluid mb-3"
                        />
                      )}
                      <h4>
                        {serviceResponse.data?.fourth_section_title_three &&
                          serviceResponse.data.fourth_section_title_three}
                      </h4>

                      <div
                        className="mb-0"
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data
                              ?.fourth_section_description_three &&
                            serviceResponse.data
                              .fourth_section_description_three,
                        }}
                      />
                    </div>

                    <div className="duiewir_inner v_dfgddasf mb-4 p-4">
                      <h4>
                        {serviceResponse.data?.fourth_section_title_four &&
                          serviceResponse.data.fourth_section_title_four}
                      </h4>

                      <div
                        className="mb-0"
                        dangerouslySetInnerHTML={{
                          __html:
                            serviceResponse.data?.fourth_section_title_four &&
                            serviceResponse.data.fourth_section_title_four,
                        }}
                      />
                      {serviceResponse.data?.fourth_section_image_four && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_42/${serviceResponse.data.fourth_section_image_four}`}
                          alt=""
                          className="img-fluid mb-3"
                        />
                      )}
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
              <h2>
                {serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fifth_section_description &&
                    serviceResponse.data.fifth_section_description,
                }}
              />
            </div>
          </div>
        </div>
        <LastSectionComponent />
      </main>
    </div>
  );
};
