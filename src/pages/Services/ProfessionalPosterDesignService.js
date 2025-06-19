import { useState } from 'react';
import "./Css/ProfessionalPosterDesignService.css";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm  from "./FormComponent/ServiceForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";


export const ProfessionalPosterDesignService = () => {

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
          const response = await http.post("/add-posterDesign-enquiry", inputs);
    
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

    const onlineProducts = [
        {
            OnlineProductsImage: "./images/poster (1).png",
            OnlineProductsHeading: "Select A Product",
            OnlineProductsDescription: "Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies porta nibh",
        },
        {
            OnlineProductsImage: "./images/poster (2).png",
            OnlineProductsHeading: "Drag & Drop Design",
            OnlineProductsDescription: "Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies porta nibh",
        },
        {
            OnlineProductsImage: "./images/poster (3).png",
            OnlineProductsHeading: "Place Order",
            OnlineProductsDescription: "Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies porta nibh",
        },
        {
            OnlineProductsImage: "./images/poster (1).png",
            OnlineProductsHeading: "Select A Product",
            OnlineProductsDescription: "Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies porta nibh",
        },
        {
            OnlineProductsImage: "./images/poster (2).png",
            OnlineProductsHeading: "Drag & Drop Design",
            OnlineProductsDescription: "Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies porta nibh",
        },
        {
            OnlineProductsImage: "./images/poster (3).png",
            OnlineProductsHeading: "Place Order",
            OnlineProductsDescription: "Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies porta nibh",
        }
        
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
                                <h2>Professional Poster Design

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


    <div className="fnjhdfdfdf">
        <div className="container">
            <div className="ryugdfgf">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="fgbdfgdfg65654">
                            <div className="dfgjhdfgdfg">
                                <h6>Designed Outfits </h6>
                                <h2>Designs That Deliver Impact
                                </h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                           </div>

                           <div className="dfgndfhgdfg">
                             <div className="row">
                                <div className="col-lg-6">
                                    <div className="fghdfg">
                                        <p><i className="fa-solid fa-check"></i> Top quality prints using the.</p>
                                        <p><i className="fa-solid fa-check"></i> Unique design custom clothing</p>
                                        <p><i className="fa-solid fa-check"></i> Add logo to branded </p>
                                        <p><i className="fa-solid fa-check"></i> 100% Lightweight Garments</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fghdfg">
                                        <p><i className="fa-solid fa-check"></i> Premium cloths using the </p>
                                        <p><i className="fa-solid fa-check"></i> Add exact logo on your</p>
                                        <p><i className="fa-solid fa-check"></i> Create eye-catching and  </p>
                                        <p><i className="fa-solid fa-check"></i> Quality and comfort </p>
                                    </div>
                                </div>
                             </div>
                           </div>

                           <div className="dfjhfds">
                             <button>GET IN TOUCH <i className="fa-solid fa-caret-right"></i></button>
                           </div>

                        </div>
                    
                    </div>
                    <div className="col-lg-6">
                        <div className="gdfbgjhdfgdf">
                            <img src="./images/poster5.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div className="dfhdfdfsdfg">
        <div className="container">
            <div className="jhbdfgdfg">
                <h2>Online Bespoke Products, Order 
                    For Business Or Personal Use</h2>
                    <p>Nullam vehicula ipsum a arcu cursus vitae congue mauris. Aliquet risus feugiat in ante. Sit amet commodo nulla
                         morbi tincidunt augue interdum velit euismod in pellente tempor nec facilisi nullam.</p>
            </div>

            <div className="gdfbgdfgdf">
                <div className="row">
                    {onlineProducts.map((onlineProductsVal) => (
                        <div className="col-lg-4">
                            <div className="fbdfd545f">
                                <div className="dfjhgbdf">
                                    <img src={onlineProductsVal.OnlineProductsImage} alt="" />
                                </div>
                                <div className="sdbff">
                                    <h5>{onlineProductsVal.OnlineProductsHeading}</h5>
                                    <p>{onlineProductsVal.OnlineProductsDescription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

    <div className="sdfnjhsdsdfsdf mb-5">
        <div className="container">
            <div className="dfhdfgdfg">
                <h2>Latest Offers</h2>
                <p>Egestas dui id ornare arcu odio. Odio euismod lacinia at quis risus sed. Etiam dignissim diam quis
                    enim. Laoreet suspendisse interdum consectetur libero id faucibus nisl.</p>

            </div>

            <div className="dfjdfgdf">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bhhdfdf">
                            <img src="./images/poster-left.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dfgdfgdfg">
                            <h6>Explore</h6>
                            <h2>Professional Postcard Design Services</h2>
                            <p>Make every message count with our custom postcard design services. Whether you're promoting a product, announcing an event, or simply staying in touch with clients, we create visually appealing postcards that capture attention and communicate your message effectively. Designed to leave a lasting impression, our postcards blend creativity with clarity to support your brand goals.</p>

                             <button>Contact us</button>

                        </div>
                    </div>
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
   <ServiceForm inputs={inputs} setInputs={setInputs} submitForm={submitForm} errors={errors}/>
   <LastSectionComponent />
    </div>
  )
}
