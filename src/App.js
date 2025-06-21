import { Header, Footer } from "./component/index";
import { AllRoutes } from "./routes/AllRoutes";
import { useEffect, useState } from "react";
import http from "./http";
import './assets/css/style.css';
import './assets/css/headerresponsive.css';
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  const [CategoryDetails, setcategoryDetails] = useState({
      data: {},
  });
   useEffect(() => {
    const fetchData = async () => {
        try {
        const getresponse = await http.get("/get-service-category");
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
        <AllRoutes/></div>      
      <Footer/>
    </div>
  );
}

export default App;