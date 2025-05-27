import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Page Title",
};

export default function Page() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
      <div className="mb-10">
        <Image
          src="/images/namecard.png"
          alt="Paál Gyula"
          title="Paál Gyula"
          width={600}
          height={243}
        />
      </div>

      <div className="w-[500px] text-center font-light italic text-xl">
        Highly motivated{" "}
        <span className="text-primary">Cloud Native Software Developer</span>{" "}
        with a passion for building next-generation, scalable cloud
        applications. Skilled in to plan and developing robust systems utilizing{" "}
        <b className="font-bold">go</b>, React, node.js. Currently I am eager to
        tackle new challenges and contribute to innovative projects.
      </div>

      <div className="mt-10 text-sm">This page is under development...</div>

      <div className="absolute right-0 bottom-0 text-sm font-light italic">
        <div className="p-3 flex flex-col gap-0 text-right">
          <a href="#" className="hover:underline">
            +36 70 171 2997
          </a>
          <a href="#" className="hover:underline">
            paalgyula@paalgyula.com
          </a>
          <a href="#" className="hover:underline">
            paalgyula.com
          </a>
          <a href="#" className="hover:underline">
            github.com/paalgyula
          </a>
          <a href="#" className="hover:underline">
            linkedin.com/in/nev3rkn0wn
          </a>
        </div>
      </div>
    </div>
  );
}
