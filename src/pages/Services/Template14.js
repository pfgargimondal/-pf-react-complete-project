import styles from "./Css/Template14.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template14 = ({ serviceResponse, slug }) => {
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
                src={`${serviceResponse.image_url}/Template_14/${serviceResponse.data.banner_image}`}
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
          <div className="custom-container10">
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
                    <button>Get started</button>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className={styles.dgndfgdfgdf}>
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Template_14/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sdcbvghsdcsddvfsd}>
          <div className="custom-container">
            <div className={styles.hsdffdvffdfd}>
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
              {/* <p>Take your website to the top of search results with our strategic link building SEO services. We help you earn high-quality backlinks from authoritative websites, increasing your domain authority, visibility, and organic traffic. Whether you run a blog, an e-commerce site, or a business page, our white-hat techniques ensure long-term success and SEO growth.</p>
                <div className="fdnbujfbf mt-4">
                    <p><i className="fa-solid fa-circle-notch"></i> High-Quality Backlinks from niche-relevant, authority websites</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Manual Outreach to secure authentic, natural links</p>
                    <p><i className="fa-solid fa-circle-notch"></i> White-Hat SEO Practices approved by Goog</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Detailed Monthly Reports on backlink performance</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Diverse Link Profile including guest posts, niche edits, and citations</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Boost in Domain Authority and search engine rankings</p>
                    <p><i className="fa-solid fa-circle-notch"></i> Improved Organic Traffic with long-term SEO benefits</p>
                </div> */}
            </div>
          </div>
        </div>

        <div className={styles.fgjbdfgdfgdfg}>
          <div className="custom-container">
            <div className={styles.fhgjfgdfg}>
              <h6>
                {serviceResponse.data?.fifth_section_heading &&
                  serviceResponse.data.fifth_section_heading}
              </h6>
              <h2>
                {serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}
              </h2>
              <div className={styles.dfbgf2}></div>
            </div>

            <div className={styles.jhfsdfgsdf}>
              <div className="row">
                <div className="col-lg-4">
                  <div className={styles.dfhgdfg}>
                    <div className={styles.nfgjhf}>
                      {serviceResponse.data?.fifth_section_image_one && (
                        <img
                          src={`${serviceResponse.image_url}/Template_14/${serviceResponse.data.fifth_section_image_one}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className={styles.dfghdfgfd}>
                      <div className={styles.jkfbgdfg}>
                        {/* <img src="./images/customer-loyalty.png" alt=""> */}
                      </div>
                      <div className={styles.fghjdfg25}>
                        <h6>
                          {serviceResponse.data?.fifth_section_title_one &&
                            serviceResponse.data.fifth_section_title_one}
                        </h6>
                      </div>
                    </div>
                    <div className={styles.hdfgfd}>
                      <p>
                        {serviceResponse.data?.fifth_section_description_one &&
                          serviceResponse.data.fifth_section_description_one}
                      </p>
                      {/* <button>Read More</button> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className={styles.dfhgdfg}>
                    <div className={styles.nfgjhf}>
                      {serviceResponse.data?.fifth_section_image_two && (
                        <img
                          src={`${serviceResponse.image_url}/Template_14/${serviceResponse.data.fifth_section_image_two}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className={styles.dfghdfgfd}>
                      <div className={styles.jkfbgdfg}>
                        {/* <img src="./images/customer-service (5).png" alt=""> */}
                      </div>
                      <div className={styles.fghjdfg25}>
                        <h6>
                          {serviceResponse.data?.fifth_section_title_two &&
                            serviceResponse.data.fifth_section_title_two}
                        </h6>
                      </div>
                    </div>
                    <div className={styles.hdfgfd}>
                      <p>
                        {serviceResponse.data?.fifth_section_description_two &&
                          serviceResponse.data.fifth_section_description_two}
                      </p>
                      {/* <button>Read More</button> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className={styles.dfhgdfg}>
                    <div className={styles.nfgjhf}>
                      {serviceResponse.data?.fifth_section_image_three && (
                        <img
                          src={`${serviceResponse.image_url}/Template_14/${serviceResponse.data.fifth_section_image_three}`}
                          alt=""
                        />
                      )}
                    </div>
                    <div className={styles.dfghdfgfd}>
                      <div className={styles.jkfbgdfg}>
                        {/* <img src="./images/advisor.png" alt=""> */}
                      </div>
                      <div className={styles.fghjdfg25}>
                        <h6>
                          {serviceResponse.data?.fifth_section_title_three &&
                            serviceResponse.data.fifth_section_title_three}
                        </h6>
                      </div>
                    </div>
                    <div className={styles.hdfgfd}>
                      <p>
                        {serviceResponse.data
                          ?.fifth_section_description_three &&
                          serviceResponse.data.fifth_section_description_three}
                      </p>
                      {/* <button>Read More</button> */}
                    </div>
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
                {serviceResponse.data?.section_six_title &&
                            serviceResponse.data.section_six_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.section_six_description &&
                    serviceResponse.data.section_six_description,
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
