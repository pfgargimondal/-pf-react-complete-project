import { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import loadTemplateComponent from "../utils/loadTemplateComponent";
import http from "../http";
import {PageNotFound} from "../pages/PageNotFound/PageNotFound";
import Loader from "../component/Loader/Loader";

export const DynamicPageRouter = () => {
  const { slug } = useParams();
  const [serviceResponse, setServiceResponse] = useState(null);
  const [TemplateComponent, setTemplateComponent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
 
      try {
        const res = await http.get(`${process.env.REACT_APP_API}${slug}`);
        const response = res.data;

        setServiceResponse(response);

        const Component = loadTemplateComponent[response.template];

        if (Component) {
          setTemplateComponent(() => Component);
        } else {
          setTemplateComponent(null);
        }
      } catch (err) {
        console.error("API error:", err);
        setTemplateComponent(null);
      } finally {
        setLoading(false); // API done
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  if (!serviceResponse || !TemplateComponent) {
    return <PageNotFound />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <TemplateComponent serviceResponse={serviceResponse} slug={slug} />
    </Suspense>
  );
};