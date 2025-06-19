import styles from "./Css/Template15.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
export const Template15 =({ serviceResponse, slug }) =>{
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('tab-1');
  return (
    <div>
        {loading && <Loader />}
      <main>
    <div className={styles.gdfbdfdfgdf554}>
    <div className={styles.dfgjhfgd} style={{
              backgroundImage: "url(./images/afros.png)",
            }}>
        <div className={`${styles.sdfghdfgdf} col-lg-6`}>
            <h1 className="mt-0 mb-0">{serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}</h1>
    
            <p className="mt-3 mb-5">{serviceResponse.data?.banner_description &&
                serviceResponse.data.banner_description}</p>
    
            <div className={styles.vbddds}>
                <Link to="/contact-us" className={styles.btn125}>
                    Contact Us
                </Link>
                <button className={styles.btn126}>Get In Touch With Us</button>
            </div>
        </div>
    
        <div className={`${styles.dbfghsdf} col-lg-6`}>
            {serviceResponse.data?.banner_image && (
            <img
                src={`${serviceResponse.image_url}/Template_15/${serviceResponse.data.banner_image}`}
                alt=""
            />
            )}
        </div>
    </div>
</div>

<div className={styles.fjhfdfgdfg}>
    <div className="custom-container">
        <div className={styles.sdfsdfsdf}>
            <h2>{serviceResponse.data?.second_section_title &&
                serviceResponse.data.second_section_title}</h2>
            <div className="pt-4"
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
                 <h2>{serviceResponse.data?.third_section_title &&
                serviceResponse.data.third_section_title}</h2> 
                
                <div className="pt-4"
                    dangerouslySetInnerHTML={{
                        __html:
                        serviceResponse.data?.third_section_description &&
                        serviceResponse.data.third_section_description,
                    }}
                />
            </div>
        </div>
    </div>

    <div className={`${styles.dweihrenjkrer_jiewurr} mt-5`}>
      <div className="custom-container">
        <div className={`tab-teaser ${styles.sdcvergtrtyerwer}`}>
          <div className={`tab-menu ${styles.sdcsdfeewwwww}`}>
            <ul>
              <li>
                <a
                  href="#"
                  className={activeTab === 'tab-1' ? 'active' : ''}
                  data-rel="tab-1"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('tab-1');
                  }}
                >
                  {serviceResponse.data?.fourth_section_heading}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={activeTab === 'tab-2' ? 'active' : ''}
                  data-rel="tab-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('tab-2');
                  }}
                >
                  {serviceResponse.data?.fifth_section_heading}
                </a>
              </li>
            </ul>
          </div>

          <div className={`tab-main-box ${styles.sdcereerttter}`}>
            <div
              className={`tab-box ${styles.sdfsrfdfrt}`}
              id="tab-1"
              style={{ display: activeTab === 'tab-1' ? 'block' : 'none' }}
            >
              <h2 className="my-4">
                {serviceResponse.data?.fourth_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.fourth_section_description,
                }}
              />
            </div>

            <div
              className={`tab-box ${styles.sdfsrfdfrt}`}
              id="tab-2"
              style={{ display: activeTab === 'tab-2' ? 'block' : 'none' }}
            >
              <h2 className="my-4">
                {serviceResponse.data?.fifth_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: serviceResponse.data?.fifth_section_description,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.sdmsdjhsds}>
        {serviceResponse.data?.sixth_section_image && (
        <img
            src={`${serviceResponse.image_url}/Template_15/${serviceResponse.data.sixth_section_image}`}
            alt=""
        />
        )}
    </div>

    <LastSectionComponent />
</main>
    </div>
  )
}
