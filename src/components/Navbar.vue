<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">НЛП Игры</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/alpha2" class="nav-item" active-class="active">
          <a class="nav-link">Алфавит 2</a>
        </router-link>
        <router-link tag="li" to="/alpha3" class="nav-item" active-class="active">
          <a class="nav-link">Алфавит 3</a>
        </router-link>
        <router-link tag="li" to="/rainbow" class="nav-item" active-class="active">
          <a class="nav-link">Радуга</a>
        </router-link>
      </ul>

      <slot></slot>
    </div>
  </nav>
</template>
