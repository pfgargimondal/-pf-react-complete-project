import styles from "./Css/Template25.module.css";
import { useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
export const Template25 = ({ serviceResponse, slug }) => {
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
                src={`${serviceResponse.image_url}/Templete_25/${serviceResponse.data.banner_image}`}
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

        <div className={styles.dfbjhfdfgdf}>
          <div className="custom-container">
            <div className={styles.vgbfdf}>
              <div className="row">
                <div className="col-lg-7">
                  <div className={styles.fbgdfgdfgdf}>
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
                    <button className="btn125">Get started</button>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className={styles.dgndfgdfgdf}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_25/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fjhfdfgdfg}>
          <div className="custom-container">
            <div className={styles.sdfsdfsdf}>
              <h2>
                {serviceResponse.data?.fourth_section_title &&
                  serviceResponse.data.fourth_section_title}
              </h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.fourth_section_description &&
                    serviceResponse.data.fourth_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.sdjvhyuysbdvsd}>
          <div className="custom-container">
            <div className={styles.fmnbjkfnvf}>
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
            <div className={styles.sdshyudssd}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.dhujhbdsf555} style={{background:" url(../images/d.png)"}}>
                    <div className={`${styles.gbkjg5855} mt-4`}>
                      <div className={styles.fvnjfv55}>
                        {serviceResponse.data?.fifth_section_sub_image_one && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_25/${serviceResponse.data.fifth_section_sub_image_one}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div className={styles.dfbhvhfdvgvfd2}>
                        <h4>
                          {serviceResponse.data?.fifth_section_sub_title_one &&
                            serviceResponse.data.fifth_section_sub_title_one}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fifth_section_sub_description_one &&
                              serviceResponse.data
                                .fifth_section_sub_description_one,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={styles.dhujhbdsf555} style={{background:" url(../images/d.png)"}}>
                    <div className={`${styles.gbkjg5855} mt-4`}>
                      <div className={styles.fvnjfv55}>
                        {serviceResponse.data?.fifth_section_sub_image_two && (
                          <img
                            src={`${serviceResponse.image_url}/Templete_25/${serviceResponse.data.fifth_section_sub_image_two}`}
                            alt=""
                          />
                        )}
                      </div>
                      <div className={styles.dfbhvhfdvgvfd2}>
                        <h4>
                          {serviceResponse.data?.fifth_section_sub_title_two &&
                            serviceResponse.data.fifth_section_sub_title_two}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              serviceResponse.data
                                ?.fifth_section_sub_description_two &&
                              serviceResponse.data
                                .fifth_section_sub_description_two,
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
        <LastSectionComponent />
      </main>
    </div>
  );
};
