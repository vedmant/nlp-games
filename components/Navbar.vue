<template>
  <nav class="flex justify-between items-center gap-2 bg-gray-900 text-white p-4">
    <div class="flex gap-4 items-center">
      <NuxtLink to="/" class="text-lg mr-8">{{ $t('name') }}</NuxtLink>

      <NuxtLink tag="li" to="/alpha/2">
        {{ $t('alpha2') }}
      </NuxtLink>
      <NuxtLink tag="li" to="/alpha/3">
        {{ $t('alpha3') }}
      </NuxtLink>
      <NuxtLink tag="li" to="/rainbow">
        {{ $t('rainbow') }}
      </NuxtLink>
    </div>

    <slot />

    <button class="bg-blue-700 px-3 py-1 rounded-lg text-white" v-if="$i18n.locale === 'ru'" @click="$i18n.setLocale('en')">English</button>
    <button class="bg-blue-700 px-3 py-1 rounded-lg text-white" v-else @click="$i18n.setLocale('ru')">Русский</button>
  </nav>
</template>

<script setup>
</script>
