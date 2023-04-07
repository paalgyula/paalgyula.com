import Link from "next/link";
import shortid from "shortid";
import { TutorialLayout } from "../../components";

import * as React from 'react'
import { InferGetStaticPropsType } from 'next';
import { fetchTuorialsList } from "../../data/tutorialsService";

export const meta = {
  title: "Tutorials Section",
  date: "2018-01-31T12:19:22+01:00",
  LastModifierDisplayName: "Paál Gyula",
  draft: false,
  weight: 1,
};


export default function TutorialsIndex({ tutorials }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <TutorialLayout meta={meta}>
      <h4>
        I will create a lot of tutorial and upload some examples from my
        projects/pilots.
      </h4>

      <ul>
        {tutorials.map((tutorial) => (
          <li key={shortid()}>
            <Link href={tutorial.link}>{tutorial.name}</Link>
          </li>
        ))}
      </ul>
    </TutorialLayout>
  );
};

export async function getStaticProps() {
  const tutorialsResponse = await fetchTuorialsList()
  
  return {
    props: {
      tutorials: tutorialsResponse.data,
    },
  }
}