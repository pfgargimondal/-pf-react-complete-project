import styles from "./Css/Template7.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template7 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div className={styles.gdfbdfdfgdf554}>
          <div className={styles.dfgjhfgd} style={{ backgroundImage: "url('./images/afros.png')"}}>
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
                  src={`${serviceResponse.image_url}/Template_7/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}
            </div>
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

        <ServiceForm loading={setLoading} slug={slug} />

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
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

        <div className={styles.fjhjdfdfgdf}>
          <div className="container-grid">
            <div className={styles.fndfdf}>
              <div className="row">
                <div className="col-lg-4">
                  <div className={styles.dfdfdfg}>
                    <div className={styles.njhfbg5654}>
                      {serviceResponse.data?.fourth_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Template_7/${serviceResponse.data.fourth_section_image}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className={styles.gdfhbgdfgdfg}>
                      <h4>
                        {serviceResponse.data?.fourth_section_title &&
                          serviceResponse.data.fourth_section_title}
                      </h4>
                      <button>Get in Touch</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className={styles.dfdfdfg}>
                    <div className={styles.njhfbg5654}>
                      {serviceResponse.data?.fifth_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Template_7/${serviceResponse.data.fifth_section_image}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className={styles.gdfhbgdfgdfg}>
                      <h4>
                        {serviceResponse.data?.fifth_section_title &&
                          serviceResponse.data.fifth_section_title}
                      </h4>
                      <button>Get in Touch</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className={styles.dfdfdfg}>
                    <div className={styles.njhfbg5654}>
                      {serviceResponse.data?.sixth_section_image && (
                        <img
                          src={`${serviceResponse.image_url}/Template_7/${serviceResponse.data.sixth_section_image}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className={styles.gdfhbgdfgdfg}>
                      <h4>
                        {serviceResponse.data?.sixth_section_title &&
                          serviceResponse.data.sixth_section_title}
                      </h4>
                      <button>Get in Touch</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sdmsdjhsds}>
          {serviceResponse.data?.featured_image && (
            <img
              src={`${serviceResponse.image_url}/Template_7/${serviceResponse.data.featured_image}`}
              alt=""
            />
          )}
        </div>
        <LastSectionComponent />
      </main>
    </div>
  );
};
