<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <SeoHead
      :title="`${$t('help_title')} - ${$t('name')}`"
      :description="$t('help_description')"
      :keywords="$t('seo_keywords_help')"
    />
    <Navbar />

    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">
          {{ $t('help_title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ $t('help_description') }}
        </p>
      </div>

      <!-- Help Cards Grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Rainbow Game Help -->
        <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <div class="text-center mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-r from-red-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <span class="text-2xl">🌈</span>
            </div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              {{ $t('rainbow') }}
            </h2>
            <p class="text-gray-600 mb-6">
              {{ $t('rainbow_help_description') }}
            </p>
          </div>

          <div class="space-y-4 mb-8">
            <div class="bg-red-50 p-4 rounded-lg">
              <h3 class="font-semibold text-red-800 mb-2">
                {{ $t('how_to_play') }}
              </h3>
              <p class="text-sm text-red-700">
                {{ $t('rainbow_instructions') }}
              </p>
            </div>

            <div class="bg-yellow-50 p-4 rounded-lg">
              <h3 class="font-semibold text-yellow-800 mb-2">
                {{ $t('controls') }}
              </h3>
              <ul class="text-sm text-yellow-700 space-y-1">
                <li>• {{ $t('rainbow_control1') }}</li>
                <li>• {{ $t('rainbow_control2') }}</li>
                <li>• {{ $t('rainbow_control3') }}</li>
              </ul>
            </div>

            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-800 mb-2">
                {{ $t('tips') }}
              </h3>
              <ul class="text-sm text-green-700 space-y-1">
                <li>• {{ $t('rainbow_tip1') }}</li>
                <li>• {{ $t('rainbow_tip2') }}</li>
                <li>• {{ $t('rainbow_tip3') }}</li>
              </ul>
            </div>
          </div>

          <div class="text-center space-y-3">
            <NuxtLink
              :to="$localePath('/rainbow')"
              class="inline-block bg-gradient-to-r from-red-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-red-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              {{ $t('play_rainbow') }}
            </NuxtLink>
            <div>
              <NuxtLink
                :to="$localePath('/help/rainbow')"
                class="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 underline"
              >
                {{ $t('how_to_play') }} Rainbow →
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Alphabet Game Help -->
        <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <div class="text-center mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <span class="text-2xl">🔤</span>
            </div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              {{ $t('alphabet_games') }}
            </h2>
            <p class="text-gray-600 mb-6">
              {{ $t('alphabet_help_description') }}
            </p>
          </div>

          <div class="space-y-4 mb-8">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 mb-2">
                {{ $t('how_to_play') }}
              </h3>
              <p class="text-sm text-blue-700">
                {{ $t('alphabet_instructions') }}
              </p>
            </div>

            <div class="bg-indigo-50 p-4 rounded-lg">
              <h3 class="font-semibold text-indigo-800 mb-2">
                {{ $t('controls') }}
              </h3>
              <ul class="text-sm text-indigo-700 space-y-1">
                <li>• {{ $t('alphabet_control1') }}</li>
                <li>• {{ $t('alphabet_control2') }}</li>
                <li>• {{ $t('alphabet_control3') }}</li>
              </ul>
            </div>

            <div class="bg-purple-50 p-4 rounded-lg">
              <h3 class="font-semibold text-purple-800 mb-2">
                {{ $t('tips') }}
              </h3>
              <ul class="text-sm text-purple-700 space-y-1">
                <li>• {{ $t('alphabet_tip1') }}</li>
                <li>• {{ $t('alphabet_tip2') }}</li>
                <li>• {{ $t('alphabet_tip3') }}</li>
              </ul>
            </div>
          </div>

          <div class="space-y-3">
            <NuxtLink
              :to="$localePath('/alpha/2')"
              class="block w-full bg-gradient-to-r from-blue-400 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-500 hover:to-green-600 transition-all duration-300 text-center"
            >
              {{ $t('play_alpha2') }}
            </NuxtLink>
            <NuxtLink
              :to="$localePath('/alpha/3')"
              class="block w-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 text-center"
            >
              {{ $t('play_alpha3') }}
            </NuxtLink>
            <div class="text-center">
              <NuxtLink
                :to="$localePath('/help/alphabet')"
                class="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 underline"
              >
                {{ $t('how_to_play') }} Alphabet →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- General Tips Section -->
      <div class="mt-20 max-w-4xl mx-auto">
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">
            {{ $t('general_tips_title') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">💡</span>
                {{ $t('getting_started') }}
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li>• {{ $t('tip1') }}</li>
                <li>• {{ $t('tip2') }}</li>
                <li>• {{ $t('tip3') }}</li>
                <li>• {{ $t('tip4') }}</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">🎯</span>
                {{ $t('improving_performance') }}
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li>• {{ $t('tip5') }}</li>
                <li>• {{ $t('tip6') }}</li>
                <li>• {{ $t('tip7') }}</li>
                <li>• {{ $t('tip8') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: { Navbar },
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
