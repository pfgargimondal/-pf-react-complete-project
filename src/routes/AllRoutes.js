import { Routes, Route } from "react-router-dom/dist";
import { Home, Contactus, Aboutus, Careers, OurPortfolio, BusinessRegister, Services, Blog, BlogDetails, PageNotFound } from "../pages/index";
import {DynamicPageRouter} from './DynamicPageRouter';

export const AllRoutes = ({CategoryDetails}) => {
  return (
    <Routes>
        <Route path="/" element={<Home state = {CategoryDetails }/>}   />

        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/our-portfolio" element={<OurPortfolio />} />
        <Route path="/business-register" element={<BusinessRegister />} />
        <Route path="/services" element={<Services />} />

        <Route path="/:slug"  element={<DynamicPageRouter/>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />



        <Route path="*" element={<PageNotFound />} />     


      </Routes>
  )
} 