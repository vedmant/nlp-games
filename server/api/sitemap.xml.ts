export default defineEventHandler(async (event) => {
  const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || 'https://cogni-games.vedmant.com'
  const locales = ['en', 'ru', 'es']

  // Define your routes
  const routes = [
    '/',
    '/rainbow',
    '/alpha/2',
    '/alpha/3',
    '/help',
    '/help/rainbow',
    '/help/alphabet',
  ]

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'

  // Generate URLs for each route and locale
  for (const route of routes) {
    for (const locale of locales) {
      const url = locale === 'en' ? `${baseUrl}${route}` : `${baseUrl}/${locale}${route}`
      const lastmod = new Date().toISOString().split('T')[0]

      sitemap += '  <url>\n'
      sitemap += `    <loc>${url}</loc>\n`
      sitemap += `    <lastmod>${lastmod}</lastmod>\n`
      sitemap += '    <changefreq>weekly</changefreq>\n'
      sitemap += '    <priority>0.8</priority>\n'

      // Add alternate language versions
      sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${locale === 'en' ? url : `${baseUrl}${route}`}"/>\n`
      for (const altLocale of locales) {
        const altUrl = altLocale === 'en' ? `${baseUrl}${route}` : `${baseUrl}/${altLocale}${route}`
        sitemap += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}"/>\n`
      }

      sitemap += '  </url>\n'
    }
  }

  sitemap += '</urlset>'

  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})
