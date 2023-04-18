import axios from 'axios';

interface IRequest {
    URL: string,
    searchName?: string,
}

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});
const ApiKey = '51cea464d1158e7d34cacf903de39a42';

export const fetchMovies = async<T> (request: IRequest): Promise<T> => {
    const {
        data: { data },
    } = await moviesApi.get(request.URL, {
        params: {
            api_key: ApiKey,
            query: request.searchName,
        },
    });
    return data;
};

// export const fetchSearchMovies = async searchName => {
//     const {
//         data: { results },
//     } = await moviesApi.get(`search/movie`, {
//         params: {
//             api_key: ApiKey,
//             query: searchName,
//         },
//     });
//     return results;
// };

// export const fetchMovieDetailsById = async movieId => {
//     const { data } = await moviesApi.get(`movie/${movieId}`, {
//         params: {
//             api_key: ApiKey,
//         },
//     });
//     return data;
// };

// export const fetchCastById = async movieId => {
//     const {
//         data: { cast },
//     } = await moviesApi.get(`movie/${movieId}/credits`, {
//         params: {
//             api_key: ApiKey,
//         },
//     });
//     return cast;
// };

// export const fetchReviewsById = async movieId => {
//     const {
//         data: { results },
//     } = await moviesApi.get(`movie/${movieId}/reviews`, {
//         params: {
//             api_key: ApiKey,
//         },
//     });
//     return results;
// };
