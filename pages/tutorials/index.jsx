import { TutorialLayout } from "../../components";
import { join } from "path";
import path from "path";
import fs from "fs/promises";
import shortid from "shortid";
import { getAllDocs } from "../../lib/docs";
import Link from "next/link";

export const meta = {
  title: "Tutorials Section",
  date: "2018-01-31T12:19:22+01:00",
  LastModifierDisplayName: "Paál Gyula",
  draft: false,
  weight: 1,
};

const TutorialsIndex = ({ props, children, files }) => {
  return (
    <TutorialLayout meta={meta}>
      I will create a lot of tutorial and upload some examples from my
      projects/pilots.
      <ul>
        <li>
          [Letsencrypt ACME client for
          Nginx](tutorials/linux/letsencrypt-acme-nginx)
        </li>
        <li>
          [Letsencrypt ACME client for
          Apache2](tutorials/linux/letsencrypt-acme-apache2)
        </li>
        <li>[Easy SSH tricks on Linux](tutorials/linux/easy-ssh-tricks)</li>
        {files.map((f) => (
          <li key={shortid()}>
            <Link href={"/tutorials/" + f.slug} passHref>
              <a>{f.meta.title || f.slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </TutorialLayout>
  );
};

export async function getStaticProps({ params }) {
  // let files = await fs.readdir(docsDirectory);
  const files = await getAllDocs();

  // const doc = getDocBySlug(params.slug);
  // const content = await markdownToHtml(doc.content || "");
  const doc = {};
  const content = "";

  return {
    props: {
      files,
      ...doc,
      content,
    },
  };
}

export default TutorialsIndex;
