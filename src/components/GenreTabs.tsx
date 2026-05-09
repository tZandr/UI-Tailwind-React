type GenreTabsProps = {
  genres: string[];
  selected: string | null;
  onSelect: (genre: string | null) => void;
};

export default function GenreTabs({ genres, selected, onSelect }: GenreTabsProps) {
  return (
    <div className="flex gap-2 flex-wrap mb-2 md:mb-0">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-1.5 rounded md:rounded-t text-sm transition-colors ${
          selected === null
            ? 'bg-accent text-white'
            : 'bg-surface border border-border text-muted hover:text-text'
        }`}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          className={`px-4 py-1.5 rounded md:rounded-t text-sm transition-colors ${
            selected === genre
              ? 'bg-accent text-white'
              : 'bg-surface border border-border text-muted hover:text-text'
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
