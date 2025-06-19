import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceForm  from "./FormComponent/ServiceForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "./Css/GraphicsTshirtDesigningServices.css";
import "react-toastify/dist/ReactToastify.css";

export const GraphicsTshirtDesigningServices = () => {

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
            const response = await http.post("/add-graphicsTshirtDesign-enquiry", inputs);
        
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
                                <h2>Graphics T-shirt Designing Services

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


        <div className="gfgbgdfgdfg">
            <div className="container">
                <div className="sdnfdfgr">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="fbbhdfgdfg">
                                <h2>Stand Out From The Crowd With Custom T-shirts</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gfddfgdf">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="fdfjgdfg">
                                            <div className="nbdf55b"><img src="./images/tshirt-icon (1).png" alt="" /></div>
                                            <div className="dfbhdfgds534">
                                                <h4>Mix And Match</h4>
                                                <p>Make stunning designs with beginner-
                                                    friendly design tools and assets.</p>


                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="fdfjgdfg">
                                            <div className="nbdf55b"><img src="./images/tshirt-icon (2).png" alt="" /></div>
                                            <div className="dfbhdfgds534">
                                                <h4>Shipping Worldwide</h4>
                                                <p>Make stunning designs with beginner-
                                                    friendly design tools and assets.</p>


                                            </div>

                                        </div>
                                    </div>


                                    <div className="col-lg-6">
                                        <div className="fdfjgdfg">
                                            <div className="nbdf55b"><img src="./images/tshirt-icon (3).png" alt="" /></div>
                                            <div className="dfbhdfgds534">
                                                <h4>Top Quality</h4>
                                                <p>Make stunning designs with beginner-
                                                    friendly design tools and assets.</p>


                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="fdfjgdfg">
                                            <div className="nbdf55b"><img src="./images/tshirt-icon (4).png" alt="" /></div>
                                            <div className="dfbhdfgds534">
                                                <h4>Top Quality</h4>
                                                <p>Make stunning designs with beginner-
                                                    friendly design tools and assets.</p>


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

        <div className="dfgbhgdfgdfgd">
            <div className="container">
                <div className="dfjhdfgdfg">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="gndfjgf">
                                <img src="./images/right-tshirt.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6">
                            <div className="fdgbdfgfgfgdfgd">
                                <div className="dfghdfgdfg">
                                    <h2>You’ve Got The Ideas,
                                        We’ve Got The Tools</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


                                </div>

                                <div className="dfgbdfgdfg">
                                    <p><i className="fa-solid fa-circle-check"></i> Top quality prints using the latest technology</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Top quality prints using the latest technology</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Top quality prints using the latest technology</p>
                                    <p><i className="fa-solid fa-circle-check"></i> Top quality prints using the latest technology</p>

                                    <button>
                                        Contact Us
                                    </button>

                                </div>

                            </div>
                        
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="sfbdfjhsdfgsdffg">
            <div className="container">
                <div className="ghnfgdfg">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="dngdf">
                                <img src="./images/tshirtgallery (1).png" alt="" />
                            
                            </div>
                            <div className="fdfdf">
                                <h4>New Collection</h4>
                                <h6>Sale up to 30%</h6>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sfbsdf">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="fbdjhgdf">
                                            <img src="./images/tshirtgallery (3).png" alt="" />
                                        </div>
                                        <div className="fdfdf">
                                            <h4>New Collection</h4>
                                            <h6>Sale up to 30%</h6>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="fbdjhgdf">
                                            <img src="./images/tshirtgallery (4).png" alt="" />
                                        </div>
                                        <div className="fdfdf">
                                            <h4>New Collection</h4>
                                            <h6>Sale up to 30%</h6>

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="ndfsdf">
                                        <img src="./images/tshirtgallery (2).png" alt="" />
                                        </div>
                                        <div className="fdfdf">
                                            <h4>New Collection</h4>
                                            <h6>Sale up to 30%</h6>

                                        </div>

                                    </div>
                                </div>
                            
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="dfbjhsdfgsdfg">
            <div className="container">
                <div className="dfgnjdfgdf">
                    <h2>T-shirt Printing Made Easy</h2>
                    <p>Suspendisse et laoreet lorem, ut condimentum diam finibus neque
                        id erat vulputate in tristique dui mattis.</p>
                </div>
        
                <div className="dfgbhdfgdfg" style={{
                backgroundImage:
                    "url(./images/dotted-line.png)",
                }}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="dfndfdfd">
                                <div className="fndf55"><img src="./images/tshirtanime (1).png" alt="" /></div>
                                <div className="fbdfgdfg">
                                    <div className="fgnhfg">01</div>
                                    <h5>Pick A Product</h5>
                                    <p>Printed on 100% quality cotton for a vibrant finish andall-day comfort.</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="dfndfdfd">
                                <div className="fndf55hh"><img src="./images/tshirtanime (2).png" alt="" /></div>
                                <div className="fbdfgdfg2">
                                    <div className="fgnhfg">01</div>
                                    <h5>Pick A Product</h5>
                                    <p>Printed on 100% quality cotton for a vibrant finish andall-day comfort.</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="dfndfdfd">
                                <div className="fndf55"><img src="./images/tshirtanime (3).png" alt="" /></div>
                                <div className="fbdfgdfg">
                                    <div className="fgnhfg">01</div>
                                    <h5>Pick A Product</h5>
                                    <p>Printed on 100% quality cotton for a vibrant finish andall-day comfort.</p>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
        </div>


       <div className="dfgbhgdfgdfgd55">
            <div className="container">
                <div className="dfjhdfgdfg">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="fdgbdfgfgfgdfgd">
                                <div className="dfghdfgdfg">
                                    <h6>Custom projects</h6>
                                    <h2>You’ve Got The Ideas,
                                        We’ve Got The Tools</h2>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                                        
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                </div>

                                <div className="dfgbdfgdfg">
                                    <button>
                                        Contact Us
                                    </button>

                                </div>

                            </div>
                        
                        </div>

                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                            <div className="gndfjgf">
                                <img src="./images/tshirtright.png" alt="" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="fnjhdfdfgdf">
            <div className="container">
                 <div className="dfgnjdfgdf">
                    <h2>T-shirt Printing Made Easy</h2>
                    <p>Suspendisse et laoreet lorem, ut condimentum diam finibus neque
                        id erat vulputate in tristique dui mattis.</p>
                </div>

                <div className="fndfsdf mt-5 mb-5">
                    <h2>Where does it come from?</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was 
                        born and I will give you a complete account of the system, and expound the actual teachings of the 
                        great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                         avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue 
                         pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone
                          who loves or pursues or desires to obtain pain of itself, because it is pain, but because 
                          occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                           To take a trivial example, which of us ever undertakes laborious physical exercise, except 
                           to obtain some advantage from it? But who has any right to find fault with a man who chooses 
                           to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces 
                           no resultant pleasure.</p>
                </div>

            </div>
        </div>

      <ServiceForm inputs={inputs} setInputs={setInputs} submitForm={submitForm} errors={errors}/>
      <LastSectionComponent />
    </div>
  )
}
