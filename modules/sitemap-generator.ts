import fs from 'node:fs'
import path from 'node:path'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'sitemap-generator',
    configKey: 'sitemapGenerator',
  },
  defaults: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://cogni-games.vedmant.com',
    outputPath: 'public/sitemap.xml',
  },
  setup(options, nuxt) {
    // Get locales from i18n configuration
    const getLocales = () => {
      // Try to find i18n configuration in modules
      const i18nModule = nuxt.options.modules.find(module =>
        Array.isArray(module) && module[0] === '@nuxtjs/i18n',
      ) as [string, any] | undefined

      if (i18nModule && i18nModule[1] && i18nModule[1].locales) {
        const locales = i18nModule[1].locales
        if (Array.isArray(locales)) {
          return locales.map((locale: any) =>
            typeof locale === 'string' ? locale : locale.code,
          )
        }
      }

      // Try to find i18n configuration in nuxt.options
      if (nuxt.options.i18n && nuxt.options.i18n.locales) {
        const locales = nuxt.options.i18n.locales
        if (Array.isArray(locales)) {
          return locales.map((locale: any) =>
            typeof locale === 'string' ? locale : locale.code,
          )
        }
      }

      // Fallback to default locales if i18n config is not found
      console.warn('⚠️  Could not detect i18n locales, using fallback: [en, ru, es]')
      return ['en', 'ru', 'es']
    }

    const locales = getLocales()

    // Generate sitemap immediately when module loads (before any build process)
    const generateSitemapNow = () => {
      try {
        console.warn('🔍 Generating sitemap for static deployment...')

        const pagesDir = path.resolve(nuxt.options.srcDir, 'pages')
        const routes = findPageFiles(pagesDir)
        const uniqueRoutes = [...new Set(routes)].sort()

        console.warn('🌍 Detected locales:', locales)
        console.warn('📄 Found routes:', uniqueRoutes)

        const sitemap = generateSitemap(uniqueRoutes)
        const outputPath = path.resolve(nuxt.options.srcDir, '..', options.outputPath)

        // Ensure the directory exists
        const outputDir = path.dirname(outputPath)
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true })
        }

        fs.writeFileSync(outputPath, sitemap, 'utf8')
        console.warn('✅ Sitemap generated for static deployment at:', outputPath)
      }
      catch (error) {
        console.error('❌ Error generating sitemap for static deployment:', error)
      }
    }

    // Function to recursively find all page files
    function findPageFiles(dir: string, basePath = ''): string[] {
      const files: string[] = []

      if (!fs.existsSync(dir))
        return files

      const items = fs.readdirSync(dir, { withFileTypes: true })

      for (const item of items) {
        const fullPath = path.join(dir, item.name)
        const relativePath = path.join(basePath, item.name)

        if (item.isDirectory()) {
          // Skip directories that start with underscore (like _nuxt)
          if (!item.name.startsWith('_')) {
            files.push(...findPageFiles(fullPath, relativePath))
          }
        }
        else if (item.isFile() && (item.name.endsWith('.vue') || item.name.endsWith('.js') || item.name.endsWith('.ts'))) {
          // Convert file path to route path
          const routePath = relativePath
            .replace(/\.(vue|js|ts)$/, '') // Remove file extension
            .replace(/\/index$/, '') // Remove /index

          // Handle special cases for dynamic routes
          if (routePath.includes('[no]')) {
            // Generate specific routes for alphabet games
            files.push('/alpha/2', '/alpha/3')
          }
          else if (routePath === 'index') {
            // Handle index route
            files.push('/')
          }
          else {
            files.push(`/${routePath}`)
          }
        }
      }

      return files
    }

    // Function to generate sitemap XML
    function generateSitemap(routes: string[]) {
      let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
      sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'

      const lastmod = new Date().toISOString().split('T')[0]

      // Generate URLs for each route and locale
      for (const route of routes) {
        for (const locale of locales) {
          const url = locale === 'en' ? `${options.baseUrl}${route}` : `${options.baseUrl}/${locale}${route}`

          // Determine priority based on route
          let priority = '0.8'
          if (route === '/')
            priority = '1.0'
          else if (route.includes('/help'))
            priority = '0.6'
          else if (route.includes('/alpha') || route === '/rainbow')
            priority = '0.8'

          sitemap += '  <url>\n'
          sitemap += `    <loc>${url}</loc>\n`
          sitemap += `    <lastmod>${lastmod}</lastmod>\n`
          sitemap += '    <changefreq>weekly</changefreq>\n'
          sitemap += `    <priority>${priority}</priority>\n`

          // Add alternate language versions
          sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${locale === 'en' ? url : `${options.baseUrl}${route}`}"/>\n`
          for (const altLocale of locales) {
            const altUrl = altLocale === 'en' ? `${options.baseUrl}${route}` : `${options.baseUrl}/${altLocale}${route}`
            sitemap += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}"/>\n`
          }

          sitemap += '  </url>\n'
        }
      }

      sitemap += '</urlset>'
      return sitemap
    }

    // Hook into the build process
    nuxt.hook('vite:extendConfig', (_config) => {
      // This runs during the Vite build process
    })

    // Hook that runs before the build starts
    nuxt.hook('build:before', async () => {
      try {
        console.warn('🔍 Scanning pages directory for sitemap generation...')
        console.warn('🌍 Detected locales:', locales)

        const pagesDir = path.resolve(nuxt.options.srcDir, 'pages')
        const routes = findPageFiles(pagesDir)

        // Remove duplicates and sort
        const uniqueRoutes = [...new Set(routes)].sort()

        console.warn('📄 Found routes:', uniqueRoutes)

        console.warn('🏗️  Generating sitemap...')
        const sitemap = generateSitemap(uniqueRoutes)

        // Write sitemap to public directory
        const outputPath = path.resolve(nuxt.options.srcDir, '..', options.outputPath)

        // Ensure the directory exists
        const outputDir = path.dirname(outputPath)
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true })
        }

        fs.writeFileSync(outputPath, sitemap, 'utf8')

        console.warn('✅ Sitemap generated successfully at:', outputPath)
        console.warn(`📊 Generated ${uniqueRoutes.length * locales.length} URLs for ${locales.length} locales`)
      }
      catch (error) {
        console.error('❌ Error generating sitemap:', error)
      }
    })

    // Hook that runs after the build is complete
    nuxt.hook('nitro:build:before', async (nitro) => {
      // Ensure sitemap is copied to the output directory
      const sourcePath = path.resolve(nuxt.options.srcDir, '..', options.outputPath)
      const targetPath = path.resolve(nitro.options.output.publicDir, 'sitemap.xml')

      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath)
        console.warn('📋 Sitemap copied to output directory')
      }
      else {
        // If source doesn't exist, generate it now
        console.warn('⚠️  Sitemap source not found, generating now...')
        generateSitemapNow()

        // Try to copy again
        if (fs.existsSync(sourcePath)) {
          fs.copyFileSync(sourcePath, targetPath)
          console.warn('📋 Sitemap generated and copied to output directory')
        }
        else {
          console.error('❌ Failed to generate sitemap for output')
        }
      }
    })

    // Generate sitemap immediately
    generateSitemapNow()

    // Also generate on ready hook as backup
    nuxt.hook('ready', generateSitemapNow)
  },
})
