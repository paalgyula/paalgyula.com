"use client";

import { useReportWebVitals } from "next/web-vitals";

const ReportVitals = () => {
  useReportWebVitals((metric) => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "web_vitals",
      metric_name: metric.name,
      metric_value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value,
      ), // values must be integers
      metric_id: metric.id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    });
  });

  return <></>;
};

export default ReportVitals;
