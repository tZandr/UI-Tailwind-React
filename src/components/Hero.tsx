import miraidonBg from '../assets/Miraidon.jpg';

export default function Hero() {
  return (
    <section className="relative h-80 md:h-96 overflow-hidden">
      <img src={miraidonBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center gap-4 px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-white">Discover your next game</h1>
        <p className="text-white/70 text-lg max-w-xl">Your favorite games, our better prices.</p>
        <button className="mt-2 px-6 py-3 bg-accent text-white font-semibold rounded hover:opacity-90 transition-opacity">Browse all games</button>
      </div>
    </section>
  );
}
