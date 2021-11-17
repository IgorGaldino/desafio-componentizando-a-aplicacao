import { useEffect, useState } from "react";

import { IGenreResponseProps, SideBar } from './components/SideBar';
import { Content, IMovieProps } from './components/Content';

import { api } from "./services/api";

import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<IGenreResponseProps[]>([]);

  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponseProps>(
    {} as IGenreResponseProps
  );

  useEffect(() => {
    api.get<IGenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<IMovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<IGenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />

      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}
