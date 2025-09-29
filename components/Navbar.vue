<template>
  <nav class="flex justify-between items-center gap-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 shadow-lg">
    <div class="flex gap-6 items-center">
      <NuxtLink to="/" class="text-xl font-bold hover:text-blue-300 transition-colors duration-200">
        {{ $t('name') }}
      </NuxtLink>

      <div class="hidden md:flex gap-4 items-center">
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

    <div class="flex items-center gap-4">
      <slot />
      
      <button 
        class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2 rounded-lg text-white transition-all duration-200 transform hover:scale-105" 
        v-if="$i18n.locale.value === 'ru'" 
        @click="switchLanguage('en')"
      >
        🇺🇸 English
      </button>
      <button 
        class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2 rounded-lg text-white transition-all duration-200 transform hover:scale-105" 
        v-else 
        @click="switchLanguage('ru')"
      >
        🇷🇺 Русский
      </button>
    </div>
  </nav>
</template>

<script setup>
const { $i18n } = useNuxtApp()
const route = useRoute()
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()

const switchLanguage = async (locale) => {
  // Use switchLocalePath to get the localized URL for current page
  const localizedPath = switchLocalePath(locale)
  await navigateTo(localizedPath)
}
</script>
