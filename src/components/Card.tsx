import type { Game } from '../types/Game';

export default function Card({ title, genre, price, image }: Game) {
  return (
    <div className="overflow-hidden border border-border">
      {image && <img src={image} alt={title} className="w-full aspect-[460/215] object-cover" />}
      <div className="p-3 bg-surface flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {genre.map((g) => (
            <span key={g} className="text-xs text-muted border border-border rounded px-2 py-0.5">{g}</span>
          ))}
        </div>
        {price !== undefined && <p className="text-primary font-bold shrink-0">${price}</p>}
      </div>
    </div>
  );
}
