import { useState } from "react";
import "./Css/LeafletDesignService.css";
import ServiceEnquiryForm  from "./FormComponent/ServiceEnquiryForm";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import { ToastContainer, toast } from "react-toastify";
import http from "../../http";
import { validateInputs } from "../../utils/validation";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const LeafletDesignService = () => {

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
            const response = await http.post("/add-leafletDesign-enquiry", inputs);
    
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

        const flyerDesignLeaflet = [
            {
                FlyerDesignLeafletImage: "./images/leaf (1).png",
                FlyerDesignLeafletHeading: "Design That Strikes Audience",
                FlyerDesignLeafletDescription: "Our designs are unique. With originality, creativity and a perfect tale, we make a blend that captures every heart. Precisely, we make you stand out.",
            },
            {
                FlyerDesignLeafletImage: "./images/leaf (2).png",
                FlyerDesignLeafletHeading: "Design That Strikes Audience",
                FlyerDesignLeafletDescription: "Our designs are unique. With originality, creativity and a perfect tale, we make a blend that captures every heart. Precisely, we make you stand out.",
            },
            {
                FlyerDesignLeafletImage: "./images/leaf (3).png",
                FlyerDesignLeafletHeading: "Design That Strikes Audience",
                FlyerDesignLeafletDescription: "Our designs are unique. With originality, creativity and a perfect tale, we make a blend that captures every heart. Precisely, we make you stand out.",
            },
            {
                FlyerDesignLeafletImage: "./images/leaf (4).png",
                FlyerDesignLeafletHeading: "Design That Strikes Audience",
                FlyerDesignLeafletDescription: "Our designs are unique. With originality, creativity and a perfect tale, we make a blend that captures every heart. Precisely, we make you stand out.",
            },
            {
                FlyerDesignLeafletImage: "./images/leaf (5).png",
                FlyerDesignLeafletHeading: "Design That Strikes Audience",
                FlyerDesignLeafletDescription: "Our designs are unique. With originality, creativity and a perfect tale, we make a blend that captures every heart. Precisely, we make you stand out.",
            },
            {
                FlyerDesignLeafletImage: "./images/leaf (6).png",
                FlyerDesignLeafletHeading: "Design That Strikes Audience",
                FlyerDesignLeafletDescription: "Our designs are unique. With originality, creativity and a perfect tale, we make a blend that captures every heart. Precisely, we make you stand out.",
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
                                <h2>Leaflet Design Service Company

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


    <div className="fnjhdfbdfdf">
        <div className="container">
            <div className="jhdfbfg">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="fdgfhdfg">
                            <img src="./images/leaflet.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dfhbgdfdf">
                            <div className="gdgjhdf">
                                    <h2>Put Your Brand in Every Hand – With Our Creative Leaflet Design Service!</h2>
                                    <p>Thousands of brands have become our loyal customers just because of these three
                                fascinating traits that we possess:</p>

                            </div>

                            <div className="dfgjhdfgdf">
                                <h4>Innovative Designs That Inspire</h4>
                                <p>We have masters of creativity who infuse innovation into every design aspect. Our focus
                                 is to craft flyers that not only inform but also inspire and captivate.</p>
                            </div>

                                <div className="dfgjhdfgdf">
                                <h4>Innovative Designs That Inspire</h4>
                                <p>We have masters of creativity who infuse innovation into every design aspect. Our focus
                                 is to craft flyers that not only inform but also inspire and captivate.</p>
                            </div>

                                <div className="dfgjhdfgdf">
                                <h4>Innovative Designs That Inspire</h4>
                                <p>We have masters of creativity who infuse innovation into every design aspect. Our focus
                                 is to craft flyers that not only inform but also inspire and captivate.</p>
                            </div>

                            <div className="dfgnjhdfgdf">
                                <button>Contact Us</button>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="fghfgdfgdfg">
        <div className="container">
            <div className="dfgjhdfgdfg">
                <div className="col-lg-7">
                    <h2>Right Amount Of Persuasion & Story
                   <span> Recipe To Great Flyer Design!</span></h2>
                <p>We don't just create any flyer design - we make it stand out. With the perfect amount of creativity,
                uniqueness and storytelling, we create a concoction that induces your audience to learn more about you and
                your services!</p>

                </div>

                <div className="dfgbdfhgdf mt-5">
                    <div className="row">

                        {flyerDesignLeaflet.map((flyerDesignLeafletVal) => (
                            <div className="col-lg-4">
                                <div className="dfjghdfg">
                                    <div className="gdfbhgfd"><img src={flyerDesignLeafletVal.FlyerDesignLeafletImage} alt="" /></div>
                                    <div className="fgfddf">
                                        <h4>{flyerDesignLeafletVal.FlyerDesignLeafletHeading}</h4>
                                        <p>{flyerDesignLeafletVal.FlyerDesignLeafletDescription}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    </div>


    <div className="dfbgnjhdfgvdf">
        <div className="container">
            <div className="gndfjgdfg">
                <h2>Stand Out, Get Noticed – With Eye-Catching Leaflet Designs!</h2>
                <p>There is nothing too complex for our graphic designers. We take every project seriously and try to create leaflet designs that market your business in a
                   convincing and effective way. Our team produces designs that speak and prints that impress.</p>
            </div>

            <div className="fbghjdfgdf">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="dfgdfg">
                            <img src="./images/leafbn (1).png" alt="" />

                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="gfjdnbghjds">
                            <h2>Custom Flyer Designs In UAE With An Artistic
                                 Flair </h2>
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>

                        </div>
                    </div>
                </div>

                 <div className="row mt-5">
                 
                    <div className="col-lg-7">
                        <div className="gfjdnbghjds">
                            <h2>Custom Flyer Designs In UAE With An Artistic
                                 Flair </h2>
                                 <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="dfgdfg">
                            <img src="./images/leafbn (2).png" alt="" />

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

        <div className="dfgbdfjhgdfg mt-3 mb-3">
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

   <ServiceEnquiryForm inputs={inputs} setInputs={setInputs} submitForm={submitForm} errors={errors}/> 

    <LastSectionComponent />
    
    </div>
  )
}
