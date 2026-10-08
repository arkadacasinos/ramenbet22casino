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

import RbDrawerClose from './rb-drawer-close'

export default function RbDrawer() {
  return (
    <div className="x8r2-drawer">
      <RbDrawerClose />
      <label className="x8r2-drawer-ov" htmlFor="x8r2-navck" aria-hidden="true" />
      <nav className="x8r2-drawer-panel" aria-label="Меню Ramenbet">
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
        <span className="x8r2-drawer-sep" />
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
    </div>
  )
}
