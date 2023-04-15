import { InferGetStaticPropsType } from "next";

import moment from "moment";
import { TutorialLayout } from "src/components";
import "@frontend/lib/firebaseApp";
import { fetchTuorialsList, getTutorialBySlug } from "@frontend/data/tutorialsService";

export default function TutorialsIndex({
  tutorial,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <TutorialLayout meta={{
    date: moment(tutorial.createdAt).format() ?? '',
    LastModifierDisplayName: tutorial.author.nick,
    title: tutorial.name
  }}>Remek: {tutorial.link}</TutorialLayout>;
}

export async function getStaticProps(ctx: any) {
 const tutorial = await getTutorialBySlug(ctx.params.slug);

  return {
    props: {
      tutorial,
    },
  };
}

export async function getStaticPaths() {
  const tutorialsResponse = await fetchTuorialsList();

  const paths = tutorialsResponse.map((tutorial) => ({
    params: { slug: tutorial.link },
  }));

  return {
    paths,
    //   [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  };
}
