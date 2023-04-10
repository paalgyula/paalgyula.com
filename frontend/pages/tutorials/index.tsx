import Link from "next/link";
import shortid from "shortid";
import { TutorialLayout } from "@frontend/components";

import * as React from 'react'
import { InferGetStaticPropsType, NextPage } from 'next';
import { fetchTuorialsList } from "@frontend/data/tutorialsService";

const meta = {
  title: "Tutorials Section",
  date: "2018-01-31T12:19:22+01:00",
  LastModifierDisplayName: "Paál Gyula",
  draft: false,
  weight: 1,
};


const TutorialsIndex : NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ tutorials }) => {
  return (
    <TutorialLayout meta={meta}>
      <h4>
        I will create a lot of tutorial and upload some examples from my
        projects/pilots.
      </h4>

      <ul>
        {tutorials.map((tutorial) => (
          <li key={shortid()}>
            <Link href={`/tutorials/${tutorial.link}`}>{tutorial.name}</Link>
          </li>
        ))}
      </ul>
    </TutorialLayout>
  );
}

export default TutorialsIndex;

export async function getStaticProps() {
  const tutorialsResponse = await fetchTuorialsList()
  
  console.error(tutorialsResponse);

  return {
    props: {
      tutorials: tutorialsResponse,
    },
  }
}