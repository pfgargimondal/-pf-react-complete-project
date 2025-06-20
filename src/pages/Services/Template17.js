import styles from "./Css/Template17.module.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template17 = ({serviceResponse, slug}) => {
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
                <h1 className="mt-0 mb-0">{serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}</h1>
        
                <p className="mt-3 mb-5">{serviceResponse.data?.banner_description &&
                serviceResponse.data.banner_description}</p>
        
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
                    src={`${serviceResponse.image_url}/Templete_17/${serviceResponse.data.banner_image}`}
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
    
    <div className={`${styles.idnewuihijir} py-5`}>
        <div className="custom-container py-5">
            <div className={`${styles.ijdnm_eoijrer} p-5 mb-5`}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className={styles.dopjemwlkjrower_inner}>
                            <h2>{serviceResponse.data?.fourth_section_title &&
                serviceResponse.data.fourth_section_title}</h2>

                            <Link to="/contact-us" className="btn125" style={{ display: "inline-block", marginTop: "20px" }}>
                              Contact Us Now
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className={styles.dopjemwlkjrower_inner}>
                          <div className="mb-0"
                          dangerouslySetInnerHTML={{
                              __html:
                              serviceResponse.data?.fourth_section_description &&
                              serviceResponse.data.fourth_section_description,
                          }}
                          />
                        </div>
                    </div>
                </div>
                {serviceResponse.data?.fourth_section_image && (
                <img
                    src={`${serviceResponse.image_url}/Templete_17/${serviceResponse.data.fourth_section_image}`}
                    alt=""  className="img-fluid mt-4" 
                />
                )}
            </div>
            
            <div className="row">
                <div className="col-lg-6">
                    <div className={`${styles.ijdnm_eoijrer} p-4`}>
                        <h2 className="mb-4">{serviceResponse.data?.fifth_section_title &&
                serviceResponse.data.fifth_section_title}</h2>
                            
                        <div className="mb-0"
                          dangerouslySetInnerHTML={{
                              __html:
                              serviceResponse.data?.fifth_section_description &&
                              serviceResponse.data.fifth_section_description,
                          }}
                        />

                        {serviceResponse.data?.fifth_section_image && (
                        <img
                            src={`${serviceResponse.image_url}/Templete_17/${serviceResponse.data.fifth_section_image}`}
                            alt=""  className="img-fluid mt-4" 
                        />
                        )}
                    </div>
                </div>
                
                <div className="col-lg-6">
                    <div className={`${styles.ijdnm_eoijrer} p-4`}>
                        {serviceResponse.data?.sixth_section_iamge && (
                        <img
                            src={`${serviceResponse.image_url}/Templete_17/${serviceResponse.data.sixth_section_iamge}`}
                            alt=""  className="img-fluid mt-4" 
                        />
                        )}
                        
                        <h2 className="mb-4">{serviceResponse.data?.sixth_section_title &&
                serviceResponse.data.sixth_section_title}</h2>
                            
                        <div className="mb-0"
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
    <LastSectionComponent />
</main>

    </div>
  ) 
}
