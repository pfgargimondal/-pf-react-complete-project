import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import "./CommonForm.css";

export const CommonForm = () => {
    const search = useRef(null);    
    const commonFormWrapper = document.querySelector(".c-f-1");
    const smallSearchField = document.getElementById("small-search-field");
    const bigSearchField = document.getElementById("big-search-field");
    const minimizeCloseBtn = document.getElementById("minimize-close-btn");

    const { pathname } = useLocation();
    const [searchInput, setSearchInput] = useState(null);
    const [formIsActive, setFormIsActive] = useState(false);

    useEffect(() => {
        const formIsActiveScroll = () => {
            if(window.scrollY > 600) setFormIsActive(true);
        }

        window.addEventListener("scroll", formIsActiveScroll);
        
        return () => window.removeEventListener("scroll", formIsActiveScroll);
    }, []);

    const handleSearch = () => {
        const searchValue = search.current.value;
        setSearchInput(searchValue);        

        if (searchValue) {
            commonFormWrapper?.classList.add("c-f-1-expand");
            smallSearchField?.classList.add("d-none");
            bigSearchField?.classList.remove("d-none");
        }
    }  
    
    useEffect(() => {
        const commonFormWrapper = document.querySelector(".c-f-1");
        const smallSearchField = document.getElementById("small-search-field");
        const bigSearchField = document.getElementById("big-search-field");

        const resetCommonForm = () => {
            commonFormWrapper?.classList.remove("c-f-1-expand");
            smallSearchField?.classList.remove("d-none");
            bigSearchField?.classList.add("d-none");

            if (search.current) search.current.value = "";
        }

        resetCommonForm();
    }, [pathname]);


    const handleMinimize = () => {
        if (minimizeCloseBtn.classList.contains("fa-down-left-and-up-right-to-center")) {
            commonFormWrapper?.classList.add("c-f-1-minimize");
            minimizeCloseBtn?.classList.remove("fa-down-left-and-up-right-to-center");
            minimizeCloseBtn?.classList.add("fa-up-right-and-down-left-from-center");
        } else {
            commonFormWrapper?.classList.remove("c-f-1-minimize");
            minimizeCloseBtn?.classList.add("fa-down-left-and-up-right-to-center");
            minimizeCloseBtn?.classList.remove("fa-up-right-and-down-left-from-center");
        }
    }

    const handleClearClose = () => {
        commonFormWrapper?.classList.remove("c-f-1-expand");
        smallSearchField?.classList.remove("d-none");
        bigSearchField?.classList.add("d-none");
    }


    return (
        <div className="common-form-wrapper">
            <div className={formIsActive ? "c-f-1 p-4 cf-show" : "c-f-1 p-4"} style={{ background: "url(./images/nature-beauty-blue-sky-green-landscape-generative-ai_188544-12878.jpg) no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="cf-close-btn position-absolute" onClick={handleMinimize} id="close-to-minimize">
                    <i class="fa-solid position-absolute fa-down-left-and-up-right-to-center" id="minimize-close-btn"></i>
                </div>

                <div className="oidjweihriwer position-relative" id="small-search-field">
                    <img className="idhiwerer position-absolute" src="./images/confused.gif" alt="" />

                    <input className="form-control" ref={search} name="search" type="search" placeholder="Ask me about IT service solutions" defaultValue="" />

                    <img onClick={handleSearch} className="idnekwhiwejoir position-absolute" src="./images/pf logo.png" alt="" />
                </div>

                <div className="dojeoijrwerwer position-relative d-none" id="big-search-field">
                    <div className="jinduiweorjoiwerwer pb-2 px-4 d-flex justify-content-between position-relative align-items-center">
                        <img className="idnekwhiwejoir" src="./images/pf logo.png" alt="" />

                        <i class="fa-solid fa-2x fa-xmark" onClick={handleClearClose} id="clear-close-btn"></i>
                    </div>

                    <div className="oidmekwhiruhwewerwr px-5 py-4" style={{ background: "url(./images/expert.png", backgroundSize: "cover", backgroundPosition: "top" }}>
                        <h2 className="text-center mb-5">We Got You! Give Us More Information About <span>Yourself</span> To Make Us Understand Your <span>Requirements</span></h2>

                        <p className="oisdhifknhwere"><img className="idnekwhiwejoir me-1" src="./images/pf logo.png" alt="" /> Hey! Lets get you started</p>

                        <p className="fgrtdfytherrerwrr text-right">You have searched for <br /> "<span>{searchInput ? searchInput : "Nothing"}</span>"</p>

                        <div className="doiejwrnjwerwer_form mt-4">
                            <h5 className="mb-4">Please Fill Out the Form Below For Further Assistance</h5>

                            <form>
                                <div className="doewhrwerwerr">
                                    <div className="row">
                                        <div className="col-lg-6 mb-4">
                                            <div className="indnjhuwerrwer_inner">
                                                <label className="form-label">Full Name</label>

                                                <input className="form-control" placeholder="Type Your Full Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-4">
                                            <div className="indnjhuwerrwer_inner">
                                                <label className="form-label">Phone No.</label>

                                                <input className="form-control" placeholder="Type Your Phone Number" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-4">
                                            <div className="indnjhuwerrwer_inner">
                                                <label className="form-label">Message Us</label>

                                                <textarea style={{ height: "120px" }} className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="idnekwhre_btn text-right">
                                    <button className="btn125 py-2 px-4"><i class="fa-solid fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}