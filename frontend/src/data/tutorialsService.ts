import { ITutorialListItem } from '@backend/interfaces/tutorial';
 
export const fetchTuorialsList = async () => {
    const data = await fetch('https://www.paalgyula.com/api/tutorials')
    const tutorials = await data.json();
    // const tutorials = {
    //     data: [],
    // } satisfies ITutorialsResponse;

    return tutorials as ITutorialListItem[];
}