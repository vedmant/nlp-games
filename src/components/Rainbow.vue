<template>
  <div>
    <navbar>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Настройки
          </a>
          <div class="dropdown-menu p-4 dropdown-menu-right" @click="(e) => e.stopPropagation()" aria-labelledby="navbarDropdown">
            <p class="mb-4">
              Скорость
              <vue-slider v-model="speed" :min="1" :max="6"></vue-slider>
            </p>
            <p>
              Размер
              <vue-slider v-model="size" :min="1" :max="5"></vue-slider>
            </p>
          </div>
        </li>
      </ul>
      <form class="form-inline ml-4">
        <button class="btn" :class="{'btn-success': ! playing, 'btn-danger': playing}" type="button" @click.prevent="playing = ! playing" title="Также можно нажать пробел">
          <span v-if="! playing">Старт</span>
          <span v-else>Стоп</span>
        </button>
      </form>
    </navbar>
    <div class="game" ref="game" @keyup="keyup">
      <div v-show="! showTits" ref="word" class="word" :style="styles">
        {{ word }}
      </div>
      <div class="tits" v-show="showTits"></div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import VueNumberInput from '@chenfengyuan/vue-number-input'
import VueSlider from 'vue-slider-component'
import { setTimeout, clearTimeout } from 'timers'

const colors = ['red', 'green', 'yellow', 'blue', 'black']
const words = ['Красный', 'Зеленый', 'Желтый', 'Синий', 'Черный', 'Голубой', 'Хлопок', 'Прыжок']

const speeds = [5000, 3000, 2000, 1000, 500, 250]

export default {
  name: 'rainbow',

  components: {Navbar, VueSlider},

  data () {
    return {
      posX: 0,
      posY: 0,
      word: words[0],
      color: colors[0],
      speed: 1,
      size: 3,
      timeout: 1000,
      timeoutId: null,
      playing: true,
      round: 0,
    }
  },

  mounted () {
    this.speed = 3
    this.recalc()
    this.play()
    window.addEventListener('keyup', this.keyup)
  },

  watch: {
    playing (val) {
      if (val) this.play()
      else clearTimeout(this.timeoutId)
    },

    speed (val) {
      this.timeout = speeds[this.speed - 1]
      this.restart()
    },
  },

  computed: {
    styles () {
      return {
        top: this.posY + 'px',
        left: this.posX + 'px',
        fontSize: (this.size * 20 + 40) + 'px',
        color: this.color,
      }
    },

    showTits () {
      return this.round > 25 && Math.random() > 0.95
    },
  },

  methods: {
    restart () {
      clearTimeout(this.timeoutId)
      this.play()
    },

    play () {
      if (! this.playing) return
      this.recalc()
      this.round++
      this.timeoutId = setTimeout(() => {
        this.play()
      }, this.timeout)
    },

    recalc () {
      this.word = words[Math.round(Math.random() * (words.length - 1))]
      this.color = colors[Math.round(Math.random() * (colors.length - 1))]
      this.$nextTick(() => {
        this.posX = 25 + Math.round((this.$refs.game.clientWidth - this.$refs.word.clientWidth - 50) * Math.random())
        this.posY = 25 + Math.round((this.$refs.game.clientHeight - this.$refs.word.clientHeight - 50) * Math.random())
      })
    },

    keyup (e) {
      if (e.keyCode === 32) {
        this.playing = ! this.playing
      }
    },
  },
}
</script>

<style scoped>
  .game { height: calc(100vh - 56px); position: relative; }
  .word {
    position: relative; display: inline-block; line-height: 1;
    text-align: center; text-transform: uppercase; font-weight: bold;
  }
  .tits {
    position: absolute; top: 50%; left: 50%; margin-left: -201px; margin-top: -175px;
    width: 403px; height: 351px; background-image: url(../assets/tits.jpg); background-size: contain;
  }
</style>
