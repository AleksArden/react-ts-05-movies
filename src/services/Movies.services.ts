import axios from 'axios';

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});
const ApiKey = '51cea464d1158e7d34cacf903de39a42';

export const fetchTrendingMovies = async () => {
    const {
        data: { results },
    } = await moviesApi.get(`trending/movie/day`, {
        params: {
            api_key: ApiKey,
        },
    });
    return results;
};

export const fetchSearchMovies = async searchName => {
    const {
        data: { results },
    } = await moviesApi.get(`search/movie`, {
        params: {
            api_key: ApiKey,
            query: searchName,
        },
    });
    return results;
};

export const fetchMovieDetailsById = async movieId => {
    const { data } = await moviesApi.get(`movie/${movieId}`, {
        params: {
            api_key: ApiKey,
        },
    });
    return data;
};

export const fetchCastById = async movieId => {
    const {
        data: { cast },
    } = await moviesApi.get(`movie/${movieId}/credits`, {
        params: {
            api_key: ApiKey,
        },
    });
    return cast;
};

export const fetchReviewsById = async movieId => {
    const {
        data: { results },
    } = await moviesApi.get(`movie/${movieId}/reviews`, {
        params: {
            api_key: ApiKey,
        },
    });
    return results;
};
