import "./Css/WebDesign.css";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm  from "./FormComponent/ServiceForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const WebDesign = () => {
    const servicesSettings = {
        dots: true,
        arrows: true,
        loop: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


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
          const response = await http.post("/add-webDesign-enquiry", inputs);
    
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
        <>
        {loading && <Loader />}
            <div className="bannerbg" style={{
                      backgroundImage:
                        "url(./images/497a54c0-92ed-4d12-afe0-6fd9ae13350b.png)",
                    }}>
                <div className="container">
                    <div className="jhfdfgdf">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="bhjdfdfgdfg">
                                    <div className="ngg55 d-flex">
                                        <h6>Delight your Customers</h6>
                                        <div className="dfngfg"></div>
                                    </div>
                                    <h2>Web Design Services Company</h2>
                                    <p>
                                        We are equipped with an updated technical knowledge to serve our
                                        customers properly. Our method of application maintains the
                                        industry.
                                    </p>
                                    <div className="btn-group">
                                        <button className="fgdfg">View More Details</button>
                                        <button className="fgdfg55">Contact Us</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bgbgft5">
                                    <img src="./images/web-design.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-m-s-c-section-1 py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="iuhnuihwer_left position-relative">
                                <img src="images/web-design-second.png" alt="" />
                                {/* <img src="images/img2.png" alt="" /> */}
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="iuhnuihwer_right">
                                <h2>Want To Grow Your Business? Take Our Hands!</h2>
                                <p>
                                    If it is quality work that you are seeking and have a deadline to
                                    meet, Kreative Machinez would be the ideal choice for you. We are
                                    the best online catalyst that you can find.
                                </p>
                                <p>
                                    If it is quality work that you are seeking and have a deadline to
                                    meet, Kreative Machinez would be the ideal choice for you. We are
                                    the best online catalyst that you can find. As we aim at making
                                    your website more visible and profitable, we prefer to tackle all
                                    our projects head on. Intricate research procedures and
                                    implementation of the best tools in the industry are our
                                    specialties. Conversions and revenues are what we promise and we
                                    believe in keeping the promises we make.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="okmdlk_iunerwer">
                <div className="row">
                    <div className="col-lg-4 pe-0 mb-3">
                        <div className="yubnwniuqe p-5">
                            <div className="d-flex align-items-center">
                                <div className="unnhiqwe p-3 me-4">
                                    <img
                                        src="images/79f1e53d-36ac-4997-a310-e2b32c4277fe.png"
                                        alt=""
                                    />
                                </div>
                                <div className="jikbhdikweoprwe">
                                    <h4 className="mb-1">Trusted Services</h4>
                                    <p className="mb-0">We Are Trusted Our Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 px-0 mb-3">
                        <div className="yubnwniuqe scvdrtsdtyefrsverrr p-5">
                            <div className="d-flex align-items-center">
                                <div className="unnhiqwe p-3 me-4">
                                    <img src="images/2131.png" alt="" />
                                </div>
                                <div className="jikbhdikweoprwe">
                                    <h4 className="mb-1">24/7 Support</h4>
                                    <p className="mb-0">000 7845 114- 123 4567 890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ps-0 mb-3">
                        <div className="yubnwniuqe p-5">
                            <div className="d-flex align-items-center">
                                <div className="unnhiqwe p-3 me-4">
                                    <img src="images/er3.png" alt="" />
                                </div>
                                <div className="jikbhdikweoprwe">
                                    <h4 className="mb-1">Expert &amp; Professional</h4>
                                    <p className="mb-0">We Are Trusted Our Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ubnuiiuniewrr py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4">
                            <div className="oimihiewrwer">
                                <h5>The Challenge</h5>
                                <h2 className="mb-4">
                                    Leveraging Compelling Press Releases to buid Authority
                                </h2>
                                <p>
                                    Any marketer can dash off a quick press release to fill a space,
                                    but it takes a dedicated village to create a meaningful press
                                    release strategy. The challenge of seeing results from press
                                    releases can be complex and requires a holistic, customized
                                    strategy that listens to the particulars of your business, its
                                    goals, and its ideal customers.
                                </p>
                                <p>
                                    We understand the challenges because we’ve been there. We know
                                    what it takes to turn company happenings into high-performing
                                    press releases.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ikfnmierhter position-relative">
                                <img
                                    src="images/0a571289-d2c8-40d9-81bb-fb9c42b90bbd.png"
                                    className="position-absolute"
                                    alt=""
                                />
                                <div className="idnwehrjwerwerwerwe_wrapper position-relative">
                                    <div className="row">
                                        <div className="col-lg-8 mb-4">
                                            <div className="iudnhwnuihewrr bg-white d-flex p-4">
                                                <img
                                                    src="images/895b9e24-b04c-4cb5-b9dd-647ad9b707d2.png"
                                                    className="me-2"
                                                    alt=""
                                                />
                                                <div className="iojnuihwqeqweqwe">
                                                    <h4 className="mb-3">
                                                        Building a Strong Reputation Is Paramount
                                                    </h4>
                                                    <p className="mb-0">
                                                        66% of businesses report brand loyalty and reputation as
                                                        their top priority.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-end">
                                        <div className="col-lg-8 mb-4">
                                            <div className="iudnhwnuihewrr bg-white d-flex p-4">
                                                <img
                                                    src="images/091dd7f9-619f-453d-8fb9-7a583c945372.png"
                                                    className="me-2"
                                                    alt=""
                                                />
                                                <div className="iojnuihwqeqweqwe">
                                                    <h4 className="mb-3">Press Releases Boost Visibility</h4>
                                                    <p className="mb-0">
                                                        68% of businesses report improved brand and product
                                                        visibility as a result of publishing press releases.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-8 mb-4">
                                            <div className="iudnhwnuihewrr bg-white d-flex p-4">
                                                <img
                                                    src="images/73f9c87b-53f5-4209-ac7b-7b474f0a16c5.png"
                                                    className="me-2"
                                                    alt=""
                                                />
                                                <div className="iojnuihwqeqweqwe">
                                                    <h4 className="mb-3">Press Releases Are Essential</h4>
                                                    <p className="mb-0">
                                                        Nearly 75% of journalists name press releases as
                                                        something they’d like to receive from PR professionals.
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
            </div>

            <div className="ubnuiiuniewrr sdfvdfhraefrereerer py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <div className="oimihiewrwer text-center">
                                <h5>Services</h5>
                                <h2 className="my-4">
                                    We are here to IT Solution with <br /> 20 years of{" "}
                                    <span>experience</span>
                                </h2>
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="uindjikwhijwerwerwer">
                                <Slider {...servicesSettings} className="slick-slider">
                                    <div className="element element-1">
                                        <img src="images/b0d761fc-6c7a-4b3b-b1fe-b62518d2af82.png" alt="" />
                                    </div>
                                    <div className="element element-4">
                                        <img src="images/15f151cd-92c7-4d59-b21d-fa002161fc69.png" alt="" />
                                    </div>
                                    <div className="element element-5">
                                        <img src="images/a8883221-9a30-439b-946d-f313d9021dac.png" alt="" />
                                    </div>
                                    <div className="element element-6">
                                        <img src="images/a6977948-d00b-4f66-87cb-83ab8936a570.png" alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ubnuiiuniewrr xcverscdfgfsds py-5">
                <div className="container py-5">
                    <div className="oimihiewrwer text-center">
                        <h2 className="my-4">Our Valuable Clients</h2>
                        <div className="indiuwewerwerwer">
                            <ul className="d-flex justify-content-between pb-5">
                                <li>
                                    <img
                                        src="images/b138ea96-03ba-49aa-89c9-e07e9ad2c50a.png"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        src="images/b138ea96-03ba-49aa-89c9-e07e9ad2c50a.png"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        src="images/b138ea96-03ba-49aa-89c9-e07e9ad2c50a.png"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        src="images/b138ea96-03ba-49aa-89c9-e07e9ad2c50a.png"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        src="images/b138ea96-03ba-49aa-89c9-e07e9ad2c50a.png"
                                        alt=""
                                    />
                                </li>
                            </ul>
                            <ul className="d-flex justify-content-between">
                                <li>
                                    <img
                                        src="images/b138ea96-03ba-49aa-89c9-e07e9ad2c50a.png"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        src="images/b138ea96-03ba-49aa-89c9-e07e9ad2c50a.png"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        src="images/b138ea96-03ba-49aa-89c9-e07e9ad2c50a.png"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        src="images/b138ea96-03ba-49aa-89c9-e07e9ad2c50a.png"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        src="images/b138ea96-03ba-49aa-89c9-e07e9ad2c50a.png"
                                        alt=""
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ubnuiiuniewrr uijkanihdjwjeoijrwer py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4">
                            <div className="oimihiewrwer">
                                <h2 className="mb-4">
                                    Your Gateway To Success And Sustainability Online
                                </h2>
                                <ul className="ps-0">
                                    <li>
                                        <i className="fa-regular fa-circle-check" />
                                        <p className="m-0">360 custom digital solutions at one-stop</p>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-circle-check" />
                                        <p className="m-0">
                                            Qualified professionals, experts working on your project
                                        </p>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-circle-check" />
                                        <p className="m-0">Personalized support and assistance 24/7</p>
                                    </li>
                                </ul>
                                <div className="sdcfervfrtyetferfre row mt-5">
                                    <div className="col-lg-4 mb-3">
                                        <div className="dieiwnkjewrwer_inner text-center">
                                            <h3>1267+</h3>
                                            <p className="mb-0">Happy Clients</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <div className="dieiwnkjewrwer_inner text-center">
                                            <h3>92+</h3>
                                            <p className="mb-0">Success Rate</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <div className="dieiwnkjewrwer_inner text-center">
                                            <h3>6+</h3>
                                            <p className="mb-0">Awards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="duiwejrjiwedfgiruiwerwer position-relative">
                                <div className="iaojsndiqwerwer">
                                    <img
                                        src="images/b46be834-ffb0-43d3-baa0-667a9c52f026.png"
                                        alt=""
                                    />
                                    {/* <img
                                        src="images/c397b825-8f5a-4033-8211-0334ee4a3312.png"
                                        className="position-relative"
                                        alt=""
                                    /> */}
                                </div>
                                {/* <div className="iudnekwiirwerwer position-absolute">
                                    <img
                                        src="images/8b1573b2-ca15-417c-95cd-bb02d5152a0a.png"
                                        alt=""
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ServiceForm inputs={inputs} setInputs={setInputs} submitForm={submitForm} errors={errors}/>
            <LastSectionComponent/>
        </>
    )
}