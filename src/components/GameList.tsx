import type { Game } from '../types/Game';
import Card from './Card';

type GameListProps = {
  games: Game[];
};

export default function GameList({ games }: GameListProps) {
  return (
    <div className="grid grid-cols-3 gap-4 pb-8">
      {games.map((game) => (
        <Card key={game.title} {...game} />
      ))}
    </div>
  );
}
