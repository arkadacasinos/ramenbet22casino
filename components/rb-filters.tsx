import { IconFlame, IconGrid, IconPromo, IconSearch, IconTag } from './rb-icons'

export default function RbFilters() {
  return (
    <div className="x8r2-filters" aria-label="Фильтры игр Раменбет">
      <span className="x8r2-search">
        <IconSearch />
      </span>
      <a href="#sloty">
        <IconFlame />
        Новинки
      </a>
      <a href="#sloty">
        <i className="x8r2-rlogo">R</i>
        Оригиналы
      </a>
      <a href="#sloty">
        <IconGrid />
        Все игры
      </a>
      <a href="#sloty">
        <IconPromo />
        Мегавейз
      </a>
      <a href="#bonus">
        <IconTag />
        Покупка бонуса
      </a>
    </div>
  )
}
