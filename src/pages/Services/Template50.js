import styles from "./Css/Template50.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template50 = ({ serviceResponse, slug }) => {
    const [loading, setLoading] = useState(false);
    return (
        <div>
            {loading && <Loader />}
            <main>
                <div className={styles.gdfbdfdfgdf554}>
                    <div className={styles.dfgjhfgd}>
                        <div className={`${styles.sdfghdfgdf} col-lg-6`}>
                            <h1 className="mt-0 mb-0">
                                {serviceResponse.data?.banner_title && serviceResponse.data.banner_title}
                            </h1>
                            <p className="mt-3 mb-5">
                                {serviceResponse.data?.banner_description && serviceResponse.data.banner_description}
                            </p>
                            <div className={styles.vbddds}>
                                <Link to="/contact-us" className="btn125">Contact Us</Link>
                                <button className="btn126">Get In Touch With Us</button>
                            </div>
                        </div>

                        <div className={`${styles.dbfghsdf} col-lg-6`}>
                            {serviceResponse.data?.banner_image && (
                                <img
                                    src={`${serviceResponse.image_url}/Templete_50/${serviceResponse.data.banner_image}`}
                                    alt=""
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.fjhfdfgdfg}>
                    <div className="custom-container">
                        <div className={styles.sdfsdfsdf}>
                            <h2>{serviceResponse.data?.second_section_title && serviceResponse.data.second_section_title}</h2>
                            <div
                                className="pt-4"
                                dangerouslySetInnerHTML={{
                                    __html: serviceResponse.data?.second_section_description && serviceResponse.data.second_section_description,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <ServiceEnquiryForm loading={setLoading} slug={slug} />

                <div className={styles.bfghsdbfsd}>
                    <div className="custom-container">
                        <div className={styles.cfjdfgdfg}>
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className={styles.fgbdfgf}>
                                        <h2>{serviceResponse.data?.third_section_title && serviceResponse.data.third_section_title}</h2>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className={styles.cfnghufh}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: serviceResponse.data?.third_section_description && serviceResponse.data.third_section_description,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.dfgjhdfgdfg}>
                            <div className="row">
                                {["one", "two", "three"].map((suffix, i) => (
                                    <div className="col-lg-4" key={i}>
                                        <div className={styles[`dffghdf${suffix === "one" ? "" : suffix}`]}>
                                            <div className={styles.jhfg525}>
                                                {serviceResponse.data?.[`third_section_image_${suffix}`] && (
                                                    <img
                                                        src={`${serviceResponse.image_url}/Templete_50/${serviceResponse.data[`third_section_image_${suffix}`]}`}
                                                        alt=""
                                                    />
                                                )}
                                            </div>
                                            <div className={styles.df65bdf}>
                                                <h4>
                                                    {serviceResponse.data?.[`third_section_title_${suffix}`] &&
                                                        serviceResponse.data[`third_section_title_${suffix}`]}
                                                </h4>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            serviceResponse.data?.[`third_section_description_${suffix}`] &&
                                                            serviceResponse.data[`third_section_description_${suffix}`],
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.dfbngjhdfgdfg}>
                    <div className="custom-container">
                        <div className={styles.fnjgyhdfgdfg}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={styles.fgjbdfg}>
                                        <h2>{serviceResponse.data?.fourth_section_title && serviceResponse.data.fourth_section_title}</h2>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: serviceResponse.data?.fourth_section_description && serviceResponse.data.fourth_section_description,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={styles.fndfjhgdfg}>
                                        {serviceResponse.data?.fourth_section_image && (
                                            <img
                                                src={`${serviceResponse.image_url}/Templete_50/${serviceResponse.data.fourth_section_image}`}
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.fjhfdfgdfg}>
                    <div className="custom-container">
                        <div className={styles.sdfsdfsdf}>
                            <h2>{serviceResponse.data?.fifth_section_title && serviceResponse.data.fifth_section_title}</h2>
                            <div
                                className="pt-4"
                                dangerouslySetInnerHTML={{
                                    __html: serviceResponse.data?.fifth_section_description && serviceResponse.data.fifth_section_description,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <LastSectionComponent />
            </main>

        </div>
    )
}
