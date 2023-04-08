import {ITutorialsResponse} from '@backend/interfaces/tutorial'
 
export const fetchTuorialsList = async () => {
    const data = await fetch('https://paalgyula-website.web.app/api/tutorials')
    const tutorials = await data.json();
    // const tutorials = {
    //     data: [],
    // } satisfies ITutorialsResponse;

    return tutorials as ITutorialsResponse[];
}