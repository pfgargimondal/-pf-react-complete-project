import styles from "./Css/Template49.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template49 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div className={styles.gdfbdfdfgdf554}>
          <div className={styles.dfgjhfgd} style={{ backgroundImage: "url('./images/afros.png')" }}>
            <div className={`${styles.sdfghdfgdf} col-lg-6`}>
              <h1 className="mt-0 mb-0">
                {serviceResponse.data?.banner_title && serviceResponse.data.banner_title}
              </h1>

              <div
                className="mt-3 mb-5"
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.banner_description && serviceResponse.data.banner_description,
                }}
              />

              <div className={styles.vbddds}>
                <Link to="/contact-us" className="btn125">Contact Us</Link>
                <button className="btn126">Get In Touch With Us</button>
              </div>
            </div>

            <div className={`${styles.dbfghsdf} col-lg-6`}>
              {serviceResponse.data?.banner_image && (
                <img
                  src={`${serviceResponse.image_url}/Templete_49/${serviceResponse.data.banner_image}`}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>{serviceResponse.data?.second_section_title && serviceResponse.data.second_section_title}</h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.second_section_description && serviceResponse.data.second_section_description,
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
                  __html: serviceResponse.data?.third_section_description && serviceResponse.data.third_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.fjhjdfdfgdf}>
          <div className="container-grid">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div
                  className={styles.doiewnirnewr_inner}
                  style={{ backgroundImage: "url('./images/retro-gradient-background-with-grain-texture-editable-color_511042-395.jpg')" }}
                >
                  <div className={`${styles.idnwehrwer_overlay} p-5`}>
                    <h4 className="mb-4">
                      {serviceResponse.data?.fourth_section_title && serviceResponse.data.fourth_section_title}
                    </h4>
                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: serviceResponse.data?.fourth_section_description && serviceResponse.data.fourth_section_description,
                      }}
                    />
                    <div className={styles.doewuirhwer + " text-center"}>
                      <div className={`${styles.desonjfreuiwnr} m-auto my-4`}>
                        {serviceResponse.data?.fourth_section_image && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_49/${serviceResponse.data.fourth_section_image}`}
                            alt=""
                            className="img-fluid"
                          />
                        )}
                      </div>
                      <button className="btn126">Get In Touch</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className={`${styles.doiewnirnewr_inner} ${styles.sddfgjoidfgkujoj} p-5`}>
                  {serviceResponse.data?.fifth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_49/${serviceResponse.data.fifth_section_image}`}
                      alt=""
                      className="img-fluid mb-3"
                    />
                  )}
                  <h4 className="mb-4">
                    {serviceResponse.data?.fifth_section_title && serviceResponse.data.fifth_section_title}
                  </h4>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html: serviceResponse.data?.fifth_section_description && serviceResponse.data.fifth_section_description,
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-12 mb-4">
                <div className={`row ${styles.doiewnirnewr_inner} ${styles.sddfgjoidfgkujoj} p-5`}>
                  <div className={`${styles.dinihewrer} col-lg-8`}>
                    <h4 className="mb-4">
                      {serviceResponse.data?.sixth_section_title && serviceResponse.data.sixth_section_title}
                    </h4>
                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{
                        __html: serviceResponse.data?.sixth_section_description && serviceResponse.data.sixth_section_description,
                      }}
                    />
                  </div>

                  <div className={`${styles.dinihewrer} col-lg-4 position-relative`}>
                    {serviceResponse.data?.sixth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_49/${serviceResponse.data.sixth_section_image}`}
                        alt=""
                        className="img-fluid mb-3"
                      />
                    )}
                    <div className={`${styles.star} ${styles.star1}`}></div>
                    <div className={`${styles.star} ${styles.star2}`}></div>
                    <div className={`${styles.star} ${styles.star3}`}></div>
                    <div className={`${styles.star} ${styles.star4}`}></div>
                    <div className={`${styles.star} ${styles.star5}`}></div>
                    <div className={`${styles.star} ${styles.star6}`}></div>
                    <div className={`${styles.star} ${styles.star7}`}></div>
                    <div className={`${styles.star} ${styles.star8}`}></div>
                    <div className={`${styles.star} ${styles.star9}`}></div>
                    <div className={`${styles.star} ${styles.star10}`}></div>
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
