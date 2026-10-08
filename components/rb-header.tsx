import { IconLive, IconMenu, IconSlots, IconSport } from './rb-icons'

export default function RbHeader() {
  return (
    <header className="x8r2-hd">
      <label className="x8r2-burger" htmlFor="x8r2-navck">
        <IconMenu />
        <span className="x8r2-sr">Открыть меню Ramenbet</span>
      </label>
      <a className="x8r2-logo" href="#main">
        <img src="/img/rb-logo.png" alt="Логотип Ramenbet" width="34" height="34" />
        <b>RAMENBET</b>
      </a>
      <nav className="x8r2-navpills" aria-label="Разделы казино Ramenbet">
        <a href="#sloty">
          <IconSlots />
          Слоты
        </a>
        <a href="#live">
          <IconLive />
          Лайв казино
        </a>
        <a href="#sport">
          <IconSport />
          Спорт
        </a>
      </nav>
      <div className="x8r2-auth">
        <a className="x8r2-btn x8r2-btn-ghost" href="#vhod">
          Логин
        </a>
        <a className="x8r2-btn x8r2-btn-pink" href="#bonus">
          <span className="x8r2-short">Регистрация</span>
          <span className="x8r2-full">Зарегистрироваться</span>
        </a>
      </div>
    </header>
  )
}
