
interface IPortfolioItem {
    category: string,
    image: string,
    imgAlt: string,
    meta: string,
    name: string,
    link?: {
        text: string,
        url: string
    }
}
