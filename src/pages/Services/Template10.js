import styles from "./Css/Template10.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template10 = ({ serviceResponse, slug }) =>{
    const [loading, setLoading] = useState(false);
  return (
    <div>
        {loading && <Loader />}
      <main>
    <div className={styles.dfgjhfgd}>
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
                src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.banner_image}`}
                alt=""
            />
            )}
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
    <ServiceEnquiryForm loading={setLoading} slug={slug} />
    <div className="duiewmjroiweorrr my-5">
        <div className="custom-container">
            <div className={`row ${styles.ndjiwenkndfuiwehrwer}`}>
                <div className="col-lg-4">
                    <div className={styles.dlkeomwlkmroewr_inner}>
                        {serviceResponse.data?.third_section_image && (
                        <img
                            src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.third_section_image}`}
                            alt="" className="img-fluid"
                        />
                        )}
                    </div>
                </div>
                
                <div className={`${styles.vbddds} col-lg-8 mb-4`}>
                    <div className={`${styles.dienwm_iuemrer} position-relative`}>
                        <h2 className="my-4">{serviceResponse.data?.third_section_title &&
                serviceResponse.data.third_section_title}</h2>
                        <div className={`${styles.vbddds} pt-4`}
                        dangerouslySetInnerHTML={{
                            __html:
                            serviceResponse.data?.third_section_description &&
                            serviceResponse.data.third_section_description,
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className={styles.xnjhxffgdf}>
        {serviceResponse.data?.mid_section_image && (
        <img
            src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.mid_section_image}`}
            alt="" 
        />
        )}
    </div>
    
    <div className={`${styles.duiewmjroiweorrr} mb-5 pt-5`}>
        <div className="custom-container">
            <div className={`${styles.dienwm_iuemrer} position-relative`}>
                <h2 className="my-4">{serviceResponse.data?.fourth_section_title &&
                serviceResponse.data.fourth_section_title}</h2>
                
                <div className="mb-5"
                dangerouslySetInnerHTML={{
                    __html:
                    serviceResponse.data?.fourth_section_description_one &&
                    serviceResponse.data.fourth_section_description_one,
                }}
                />
                <ul className="mb-0 ps-0">
                    <div
                    dangerouslySetInnerHTML={{
                        __html:
                        serviceResponse.data?.fourth_section_description_two &&
                        serviceResponse.data.fourth_section_description_two,
                    }}
                    />
                </ul>
            </div>
        </div>
    </div>
    
    <div className={`${styles.dfbjhfdfgdf} py-5`} style={{
              backgroundImage: "url(./images/d.png)",
            }}>
        <div className="custom-container">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className={`${styles.vgbfdf} bg-white`}>
                        <div className={styles.fbgdfgdfgdf}>
                            <h4>{serviceResponse.data?.fifth_section_title_one &&
                serviceResponse.data.fifth_section_title_one}</h4>
                            
                            <div
                            dangerouslySetInnerHTML={{
                                __html:
                                serviceResponse.data?.fifth_section_description_one &&
                                serviceResponse.data.fifth_section_description_one,
                            }}
                            />
                                 
                            <button>Get started</button>
                        </div>
                        
                        <div className={styles.dgndfgdfgdf}>
                            {serviceResponse.data?.fifth_section_image_one && (
                            <img
                                src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.fifth_section_image_one}`}
                                alt=""
                            />
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6 mb-4">
                    <div className={`${styles.vgbfdf} bg-white`}>
                        <div className={styles.fbgdfgdfgdf}>
                            <h4>{serviceResponse.data?.fifth_section_title_two &&
                serviceResponse.data.fifth_section_title_two}</h4>
                            
                            <div
                            dangerouslySetInnerHTML={{
                                __html:
                                serviceResponse.data?.fifth_section_description_two &&
                                serviceResponse.data.fifth_section_description_two,
                            }}
                            /> 
                            <button>Get started</button>
                        </div>
                        
                        <div className={styles.dgndfgdfgdf}>
                            {serviceResponse.data?.fifth_section_image_two && (
                            <img
                                src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.fifth_section_image_two}`}
                                alt=""
                            />
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-12 mb-4">
                    <div className={`${styles.vgbfdf} bg-white`}>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className={styles.fbgdfgdfgdf}>
                                    <h4>{serviceResponse.data?.sixth_section_title &&
                    serviceResponse.data.sixth_section_title}</h4>
                                
                                <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                    serviceResponse.data?.sixth_section_description &&
                                    serviceResponse.data.sixth_section_description,
                                }}
                                /> 
                                    <button>Get started</button>
                                </div>
                            </div>
                            
                            <div className="col-lg-5">
                                <div className={styles.dgndfgdfgdf}>
                                    {serviceResponse.data?.sixth_section_image && (
                                    <img
                                        src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.sixth_section_image}`}
                                        alt=""
                                    />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6 mb-4">
                    <div className={`${styles.vgbfdf} bg-white`}>
                        <div className={styles.fbgdfgdfgdf}>
                                <h4>{serviceResponse.data?.seventh_section_title_one &&
                                serviceResponse.data.seventh_section_title_one}</h4>
                                
                                <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                    serviceResponse.data?.seventh_section_description_one &&
                                    serviceResponse.data.seventh_section_description_one,
                                }}
                                /> 
                            <button>Get started</button>
                        </div>
                        
                        <div className={styles.dgndfgdfgdf}>
                            {serviceResponse.data?.seventh_section_image_one && (
                            <img
                                src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.seventh_section_image_one}`}
                                alt=""
                            />
                            )}
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6 mb-4">
                    <div className={`${styles.vgbfdf} bg-white`}>
                        <div className={styles.fbgdfgdfgdf}>
                             <h4>{serviceResponse.data?.seventh_section_title_two &&
                                serviceResponse.data.seventh_section_title_two}</h4>
                                
                                <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                    serviceResponse.data?.seventh_section_description_two &&
                                    serviceResponse.data.seventh_section_description_two,
                                }}
                                />   
                            <button>Get started</button>
                        </div>
                        
                        <div className={styles.dgndfgdfgdf}>
                            {serviceResponse.data?.seventh_section_image_two && (
                            <img
                                src={`${serviceResponse.image_url}/Templete_10/${serviceResponse.data.seventh_section_image_two}`}
                                alt=""
                            />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <LastSectionComponent/>
</main>
    </div>
  )
}
