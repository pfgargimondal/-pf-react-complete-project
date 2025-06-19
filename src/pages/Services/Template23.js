import styles from "./Css/Template23.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template23 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState("tab-1");

  const tabs = [
    {
      id: "tab-1",
      title: serviceResponse.data?.third_section_title_one,
      description: serviceResponse.data?.third_section_description_one,
      image: serviceResponse.data?.third_section_image_one,
    },
    {
      id: "tab-2",
      title: serviceResponse.data?.third_section_title_two,
      description: serviceResponse.data?.third_section_description_two,
      image: serviceResponse.data?.third_section_image_two,
    },
    {
      id: "tab-3",
      title: serviceResponse.data?.third_section_title_three,
      description: serviceResponse.data?.third_section_description_three,
      image: serviceResponse.data?.third_section_image_three,
    },
  ];
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
                src={`${serviceResponse.image_url}/Templete_23/${serviceResponse.data.banner_image}`}
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

        <div className={`${styles.asdfdergdg} py-5`}>
          <div className="container-fluid p-5">
            <div className={styles.doijfjwerit_inner}>
              <div className={`${styles["tab-teaser"]} row`}>
                <div className={`${styles["tab-menu"]} col-lg-6`}>
                  <ul>
                    {tabs.map((tab) => (
                      <li key={tab.id}>
                        <a
                          href="#"
                          className={activeTab === tab.id ? styles.active : ""}
                          data-rel={tab.id}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab(tab.id);
                          }}
                        >
                          <h4>{tab.title}</h4>
                          <div
                            className="mb-0"
                            dangerouslySetInnerHTML={{
                              __html: tab.description,
                            }}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${styles["tab-main-box"]} col-lg-6`}>
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={styles.tabBox}
                      id={tab.id}
                      style={{
                        display: activeTab === tab.id ? "block" : "none",
                      }}
                    >
                      {tab.image && (
                        <img
                          src={`${serviceResponse.image_url}/Templete_23/${tab.image}`}
                          alt=""
                          className="img-fluid"
                        />
                      )}
                    </div>
                  ))}
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
