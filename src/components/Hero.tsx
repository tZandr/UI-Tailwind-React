export default function Hero() {
  return (
    <section className="py-20 flex flex-col items-center text-center gap-4">
      <h1 className="text-4xl font-bold text-text">Discover your next game</h1>
      <p className="text-muted text-lg max-w-xl">Your favorite games, our better prices.</p>
      <button className="mt-2 px-6 py-3 bg-accent text-white font-semibold rounded hover:opacity-90 transition-opacity">Browse all games</button>
    </section>
  );
}
