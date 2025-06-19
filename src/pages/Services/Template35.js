import "./Css/Template35.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template35 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div class="dfgjhfgd">
          <div class="sdfghdfgdf col-lg-6">
            <h1 class="mt-0 mb-0">
              {serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}
            </h1>

            <p class="mt-3 mb-5">
              {serviceResponse.data?.banner_description &&
                serviceResponse.data.banner_description}
            </p>

            <div class="vbddds">
              <Link to="/contact-us" className="btn125">
                Contact Us
              </Link>
              <button class="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div class="dbfghsdf col-lg-6">
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Templete_35/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}
          </div>
        </div>

        <div class="fjhfdfgdfg">
          <div class="custom-container">
            <div class="sdfsdfsdf">
              <h2>
                {serviceResponse.data?.second_section_title &&
                  serviceResponse.data.second_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.second_section_description &&
                    serviceResponse.data.second_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div class="sdhdvbusdsfs">
          <div class="custom-container">
            <div class="hbdhdcsdsds">
              <div class="row">
                <div class="col-lg-6">
                  <div class="cjdjcdc">
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_35/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="fdhjhj">
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
              </div>
            </div>
          </div>
        </div>

        <div class="sdjvhyuysbdvsd">
          <div class="custom-container">
            <div class="fmnbjkfnvf">
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
            <div class="sdshyudssd">
              <div class="row">
                <div class="col-lg-6">
                  <div
                    class="dhujhbdsf555"
                    style={{ background: "url(./images/d.png)" }}
                  >
                    <div class="gbkjg5855 mt-4">
                      <div class="fvnjfv55">
                        {serviceResponse.data?.fourth_section_sub_image_one && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_35/${serviceResponse.data.fourth_section_sub_image_one}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div class="dfbhvhfdvgvfd">
                        <h4>
                          {serviceResponse.data?.fourth_section_sub_title_one &&
                            serviceResponse.data.fourth_section_sub_title_one}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fourth_section_sub_description_one &&
                              serviceResponse.data
                                .fourth_section_sub_description_one,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div
                    class="dhujhbdsf555"
                    style={{ background: "url(./images/d.png)" }}
                  >
                    <div class="gbkjg5855 mt-4">
                      <div class="fvnjfv55">
                        {serviceResponse.data?.fourth_section_sub_image_two && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_35/${serviceResponse.data.fourth_section_sub_image_two}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div class="dfbhvhfdvgvfd">
                        <h4>
                          {serviceResponse.data?.fourth_section_sub_title_two &&
                            serviceResponse.data.fourth_section_sub_title_two}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fourth_section_sub_description_two &&
                              serviceResponse.data
                                .fourth_section_sub_description_two,
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

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div class="fjhfdfgdfg">
          <div class="custom-container">
            <div class="sdfsdfsdf">
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
