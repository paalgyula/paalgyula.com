"use client";
import Script from "next/script";

export default function PortfolioScript() {
  return (
    <Script
      src="/javascript/isotope.pkgd.min.js"
      onLoad={() => {
        require("../public/javascript/isotope-activator.js");
      }}
    />
  );
}
