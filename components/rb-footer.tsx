const tags = [
  { label: '#ramenbet', href: '#official' },
  { label: '#раменбет', href: '#casino' },
  { label: '#ramenbet-зеркало', href: '#zerkalo' },
  { label: '#рамен-бет', href: '#vhod' },
  { label: '#ramen-bet', href: '#vhod' },
  { label: '#раменбет-зеркало', href: '#rabochee-zerkalo' },
  { label: '#ramenbet-официальный-сайт', href: '#official' },
  { label: '#раменбет-официальный-сайт', href: '#mobile' },
  { label: '#раменбет-рабочее-зеркало', href: '#rabochee-zerkalo' },
  { label: '#ramenbet-казино', href: '#casino' },
  { label: '#раменбет-казино', href: '#faq' },
]

export default function RbFooter() {
  return (
    <footer className="x8r2-foot">
      <nav className="x8r2-tags" aria-label="Ключевые фразы Ramenbet">
        {tags.map((tag) => (
          <a href={tag.href} key={tag.label}>
            {tag.label}
          </a>
        ))}
      </nav>
      <p className="x8r2-foot-note">
        Ramenbet | Раменбет — информационная страница о казино, зеркалах и бонусах. Азартные игры могут вызывать
        зависимость: играйте ответственно. 18+
      </p>
    </footer>
  )
}
