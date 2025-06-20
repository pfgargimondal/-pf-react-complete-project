import styles from "./Css/Template3.module.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template3 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div className={styles.gdfbdfdfgdf554}>
          <div
            className={styles.dfgjhfgd}
            style={{
              backgroundImage: "url(./images/afros.png)",
            }}
          >
            <div className={`${styles.sdfghdfgdf} col-lg-6`}>
              <h1 className="mt-0 mb-0">
                {serviceResponse.data?.banner_title && serviceResponse.data.banner_title}
              </h1>

              <p className="mt-3 mb-5">
                {serviceResponse.data?.banner_description && serviceResponse.data.banner_description}
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
                  src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.banner_image}`}
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
                  __html: serviceResponse.data?.second_description && serviceResponse.data.second_description,
                }}
              />
            </div>
          </div>
        </div>

        <ServiceForm loading={setLoading} slug={slug} />

        <div className={`${styles.fjhfdfgdfg} pb-5`}>
          <div className="custom-container pb-5">
            <div className={styles.sdfsdfsdf}>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.second_another_description &&
                    serviceResponse.data.second_another_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.duiewmjroiweorrr}>
          <div className="custom-container">
            <div className={`row ${styles.ndjiwenkndfuiwehrwer}`}>
              <div className="col-lg-8 mb-4">
                <div className={`${styles.dienwm_iuemrer} position-relative`}>
                  <h2 className="my-4">
                    {serviceResponse.data?.third_section_title && serviceResponse.data.third_section_title}
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

              <div className="col-lg-4">
                <div className={`${styles.dlkeomwlkmroewr_inner} sticky-top`}>
                  {serviceResponse.data?.third_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.third_section_image}`}
                      className="img-fluid"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>

            <div className={`row ${styles.ndjiwenkndfuiwehrwer}`}>
              <div className="col-lg-4">
                <div className={`${styles.dlkeomwlkmroewr_inner} sticky-top`}>
                  {serviceResponse.data?.fourth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.fourth_section_image}`}
                      className="img-fluid"
                      alt=""
                    />
                  )}
                </div>
              </div>

              <div className="col-lg-8 mb-4">
                <div className={`${styles.dienwm_iuemrer} ${styles.uienniuhwerwewe_jdiuewr} position-relative`}>
                  <h2 className="my-4">
                    {serviceResponse.data?.fourth_section_title && serviceResponse.data.fourth_section_title}
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fourth_section_description &&
                        serviceResponse.data.fourth_section_description,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={`row ${styles.ndjiwenkndfuiwehrwer}`}>
              <div className="col-lg-8 mb-4">
                <div className={`${styles.dienwm_iuemrer} position-relative`}>
                  <h2 className="my-4">
                    {serviceResponse.data?.fifth_section_title && serviceResponse.data.fifth_section_title}
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

              <div className="col-lg-4">
                <div className={`${styles.dlkeomwlkmroewr_inner} sticky-top`}>
                  {serviceResponse.data?.fifth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.fifth_section_image}`}
                      className="img-fluid"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className={`${styles.dlkeomwlkmroewr_inner} sticky-top`}>
                  {serviceResponse.data?.sixth_section_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.sixth_section_image}`}
                      className="img-fluid"
                      alt=""
                    />
                  )}
                </div>
              </div>

              <div className="col-lg-8 mb-4">
                <div className={`${styles.dienwm_iuemrer} ${styles.uienniuhwerwewe_jdiuewr} position-relative`}>
                  <h2 className="my-4">
                    {serviceResponse.data?.sixth_section_title && serviceResponse.data.sixth_section_title}
                  </h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.sixth_section_description &&
                        serviceResponse.data.sixth_section_description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.sdmsdjhsds}>
          {serviceResponse.data?.featured_image && (
            <img
              src={`${serviceResponse.image_url}/Templete_3/${serviceResponse.data.featured_image}`}
              alt=""
            />
          )}
        </div> */}

        <LastSectionComponent />
      </main>
    </div>
  )
}
