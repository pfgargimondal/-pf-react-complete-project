import styles from "./BlogDetails.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../http";
import Loader from "../../component/Loader/Loader";
import { Link } from 'react-router-dom';

export const BlogDetails = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("tab-1");
  const [loading, setLoading] = useState(true);
  const [BlogDetails, setBlogDetails] = useState({});
  useEffect(() => {
    const fetchBlogPageData = async () => {
      setLoading(true);
      try {
        const getresponse = await http.get(
          `${process.env.REACT_APP_BLOGDETAILSFETCHAPI}${slug}`
        );
        setBlogDetails(getresponse.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPageData();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  console.log(BlogDetails);

  return (
    <div>
        <main>
      <div className={styles.cvngjhdfdfg}>
        <div className="container">
          <div className={styles.dfgdfgfg}>
            <div className="row">
              <div className="col-lg-8">
                <div className={styles.dfhgdfgfg}>
                  <div className={styles.gmdfjhgd554}>
                    <img src={`${BlogDetails.image_url}/${BlogDetails.data.blog_image}`} alt={BlogDetails.data.blog_title}/>
                  </div>
                  <div className={styles.sdjbfsdhfsd}>
                    {/* <h6>passionate futurist</h6> */}
                    {/* <span>/</span> */}
                    <h6>blog</h6>
                    <span>/</span>
                    <h6>{BlogDetails.data.category_name}</h6>
                  </div>
                  <div className={styles.jkbgf525}>
                    <h2>{BlogDetails.data.blog_title}</h2>
                  </div>

                  <div className={styles.dfndfhgdfgdfgdfgdfg2}>
                    <div className={styles.cfbgdfjhgdfg}>
                      <div className="row">
                        <div className="col-lg-3">
                          <div className={`${styles.fghdfgdfg} d-flex`}>
                            <div className={styles.fdbgdfgdf}>
                              <img src="/images/man.jpg" alt={BlogDetails.data.author_name} />
                            </div>
                            <div className={styles.dfbgdfg}>
                              <h6>{BlogDetails.data.author_name}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className={styles.fdfdf}>
                            <p>
                              <i className="fa-solid fa-calendar-days"></i>
                                {new Date(BlogDetails.data.blog_date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className={styles.fdfdf2}>
                            <p>
                              <i className="fa-solid fa-comment"></i> Comment(08)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.dfbdfd55f}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: BlogDetails.data.long_description,
                        }}
                    />
                  </div>

                  <div className={styles.fjgdfg}>
                    <h6>Share This on </h6>
                    <hr />
                    <div className={styles.dfgdfg}>
                      <img src="/images/socialicon (1).png" alt="" />
                      <img src="/images/socialicon (2).png" alt="" />
                      <img src="/images/socialicon (3).png" alt="" />
                      <img src="/images/socialicon (4).png" alt="" />
                      <img src="/images/socialicon (5).png" alt="" />
                    </div>
                  </div>
                </div>

                <div className={styles.fbnjhdfgdfg}>
                  <div className={styles.dfbgdf522gdf}>
                    <h2>Leave a Reply</h2>
                  </div>
                  <div className={styles.dfbgdrgdfgdf}>
                    <div className={styles.d555fgfh}>
                      <label for="">Comment*</label>
                      <textarea
                        name=""
                        id=""
                        className="form-control"
                        rows="4"
                        cols="4"
                      ></textarea>
                    </div>

                    <div className={styles.d555fgfh}>
                      <label for="">Name*</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>

                    <div className={styles.d555fgfh}>
                      <label for="">Email*</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>

                    <div className={styles.d555fgfh}>
                      <label for="">Website*</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className={styles.drbgdfgsd}>
                      <button>Submit</button>
                    </div>
                  </div>
                </div>

                <div className={styles.nfuihdfgdfg}>
                  <div className={styles.fbgdfgdfg}>
                    <h2>Related Blog</h2>
                  </div>
                  <div className="row">
                    {BlogDetails.related_blogs && BlogDetails.related_blogs.length > 0 ? (
                        BlogDetails.related_blogs.map((realatedBlogs, index) => (
                            <div className="col-lg-6">
                            <div className={styles.dfvdfgdfgfd}>
                                <div className={styles.fhdfgdf}>
                                <img src={`${BlogDetails.image_url}/${realatedBlogs.blog_image}`} alt={realatedBlogs.blog_title} />
                                <p>{realatedBlogs.category_name}</p>
                                </div>
                                <div className={styles.dfndfhgdfgdfgdfgdfg}>
                                <div className={styles.cfbgdfjhgdfg}>
                                    <div className="row">
                                    <div className="col-lg-6">
                                        <div className={`${styles.fghdfgdfg} d-flex`}>
                                        <div className={styles.fdbgdfgdf}>
                                            <img src="/images/man.jpg" alt={realatedBlogs.author_name} />
                                        </div>
                                        <div className={styles.dfbgdfg}>
                                            <h6>{realatedBlogs.author_name}</h6>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={styles.fdfdf}>
                                        <p>{new Date(realatedBlogs.blog_date).toLocaleDateString("en-US", {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric"
                                            })}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className={styles.dfbgdfhgdf}>
                                    <h4>{realatedBlogs.blog_title}</h4>
                                    <p>{realatedBlogs.short_description}</p>
                                    <Link to={`/blog/${realatedBlogs.slug}`}>
                                        <button>Read More..</button>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        ))
                      ) : (
                        <p>No Blogs Available</p>
                      )}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.dfbdfghdfgdfg}>
                  <div className={styles.bgdfhdfgdf}>
                      <ul className={styles.tabs}>
                        {/* <li className="tab-link current" data-tab="tab-1">Popular Blog</li>
                        <li className="tab-link" data-tab="tab-2">Latest Blog</li> */}
                        <li
                          className={`tab-link ${
                            activeTab === "tab-1" ? styles.current : ""
                          }`}
                          data-tab="tab-1"
                          onClick={() => setActiveTab("tab-1")}
                        >
                          Popular Blog
                        </li>
                        <li
                          className={`tab-link ${
                            activeTab === "tab-2" ? styles.current : ""
                          }`}
                          data-tab="tab-2"
                          onClick={() => setActiveTab("tab-2")}
                        >
                          Latest Blog
                        </li>
                      </ul>

                      <div className={styles.dfngfddf5545}>
                        {/* <div id="tab-1" className={`${styles['tab-content']} current`}> */}
                        <div
                          id="tab-1"
                          className={`${styles["tab-content"]} ${
                            activeTab === "tab-1" ? styles.current : ""
                          }`}
                        >
                          <div className={styles.dfdfgdfg}>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={styles.fghnfg}>
                                  <img src="/images/blogg1 (2).png" alt="" />
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className={styles.dfgfgdfg}>
                                  <h6>
                                    Is Your Business Getting Noticed? Get a
                                    Logo.
                                  </h6>
                                  <p>August 17, 2022</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={styles.dfdfgdfg}>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={styles.fghnfg}>
                                  <img src="/images/blogg1 (2).png" alt="" />
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className={styles.dfgfgdfg}>
                                  <h6>
                                    Is Your Business Getting Noticed? Get a
                                    Logo.
                                  </h6>
                                  <p>August 17, 2022</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={styles.dfdfgdfg}>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={styles.fghnfg}>
                                  <img src="/images/blogg1 (2).png" alt="" />
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className={styles.dfgfgdfg}>
                                  <h6>
                                    Is Your Business Getting Noticed? Get a
                                    Logo.
                                  </h6>
                                  <p>August 17, 2022</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className={styles.dfdfgdfg}>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className={styles.fghnfg}>
                                  <img src="/images/blogg1 (2).png" alt="" />
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className={styles.dfgfgdfg}>
                                  <h6>
                                    Is Your Business Getting Noticed? Get a
                                    Logo.
                                  </h6>
                                  <p>August 17, 2022</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div id="tab-2" className={`${styles['tab-content']}`}> */}
                        <div
                          id="tab-2"
                          className={`${styles["tab-content"]} ${
                            activeTab === "tab-2" ? styles.current : ""
                          }`}
                        >
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </div>
                      </div>
                    </div>
                </div>

                <div className={styles.dfjgbdfdfgf}>
                  <div className={styles.dfgndf}>
                    <h4>Explore Topics</h4>
                  </div>
                  <div className={styles.dfgfgdf5654}>
                    <div className={styles.dfgdfg}>
                      <p>
                        <i className="fa-solid fa-chevron-right"></i>{" "}
                        <span>Digital Marketing</span>{" "}
                      </p>
                    </div>
                    <div className={styles.fdgbdfg}>
                      <h6>(10)</h6>
                    </div>
                  </div>

                  <div className={styles.dfgfgdf5654}>
                    <div className={styles.dfgdfg}>
                      <p>
                        <i className="fa-solid fa-chevron-right"></i>{" "}
                        <span>Web Design</span>{" "}
                      </p>
                    </div>
                    <div className={styles.fdgbdfg}>
                      <h6>(10)</h6>
                    </div>
                  </div>

                  <div className={styles.dfgfgdf5654}>
                    <div className={styles.dfgdfg}>
                      <p>
                        <i className="fa-solid fa-chevron-right"></i>{" "}
                        <span>Web Development</span>{" "}
                      </p>
                    </div>
                    <div className={styles.fdgbdfg}>
                      <h6>(10)</h6>
                    </div>
                  </div>

                  <div className={styles.dfgfgdf5654}>
                    <div className={styles.dfgdfg}>
                      <p>
                        <i className="fa-solid fa-chevron-right"></i>{" "}
                        <span>Advance Excel</span>{" "}
                      </p>
                    </div>
                    <div className={styles.fdgbdfg}>
                      <h6>(10)</h6>
                    </div>
                  </div>

                  <div className={styles.dfgfgdf5654}>
                    <div className={styles.dfgdfg}>
                      <p>
                        <i className="fa-solid fa-chevron-right"></i>{" "}
                        <span>Seo Marketing</span>{" "}
                      </p>
                    </div>
                    <div className={styles.fdgbdfg}>
                      <h6>(10)</h6>
                    </div>
                  </div>

                  <div className={styles.dfgfgdf5654}>
                    <div className={styles.dfgdfg}>
                      <p>
                        <i className="fa-solid fa-chevron-right"></i>{" "}
                        <span>Digital Marketing</span>{" "}
                      </p>
                    </div>
                    <div className={styles.fdgbdfg}>
                      <h6>(10)</h6>
                    </div>
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
