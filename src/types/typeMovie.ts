 interface IMovie {
  id: string,
   title: string,
      releaseDate: number,
      overview: string,
      genres: string,
      poster: string,
      voteAverage: string,
}
export type Movie = Pick<IMovie, 'id' | 'title'>

export type DetailsMovie = Omit<IMovie, 'id'>