import RbHeader from '../components/rb-header'
import RbDrawer from '../components/rb-drawer'
import RbRail from '../components/rb-rail'
import RbHero from '../components/rb-hero'
import RbBadges from '../components/rb-badges'
import RbFilters from '../components/rb-filters'
import RbGames from '../components/rb-games'
import RbArticle from '../components/rb-article'
import RbFooter from '../components/rb-footer'

export default function Page() {
  return (
    <div className="x8r2-wrap">
      <input type="checkbox" id="x8r2-navck" className="x8r2-navck" tabIndex={-1} aria-hidden="true" />
      <RbHeader />
      <RbDrawer />
      <div className="x8r2-shell">
        <RbRail />
        <main className="x8r2-main" id="main">
          <RbHero />
          <RbBadges />
          <RbFilters />
          <RbGames />
          <RbArticle />
        </main>
      </div>
      <RbFooter />
    </div>
  )
}
