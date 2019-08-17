<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">{{ $t('name') }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/alpha2" class="nav-item" active-class="active">
          <a class="nav-link">{{ $t('alpha2') }}</a>
        </router-link>
        <router-link tag="li" to="/alpha3" class="nav-item" active-class="active">
          <a class="nav-link">{{ $t('alpha3') }}</a>
        </router-link>
        <router-link tag="li" to="/rainbow" class="nav-item" active-class="active">
          <a class="nav-link">{{ $t('rainbow') }}</a>
        </router-link>
      </ul>

      <form class="form-inline mr-auto">
        <button class="btn btn-secondary" v-if="$i18n.locale === 'ru'" @click="$i18n.locale = 'en'">English</button>
        <button class="btn btn-secondary" v-else @click="$i18n.locale = 'ru'">Русский</button>
      </form>

      <slot></slot>
    </div>
  </nav>
</template>
