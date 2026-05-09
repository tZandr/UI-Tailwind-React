import type { Game } from '../types/Game';
import Card from './Card';

type GameListProps = {
  games: Game[];
};

export default function GameList({ games }: GameListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pt-4 pb-4 md:pt-0 md:pb-8">
      {games.map((game) => (
        <Card key={game.title} {...game} />
      ))}
    </div>
  );
}
