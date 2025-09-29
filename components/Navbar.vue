<template>
  <nav
    class="flex justify-between items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 shadow-lg"
  >
    <div class="flex gap-2 items-center">
      <NuxtLink :to="$localePath('/')" class="text-xl font-bold hover:text-blue-300 transition-colors duration-200">
        {{ $t('name') }}
      </NuxtLink>

      <div class="hidden md:flex gap-2 items-center">
        <NuxtLink
          :to="$localePath('/rainbow')"
          class="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
        >
          <span>🌈</span>
          {{ $t('rainbow') }}
        </NuxtLink>
        <NuxtLink
          :to="$localePath('/alpha/2')"
          class="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
        >
          <span>🔤</span>
          {{ $t('alpha2') }}
        </NuxtLink>
        <NuxtLink
          :to="$localePath('/alpha/3')"
          class="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
        >
          <span>🔤</span>
          {{ $t('alpha3') }}
        </NuxtLink>
        <NuxtLink
          :to="$localePath('/help')"
          class="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
        >
          <span>❓</span>
          {{ $t('help_title') }}
        </NuxtLink>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <slot />

      <button
        v-if="$i18n.locale.value !== 'en'"
        class="px-3 py-1 rounded-lg text-white transition-all duration-200 transform hover:scale-105 bg-blue-600 hover:bg-blue-700"
        @click="switchLanguage('en')"
      >
        🇺🇸 EN
      </button>
      <button
        v-if="$i18n.locale.value !== 'ru'"
        class="px-3 py-1 rounded-lg text-white transition-all duration-200 transform hover:scale-105 bg-blue-600 hover:bg-blue-700"
        @click="switchLanguage('ru')"
      >
        🇷🇺 RU
      </button>
      <button
        v-if="$i18n.locale.value !== 'es'"
        class="px-3 py-1 rounded-lg text-white transition-all duration-200 transform hover:scale-105 bg-blue-600 hover:bg-blue-700"
        @click="switchLanguage('es')"
      >
        🇪🇸 ES
      </button>
    </div>
  </nav>
</template>

<script setup>
const { $i18n } = useNuxtApp()
const switchLocalePath = useSwitchLocalePath()
const { trackLanguageSwitch } = useAnalytics()

async function switchLanguage(locale) {
  // Track language switch
  trackLanguageSwitch($i18n.locale.value, locale)

  // Use switchLocalePath to get the localized URL for current page
  const localizedPath = switchLocalePath(locale)
  await navigateTo(localizedPath)
}
</script>
