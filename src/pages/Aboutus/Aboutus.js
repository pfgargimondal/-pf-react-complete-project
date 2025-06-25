import styles from "./Aboutus.module.css";
import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import http from "../../http";
import Loader from "../../component/Loader/Loader";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export const Aboutus = () => {
  useTitle("About Us");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [AboutUsDetails, setAboutUsDetails] = useState({});
    useEffect(() => {
      const fetchAboutUsData = async () => {
        setLoading(true);
          try {
          const getresponse = await http.get(`${process.env.REACT_APP_ABOUTUSAPI}`);
          setAboutUsDetails(getresponse.data);
  
          } catch (error) {
              console.error("Error fetching users:", error);
          } finally{
              setLoading(false);
          }
      }; 
  
      fetchAboutUsData();
      }, []);

      console.log(AboutUsDetails);
  
    if (loading) {
      return <Loader />;
    }

  return (
    <div>

      <main>
        <div className={styles.gdfbdfdfgdf554}>
          <div className={styles.dfgjhfgd}>
            <div className={`${styles.sdfghdfgdf} col-lg-6`}>
              <h1 className="mt-0 mb-0">{AboutUsDetails.data?.banner_title && (AboutUsDetails.data.banner_title)}</h1>

              <p className="mt-3 mb-5">
                {AboutUsDetails.data?.banner_description && (AboutUsDetails.data.banner_description)}
              </p>

              <div className={styles.vbddds}>
                <Link to="/contact-us" className="btn125">
                  Contact Us
                </Link>
                <button className="btn126">Get In Touch With Us</button>
              </div>
            </div>

            <div className={`${styles.dbfghsdf} col-lg-6`}>
              {AboutUsDetails.data?.banner_image && (
                <img
                  src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.banner_image}`}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.dfbjhdfdf}>
          <div className="container">
            <div className={styles.gdfbgdfg}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.dfbgdfg}>
                    {AboutUsDetails.data?.second_section_main_image && (
                      <img
                        src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.second_section_main_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.dfbgfhdgjkdfnd54574}>
                    <div className={styles.sfbffsdf}>
                      {/* <h6>About Us</h6> */}
                      <h2>{AboutUsDetails.data?.second_section_title && (AboutUsDetails.data.second_section_title)}</h2>
                      
                      <div
                        dangerouslySetInnerHTML={{
                          __html: AboutUsDetails.data?.second_section_description && (AboutUsDetails.data.second_section_description),
                        }}
                      />
                    </div>
                    <div className={styles.sdfb5585dfgfg}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className={styles.sdbfdf}>
                            <p>
                              <i className="fa-solid fa-square-check"></i> 
                              {AboutUsDetails.data?.second_section_sub_title_one && (AboutUsDetails.data.second_section_sub_title_one)}
                            </p>
                            <p>
                              <i className="fa-solid fa-square-check"></i> 
                              {AboutUsDetails.data?.second_section_sub_title_two && (AboutUsDetails.data.second_section_sub_title_two)}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            <i className="fa-solid fa-square-check"></i>
                            {AboutUsDetails.data?.second_section_sub_title_three && (AboutUsDetails.data.second_section_sub_title_three)}
                          </p>
                          <p>
                            <i className="fa-solid fa-square-check"></i> 
                            {AboutUsDetails.data?.second_section_sub_title_four && (AboutUsDetails.data.second_section_sub_title_four)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.dfgdgdfgd78fg}>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className={styles.dfgnbdf15gf}>
                            <h2>{AboutUsDetails.data?.completed_projects && (AboutUsDetails.data.completed_projects)}+</h2>
                            <p>Completed Projects</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className={styles.dfgnbdf15gf}>
                            <h2>{AboutUsDetails.data?.satisfied_customers && (AboutUsDetails.data.satisfied_customers)}+</h2>
                            <p>Satisfied Customers</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className={styles.dfgnbdf15gf}>
                            <h2>{AboutUsDetails.data?.winning_awards && (AboutUsDetails.data.winning_awards)}+</h2>
                            <p>Winning Awards</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.fjbdfhgd}>
          <div className="custom-container">
            <div className={styles.fgdffdg}>
              <h2>{AboutUsDetails.data?.third_section_title && (AboutUsDetails.data.third_section_title)}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: AboutUsDetails.data?.third_section_description && (AboutUsDetails.data.third_section_description),
                }}
              />
            </div>
            <div className={styles.dfsdfsdfgdfg}>
              <div className="row">
                <div className="col-lg-5">
                  <div className={styles.sdfbh55dfgsd}>
                    {AboutUsDetails.data?.third_section_sub_image_one && (
                      <img
                        src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.third_section_sub_image_one}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className={styles.fdghdf55gdf}>
                    <h2>{AboutUsDetails.data?.third_section_sub_title_one && (AboutUsDetails.data.third_section_sub_title_one)}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                          __html: AboutUsDetails.data?.third_section_sub_description_one && (AboutUsDetails.data.third_section_sub_description_one),
                        }}
                      />
                    <button onClick={() => navigate('/contact-us')}>
                        Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.dfsdfsdfgdfg}>
              <div className="row">
                <div className="col-lg-5">
                  <div className={styles.sdfbh55dfgsd2}>
                    {AboutUsDetails.data?.third_section_sub_image_two && (
                      <img
                        src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.third_section_sub_image_two}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className={styles.fdghdf55gdf2}>
                    <h2>{AboutUsDetails.data?.third_section_sub_title_two && (AboutUsDetails.data.third_section_sub_title_two)}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                          __html: AboutUsDetails.data?.third_section_sub_description_two && (AboutUsDetails.data.third_section_sub_description_two),
                        }}
                      />
                    <button onClick={() => navigate('/contact-us')}>
                        Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sdfghyudfgdfg}>
          <div className="custom-container">
            <div className={styles.fgdfgdfg}>
              <div className="row">
                <div className="col-lg-6">
                  <div className={styles.sdfsdf325544}>
                    <div className={styles.dfbgdf555}>
                      <h6>{AboutUsDetails.data?.fourth_section_heading && (AboutUsDetails.data.fourth_section_heading)}</h6>
                      <h2>{AboutUsDetails.data?.fourth_section_title && (AboutUsDetails.data.fourth_section_title)}</h2>
                    </div>
                    <div className={styles.dfdfhdf565}>
                      <div className={styles.dsdfsd}>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className={styles.dfbdfg328}>
                              {AboutUsDetails.data?.fourth_section_sub_image_one && (
                                <img
                                  src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.fourth_section_sub_image_one}`}
                                  alt=""
                                />
                              )}
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className={styles.dfgbdfgdf}>
                              <h5>{AboutUsDetails.data?.fourth_section_sub_title_one && (AboutUsDetails.data.fourth_section_sub_title_one)}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: AboutUsDetails.data?.fourth_section_sub_description_one && (AboutUsDetails.data.fourth_section_sub_description_one),
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.dsdfsd}>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className={styles.dfbdfg328}>
                              {AboutUsDetails.data?.fourth_section_sub_image_two && (
                                <img
                                  src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.fourth_section_sub_image_two}`}
                                  alt=""
                                />
                              )}
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className={styles.dfgbdfgdf}>
                              <h5>{AboutUsDetails.data?.fourth_section_sub_title_two && (AboutUsDetails.data.fourth_section_sub_title_two)}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: AboutUsDetails.data?.fourth_section_sub_description_two && (AboutUsDetails.data.fourth_section_sub_description_two),
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.dsdfsd}>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className={styles.dfbdfg328}>
                              {AboutUsDetails.data?.fourth_section_sub_image_three && (
                                <img
                                  src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.fourth_section_sub_image_three}`}
                                  alt=""
                                />
                              )}
                            </div>
                          </div>
                          <div className="col-lg-10">
                            <div className={styles.dfgbdfgdf}>
                              <h5>{AboutUsDetails.data?.fourth_section_sub_title_three && (AboutUsDetails.data.fourth_section_sub_title_three)}</h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: AboutUsDetails.data?.fourth_section_sub_description_three && (AboutUsDetails.data.fourth_section_sub_description_three),
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className={styles.fghdfgdf6565g}>
                    <div className={styles.jdfvgdf}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: AboutUsDetails.data?.fourth_section_description && (AboutUsDetails.data.fourth_section_description),
                        }}
                      />
                    </div>
                    <div className={styles.dfhdsfsf}>
                      {AboutUsDetails.data?.fourth_section_image && (
                        <img
                          src={`${AboutUsDetails.image_url}/${AboutUsDetails.data.fourth_section_image}`}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
