import "./Css/Template45.css";
import { useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template45 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div className="gdfbdfdfgdf554">
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
                  src={`${serviceResponse.image_url}/Templete_45/${serviceResponse.data.banner_image}`}
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

        <div className="ndfyhdf">
          <div className="custom-container">
            <div className="fgdfgfdg">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cfbfjhf" style={{backgroundImage: "url(./images/background(2).png)"}}>
                    <h2>
                      {serviceResponse.data?.third_section_title &&
                        serviceResponse.data.third_section_title}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data?.third_section_description &&
                          serviceResponse.data.third_section_description,
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="dfbghdfd">
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_45/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dfhsdfgsdf" style={{backgroundImage: "url('./images/background(1).png')"}}>
          <div className="custom-container">
            <div className="jffjfdgdfgdfg">
              <h2>
                {serviceResponse.data?.fourth_section_title &&
                  serviceResponse.data.fourth_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fourth_section_description &&
                    serviceResponse.data.fourth_section_description,
                }}
              />
            </div>

            <div className="dfghdfgsdf">
              <div className="row">
                <div className="col-lg-6">
                  <div className="jhdfbdf5522">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="fbdf">
                          {serviceResponse.data?.fourth_section_image_one && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_45/${serviceResponse.data.fourth_section_image_one}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="dfdf55g">
                        <h4>
                          {serviceResponse.data?.fourth_section_title_one &&
                            serviceResponse.data.fourth_section_title_one}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fourth_section_description_one &&
                              serviceResponse.data
                                .fourth_section_description_one,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="jhdfbdf5522">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="fbdf">
                          {serviceResponse.data?.fourth_section_image_two && (
                            <img
                              src={`${serviceResponse.image_url}/Templete_45/${serviceResponse.data.fourth_section_image_two}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="dfdf55g">
                        <h4>
                          {serviceResponse.data?.fourth_section_title_two &&
                            serviceResponse.data.fourth_section_title_two}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fourth_section_description_two &&
                              serviceResponse.data
                                .fourth_section_description_two,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dfhsdfgsdf5555">
          <div className="custom-container">
            <div className="fgdfgfdg">
              <div className="row">
                <div className="col-lg-6">
                  <div className="dfbghdfd">
                    {serviceResponse.data?.fifth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_45/${serviceResponse.data.fifth_section_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="cfbfjhf">
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
            </div>
          </div>
        </div>

        <div className="fjhfdfgdfg">
          <div className="custom-container">
            <div className="sdfsdfsdf">
              <h2>
                {serviceResponse.data?.sixth_section_title &&
                  serviceResponse.data.sixth_section_title}
              </h2>

              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.sixth_section_description &&
                    serviceResponse.data.sixth_section_description,
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
