import {cardInfo} from "../data/cardInfo";

export function getProjects() {
    return Promise.resolve(cardInfo);
}
