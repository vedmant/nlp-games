<template>
  <div>
    <Navbar>

      <div class="flex gap-6 items-center">
        <div class="flex gap-2 items-center">
          <span>{{ $t('speed') }}:</span>
          <input type="range" v-model="speed" :min="1" :max="6" style="max-width: 100%;">
        </div>

        <div class="flex gap-2 items-center">
          <span>{{ $t('size') }}:</span>
          <input type="range" v-model="size" :min="1" :max="6" style="max-width: 100%;">
        </div>

        <label class="cursor-pointer flex items-center gap-2"><input type="checkbox" class="form-check-input" v-model="boobs"> {{ $t('boobs') }}</label>

        <button class="px-3 py-1 rounded-lg text-white" :class="{'bg-green-700': ! playing, 'bg-red-700': playing}" type="button" @click.prevent="playing = ! playing" title="Также можно нажать пробел">
          <span v-if="! playing">{{ $t('start') }}</span>
          <span v-else>{{ $t('stop') }}</span>
        </button>
      </div>
    </Navbar>

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
import Navbar from '../../components/Navbar.vue'

const alphabet = {
  ru: ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с',
    'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'э', 'ю', 'я'],
  en: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z'],
}

const sides = {
  ru: ['л', 'п', 'о'],
  en: ['l', 'r', 'b'],
}

const speeds = [5000, 3000, 2000, 1000, 500, 250]

export default {
  components: {Navbar},

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
      boobs: false,
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
    three() {
      return this.$route.params.no === '3'
    },

    styles () {
      return {
        top: this.posY + 'px',
        left: this.posX + 'px',
        fontSize: (this.size * 40 + 40) + 'px',
      }
    },

    showTits () {
      return this.boobs && this.round > 25 && Math.random() > 0.95
    },

    alpha () {
      return alphabet[this.$i18n.locale]
    },

    side () {
      return sides[this.$i18n.locale]
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
      this.l1 = this.alpha[Math.round(Math.random() * (this.alpha.length - 1))]
      this.l2 = this.side[Math.round(Math.random() * (this.side.length - 1))]
      this.l3 = this.side[Math.round(Math.random() * (this.side.length - 1))]
      this.$nextTick(() => {
        if (! this.$refs.game || ! this.$refs.letters) return
        this.posX = 25 + Math.round((this.$refs.game.clientWidth - this.$refs.letters.clientWidth - 50) * Math.random())
        this.posY = 25 + Math.round((this.$refs.game.clientHeight - this.$refs.letters.clientHeight - 50) * Math.random())
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
  .game { height: calc(100vh - 64px); position: relative; }
  .letters {
    position: relative; display: inline-block; line-height: 1;
    text-align: center; text-transform: uppercase; font-weight: bold;
  }
  .tits {
    position: absolute; top: 50%; left: 50%; margin-left: -201px; margin-top: -175px;
    width: 403px; height: 351px; background-image: url(../../public/tits.jpg); background-size: contain;
  }
</style>
