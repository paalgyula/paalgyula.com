import ReportVitals from "components/ReportVitals";
import { Metadata } from "next";
import Image from "next/image";
import ConnnectBox from "./connect-box";

export const metadata: Metadata = {
  title: "Paál Gyula - Sr. Cloud Architect",
  description: `Highly motivated
        Cloud Native Software Developer
        with a passion for building next-generation, scalable cloud
        applications. Skilled in to plan and developing robust systems utilizing, go, React, node.js.`,
};

export default function Page() {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center">
      <div className="mb-10 p-4">
        <Image
          src="/images/namecard.png"
          alt="Paál Gyula"
          title="Paál Gyula"
          width={600}
          height={243}
        />
      </div>

      <div className="max-w-[500px] text-center font-light italic text-md md:text-xl p-4">
        Highly motivated{" "}
        <span className="text-primary">Cloud Native Software Developer</span>{" "}
        with a passion for building next-generation, scalable cloud
        applications. Skilled in to plan and developing robust systems utilizing{" "}
        <b className="font-bold">go</b>, React, node.js. Currently I am eager to
        tackle new challenges and contribute to innovative projects.
      </div>

      <div className="mt-10 text-sm">This page is under development...</div>

      <div className="fixed right-0 bottom-0 text-sm font-light italic">
        <ConnnectBox />
      </div>
      <ReportVitals />
    </div>
  );
}
