import styles from "./Css/Template47.module.css";
import { useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template47 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div className={styles.dfgjhfgd}>
          <div className={`${styles.sdfghdfgdf} col-lg-6`}>
            <h1 className="mt-0 mb-0">
              {serviceResponse.data?.banner_title && serviceResponse.data.banner_title}
            </h1>
            <p className="mt-3 mb-5">
              {serviceResponse.data?.banner_description && serviceResponse.data.banner_description}
            </p>
            <div className={styles.vbddds}>
              <Link to="/contact-us" className="btn125">Contact Us</Link>
              <button className="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div className={`${styles.dbfghsdf} col-lg-6`}>
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Templete_47/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}
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

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div className={`${styles.dfbghdfgdfgdf} ${styles.sfmlkdfdff}`}>
          <div className="custom-container">
            <div className={styles.mgjhbdfg}>
              <h2 className="mb-4">
                {serviceResponse.data?.third_section_title && serviceResponse.data.third_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.third_section_description && serviceResponse.data.third_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={`mt-5 ${styles.duiewmjroiweorrr}`}>
          <div className="container-fluid px-5">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className={styles.oidmnewr_left}>
                  {serviceResponse.data?.fourth_section_image_one && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_47/${serviceResponse.data.fourth_section_image_one}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}
                  <h4 className="mb-4">
                    {serviceResponse.data?.fourth_section_title_one && serviceResponse.data.fourth_section_title_one}
                  </h4>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html: serviceResponse.data?.fourth_section_description_one && serviceResponse.data.fourth_section_description_one,
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className={`${styles.oidmnewr_middle} sticky-top`}>
                  {serviceResponse.data?.fourth_section_main_image && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_47/${serviceResponse.data.fourth_section_main_image}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className={styles.oidmnewr_right}>
                  {serviceResponse.data?.fourth_section_image_two && (
                    <img
                      src={`${serviceResponse.image_url}/Templete_47/${serviceResponse.data.fourth_section_image_two}`}
                      alt=""
                      className="img-fluid"
                    />
                  )}
                  <h4 className="mb-4">
                    {serviceResponse.data?.fourth_section_title_two && serviceResponse.data.fourth_section_title_two}
                  </h4>
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{
                      __html: serviceResponse.data?.fourth_section_description_two && serviceResponse.data.fourth_section_description_two,
                    }}
                  />
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
