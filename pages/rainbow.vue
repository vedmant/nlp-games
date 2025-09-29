<template>
  <div>
    <Navbar>
      <div class="flex gap-6 items-center">
        <div class="flex gap-2 items-center">
          <span>{{ $t('speed') }}:</span>
          <input v-model="speed" type="range" :min="1" :max="6" style="max-width: 100%;">
        </div>

        <div class="flex gap-2 items-center">
          <span>{{ $t('size') }}:</span>
          <input v-model="size" type="range" :min="1" :max="6" style="max-width: 100%;">
        </div>

        <label class="cursor-pointer flex items-center gap-2"><input v-model="boobs" type="checkbox"
            class="form-check-input"> {{ $t('boobs') }}</label>

        <button class="px-3 py-1 rounded-lg text-white" :class="{ 'bg-green-700': !playing, 'bg-red-700': playing }"
          type="button" title="Также можно нажать пробел" @click.prevent="playing = !playing">
          <span v-if="!playing">{{ $t('start') }}</span>
          <span v-else>{{ $t('stop') }}</span>
        </button>

        <NuxtLink to="/help/rainbow"
          class="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 flex items-center gap-1"
          title="Help & Instructions">
          <span>❓</span>
        </NuxtLink>
      </div>
    </Navbar>

    <div ref="game" class="game" @keyup="keyup">
      <Transition name="word-appear" mode="out-in">
        <div v-if="!showTits" :key="word + color" class="word" :style="styles">
          {{ word }}
        </div>
      </Transition>
      <Transition name="tits-appear">
        <div v-if="showTits" class="tits" />
      </Transition>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

const colors = ['red', 'lightgreen', 'yellow', 'blue', 'black']
const words = {
  ru: ['Красный', 'Зеленый', 'Желтый', 'Синий', 'Черный', 'Голубой', 'Хлопок', 'Прыжок'],
  en: ['Red', 'Green', 'Yellow', 'Blue', 'Black', 'Cyan', 'Clap', 'Jump'],
}

const speeds = [5000, 3000, 2000, 1000, 500, 250]

export default {
  name: 'Rainbow',

  components: { Navbar },

  setup() {
    const { trackGameStart, trackGameStop, trackSpeedChange, trackSizeChange } = useAnalytics()
    return { trackGameStart, trackGameStop, trackSpeedChange, trackSizeChange }
  },

  data() {
    return {
      posX: 0,
      posY: 0,
      word: words[0],
      color: colors[0],
      speed: 1,
      size: 3,
      boobs: false,
      timeout: 1000,
      timeoutId: null,
      playing: true,
      round: 0,
      gameStartTime: null,
    }
  },

  computed: {
    styles() {
      return {
        top: `${this.posY}px`,
        left: `${this.posX}px`,
        fontSize: `${this.size * 40 + 40}px`,
        color: this.color,
      }
    },

    showTits() {
      return this.boobs && this.round > 25 && Math.random() > 0.95
    },

    words() {
      return words[this.$i18n.locale.value] || words.en
    },
  },

  watch: {
    playing(val) {
      if (val) {
        this.gameStartTime = Date.now()
        this.trackGameStart('rainbow')
        this.play()
      }
      else {
        if (this.gameStartTime) {
          const duration = Math.round((Date.now() - this.gameStartTime) / 1000)
          this.trackGameStop('rainbow', duration)
        }
        clearTimeout(this.timeoutId)
      }
    },

    speed(val) {
      this.trackSpeedChange('rainbow', val)
      this.timeout = speeds[this.speed - 1]
      this.restart()
    },

    size(val) {
      this.trackSizeChange('rainbow', val)
    },
  },

  mounted() {
    this.speed = 3
    this.recalc()
    this.play()
    window.addEventListener('keyup', this.keyup)
  },

  methods: {
    restart() {
      clearTimeout(this.timeoutId)
      this.play()
    },

    play() {
      if (!this.playing)
        return
      this.recalc()
      this.round++
      this.timeoutId = setTimeout(() => {
        this.play()
      }, this.timeout)
    },

    recalc() {
      // Calculate position before changing content
      if (this.$refs.game) {
        const gameWidth = this.$refs.game.clientWidth
        const gameHeight = this.$refs.game.clientHeight
        const fontSize = this.size * 40 + 40
        const wordWidth = fontSize * 6 // Rough estimate based on average word length
        const wordHeight = fontSize * 1.2 // Font height with some padding
        const margin = 25

        // Ensure word stays within bounds
        this.posX = Math.max(margin, Math.min(
          gameWidth - wordWidth - margin,
          margin + Math.round((gameWidth - wordWidth - margin * 2) * Math.random()),
        ))
        this.posY = Math.max(margin, Math.min(
          gameHeight - wordHeight - margin,
          margin + Math.round((gameHeight - wordHeight - margin * 2) * Math.random()),
        ))
      }

      if (this.words && this.words.length > 0) {
        this.word = this.words[Math.round(Math.random() * (this.words.length - 1))]
      }
      this.color = colors[Math.round(Math.random() * (colors.length - 1))]
    },

    keyup(e) {
      if (e.keyCode === 32) {
        this.playing = !this.playing
      }
    },
  },
}
</script>

<style scoped>
.game {
  height: calc(100vh - 64px);
  position: relative;
}

.word {
  position: relative;
  display: inline-block;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

.tits {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -201px;
  margin-top: -175px;
  width: 403px;
  height: 351px;
  background-image: url(../public/tits.jpg);
  background-size: contain;
}

/* Word appearance transitions */
.word-appear-enter-active {
  transition: all 0.3s ease-out;
}

.word-appear-leave-active {
  transition: all 0.2s ease-in;
}

.word-appear-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}

.word-appear-leave-to {
  opacity: 0;
  transform: scale(1.2) translateY(20px);
}

/* Tits appearance transition */
.tits-appear-enter-active {
  transition: all 0.5s ease-out;
}

.tits-appear-leave-active {
  transition: all 0.3s ease-in;
}

.tits-appear-enter-from {
  opacity: 0;
  transform: scale(0.5) rotate(10deg);
}

.tits-appear-leave-to {
  opacity: 0;
  transform: scale(1.1) rotate(-5deg);
}
</style>
