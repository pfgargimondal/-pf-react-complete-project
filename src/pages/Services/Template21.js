import "./Css/Template21.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template21 =({ serviceResponse, slug }) => {
    const [loading, setLoading] = useState(false);

    const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    {
      id: 'tab1',
      title: serviceResponse.data?.fourth_section_tab_one,
      heading: serviceResponse.data?.fourth_section_title_one,
      description: serviceResponse.data?.fourth_section_description_one,
    },
    {
      id: 'tab2',
      title: serviceResponse.data?.fourth_section_tab_two,
      heading: serviceResponse.data?.fourth_section_title_two,
      description: serviceResponse.data?.fourth_section_description_two,
    },
    {
      id: 'tab3',
      title: serviceResponse.data?.fourth_section_tab_three,
      heading: serviceResponse.data?.fourth_section_title_three,
      description: serviceResponse.data?.fourth_section_description_three,
    },
  ];

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
                src={`${serviceResponse.image_url}/Templete_21/${serviceResponse.data.banner_image}`}
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
    <div className="dfbjhfdfgdf">
        <div className="custom-container10">
            <div className="vgbfdf">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="fbgdfgdfgdf">
                            <h2>{serviceResponse.data?.third_section_title &&
                  serviceResponse.data.third_section_title}</h2>
                            
                            <div
                                dangerouslySetInnerHTML={{
                                __html:
                                    serviceResponse.data?.third_section_description_one &&
                                    serviceResponse.data.third_section_description_one,
                                }}
                            />
                            <button>Get started</button>
                        </div>
                    </div>
                    
                    <div className="col-lg-5">
                        <div className="dgndfgdfgdf">
                            {serviceResponse.data?.third_section_image && (
                                <img
                                src={`${serviceResponse.image_url}/Templete_21/${serviceResponse.data.third_section_image}`}
                                alt=""
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        
    <div className="fjhfdfgdfg">
        <div className="custom-container">
            <div className="sdfsdfsdf">
               <div className="pt-4"
                    dangerouslySetInnerHTML={{
                    __html:
                        serviceResponse.data?.third_section_description_two &&
                        serviceResponse.data.third_section_description_two,
                    }}
                />
            </div>
        </div>
    </div>
    
    <div className="zsdcvdfgfryhfre py-5">
        <div className="container-fluid px-5">
            <div className="tab-container d-flex">
                <div className="tab-menu me-4">
                    <ul>
                        {tabs.map((tab) => (
                            <li key={tab.id}>
                            <a
                                href="#"
                                className={`tab-a ${activeTab === tab.id ? 'active-a' : ''}`}
                                data-id={tab.id}
                                onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(tab.id);
                                }}
                            >
                                {tab.title}
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="jdneiuwrrrww_container">
                    {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
                        data-id={tab.id}>
                        <h2>{tab.heading}</h2>
                        <div
                        dangerouslySetInnerHTML={{
                            __html: tab.description || '',
                        }}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    
    <div className="xnjhxffgdf">
        {serviceResponse.data?.featured_image && (
            <img
            src={`${serviceResponse.image_url}/Templete_21/${serviceResponse.data.featured_image}`}
            alt=""
            />
        )}
    </div>
    <LastSectionComponent />
</main>
    </div>
  )
}
