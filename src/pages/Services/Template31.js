import "./Css/Template31.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template31 =({serviceResponse, slug}) =>{
    const [loading, setLoading] = useState(false);
  return (
    <div>
        {loading && <Loader />}
      <main>
    <div className="gdfbdfdfgdf554">
        <div className="dfgjhfgd" style={{ background: "url(./images/afros.png)" }}>
            <div className="sdfghdfgdf col-lg-6">
                <h1 className="mt-0 mb-0">{serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}</h1>
        
                <div className="mt-3 mb-5"
                    dangerouslySetInnerHTML={{
                    __html:
                        serviceResponse.data?.banner_description &&
                        serviceResponse.data.banner_description,
                    }}
                />
        
                <div className="vbddds">
                    <Link to="/contact-us" className="btn125">
                        Contact Us
                    </Link>
                    <button className="btn126">Get In Touch With Us</button>
                </div>
            </div>
        
            <div className="dbfghsdf col-lg-6">
                {serviceResponse.data?.banner_image && (
                    <img
                    src={`${serviceResponse.image_url}/Templete_31/${serviceResponse.data.banner_image}`}
                    alt=""
                    />
                )}
            </div>
        </div>
    </div>




<div className="fjhfdfgdfg">
    <div className="custom-container">
        <div className="sdfsdfsdf">
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
    
    <div className="fjhfdfgdfg">
        <div className="custom-container">
            <div className="sdfsdfsdf">
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
    
    <div className="uidoiejoijorer py-5">
        <div className="custom-container py-5">
            <h2 className="ijsduihfwejier text-center">{serviceResponse.data?.third_section_title &&
                  serviceResponse.data.third_section_title}<img src="./images/6797439df4b61c870b39c7c5_Vector 179.svg" alt="" /></h2>
            
            <div className="ijiojojoioierr mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 mb-4">
                        <div className="uidneiwjrer_inner p-4">
                            {serviceResponse.data?.fourth_section_image && (
                                <img
                                src={`${serviceResponse.image_url}/Templete_31/${serviceResponse.data.fourth_section_image}`}
                                alt=""
                                />
                            )}
                            <h4>{serviceResponse.data?.fourth_section_title &&
                  serviceResponse.data.fourth_section_title}</h4>
                            
                            <div className="pt-4"
                                dangerouslySetInnerHTML={{
                                __html:
                                    serviceResponse.data?.fourth_section_description &&
                                    serviceResponse.data.fourth_section_description,
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-6 mb-4">
                        <div className="uidneiwjrer_inner p-4">
                            {serviceResponse.data?.fifth_section_image && (
                                <img
                                src={`${serviceResponse.image_url}/Templete_31/${serviceResponse.data.fifth_section_image}`}
                                alt=""
                                />
                            )}
                            <h4>{serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}</h4>
                            
                            <div className="pt-4"
                                dangerouslySetInnerHTML={{
                                __html:
                                    serviceResponse.data?.fifth_section_description &&
                                    serviceResponse.data.fifth_section_description,
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-12 mb-4">
                        <div className="uidneiwjrer_inner p-4">
                            {serviceResponse.data?.sixth_section_image && (
                                <img
                                src={`${serviceResponse.image_url}/Templete_31/${serviceResponse.data.sixth_section_image}`}
                                alt=""
                                />
                            )}
                            <h4>{serviceResponse.data?.sixth_section_title &&
                  serviceResponse.data.sixth_section_title}</h4>
                            
                            <div className="pt-4"
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
    </div>

    <div className="sdmsdjhsds">
        {serviceResponse.data?.last_image && (
            <img
            src={`${serviceResponse.image_url}/Templete_31/${serviceResponse.data.last_image}`}
            alt=""
            />
        )}
    </div>
    <LastSectionComponent />
</main>
    </div>
  )
}
