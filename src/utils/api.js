import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGJmMGYxNTM3YzFjMGRlZDAyYTI2NjJhNTY3ZmIzYyIsInN1YiI6IjY0YjI4M2NlMzc4MDYyMDBlMmFhYzQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.upfxcbkdb1aGn6LVXGygGJBmmEzvvYejVfNYQhlFhYg'

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
