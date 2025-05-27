"use client";
import Script from "next/script";

export default function BestSkillsPiesScript() {
  return (
    <Script
      src="/javascript/easypiechart.min.js"
      onLoad={() => {
        require("../../public/javascript/chart-activator.js");
      }}
    />
  );
}
