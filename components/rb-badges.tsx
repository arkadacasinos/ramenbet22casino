import { IconCrypto, IconCrown, IconCup, IconGift } from './rb-icons'

export default function RbBadges() {
  return (
    <div className="x8r2-badges" aria-label="Бонусные программы Ramenbet">
      <a className="x8r2-badge x8r2-badge-crypto" href="#platezhi">
        <i>
          <IconCrypto />
        </i>
        Crypto
      </a>
      <a className="x8r2-badge x8r2-badge-start" href="#bonus">
        <i>
          <IconGift />
        </i>
        Start
      </a>
      <a className="x8r2-badge x8r2-badge-arena" href="#turniry">
        <i>
          <IconCup />
        </i>
        Arena
      </a>
      <a className="x8r2-badge x8r2-badge-vip" href="#turniry">
        <i>
          <IconCrown />
        </i>
        VIP
      </a>
    </div>
  )
}
