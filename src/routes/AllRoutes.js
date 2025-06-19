import { Routes, Route } from "react-router-dom/dist";
import { Home, Contactus, Aboutus, Careers, OurPortfolio, BusinessRegister, Services, WebDevelopment, WebDesign, PageNotFound } from "../pages/index";
import {DynamicPageRouter} from './DynamicPageRouter';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/our-portfolio" element={<OurPortfolio />} />
        <Route path="/business-register" element={<BusinessRegister />} />
        <Route path="/services" element={<Services />} />

        <Route path="/professional-website-development-service" element={<WebDevelopment />} />
        <Route path="/web-design-services" element={<WebDesign />} />


        <Route path="/:slug"  element={<DynamicPageRouter/>} />



        <Route path="*" element={<PageNotFound />} />     


      </Routes>
  )
} 