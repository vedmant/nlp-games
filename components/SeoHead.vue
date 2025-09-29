<template>
  <Head>
    <!-- Language and Direction -->
    <Html :lang="$i18n.locale" :dir="$i18n.localeProperties?.dir || 'ltr'" />
    
    <!-- Primary Meta Tags -->
    <Title>{{ title || $t('name') }}</Title>
    <Meta name="title" :content="title || $t('name')" />
    <Meta name="description" :content="description || $t('description')" />
    
    <!-- Open Graph / Facebook -->
    <Meta property="og:type" content="website" />
    <Meta property="og:url" :content="canonicalUrl" />
    <Meta property="og:title" :content="title || $t('name')" />
    <Meta property="og:description" :content="description || $t('description')" />
    <Meta property="og:image" :content="image || '/og-image.jpg'" />
    <Meta property="og:locale" :content="$i18n.localeProperties?.iso || 'en_US'" />
    
    <!-- Twitter -->
    <Meta property="twitter:card" content="summary_large_image" />
    <Meta property="twitter:url" :content="canonicalUrl" />
    <Meta property="twitter:title" :content="title || $t('name')" />
    <Meta property="twitter:description" :content="description || $t('description')" />
    <Meta property="twitter:image" :content="image || '/og-image.jpg'" />
    
    <!-- Canonical URL -->
    <Link rel="canonical" :href="canonicalUrl" />
    
    <!-- Alternate Language Versions -->
    <Link 
      v-for="locale in availableLocales" 
      :key="locale.code"
      rel="alternate" 
      :hreflang="locale.iso" 
      :href="getLocalizedUrl(locale.code)"
    />
    <Link rel="alternate" hreflang="x-default" :href="getLocalizedUrl('en')" />
    
    <!-- Additional Meta Tags -->
    <Meta name="robots" content="index, follow" />
    <Meta name="googlebot" content="index, follow" />
    <Meta name="author" content="CogniGames" />
    <Meta name="keywords" :content="keywords || getDefaultKeywords()" />
  </Head>
</template>

<script setup>
const { $i18n } = useNuxtApp()
const route = useRoute()

// Props
const props = defineProps({
  title: String,
  description: String,
  image: String,
  keywords: String
})

// Computed
const availableLocales = computed(() => $i18n.locales.value || [
  { code: 'en', iso: 'en-US' },
  { code: 'ru', iso: 'ru-RU' }
])

const canonicalUrl = computed(() => {
  const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || 'https://cognigames.com'
  return `${baseUrl}${route.path}`
})

// Methods
const getLocalizedUrl = (localeCode) => {
  const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || 'https://cognigames.com'
  if (localeCode === 'en') {
    return baseUrl + route.path.replace(/^\/[a-z]{2}\//, '/')
  }
  return `${baseUrl}/${localeCode}${route.path.replace(/^\/[a-z]{2}\//, '/')}`
}

const getDefaultKeywords = () => {
  const keywords = {
    en: 'cognitive training, brain games, Stroop effect, attention training, memory games, neuroplasticity, mental fitness, cognitive rehabilitation',
    ru: 'когнитивная тренировка, игры для мозга, эффект Струпа, тренировка внимания, игры на память, нейропластичность, умственная подготовка, когнитивная реабилитация'
  }
  return keywords[$i18n.locale.value] || keywords.en
}
</script>
