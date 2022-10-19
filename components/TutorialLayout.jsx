import moment from "moment";
import Head from "next/head";
import TutorialsHeader from "./TutorialsHeader";

export const TutorialLayout = ({ meta, children }) => (
  <>
    <Head>
      <title>Tutorial - {meta.title}</title>
    </Head>

    <TutorialsHeader title={meta.title} />

    <div className="wrapper container">
      <h1 style={{paddingBottom: 40}}>{meta.title}</h1>

      <section className="section" id="tutorial">
        {children}

        <div style={{ marginTop: 30 }}>
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
