import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm  from "./FormComponent/ServiceForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "./Css/ProfessionalGraphicDesignServices.css";
import "react-toastify/dist/ReactToastify.css";

export const ProfessionalGraphicDesignServices = () => {

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
          const response = await http.post("/add-professionalGraphicsDesign-enquiry", inputs);
    
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
                            <h2>Professional Graphic Design Services

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



    <div className="jurgsdg5ff">
        <div className="container">
            <div className="dbbnn5454">
                <div className="row">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="dbgjhdfgdfg">
                                <h6>About us</h6>
                                <h2>Professional Graphic Design Services</h2>
                                <div className="rdhnfgdtfh"></div>
                                <div className="dfnjhdfgdf">
                                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                    <p>We have a special team for website style who has been involved in
                                        designing professional websites of all categories.</p>
                                <div className="nfbfd484">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="gdfgdf">
                                                <p><i className="fa-solid fa-circle-notch"></i> Web And Mobile Application</p>
                                                <p><i className="fa-solid fa-circle-notch"></i> New Domain Registration</p>
                                                <p><i className="fa-solid fa-circle-notch"></i> Data Text Synchronization</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="gdfgdf">
                                                <p><i className="fa-solid fa-circle-notch"></i> Improving Our Website </p>
                                                <p><i className="fa-solid fa-circle-notch"></i> Web & Email Hosting </p>
                                                <p><i className="fa-solid fa-circle-notch"></i> Artificial Intelligence Web </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                </div>
                                       
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ngjkmfghfhfrth">
                                <img src="./images/graphicsdesign.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



        <div className="dfbgghfgdfg">
        <div className="container">

            <div className="dfmgjkdfgndf">
                <div className="row">
                    <div className="col-lg-3">
                         <div className="sdfjhbfsfrhbdfgnhb">
                            <h2>2267+</h2>
                            <p>Happy Clients</p>
                         </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="sdfjhbfsfrhbdfgnhb2">
                           <h2>92%</h2>
                           <p>Success rate</p>
                        </div>
                    </div>

                   <div className="col-lg-3">
                    <div className="sdfjhbfsfrhbdfgnhb">
                       <h2>15+</h2>
                       <p>Awards</p>
                    </div>
                   </div>

                <div className="col-lg-3">
                    <div className="sdfjhbfsfrhbdfgnhb2">
                    <h2>5000+</h2>
                    <p>Projects Delivered</p>
                    </div>
                </div>
                    
                </div>
            </div>
        </div>
    </div>


    <div className="bfhsdbfsdfsdf">
        <div className="container">
            <div className="fhsdf">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ddfgdf">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="vgdfgdfg">
                                        <h4>We will help you to
                                            innovate, design andimplement</h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fgbhsdfdfg">
                                        <img src="./images/graphicssecond.png" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                     <div className="bdfdfds">
                                        <img src="./images/graphicsdown.png" alt="" />
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bbfghvsdfsdfdfgd">
                              <div className="fghgdfgdf">
                                    <h6>Why Us</h6>
                                    <h2>We craft solutions</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                              </div>

                              <div className="jhssdfg">
                                    <div className="dfgf"><img src="./images/grath (1).png" alt="" /></div>
                                    <div className="dfbgdfg">
                                        <h4>Innovative IT Agency</h4>
                                        <p>Algenix is a forward-thinking IT and digital agency dedicated to
                                            transforming businesses through innovative technology solutions.</p>
                                    </div>
                              </div>


                               <div className="jhssdfg">
                                    <div className="dfgf"><img src="./images/grath (2).png" alt="" /></div>
                                    <div className="dfbgdfg">
                                        <h4>Innovative IT Agency</h4>
                                        <p>Algenix is a forward-thinking IT and digital agency dedicated to
                                            transforming businesses through innovative technology solutions.</p>
                                    </div>
                              </div>

                               <div className="jhssdfg">
                                    <div className="dfgf"><img src="./images/grath (3).png" alt="" /></div>
                                    <div className="dfbgdfg">
                                        <h4>Innovative IT Agency</h4>
                                        <p>Algenix is a forward-thinking IT and digital agency dedicated to
                                            transforming businesses through innovative technology solutions.</p>
                                    </div>
                              </div>

                        </div>
                      
                       
                    </div>
                </div>
            </div>
        </div>

    </div>




   <div className="dfgdfgdf">
        <div className="container">
            <div className="ffhfghfghg">
                <h2>Our Works</h2>
                <div className="bfdf65"></div>
            </div>
            
        </div>
   </div>

    <div className="bghdfblsdffgsd" style={{
          backgroundImage:
            "url(./images/graphicbgbanner.png)",
        }}>
        <div className="container">
            <div className="fhudfdf">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="gdfhgyudfgdf">
                            <h4>Obsessed with Quality!</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>



                        </div>
                    </div>
                    <div className="col-lg-6"></div>
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
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
      <ServiceForm inputs={inputs} setInputs={setInputs} submitForm={submitForm} errors={errors} />
      <LastSectionComponent />
    </div>
  )
}
