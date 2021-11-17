import { Button } from "./Button";

export interface IGenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface ISideBarProps {
  genres: IGenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar(props: ISideBarProps) {
  const { genres, selectedGenreId, handleClickButton } = props;

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: IGenreResponseProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
