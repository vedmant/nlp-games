<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <SeoHead
      :title="$t('name')"
      :description="$t('description')"
      keywords="cognitive training, brain games, Stroop effect, attention training, memory games, neuroplasticity"
    />
    <Navbar />

    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">
          {{ $t('name') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ $t('description') }}
        </p>
      </div>

      <!-- Games Grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Rainbow Game Section -->
        <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-r from-red-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">🌈</span>
            </div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              {{ $t('rainbow') }}
            </h2>
            <p class="text-gray-600 mb-6">
              {{ $t('rainbow_description') }}
            </p>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-red-500 rounded-full" />
              <span class="text-sm text-gray-600">{{ $t('rainbow_feature1') }}</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-yellow-500 rounded-full" />
              <span class="text-sm text-gray-600">{{ $t('rainbow_feature2') }}</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full" />
              <span class="text-sm text-gray-600">{{ $t('rainbow_feature3') }}</span>
            </div>
          </div>

          <div class="text-center space-y-3">
            <NuxtLink
              to="/rainbow"
              class="inline-block bg-gradient-to-r from-red-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-red-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              {{ $t('play_now') }}
            </NuxtLink>
            <div>
              <NuxtLink
                to="/help/rainbow"
                class="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {{ $t('how_to_play') }} →
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Alphabet Game Section -->
        <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">🔤</span>
            </div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              {{ $t('alphabet_games') }}
            </h2>
            <p class="text-gray-600 mb-6">
              {{ $t('alphabet_description') }}
            </p>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-blue-500 rounded-full" />
              <span class="text-sm text-gray-600">{{ $t('alphabet_feature1') }}</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-indigo-500 rounded-full" />
              <span class="text-sm text-gray-600">{{ $t('alphabet_feature2') }}</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-purple-500 rounded-full" />
              <span class="text-sm text-gray-600">{{ $t('alphabet_feature3') }}</span>
            </div>
          </div>

          <div class="space-y-3">
            <NuxtLink
              to="/alpha/2"
              class="block w-full bg-gradient-to-r from-blue-400 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-500 hover:to-green-600 transition-all duration-300 text-center"
            >
              {{ $t('alpha2') }} - {{ $t('two_letters') }}
            </NuxtLink>
            <NuxtLink
              to="/alpha/3"
              class="block w-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 text-center"
            >
              {{ $t('alpha3') }} - {{ $t('three_letters') }}
            </NuxtLink>
            <div class="text-center">
              <NuxtLink
                to="/help/alphabet"
                class="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {{ $t('how_to_play') }} →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="mt-20">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
          {{ $t('features_title') }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">🌍</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {{ $t('multilingual') }}
            </h3>
            <p class="text-gray-600">
              {{ $t('multilingual_desc') }}
            </p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">⚙️</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {{ $t('customizable') }}
            </h3>
            <p class="text-gray-600">
              {{ $t('customizable_desc') }}
            </p>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl">🧠</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {{ $t('cognitive') }}
            </h3>
            <p class="text-gray-600">
              {{ $t('cognitive_desc') }}
            </p>
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
