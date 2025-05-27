"use client";

import { Box } from "@chakra-ui/react";
import Portfolio from "components/Portfolio";
import { useTranslation } from "lib/translate";

const PortfolioSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="section"
      className="portfolio-section section"
      id="portfolio-section"
    >
      <h2 className="section-title">{t("Portfolio")}</h2>

      <h3 className="subtitle">{t("Some of my projects")}</h3>

      <ul className="filters clearfix" id="filters">
        <li className="type active" data-filter="*">
          All
        </li>
        <li className="type" data-filter=".backend">
          Back-end
        </li>
        <li className="type" data-filter=".frontend">
          Front-end
        </li>
        <li className="type" data-filter=".appz">
          Application
        </li>
      </ul>
      <div className="items-wrapper isotope row">
        <Portfolio />
      </div>
    </Box>
  );
};

export default PortfolioSection;
