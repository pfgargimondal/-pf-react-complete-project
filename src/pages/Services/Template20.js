import "./Css/Template20.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template20 =({ serviceResponse, slug }) =>{
    const [loading, setLoading] = useState(false);
  return (
    <div>
        {loading && <Loader />}
        <main>
            <div className="dfgjhfgd">
    <div className="sdfghdfgdf col-lg-6">
        <h1 className="mt-0 mb-0">{serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}</h1>

        <p className="mt-3 mb-5">{serviceResponse.data?.banner_description &&
                serviceResponse.data.banner_description}</p>

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
            src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.banner_image}`}
            alt=""
            />
        )}
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



 <ServiceEnquiryForm loading={setLoading} slug={slug} />

<div className="dfbghdfgdfgdf">
    <div className="custom-container">

        <div className="fdnfkdnfdg">
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

<div className="dfbjhfdfgdf">
    <div className="custom-container">
        <div className="vgbfdf">
            <div className="row">
                <div className="col-lg-7">
                    <div className="fbgdfgdfgdf">
                        <h2>{serviceResponse.data?.fourth_section_title &&
                  serviceResponse.data.fourth_section_title}</h2>
            
                        <div className="py-4 mb-0"
                            dangerouslySetInnerHTML={{
                            __html:
                                serviceResponse.data?.fourth_section_description &&
                                serviceResponse.data.fourth_section_description,
                            }}
                        />
                        <button>Get started</button>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="dgndfgdfgdf">
                        {serviceResponse.data?.fourth_section_image && (
                            <img
                            src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.fourth_section_image}`}
                            alt=""
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<div className="dfbjhfdfgdf">
    <div className="custom-container">
        <div className="vgbfdf">
            <div className="row">
                <div className="col-lg-5">
                    <div className="dgndfgdfgdf">
                        {serviceResponse.data?.fifth_section_image && (
                            <img
                            src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.fifth_section_image}`}
                            alt=""
                            />
                        )}
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="fbgdfgdfgdf">
                        <h2>{serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}</h2>
                        <div className="py-4 mb-0"
                            dangerouslySetInnerHTML={{
                            __html:
                                serviceResponse.data?.fifth_section_description &&
                                serviceResponse.data.fifth_section_description,
                            }}
                        />
                        <button>Get started</button>

                    </div>
                </div>

            </div>
        </div>
    </div>

</div>


<div className="fdnbvgdfgdfgdf">
    <div className="custom-container">
        <div className="cfbvhdfgdf">
            <h2 className="text-center">{serviceResponse.data?.sixth_section_title &&
                  serviceResponse.data.sixth_section_title}</h2>
       
            <div className="text-center py-4 mb-0"
                dangerouslySetInnerHTML={{
                __html:
                    serviceResponse.data?.sixth_section_description &&
                    serviceResponse.data.sixth_section_description,
                }}
            />
        </div>
    </div>
</div>


<div className="xnjhxffgdf">
    {serviceResponse.data?.featured_image && (
        <img
        src={`${serviceResponse.image_url}/Templete_20/${serviceResponse.data.featured_image}`}
        alt=""
        />
    )}
</div>

<LastSectionComponent />
        </main>
    </div>
  )
}
