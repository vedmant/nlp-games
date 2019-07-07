<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">НЛП Игры</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- <li class="nav-item active">
          <router-link to="home" class="nav-link">Домой</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="words" class="nav-link">Алфавит</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="words" class="nav-link">Радуга</router-link>
        </li> -->
      </ul>

      <slot></slot>
    </div>
  </nav>
</template>
