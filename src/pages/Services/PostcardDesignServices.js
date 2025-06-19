import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm  from "./FormComponent/ServiceEnquiryForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "./Css/PostcardDesignServices.css";
import "react-toastify/dist/ReactToastify.css";

export const PostcardDesignServices = () => {

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
            const response = await http.post("/add-postcardDesignService-enquiry", inputs);
    
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

    const ClientsWorked = [
        {
            ClientsWorkedImage: "./images/logo (1).png",
        },
        {
            ClientsWorkedImage: "./images/logo (2).png",
        },
        {
            ClientsWorkedImage: "./images/logo (3).png",
        },
        {
            ClientsWorkedImage: "./images/logo (4).png",
        },
        {
            ClientsWorkedImage: "./images/logo (5).png",
        },
        {
            ClientsWorkedImage: "./images/logo (5).png",
        },
        {
            ClientsWorkedImage: "./images/logo (6).png",
        },
        {
            ClientsWorkedImage: "./images/logo (7).png",
        },
        {
            ClientsWorkedImage: "./images/logo (8).png",
        },
        {
            ClientsWorkedImage: "./images/logo (9).png",
        },
        {
            ClientsWorkedImage: "./images/logo (10).png",
        },
        {
            ClientsWorkedImage: "./images/logo (11).png",
        },
    ]

    const postcardWhatWeDo = [
        {
            WhatWeDoImage: "./images/pp1.png",
            WhatWeDoHeading: "Booking Online",
            WhatWeDoDescription: "Praesent dictum est morbiquis augue nulla phasellus scelerisque tellus.",
             WhatWeDoImage2: "./images/postd (1).png",
        },
        {
            WhatWeDoImage: "./images/pp2.png",
            WhatWeDoHeading: "Received Work",
            WhatWeDoDescription: "Praesent dictum est morbiquis augue nulla phasellus scelerisque tellus.",
             WhatWeDoImage2: "./images/postd (2).png",
        },
        {
            WhatWeDoImage: "./images/pp3.png",
            WhatWeDoHeading: "Satisfied Design",
            WhatWeDoDescription: "Praesent dictum est morbiquis augue nulla phasellus scelerisque tellus.",
             WhatWeDoImage2: "./images/postd (3).png",
        },
        {
            WhatWeDoImage: "./images/pp4.png",
            WhatWeDoHeading: "Satisfied Design",
            WhatWeDoDescription: "Praesent dictum est morbiquis augue nulla phasellus scelerisque tellus.",
             WhatWeDoImage2: "./images/postd (4).png",
        },
        {
            WhatWeDoImage: "./images/pp5.png",
            WhatWeDoHeading: "Booking Online",
            WhatWeDoDescription: "Praesent dictum est morbiquis augue nulla phasellus scelerisque tellus.",
             WhatWeDoImage2: "./images/postd (5).png",
        },
        {
            WhatWeDoImage: "./images/pp6.png",
            WhatWeDoHeading: "Booking Online",
            WhatWeDoDescription: "Praesent dictum est morbiquis augue nulla phasellus scelerisque tellus.",
             WhatWeDoImage2: "./images/postd (6).png",
        },
        {
            WhatWeDoImage: "./images/pp7.png",
            WhatWeDoHeading: "Booking Online",
            WhatWeDoDescription: "Praesent dictum est morbiquis augue nulla phasellus scelerisque tellus.",
             WhatWeDoImage2: "./images/postd (7).png",
        },
        {
            WhatWeDoImage: "./images/pp8.png",
            WhatWeDoHeading: "Booking Online",
            WhatWeDoDescription: "Praesent dictum est morbiquis augue nulla phasellus scelerisque tellus.",
             WhatWeDoImage2: "./images/postd (8).png",
        },
    ]


  return (
    <div>
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
                                <div className="dfngfg">

                                </div>


                            </div>
                            <h2>Postcard Design Services


                            </h2>
                            <p>We are equipped with an updated technical knowledge to serve our customers
                                properly. Our method of application maintains the industry.</p>
                            
                            <div className="btn-group">
                                <button className="fgdfg">View More Details</button>
                                <button className="fgdfg55">Contact Us</button>
                            </div>    

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bgbgft5">
                            <img src="./images/Digital-marking.png" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="dfdfgdfg">
        <div className="container">
           <div className="dgdfjhgdf">
              <div className="row">
                <div className="col-lg-4">
                    <div className="dfghdfjhgdf">

                        <div className="row">
                            <div className="col-lg-3">
                                <div className="dbf">
                                    <img src="./images/post (1).png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dfgbdfhg">
                                    <h4>Custom Postcard Designs</h4>
                                    <p>Aenean eleifend turpis tellus, nec
                                        laoreet metus elementum ac.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="dfghdfjhgdf">

                        <div className="row">
                            <div className="col-lg-3">
                                <div className="dbf">
                                    <img src="./images/post (2).png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dfgbdfhg">
                                    <h4>Creative Mail  Solutions</h4>
                                    <p>Aenean eleifend turpis tellus, nec
                                        laoreet metus elementum ac.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="dfghdfjhgdf">

                        <div className="row">
                            <div className="col-lg-3">
                                <div className="dbf">
                                    <img src="./images/post (3).png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dfgbdfhg">
                                    <h4>Print That  Pops</h4>
                                    <p>Aenean eleifend turpis tellus, nec
                                        laoreet metus elementum ac.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
              </div>
           </div>
        </div>
    </div>

   <div className="fjhbgdfgd">
      <div className="container">
        <div className="dfbngjhdfg">
            <div className="row">
                <div className="col-lg-6">
                    <div className="fgdfjhbgdfg">
                        <img src="./images/postcard.png" alt="" />
                        <div className="dbfgfg">
                            <h2>10Years</h2>
                            <p>Work Experience</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ghsdfsdf">

                        <h6>About Company</h6>
                        <h2>Send Your Message with Stunning Postcards</h2>
                        <p>Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est,
                            sed dapibus sapien. Cras condimentum eu velit id tempor. Curabitur purus sapien,
                            cursus sed nisl tristique, commodo vehicula arcu.</p>
                            <p>Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex mattis, ultricies
                                posuere sapien. Morbi a dignissim enim. Fusce elementum, augue in elementum
                                porta, sapien nunc volutpat ex, a accumsan nunc lectus eu lectus.</p>

                        <div className="dfbgjhdf">
                            <p><i className="fa-solid fa-check"></i>  Aenean et pretium arcunterdum et malesuada fames ac ante ipsum primis.</p>
                            <p><i className="fa-solid fa-check"></i>  Curabitur dapibus nisl a urna congue, in pharetra urna accumsan.</p>
                            <p><i className="fa-solid fa-check"></i>  Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        </div>

                        <div className="fgjhdfgdfg">
                            <button>Contact Us </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
   </div>

   <div className="xfvdfghdff">
      <div className="container">
        <div className="fbjhfgdf">
            <h2>What We Do</h2>
        </div>

        <div className="dfghdfgdfg mt-5">
            <div className="row">

                {postcardWhatWeDo.map((postcardWhatWeDoVal) => (
                    <div className="col-lg-3">
                        <div className="fgjhdf">
                            <div className="bghdfgdf">
                                <img src={postcardWhatWeDoVal.WhatWeDoImage} alt="" />
                            </div>
                            <div className="dfgbdfg">
                                <h2>{postcardWhatWeDoVal.WhatWeDoHeading}</h2>
                                <p>{postcardWhatWeDoVal.WhatWeDoDescription}</p>
                            </div>
                            <div className="gbndfgdf">
                                <img src={postcardWhatWeDoVal.WhatWeDoImage2} alt="" />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
      </div>
   </div>


   <div className="gdfjhgbdfgdfg">
     <div className="container">
        <div className="dfjhdfg">
            <h2>Clients We Have <span>Worked With</span> </h2>
        </div>

        <div className="dfgbdfjhgdfg mt-3">
            <div className="row">

                {ClientsWorked.map((ClientsWorkedVal) => (
                    <div className="col-lg-2">
                        <div className="dfndf48">
                            <div className="dfjhdfg">
                                <img src={ClientsWorkedVal.ClientsWorkedImage} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="sdfbsdghfsd">
                <div className="row">
                    
                <div className="col-lg-2">
                    <div className="dfndf48">
                        <div className="dfjhdfg">
                            <img src="./images/logo (6).png" alt="" />
                        </div>

                    </div>
                    
                </div>

                <div className="col-lg-2">
                    <div className="dfndf48">
                        <div className="dfjhdfg">
                            <img src="./images/logo (7).png" alt="" />
                        </div>

                    </div>
                    
                </div>
                </div>
            </div> */}
        </div>
     </div>
   </div>


   <div className="gdfngjhdfgsdfg">
      <div className="container">
        <div className="fhdfsdf">
            <h6>Testimonial</h6>
            <h2>What Our Clients Says</h2>
        </div>

        <div className="gdfgjhdfgdf">
            <div className="row">
                <div className="col-lg-6">
                    <div className="gdfjhgdf">
                        <div className="sdfsdjhfb">
                            <img src="./images/testimonial1 (1).png" alt="" />
                        </div>

                        <div className="dsdjhfsdf">
                            <div className="fghd55f">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>

                            </div>
                            <div className="jdfdf548">
                                <img src="./images/coma (1).png" alt="" />
                            </div>
                        </div>
                        <div className="sdbjhsdfgsf mt-2">
                            <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce
                                tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate
                                financial on services the teams serve all Curabitur ac tortor ante. Sed quis
                                dignissim”</p>

                                <h4>Margie Dose</h4>
                                <h6>Dentist</h6>
                        </div>

                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="gdfjhgdf">
                        <div className="sdfsdjhfb">
                            <img src="./images/testimonial1 (2).png" alt="" />
                        </div>

                        <div className="dsdjhfsdf">
                            <div className="fghd55f">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>

                            </div>
                            <div className="jdfdf548">
                                <img src="./images/coma (1).png" alt="" />
                            </div>
                        </div>
                        <div className="sdbjhsdfgsf mt-2">
                            <p>“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce
                                tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate
                                financial on services the teams serve all Curabitur ac tortor ante. Sed quis
                                dignissim”</p>

                                <h4>Margie Dose</h4>
                                <h6>Vijayanand</h6>
                        </div>

                    </div>
                </div>
          
            </div>
        </div>
      </div>
   </div>
   <ServiceEnquiryForm inputs={inputs} setInputs={setInputs} submitForm={submitForm} errors={errors}/> 
   <LastSectionComponent />
    </div>
  )
}
