import styles from "./Css/Template22.module.css";
import { useState } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template22 =({ serviceResponse, slug })=> {
    const [loading, setLoading] = useState(false);
  return (
    <div>
        {loading && <Loader />}
      <main>
    <div className={styles.dfgjhfgd} style={{background : "url(./images/afros.png)"}}>
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
                src={`${serviceResponse.image_url}/Templete_22/${serviceResponse.data.banner_image}`}
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

    <div className={styles.dfbghdfgdfgdf}>
        <div className="custom-container">
            <div className={styles.mgjhbdfg}>
                <h2>{serviceResponse.data?.third_section_title &&
                  serviceResponse.data.third_section_title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                    __html:
                        serviceResponse.data?.third_section_description &&
                        serviceResponse.data.third_section_description,
                    }}
                />
            </div>
        </div>
    </div>

    <div className={`${styles.iudniuwehirwerr} py-5`}>
        <div className="container-fluid px-5">
            <div className="row align-items-center">
                <div className="col-lg-8 mb-5">
                    <div className={styles.oidenjwiuhrr_inner} style={{
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: 'url(/images/16359095_v904-nunny-012.jpg)', // If image is in public folder
  }}>
                        <div className={`${styles.djnhweber_inner_overlay} p-5`}>
                            <h4>{serviceResponse.data?.fourth_section_title &&
                  serviceResponse.data.fourth_section_title}</h4>

                            <div className="py-3"
                                dangerouslySetInnerHTML={{
                                __html:
                                    serviceResponse.data?.fourth_section_description &&
                                    serviceResponse.data.fourth_section_description,
                                }}
                            />
                            <button className="btn126 mt-3">Get in Touch <i className="fa-solid fa-angles-right"></i></button>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 mb-5">
                    <div className={styles.oidenjwiuhrr_inner}>
                        {serviceResponse.data?.fourth_section_image && (
                            <img
                            src={`${serviceResponse.image_url}/Templete_22/${serviceResponse.data.fourth_section_image}`}
                            alt="" className="img-fluid"
                            />
                        )}
                    </div>
                </div>
                
                <div className="col-lg-4 mb-5">
                    <div className={styles.oidenjwiuhrr_inner}>
                        {serviceResponse.data?.fifth_section_image && (
                            <img
                            src={`${serviceResponse.image_url}/Templete_22/${serviceResponse.data.fifth_section_image}`}
                            alt="" className="img-fluid"
                            />
                        )}
                    </div>
                </div>
                
                <div className="col-lg-8">
                    <div className={styles.oidenjwiuhrr_inner} style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundImage: 'url(/images/14547742_rm218batch4-ning-34.jpg)', // If image is in public folder
                        }}>
                        <div className={`${styles.djnhweber_inner_overlay} p-5`}>
                            <h4>{serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}</h4>
                        
                            <div className="py-3"
                                dangerouslySetInnerHTML={{
                                __html:
                                    serviceResponse.data?.fifth_section_description &&
                                    serviceResponse.data.fifth_section_description,
                                }}
                            />
                            
                            <button className="btn126 mt-3">Get in Touch <i className="fa-solid fa-angles-right"></i></button>
                        </div>
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
