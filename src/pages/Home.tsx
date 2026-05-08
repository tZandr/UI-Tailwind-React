import { useState } from 'react';
import Hero from '../components/Hero';
import GenreTabs from '../components/GenreTabs';
import GameList from '../components/GameList';
import hadesImg from '../assets/hades.jpg';
import hollowknightImg from '../assets/hollow_knight.jpg';
import terrariaImg from '../assets/terraria.jpg';
import buckshotRouletteImg from '../assets/buckshotroulette.jpg';
import tboiImg from '../assets/tboi.jpg';

const games = [
  {
    title: 'Hades',
    genre: ['Roguelike'],
    price: 24.99,
    image: hadesImg,
  },
  {
    title: 'Hollow Knight',
    genre: ['Metroidvania', '2D'],
    price: 14.99,
    image: hollowknightImg,
  },
  {
    title: 'Terraria',
    genre: ['Sandbox', '2D', 'Multiplayer'],
    price: 9.99,
    image: terrariaImg,
  },
  {
    title: 'Buckshot Roulette',
    genre: ['Gambling', 'Multiplayer'],
    price: 2.99,
    image: buckshotRouletteImg,
  },
  {
    title: 'The Binding of Isaac: Rebirth',
    genre: ['Roguelike'],
    price: 14.99,
    image: tboiImg,
  },
];

const allGenres = [...new Set(games.flatMap((g) => g.genre))];

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filtered = selectedGenre
    ? games.filter((g) => g.genre.includes(selectedGenre))
    : games;

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="mb-0">
        <GenreTabs
          genres={allGenres}
          selected={selectedGenre}
          onSelect={setSelectedGenre}
        />
      </div>
      <GameList games={filtered} />
    </div>
  );
}
