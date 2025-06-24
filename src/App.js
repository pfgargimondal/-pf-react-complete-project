import { Header, Footer } from "./component/index";
import { AllRoutes } from "./routes/AllRoutes";
import { useEffect, useState } from "react";
import http from "./http";
import './assets/css/style.css';
import './assets/css/headerresponsive.css';
import ScrollToTop from "./hooks/ScrollToTop";
import { CommonForm } from "./pages/Services/FormComponent/CommonForm";

function App() {
  const [CategoryDetails, setcategoryDetails] = useState({
      data: {},
  });
   useEffect(() => {
    const fetchData = async () => {
        try {
        const getresponse = await http.get(`${process.env.REACT_APP_CATEGORYFETCHAPI}`);
        setcategoryDetails(getresponse.data.data);

        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }; 

    fetchData();
    }, []);
  return (
    <div className="App">
      <ScrollToTop />
      <Header CategoryDetails={CategoryDetails}/>  
      <div className="middle-wrapper">
        <AllRoutes CategoryDetails={CategoryDetails}/></div>      
        <CommonForm />
      <Footer/>
    </div>
  );
}

export default App;