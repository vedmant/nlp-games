<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 to-purple-100">
    <Navbar></Navbar>
    
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-16">
        <div class="w-20 h-20 bg-gradient-to-r from-red-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span class="text-3xl">🌈</span>
        </div>
        <h1 class="text-5xl font-bold text-gray-800 mb-6">
          {{ $t('rainbow') }} - {{ $t('help_title') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ $t('rainbow_help_description') }}
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- How to Play Section -->
        <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">🎮</span>
            {{ $t('how_to_play') }}
          </h2>
          <div class="space-y-4">
            <div class="bg-red-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-red-800 mb-3">{{ $t('objective') }}</h3>
              <p class="text-red-700">{{ $t('rainbow_objective') }}</p>
            </div>
            <div class="bg-yellow-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-yellow-800 mb-3">{{ $t('gameplay') }}</h3>
              <ol class="text-yellow-700 space-y-2 list-decimal list-inside">
                <li>{{ $t('rainbow_step1') }}</li>
                <li>{{ $t('rainbow_step2') }}</li>
                <li>{{ $t('rainbow_step3') }}</li>
                <li>{{ $t('rainbow_step4') }}</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- Controls Section -->
        <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">⌨️</span>
            {{ $t('controls') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 class="font-semibold text-gray-800">{{ $t('speed_control') }}</h3>
                  <p class="text-sm text-gray-600">{{ $t('speed_control_desc') }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 class="font-semibold text-gray-800">{{ $t('size_control') }}</h3>
                  <p class="text-sm text-gray-600">{{ $t('size_control_desc') }}</p>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 class="font-semibold text-gray-800">{{ $t('play_pause') }}</h3>
                  <p class="text-sm text-gray-600">{{ $t('play_pause_desc') }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 class="font-semibold text-gray-800">{{ $t('spacebar') }}</h3>
                  <p class="text-sm text-gray-600">{{ $t('spacebar_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tips and Strategies -->
        <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">💡</span>
            {{ $t('tips_and_strategies') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="font-semibold text-green-800 mb-2">{{ $t('beginner_tips') }}</h3>
                <ul class="text-green-700 space-y-1 text-sm">
                  <li>• {{ $t('rainbow_tip1') }}</li>
                  <li>• {{ $t('rainbow_tip2') }}</li>
                  <li>• {{ $t('rainbow_tip3') }}</li>
                </ul>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="font-semibold text-blue-800 mb-2">{{ $t('advanced_tips') }}</h3>
                <ul class="text-blue-700 space-y-1 text-sm">
                  <li>• {{ $t('rainbow_advanced_tip1') }}</li>
                  <li>• {{ $t('rainbow_advanced_tip2') }}</li>
                  <li>• {{ $t('rainbow_advanced_tip3') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Cognitive Benefits -->
        <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">🧠</span>
            {{ $t('cognitive_benefits') }}
          </h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-2xl">🎯</span>
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">{{ $t('attention') }}</h3>
              <p class="text-sm text-gray-600">{{ $t('attention_desc') }}</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-2xl">⚡</span>
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">{{ $t('processing_speed') }}</h3>
              <p class="text-sm text-gray-600">{{ $t('processing_speed_desc') }}</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-2xl">🔄</span>
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">{{ $t('cognitive_control') }}</h3>
              <p class="text-sm text-gray-600">{{ $t('cognitive_control_desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="text-center space-y-4">
          <NuxtLink 
            to="/rainbow" 
            class="inline-block bg-gradient-to-r from-red-400 to-purple-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-red-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            {{ $t('play_rainbow') }}
          </NuxtLink>
          <div>
            <NuxtLink 
              to="/help" 
              class="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              ← {{ $t('back_to_help') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {Navbar},
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
