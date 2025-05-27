import Link from "next/link";
import { TutorialLayout } from "../../components";

import { ITutorialListItem } from "@backend/interfaces/tutorial";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";

export const meta = {
  title: "Tutorials Section",
  date: "2018-01-31T12:19:22+01:00",
  LastModifierDisplayName: "Paál Gyula",
  draft: false,
  weight: 1,
};

type TutorialsIndexProps = {
  tutorials: ITutorialListItem[];
} & InferGetStaticPropsType<typeof getStaticProps>;

export const TutorialsIndex: FC<TutorialsIndexProps> = ({ tutorials }) => {
  return (
    <TutorialLayout meta={meta}>
      <h4>
        I will create a lot of tutorial and upload some examples from my
        projects/pilots.
      </h4>

      <ul>
        {tutorials.map((tutorial) => (
          <li key={tutorial.id}>
            <Link href={tutorial.link}>{tutorial.name}</Link>
          </li>
        ))}
      </ul>
    </TutorialLayout>
  );
};

export async function getStaticProps() {
  // const tutorialsResponse = await fetchTuorialsList();

  return {
    props: {
      tutorials: [],
      // tutorials: tutorialsResponse,
    },
  };
}

export default TutorialsIndex;
