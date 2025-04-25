<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">{{ $t('name') }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <NuxtLink tag="li" to="/alpha/2" class="nav-link" active-class="active">
             {{ $t('alpha2') }}
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink tag="li" to="/alpha/3" class="nav-link" active-class="active">
            {{ $t('alpha3') }}
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink tag="li" to="/rainbow" class="nav-link" active-class="active">
            {{ $t('rainbow') }}
          </NuxtLink>
        </li>
      </ul>

      <form class="form-inline mr-auto">
        <button class="btn btn-secondary" v-if="$i18n.locale === 'ru'" @click="$i18n.locale = 'en'">English</button>
        <button class="btn btn-secondary" v-else @click="$i18n.locale = 'ru'">Русский</button>
      </form>

      <slot></slot>
    </div>
  </nav>
</template>

