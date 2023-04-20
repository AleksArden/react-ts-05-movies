import axios from 'axios';

interface IRequest {
    URL: string,
    searchName?: string,
}

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});
const ApiKey = '51cea464d1158e7d34cacf903de39a42';

export const fetchRequest = async<T>(request: IRequest): Promise<T> => {
    const { data } = await moviesApi.get<T>(request.URL, {
        params: {
            api_key: ApiKey,
            query: request.searchName,
        },
    });
    return data;
};

