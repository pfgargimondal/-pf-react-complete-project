import "./Css/Template19.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template19 =({ serviceResponse, slug }) =>{
    const [loading, setLoading] = useState(false);
  return (
    <div>
        {loading && <Loader />}
      <main>
        <div class="dfgjhfgd">
          <div class="sdfghdfgdf col-lg-6">
            <h1 class="mt-0 mb-0">{serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}</h1>

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
                src={`${serviceResponse.image_url}/Templete_19/${serviceResponse.data.banner_image}`}
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
        <ServiceForm loading={setLoading} slug={slug} />

        <div class="dfbjhfdfgdf">
          <div class="custom-container">
            <div class="vgbfdf">
              <div class="row">
                <div class="col-lg-5">
                  <div class="dgndfgdfgdf">
                    {serviceResponse.data?.third_section_image && (
                    <img
                        src={`${serviceResponse.image_url}/Templete_19/${serviceResponse.data.third_section_image}`}
                        alt=""
                    />
                    )}
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="fbgdfgdfgdf">
                    <h2>{serviceResponse.data?.third_section_title &&
                serviceResponse.data.third_section_title}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                            serviceResponse.data?.third_section_description &&
                            serviceResponse.data.third_section_description,
                        }}
                    />
                    <button>Get started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cffbvbhjfdbvdfvgvd">
          <div class="custom-container">
            <div class="fkuyfdfrdgf">
              <h2>{serviceResponse.data?.fourth_section_title &&
                serviceResponse.data.fourth_section_title}</h2>
              <div
                dangerouslySetInnerHTML={{
                    __html:
                    serviceResponse.data?.fourth_section_description &&
                    serviceResponse.data.fourth_section_description,
                }}
            />
            </div>

            <div class="fvbnjfdvfdgfd">
              <div class="row">
                <div class="col-lg-6">
                  <div class="fhvgfdfd">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="ujhfgfg">
                          {serviceResponse.data?.fourth_section_image_one && (
                            <img
                                src={`${serviceResponse.image_url}/Templete_19/${serviceResponse.data.fourth_section_image_one}`}
                                alt=""
                            />
                            )}
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="fdbvhjfyfdg">
                          <h6>{serviceResponse.data?.fourth_section_title_one &&
                serviceResponse.data.fourth_section_title_one}</h6>
                        <p>{serviceResponse.data?.fourth_section_description_one &&
                serviceResponse.data.fourth_section_description_one}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="fhvgfdfd">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="ujhfgfg">
                          {serviceResponse.data?.fourth_section_image_two && (
                            <img
                                src={`${serviceResponse.image_url}/Templete_19/${serviceResponse.data.fourth_section_image_two}`}
                                alt=""
                            />
                            )}
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="fdbvhjfyfdg">
                          <h6>{serviceResponse.data?.fourth_section_title_two &&
                serviceResponse.data.fourth_section_title_two}</h6>
                          <p>
                            {serviceResponse.data?.fourth_section_description_two &&
                serviceResponse.data.fourth_section_description_two}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="fjhfdfgdfg">
          <div class="custom-container">
            <div class="sdfsdfsdf">
              <h2>{serviceResponse.data?.fifth_section_title &&
                serviceResponse.data.fifth_section_title}</h2>

                <div class="pt-4"
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
  )
}
