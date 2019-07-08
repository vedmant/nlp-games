<template>
  <div>
    <navbar>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Настройки
          </a>
          <div class="dropdown-menu p-4 dropdown-menu-right" @click="(e) => e.stopPropagation()" aria-labelledby="navbarDropdown">
            <p>
              Скорость
              <vue-slider v-model="speed" :contained="true" :min="1" :max="6"></vue-slider>
            </p>
            <p>
              Размер
              <vue-slider v-model="size" :contained="true" :min="1" :max="5"></vue-slider>
            </p>
          </div>
        </li>
      </ul>

    </navbar>
    <div class="game" ref="game" @keyup="keyup">
      <div v-show="show && ! showTits" ref="letters" class="letters" :style="styles">
        <div class="l1">{{ l1 }}</div>
        <div class="l2">{{ l2 }}</div>
        <div class="l2" v-if="three">{{ l3 }}</div>
      </div>
      <div class="tits" v-show="showTits"></div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import VueNumberInput from '@chenfengyuan/vue-number-input'
import VueSlider from 'vue-slider-component'
import { setTimeout, clearTimeout } from 'timers';

const all = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с',
        'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'э', 'ю', 'я']

const lros = ['л', 'п', 'о']

const speeds = [5000, 3000, 2000, 1000, 500, 250]

export default {
  name: 'alpha',
  props: {
    three: {
      type: Boolean,
      default: true,
    }
  },

  components: {Navbar, VueSlider},

  data () {
    return {
      show: true,
      posX: 0,
      posY: 0,
      l1: '',
      l2: '',
      l3: '',
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
      this.l1 = all[Math.round(Math.random() * (all.length - 1))]
      this.l2 = lros[Math.round(Math.random() * (lros.length - 1))]
      this.l3 = lros[Math.round(Math.random() * (lros.length - 1))]
      this.posX = 25 + Math.round((this.$refs.game.clientWidth - this.$refs.letters.clientWidth - 50) * Math.random())
      this.posY = 25 + Math.round((this.$refs.game.clientHeight - this.$refs.letters.clientHeight - 50) * Math.random())
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
  .letters {
    position: relative; display: inline-block; line-height: 1;
    text-align: center; text-transform: uppercase; font-weight: bold;
  }
  .tits {
    position: absolute; top: 50%; left: 50%; margin-left: -201px; margin-top: -175px;
    width: 403px; height: 351px; background-image: url(../assets/tits.jpg); background-size: contain;
  }
</style>
