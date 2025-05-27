import moment from "moment";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import TutorialsHeader from "./TutorialsHeader";

type IMetadata = {
  meta: {
    title: string;
    LastModifierDisplayName: string;
    date: string;
  };
};

export const TutorialLayout: FC<PropsWithChildren<IMetadata>> = ({
  meta,
  children,
}) => (
  <>
    <Head>
      <title>Tutorial - {meta.title}</title>
    </Head>

    <TutorialsHeader title={meta.title} />

    <div className="wrapper container">
      <section className="section" id="tutorial">
        <h2 className="section-title">{meta.title}</h2>

        {children}

        <div style={{ marginTop: 30, textAlign: "right" }}>
          <p>
            <small>Author: {meta.LastModifierDisplayName}</small>
            <br />
            {meta.date && (
              <small>Creted at: {moment(meta.date).fromNow()}</small>
            )}
          </p>
        </div>
      </section>
    </div>
  </>
);
