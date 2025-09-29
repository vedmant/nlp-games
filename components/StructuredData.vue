<template>
  <script type="application/ld+json" v-html="structuredData" />
</template>

<script setup>
const { $i18n } = useNuxtApp()
const route = useRoute()

const structuredData = computed(() => {
  const baseUrl = process.env.NUXT_PUBLIC_BASE_URL || 'https://cognigames.com'
  const currentLocale = $i18n.locale.value

  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'CogniGames',
    'description': currentLocale === 'ru'
      ? 'Улучшите свои когнитивные способности с помощью интерактивных игр нейролингвистического программирования'
      : 'Enhance your cognitive abilities with interactive neuro-linguistic programming games',
    'url': baseUrl,
    'applicationCategory': 'EducationalApplication',
    'operatingSystem': 'Web Browser',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
    },
    'inLanguage': currentLocale === 'ru' ? 'ru' : 'en',
    'availableLanguage': ['en', 'ru'],
    'author': {
      '@type': 'Organization',
      'name': 'CogniGames',
    },
    'featureList': [
      currentLocale === 'ru' ? 'Тренировка эффекта Струпа' : 'Stroop Effect Training',
      currentLocale === 'ru' ? 'Алфавитные игры' : 'Alphabet Games',
      currentLocale === 'ru' ? 'Когнитивная тренировка' : 'Cognitive Training',
      currentLocale === 'ru' ? 'Многоязычная поддержка' : 'Multilingual Support',
    ],
  }

  // Add game-specific structured data
  if (route.path.includes('/rainbow')) {
    data['@type'] = 'Game'
    data.name = currentLocale === 'ru' ? 'Радуга - Игра Эффекта Струпа' : 'Rainbow - Stroop Effect Game'
    data.description = currentLocale === 'ru'
      ? 'Тренируйте свой мозг преодолевать автоматические реакции с помощью игры эффекта Струпа'
      : 'Train your brain to override automatic responses with the Stroop effect game'
  }
  else if (route.path.includes('/alpha')) {
    data['@type'] = 'Game'
    data.name = currentLocale === 'ru' ? 'Алфавитные Игры' : 'Alphabet Games'
    data.description = currentLocale === 'ru'
      ? 'Практикуйте распознавание букв и пространственную обработку'
      : 'Practice letter recognition and spatial processing'
  }

  return JSON.stringify(data, null, 2)
})
</script>
