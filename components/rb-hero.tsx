import { IconGoogle, IconTelegram } from './rb-icons'

export default function RbHero() {
  return (
    <section className="x8r2-hero" aria-label="Приветственный пакет Ramenbet">
      <div className="x8r2-hero-pct">275%</div>
      <div className="x8r2-hero-left">
        <span className="x8r2-hero-kicker">Приветственный пакет</span>
        <h2 className="x8r2-hero-title">на первые депозиты + 250 фриспинов</h2>
        <div className="x8r2-hero-cta">
          <a className="x8r2-btn x8r2-btn-pink" href="#bonus">
            Зарегистрироваться
          </a>
          <a className="x8r2-chip" href="#vhod">
            <IconGoogle />
            Google
          </a>
          <a className="x8r2-chip" href="#vhod">
            <IconTelegram />
            Telegram
          </a>
        </div>
      </div>
    </section>
  )
}
