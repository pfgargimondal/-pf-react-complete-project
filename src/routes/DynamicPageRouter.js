import { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import loadTemplateComponent from "../utils/loadTemplateComponent";
import http from "../http";
import {PageNotFound} from "../pages/PageNotFound/PageNotFound";
import styles from "../assets/css/responsive.module.css";

export const DynamicPageRouter = () => {
  const { slug } = useParams();
  const [serviceResponse, setServiceResponse] = useState(null);
  const [TemplateComponent, setTemplateComponent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await http.get(`/get-service-details/${slug}`);
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
      }
    };

    fetchData();
  }, [slug]);

  if (!TemplateComponent || !serviceResponse) {
    return <PageNotFound />;
  }

  return (
    <Suspense fallback={<div>Loading Template...</div>}>
      <TemplateComponent serviceResponse={serviceResponse} slug={slug} />
    </Suspense>
  );
};