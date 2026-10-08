import {
  IconCrypto,
  IconCrown,
  IconCup,
  IconCyber,
  IconLive,
  IconLottery,
  IconPromo,
  IconSlots,
  IconSport,
} from './rb-icons'

export default function RbRail() {
  return (
    <nav className="x8r2-rail" aria-label="Навигация по разделам Раменбет">
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
      <a href="#kiber">
        <IconCyber />
        Киберспорт
      </a>
      <span className="x8r2-rail-sep" />
      <a href="#bonus">
        <IconPromo />
        Промо
      </a>
      <a href="#turniry">
        <IconCup />
        Турниры
      </a>
      <a href="#turniry">
        <IconLottery />
        Лотереи
      </a>
      <a href="#turniry">
        <IconCrown />
        Программа лояльности
      </a>
      <a href="#platezhi">
        <IconCrypto />
        Купить крипту
      </a>
    </nav>
  )
}
