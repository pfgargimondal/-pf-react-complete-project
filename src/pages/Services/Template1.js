import styles from "./Css/Template1.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template1 =({serviceResponse, slug}) =>{
    const [loading, setLoading] = useState(false);
  return (
    <div>
        {loading && <Loader />} 
      <main>
        <div className={styles.dfgjhfgd}>
          <div className={`${styles.sdfghdfgdf} col-lg-6`}>
            <h1 className="mt-0 mb-0">{serviceResponse.data?.banner_title && (serviceResponse.data.banner_title)}</h1>

            <p className="mt-3 mb-5">
              {serviceResponse.data?.banner_description && (serviceResponse.data.banner_description)}
            </p>

            <div className={styles.vbddds}>
                <Link to="/contact-us" className="btn125">
                  Contact Us
                </Link>
              <button className="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div className={`${styles.dbfghsdf} col-lg-6`}>
            {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Templete_1/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.title && (serviceResponse.data.title)}
              </h2>
              <div
              className="pt-4"
              dangerouslySetInnerHTML={{
                __html: serviceResponse.data?.description && (serviceResponse.data.description),
              }}
            />
            </div>
          </div>
        </div>

        <div className={`${styles.ubnuiiuniewrr} py-5`}>
          <div className="custom-container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4">
                <div className={styles.oimihiewrwer}>
                  <h5>{serviceResponse.data?.third_section_heading && (serviceResponse.data.third_section_heading)}</h5>

                  <h2 className="mb-4">
                    {serviceResponse.data?.third_section_title && (serviceResponse.data.third_section_title)}
                  </h2>

                  <div 
                    dangerouslySetInnerHTML={{
                        __html: serviceResponse.data?.third_section_description && (serviceResponse.data.third_section_description),
                    }}
                    />
                </div>
              </div>

              <div className="col-lg-6">
                <div className={`${styles.ikfnmierhter} position-relative`}>
                  <img
                    src="images/0a571289-d2c8-40d9-81bb-fb9c42b90bbd.png"
                    className="position-absolute"
                    alt=""
                  />

                  <div className={`${styles.idnwehrjwerwerwerwe_wrapper} position-relative`}>
                    <div className="row">
                      <div className="col-lg-10 mb-4">
                        <div className={`${styles.iudnhwnuihewrr} bg-white d-flex p-4`}>
                          <img
                            src="images/number (1).png"
                            className="me-2"
                            alt=""
                          />

                          <div className={styles.iojnuihwqeqweqwe}>
                            <h4 className="mb-3">
                              {serviceResponse.data?.third_section_title_one && (serviceResponse.data.third_section_title_one)}
                            </h4>

                            <p className="mb-0">
                              {serviceResponse.data?.third_section_description_one && (serviceResponse.data.third_section_description_one)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2"></div>
                    </div>

                    <div className="row justify-content-end">
                      <div className="col-lg-2"></div>
                      <div className="col-lg-10 mb-4">
                        <div className={styles.vnxfhvgvfdgg}>
                          <div className={`${styles.iudnhwnuihewrr} bg-white d-flex p-4`}>
                            <img
                              src="images/number (2).png"
                              className="me-2"
                              alt=""
                            />

                            <div className={styles.iojnuihwqeqweqwe}>
                              <h4 className="mb-3">
                              {serviceResponse.data?.third_section_title_two && (serviceResponse.data.third_section_title_two)}
                            </h4>

                            <p className="mb-0">
                              {serviceResponse.data?.third_section_description_two && (serviceResponse.data.third_section_description_two)}
                            </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-10 mb-4">
                        <div className={`${styles.iudnhwnuihewrr} bg-white d-flex p-4`}>
                          <img
                            src="images/number (3).png"
                            className="me-2"
                            alt=""
                          />

                          <div className={styles.iojnuihwqeqweqwe}>
                            <h4 className="mb-3">
                              {serviceResponse.data?.third_section_title_three && (serviceResponse.data.third_section_title_three)}
                            </h4>

                            <p className="mb-0">
                              {serviceResponse.data?.third_section_description_three && (serviceResponse.data.third_section_description_three)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>{serviceResponse.data?.fourth_section_title && (serviceResponse.data.fourth_section_title)}</h2>
              <div 
                dangerouslySetInnerHTML={{
                    __html: serviceResponse.data?.fourth_section_description && (serviceResponse.data.fourth_section_description),
                }}
                />
            </div>
          </div>
        </div>

        <div className={styles.dfbjhfdfgdf}>
          <div className="custom-container">
            <div className={styles.vgbfdf}>
              <div className="row">
                <div className="col-lg-5">
                  <div className={styles.dgndfgdfgdf}>
                    {serviceResponse.data?.fifth_section_image && (
                        <img
                        src={`${serviceResponse.image_url}/Templete_1/${serviceResponse.data.fifth_section_image}`}
                        alt=""
                        />
                    )}
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className={styles.fbgdfgdfgdf}>
                    <h2>{serviceResponse.data?.fifth_section_title && (serviceResponse.data.fifth_section_title)}</h2>
                    <div 
                        dangerouslySetInnerHTML={{
                            __html: serviceResponse.data?.fifth_section_description && (serviceResponse.data.fifth_section_description),
                        }}
                    />
                    <button>Get started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fdnbvgdfgdfgdf}>
          <div className="custom-container">
            <div className={styles.cfbvhdfgdf}>
              <h2 className="text-center">
                {serviceResponse.data?.sixth_section_title && (serviceResponse.data.sixth_section_title)}
              </h2>
               <div className="text-center py-4 mb-0"
                    dangerouslySetInnerHTML={{
                        __html: serviceResponse.data?.sixth_section_description && (serviceResponse.data.sixth_section_description),
                    }}
                />
            </div>
          </div>
        </div>

        <div className={styles.xnjhxffgdf}>
            {serviceResponse.data?.featured_image && (
                <img
                src={`${serviceResponse.image_url}/Templete_1/${serviceResponse.data.featured_image}`}
                alt=""
                />
            )}
        </div>
        <LastSectionComponent />
      </main>
    </div>
  )
}
