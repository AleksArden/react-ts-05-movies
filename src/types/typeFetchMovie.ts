export interface IResponse {
  page: number,
  results: FetchMovie[],
  total_pages: number,
  total_results: number,
}

interface IFetchMovie {
  id: string,
    original_title: string,
  release_date: string,
  overview: string,
  genres:{name: string}[],
  poster_path: string,
vote_average: number,
}

export type FetchMovie = Pick<IFetchMovie, 'id' | 'original_title'> 

export type FetchDetailsMovie = Omit<IFetchMovie, 'id'>