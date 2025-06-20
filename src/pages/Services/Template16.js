import styles from "./Css/Template16.module.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template16 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div className={styles.gdfbdfdfgdf554}>
          <div className={styles.dfgjhfgd} style={{
              backgroundImage: "url(./images/afros.png)",
            }}>
            <div className={`${styles.sdfghdfgdf} col-lg-6`}>
              <h1 className="mt-0 mb-0">
                {serviceResponse.data?.banner_title &&
                  serviceResponse.data.banner_title}
              </h1>

              <div
                className="mt-3 mb-5"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.banner_description &&
                    serviceResponse.data.banner_description,
                }}
              />

              <div className={styles.vbddds}>
                <Link to="/contact-us" className={styles.btn125}>
                  Contact Us
                </Link>
                <button className={styles.btn126}>Get In Touch With Us</button>
              </div>
            </div>

            <div className={` ${styles.dbfghsdf} col-lg-6`}>
              {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Templete_16/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
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
        </div>

        <ServiceForm loading={setLoading} slug={slug} />

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
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
            </div>
          </div>
        </div>

        <div className={`${styles.uidjnweihrwr_wrapper} mt-5 py-5`}>
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.oidmekwhrerrewee}>
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className={` ${styles.duiwenuhruwr_inner} ${styles.scdertgsddrtrrr} ${styles.sdvfghrer} p-5`}>
                        <p>
                          {serviceResponse.data?.fourth_section_heading_one &&
                            serviceResponse.data.fourth_section_heading_one}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-4">
                      <div className={`${styles.duiwenuhruwr_inner} ${styles.scdertgsddrtrrr} ${styles.sdfvrttgsrer} h-100 p-5`}>
                        <p>
                          {serviceResponse.data?.fourth_section_heading_two &&
                            serviceResponse.data.fourth_section_heading_two}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-12 mb-4">
                      <div className={`${styles.duiwenuhruwr_inner} ${styles.dcdscsfdsdsas} ${styles.scdertgsddrtrrr} position-relative  p-5 overflow-hidden`}>
                        <img
                          src="./images/dee.png"
                          className="position-absolute"
                          alt=""
                        />

                        <h4 className="mb-4">
                          {serviceResponse.data?.fourth_section_title_one &&
                            serviceResponse.data.fourth_section_title_one}
                        </h4>
                        <div
                          className="mb-4"
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fourth_section_description_one &&
                              serviceResponse.data
                                .fourth_section_description_one,
                          }}
                        />
                        <a href="" className="position-relative">
                          <i className="fa-solid fa-arrow-right position-absolute"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className={styles.oidmekwhrerrewee}>
                  <div className="row">
                    <div className="col-lg-12 mb-4">
                      <div className={`${styles.duiwenuhruwr_inner} ${styles.sxcvrrteeww} ${styles.scdertgsddrtrrr} ${styles.sdfsdcvdtrr} position-relative  p-5 overflow-hidden`}>
                        <img
                          src="./images/we.png"
                          className="position-absolute"
                          alt=""
                        />

                        <h4 className="mb-4">
                          {serviceResponse.data?.fourth_section_title_two &&
                            serviceResponse.data.fourth_section_title_two}
                        </h4>
                        <div
                          className="mb-4"
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fourth_section_description_two &&
                              serviceResponse.data
                                .fourth_section_description_two,
                          }}
                        />
                        <a href="" className="position-relative">
                          <i className="fa-solid fa-arrow-right position-absolute"></i>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-4">
                      <div className={`${styles.duiwenuhruwr_inner} ${styles.csbghedserer} ${styles.scdertgsddrtrrr} p-5`}>
                        <p>
                          {serviceResponse.data?.fourth_section_heading_three &&
                            serviceResponse.data.fourth_section_heading_three}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-4">
                      <div className={`${styles.duiwenuhruwr_inner} ${styles.sdvcerrt} ${styles.scdertgsddrtrrr} h-100 p-5`}>
                        <p>
                          {serviceResponse.data?.fourth_section_heading_four &&
                            serviceResponse.data.fourth_section_heading_four}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LastSectionComponent />
      </main>
    </div>
  );
};
