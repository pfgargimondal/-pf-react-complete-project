import "./Css/Template30.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";


export const Template30 =({ serviceResponse, slug }) =>{
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
            src={`${serviceResponse.image_url}/Template_30/${serviceResponse.data.banner_image}`}
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
            <div
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

   <div className="dfbjhfdfgdf">
        <div className="custom-container">
            <div className="vgbfdf">
                <div className="row">
                      <div className="col-lg-5">
                        <div className="dgndfgdfgdf">
                            {serviceResponse.data?.third_section_image && (
                                <img
                                src={`${serviceResponse.image_url}/Template_30/${serviceResponse.data.third_section_image}`}
                                alt=""
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="fbgdfgdfgdf">
                            <h2>{serviceResponse.data?.third_section_title &&
                  serviceResponse.data.third_section_title}</h2>
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
                </div>
            </div>
        </div>

    </div>



    <div className="sdcfnhjdsbfdsfds">
        <div className="custom-container">
            <div className="dndhbdsfsdf">
                <h2>{serviceResponse.data?.fourth_section_title &&
                  serviceResponse.data.fourth_section_title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                    __html:
                        serviceResponse.data?.fourth_section_description &&
                        serviceResponse.data.fourth_section_description,
                    }}
                />
            </div>

            <div className="cvbhjfdbfdbd">
                <div className="row">
                      <div className="col-lg-6">
                        <div className="fvnufdff">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bffdd5522">
                                        {serviceResponse.data?.fourth_section_image_one && (
                                            <img
                                            src={`${serviceResponse.image_url}/Template_30/${serviceResponse.data.fourth_section_image_one}`}
                                            alt=""
                                            />
                                        )}
                                    </div>
                                    <div className="bhdfuggf">
                                        <h6>
                                            {serviceResponse.data?.fourth_section_title_one &&
                  serviceResponse.data.fourth_section_title_one}
                                        </h6>
                                        <p>{serviceResponse.data?.fourth_section_description_one &&
                  serviceResponse.data.fourth_section_description_one}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                      <div className="col-lg-6">
                        <div className="fvnufdff">
                            <div className="row">
                                
                                <div className="col-lg-12">
                                    <div className="bffdd5522">
                                        {serviceResponse.data?.fourth_section_image_two && (
                                            <img
                                            src={`${serviceResponse.image_url}/Template_30/${serviceResponse.data.fourth_section_image_two}`}
                                            alt=""
                                            />
                                        )}
                                    </div>
                                    <div className="bhdfuggf">
                                        <h6>
                                            {serviceResponse.data?.fourth_section_title_two &&
                  serviceResponse.data.fourth_section_title_two}
                                        </h6>
                                        <p>{serviceResponse.data?.fourth_section_description_two &&
                  serviceResponse.data.fourth_section_description_two}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     <div className="sdcbvghsdcsddvfsd">
        <div className="custom-container">
            <div className="hsdffdvffdfd">
                <h2>{serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}</h2>

                <div
                    dangerouslySetInnerHTML={{
                    __html:
                        serviceResponse.data?.fifth_section_description &&
                        serviceResponse.data.fifth_section_description,
                    }}
                />
                {/* <div className="fdnbujfbf mt-4">
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

    <LastSectionComponent />
      </main>
    </div>
  )
}
