import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query) =>{
    if (!query) return { results: []};
    const resp = await axios.get(`${BASE_URL}/search/movie`,{
        params: {
            api_key:API_KEY,
            query,
        },
    }
    );
    return resp.data;
}