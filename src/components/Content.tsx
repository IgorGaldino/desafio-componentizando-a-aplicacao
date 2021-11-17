import { Header } from "./Header";
import { MovieCard } from "./MovieCard";
import { IGenreResponseProps } from "./SideBar";

export interface IMovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface IContentProps {
  selectedGenre: IGenreResponseProps;
  movies: IMovieProps[];
}

export function Content(props: IContentProps) {
  const { selectedGenre, movies } = props;

  return (
    <div className="container">
      <Header selectedGenre={selectedGenre} />
      <main>
        <div className="movies-list">
          {movies.map((movie: IMovieProps) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
