import { ACCESS_KEY } from '../config/config';
import axios from "axios";

const youtubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
});

export function getVideosByName(q, maxResults = 6) {
    return youtubeApi.get('/search', {
        params: {
            part: 'snippet',
            maxResults,
            q,
            key: ACCESS_KEY,
        },
    });
}
