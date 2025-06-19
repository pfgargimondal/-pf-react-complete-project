import React, { useState, useEffect } from "react";
import "./Css/OffPageSEOServices.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm from "./FormComponent/ServiceForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const OffPageSEOServices = () => {

      const [inputs, setInputs] = useState({
        name: "",
        phone_number: "",
        email: "",
        website_url: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({});
      const [loading, setLoading] = useState(false);
    
      const submitForm = async (e) => {
        e.preventDefault();
    
        const validationErrors = validateInputs(inputs); // 👈 pass inputs
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
    
        setErrors({}); // Clear errors
        setLoading(true); // show loader
    
        try {
          const response = await http.post("/add-seoService-enquiry", inputs);
    
          if (response.data.success) {
            toast(response.data.message, {
              style: {
                background: "#2ecc71",
                color: "#fff",
              },
            });
    
            setInputs({
              name: "",
              phone_number: "",
              email: "",
              website_url: "",
              message: "",
            });
          }
        } catch (error) {
          if (error.response?.data?.message) {
            toast.error(error.response.data.message);
          } else {
            toast.error("Something went wrong.");
          }
        } finally {
          setLoading(false);
        }
      };
      
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div class="dfgjhfgd">
          <div class="sdfghdfgdf col-lg-6">
            <h1 class="mt-0 mb-0">Off Page Seo Services Company</h1>

            <p class="mt-3 mb-5">
              Learn all about what CRM is, what it does and how it can improve
              your customer relationships.
            </p>

            <div class="vbddds">
              <button class="btn125">Contact Us</button>
              <button class="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div class="dbfghsdf col-lg-6">
            <img src="/images/dmbnnr.png" alt="" />
          </div>
        </div>

        <div class="fjhfdfgdfg">
          <div class="custom-container">
            <div class="sdfsdfsdf">
              <h2>
                Strengthen Your Online Authority with Off-Page SEO That Works
              </h2>

              <p class="pt-4">
                Off-Page SEO is all about building your website’s credibility,
                trust, and popularity across the web. Our Off-Page SEO services
                are designed to boost your brand's visibility by earning
                high-quality backlinks, increasing social signals, and enhancing
                your digital footprint. We focus on ethical, white-hat link
                building strategies through guest posting, influencer outreach,
                business citations, social bookmarking, and more — all tailored
                to your niche and goals.
              </p>
              <p>
                We help you gain backlinks from authoritative websites that
                matter in your industry, which not only drives referral traffic
                but also improves your domain authority and ranking on Google.
                Additionally, we monitor competitor activity, track link
                performance, and consistently refine your off-page SEO strategy
                for long-term results. Whether you're looking to build brand
                recognition, improve trust signals, or rank for competitive
                keywords — our off-page efforts give your website the push it
                needs to rise above the competition.
              </p>
            </div>
          </div>
        </div>
        <ServiceForm
          inputs={inputs}
          setInputs={setInputs}
          submitForm={submitForm}
          errors={errors}
        />

        <div class="dfbjhfdfgdf">
          <div class="custom-container">
            <div class="vgbfdf">
              <div class="row">
                <div class="col-lg-5">
                  <div class="dgndfgdfgdf">
                    <img src="./images/paypp2.png" alt="" />
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="fbgdfgdfgdf">
                    <h2>Build Trust & Authority with Proven Off-Page SEO</h2>
                    <p>
                      Boost your website’s credibility with strategic off-page
                      SEO. From high-quality backlinks to brand mentions and
                      social signals, we help improve your search engine
                      rankings and online reputation using 100% white-hat
                      methods.
                    </p>
                    <button>Get started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cffbvbhjfdbvdfvgvd">
          <div class="custom-container">
            <div class="fkuyfdfrdgf">
              <h2>Elevate Your Rankings with Smart Off-Page SEO</h2>
              <p>
                Our off-page SEO strategies focus on building powerful
                backlinks, improving domain authority, and increasing your
                site’s visibility across the web — all through ethical and
                effective outreach methods.
              </p>
            </div>

            <div class="fvbnjfdvfdgfd">
              <div class="row">
                <div class="col-lg-6">
                  <div class="fhvgfdfd">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="ujhfgfg">
                          <img src="./images/iconsoff (1).png" alt="" />
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="fdbvhjfyfdg">
                          <h6>High-authority backlink building</h6>
                          <p>
                            Improve your site's trust and ranking with powerful
                            off-page SEO tactics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="fhvgfdfd">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="ujhfgfg">
                          <img src="./images/iconsoff (2).png" alt="" />
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="fdbvhjfyfdg">
                          <h6>High-authority backlink building</h6>
                          <p>
                            Improve your site's trust and ranking with powerful
                            off-page SEO tactics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="fhvgfdfd">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="ujhfgfg">
                          <img src="./images/iconsoff (3).png" alt="" />
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="fdbvhjfyfdg">
                          <h6>High-authority backlink building</h6>
                          <p>
                            Improve your site's trust and ranking with powerful
                            off-page SEO tactics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="fhvgfdfd">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="ujhfgfg">
                          <img src="./images/iconsoff (4).png" alt="" />
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="fdbvhjfyfdg">
                          <h6>High-authority backlink building</h6>
                          <p>
                            Improve your site's trust and ranking with powerful
                            off-page SEO tactics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="fhvgfdfd">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="ujhfgfg">
                          <img src="./images/iconsoff (5).png" alt="" />
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="fdbvhjfyfdg">
                          <h6>High-authority backlink building</h6>
                          <p>
                            Improve your site's trust and ranking with powerful
                            off-page SEO tactics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="fhvgfdfd">
                    <div class="row">
                      <div class="col-lg-2">
                        <div class="ujhfgfg">
                          <img src="./images/iconsoff (6).png" alt="" />
                        </div>
                      </div>
                      <div class="col-lg-10">
                        <div class="fdbvhjfyfdg">
                          <h6>High-authority backlink building</h6>
                          <p>
                            Improve your site's trust and ranking with powerful
                            off-page SEO tactics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="fjhfdfgdfg">
          <div class="custom-container">
            <div class="sdfsdfsdf">
              <h2>Grow Your Online Presence with Strategic Off-Page SEO</h2>

              <p class="pt-4">
                Off-page SEO plays a vital role in improving your website’s
                authority, visibility, and ranking across search engines. While
                on-page SEO optimizes what’s on your site, off-page SEO focuses
                on what others say about it — building your reputation through
                backlinks, mentions, and external signals.
              </p>
              <p>
                Our strategic off-page SEO service includes high-quality link
                building, guest posting on niche-relevant websites, social
                bookmarking, local citations, and influencer outreach. We follow
                only white-hat practices to ensure long-term, sustainable
                results that align with Google’s guidelines.
              </p>
              <p>
                By increasing the number of reputable sources linking to your
                site, we help boost your domain authority and attract more
                organic traffic. Whether you’re a local business or a global
                brand, our off-page SEO approach strengthens your online
                presence and supports your overall digital marketing strategy.
              </p>
            </div>
          </div>
        </div>
        <LastSectionComponent />
      </main>
    </div>
  );
};
