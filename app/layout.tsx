import { Manrope, Unbounded } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const disp = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '700', '800'],
  variable: '--x8r2-disp',
  display: 'swap',
})

const sans = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--x8r2-sans',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${disp.variable} ${sans.variable} x8r2-root`}>
      <head>
        <title>Ramenbet казино — официальный сайт Раменбет и рабочее зеркало для входа и игры</title>
        <meta
          name="description"
          content="Ramenbet — официальный сайт казино Раменбет: рабочее зеркало на сегодня, вход и регистрация, бонус 275% на первые депозиты + 250 фриспинов, слоты, лайв казино, спорт и киберспорт."
        />
        <link rel="canonical" href="https://ramenbet22casino.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramenbet22casino.vercel.app/" />
        <meta property="og:title" content="Ramenbet казино — официальный сайт Раменбет и рабочее зеркало" />
        <meta
          property="og:description"
          content="Вход и регистрация в Раменбет через рабочее зеркало: бонус 275% на первые депозиты + 250 фриспинов, слоты, лайв казино и спорт."
        />
        <meta property="og:image" content="https://ramenbet22casino.vercel.app/img/rb-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ramenbet казино — официальный сайт Раменбет и рабочее зеркало" />
        <meta
          name="twitter:description"
          content="Вход и регистрация в Раменбет через рабочее зеркало: бонус 275% + 250 фриспинов, слоты, лайв казино и спорт."
        />
        <meta name="theme-color" content="#14172b" />
        <link rel="icon" href="/icon.png" />
      </head>
      <body className="x8r2-body">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
