import Card from '../components/Card';
import hadesImg from '../assets/hades.jpg';
import hollowknightImg from '../assets/hollow_knight.jpg';
import terrariaImg from '../assets/terraria.jpg';
import buckshotRouletteImg from '../assets/buckshotroulette.jpg';
import tboiImg from '../assets/tboi.jpg';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-3 gap-4 py-8">
        <Card
          title="Hades"
          genre={['Action', 'Roguelike']}
          price={24.99}
          image={hadesImg}
        />
        <Card
          title="Hollow Knight"
          genre={['Platformer', 'Metroidvania']}
          price={14.99}
          image={hollowknightImg}
        />
        <Card
          title="Terraria"
          genre={['Sandbox', '2D']}
          price={9.99}
          image={terrariaImg}
        />
        <Card
          title="Buckshot Roulette"
          genre={['Gambling', 'Multiplayer']}
          price={2.99}
          image={buckshotRouletteImg}
        />
        <Card
          title="The Binding of Isaac: Rebirth"
          genre={['Action','Rougelike']}
          price={14.99}
          image={tboiImg}
        />
      </div>
    </div>
  );
}
