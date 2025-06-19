import styles from "./Css/Template8.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template8 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div className={styles.dfgjhfgd}>
          <div className={`${styles.sdfghdfgdf} col-lg-6`}>
            <h1 className="mt-0 mb-0">
              {serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}
            </h1>

            <p className="mt-3 mb-5">
              {serviceResponse.data?.banner_description &&
                serviceResponse.data.banner_description}
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
                src={`${serviceResponse.image_url}/Template_8/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
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

        <div className={`${styles.dfbghdfgdfgdf} ${styles.sfmlkdfdff}`}>
          <div className="custom-container">
            <div className={styles.mgjhbdfg}>
              <h2 className="mb-4">
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
            </div>
          </div>
        </div>

        <div className={`${styles.doieflmeoiwjrowe} pt-5`}>
          <div className="container-fluid px-5">
            <div className={`${styles.idewhrwer_inner_wrapper} mt-5`}>
              <div className="col-lg-4">
                <div className={`${styles.asedifoje_inner} p-5`}>
                  {serviceResponse.data?.fourth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Template_8/${serviceResponse.data.fourth_section_image}`}
                      className="img-fluid"
                    />
                  )}
                </div>
              </div>

              <div className="offset-lg-3 col-lg-9">
                <div className={`${styles.odijweirwerr_right} bg-white`}>
                  <h2 className="mb-4">
                    {serviceResponse.data?.fourth_section_title &&
                      serviceResponse.data.fourth_section_title}
                  </h2>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fourth_section_description &&
                        serviceResponse.data.fourth_section_description,
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className={`${styles.idewhrwer_inner_wrapper} ${styles.cdfbikerfsdfsfeeqwe} mt-5`}
            >
              <div className="col-lg-9">
                <div className={`${styles.odijweirwerr_right} bg-white`}>
                  <h2 className="mb-4">
                    {serviceResponse.data?.fifth_section_title &&
                      serviceResponse.data.fifth_section_title}
                  </h2>

                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fifth_section_description &&
                        serviceResponse.data.fifth_section_description,
                    }}
                  />
                </div>
              </div>

              <div className="offset-lg-8 col-lg-4">
                <div className={`${styles.asedifoje_inner} p-5`}>
                  {serviceResponse.data?.fifth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Template_8/${serviceResponse.data.fifth_section_image}`}
                      className="img-fluid"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.xnjhxffgdf}>
          {serviceResponse.data?.sixth_section_image && (
            <img
              src={`${serviceResponse.image_url}/Template_8/${serviceResponse.data.sixth_section_image}`}
            />
          )}
        </div>
        <LastSectionComponent />
      </main>
    </div>
  );
};
