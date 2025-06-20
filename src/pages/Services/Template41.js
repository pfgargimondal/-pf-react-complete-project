import "./Css/Template41.css";
import { useState } from "react";
import ServiceForm from "./FormComponent/ServiceForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Template41 = ({ serviceResponse, slug }) =>{
    const [loading, setLoading] = useState(false);
     const navigate = useNavigate();
  return (
    <div>
        {loading && <Loader />}
      <main>
            <div className="gdfbdfdfgdf554">
        <div className="dfgjhfgd">
    
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
                        src={`${serviceResponse.image_url}/Templete_41/${serviceResponse.data.banner_image}`}
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

    <ServiceForm loading={setLoading} slug={slug} />

    <div className="dfngjhdfgdfg">
        <div className="custom-container">
            <div className="dfghdfgdf">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="cfbgjhcfdf">
                            {serviceResponse.data?.third_section_image && (
                                <img
                                    src={`${serviceResponse.image_url}/Templete_41/${serviceResponse.data.third_section_image}`}
                                    alt=""
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="fgydfgdfg">
                            <h2>{serviceResponse.data?.third_section_title &&
                  serviceResponse.data.third_section_title}</h2>

                            <div
                                dangerouslySetInnerHTML={{
                                __html:
                                    serviceResponse.data?.third_section_description &&
                                    serviceResponse.data.third_section_description,
                                }}
                            />
                            <button onClick={() => navigate("/contact-us")}>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="fjhfdfgdfg">
        <div className="custom-container">
            <div className="sdfsdfsdf">
                <h2>{serviceResponse.data?.fourth_section_title &&
                  serviceResponse.data.fourth_section_title}</h2>

                <div className="pt-4"
                    dangerouslySetInnerHTML={{
                    __html:
                        serviceResponse.data?.fourth_section_description &&
                        serviceResponse.data.fourth_section_description,
                    }}
                />
            </div>

        </div>
    </div>




    <div className="jhbdfbgdfg">
        <div className="custom-container">
            {/* <div className="guifgfgfg">
                <h2>Where does it come from</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin</p>
            </div> */}

            <div className="dfvgfdfvgdfg">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="dfbdfdf">
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="fbdf">
                                        {serviceResponse.data?.fifth_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_41/${serviceResponse.data.fifth_section_image}`}
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="dfdf55g">
                                        <h4>{serviceResponse.data?.fifth_section_title &&
                  serviceResponse.data.fifth_section_title}</h4>
                                        <div
                                            dangerouslySetInnerHTML={{
                                            __html:
                                                serviceResponse.data?.fifth_section_description &&
                                                serviceResponse.data.fifth_section_description,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                         <div className="dfbdfdf">
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="fbdf">
                                        {serviceResponse.data?.sixth_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_41/${serviceResponse.data.sixth_section_image}`}
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="dfdf55g">
                                        <h4>{serviceResponse.data?.sixth_section_title &&
                  serviceResponse.data.sixth_section_title}</h4>
                                        <div
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
                    <div className="col-lg-6">
                        <div className="jhdfbdf55">
                                 <div className="row">
                                <div className="col-lg-2">
                                    <div className="fbdf">
                                        {serviceResponse.data?.seven_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_41/${serviceResponse.data.seven_section_image}`}
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="dfdf55g">
                                        <h4>{serviceResponse.data?.seven_section_title &&
                  serviceResponse.data.seven_section_title}</h4>
                                        <div
                                            dangerouslySetInnerHTML={{
                                            __html:
                                                serviceResponse.data?.seven_section_description &&
                                                serviceResponse.data.seven_section_description,
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
    </div>
    <LastSectionComponent />
      </main>
    </div>
  )
}
