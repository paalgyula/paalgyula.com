import { TutorialsResponse as TutorialsResponse } from "@backend/interfaces/tutorial";

const FUNCTIONS_BASE = `https://us-central1-paalgyulacom.cloudfunctions.net`;

export const fetchTuorialsList = async () => {
  const data = await fetch(`${FUNCTIONS_BASE}/api/tutorials`);
  const tutorials = await data.json();
  // const tutorials = {
  //     data: [],
  // } satisfies ITutorialsResponse;

  return tutorials as TutorialsResponse;
};
