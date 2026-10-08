const games = [
  { src: '/img/rb-game-1.jpg', alt: 'Оригинальный слот Ramenbet: обезьяна-астронавт' },
  { src: '/img/rb-game-2.jpg', alt: 'Оригинальный слот Ramenbet: пиньята-единорог' },
  { src: '/img/rb-game-3.jpg', alt: 'Оригинальный слот Ramenbet: золотая монета' },
  { src: '/img/rb-game-4.jpg', alt: 'Оригинальный слот Ramenbet: лягушка на монетах' },
  { src: '/img/rb-game-5.jpg', alt: 'Оригинальный слот Ramenbet: руны и кристаллы' },
  { src: '/img/rb-game-6.jpg', alt: 'Оригинальный слот Ramenbet: космическая ракета' },
]

export default function RbGames() {
  return (
    <section aria-label="Оригинальные игры Раменбет">
      <h3 className="x8r2-sect">
        <i>R</i>
        Оригиналы
      </h3>
      <div className="x8r2-games">
        {games.map((game) => (
          <a className="x8r2-game" href="#sloty" key={game.src}>
            <img src={game.src} alt={game.alt} width="480" height="480" loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  )
}
