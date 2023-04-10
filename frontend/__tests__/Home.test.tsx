import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Contacts from "@frontend/components/Contacts";
import TutorialsIndex from "pages/tutorials";
import { ITutorial, ITutorialListItem } from "@frontend/data/tutorial";
import { TutorialLayout } from "@frontend/components";
import {NextRouter} from 'next/router';


const tutorial: ITutorial = {
  active: true,
  author: {
    avatarUrl: "http://avatar.com",
    displayName: "maci",
    nick: "macika",
  },
  createdAt: "2 days ago",
  id: "123",
  link: "test-link",
  name: "test name",
  category: "jajj",
  subtitle: "one",
};

const listItem: ITutorialListItem = {
  id: "21344",
  active: true,
  author: "bela",
  createdAt: "tegnap",
  link: "bekap/6",
  name: "basdf",
};

test("home", () => {
  render(<TutorialLayout meta={{date: 'asd', LastModifierDisplayName: 'asd', title: 'asd'}} />);

  //   render(<Home />);
  const myname = within(screen.getByTitle("Paál Gyula"));
  expect(
    myname.getByRole("img", { name: /welcome to next\.js!/i })
  ).toBeDefined();

  const footer = within(screen.getByRole("contentinfo"));
  const link = within(footer.getByRole("link"));
  expect(link.getByRole("img", { name: /vercel logo/i })).toBeDefined();
});
