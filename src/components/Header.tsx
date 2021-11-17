import { IGenreResponseProps } from "./SideBar";

interface IHeaderProps {
  selectedGenre: IGenreResponseProps;
}

export function Header({ selectedGenre }: IHeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
