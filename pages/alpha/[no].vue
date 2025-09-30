<template>
  <div>
    <SeoHead
      :title="getPageTitle()"
      :description="getPageDescription()"
      :keywords="getPageKeywords()"
    />
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

        <label class="cursor-pointer flex items-center gap-2"><input
          v-model="boobs" type="checkbox"
          class="form-check-input"
        > {{ $t('boobs') }}</label>

        <button
          class="px-3 py-1 rounded-lg text-white" :class="{ 'bg-green-700': !playing, 'bg-red-700': playing }"
          type="button" title="Также можно нажать пробел" @click.prevent="playing = !playing"
        >
          <span v-if="!playing">{{ $t('start') }}</span>
          <span v-else>{{ $t('stop') }}</span>
        </button>

        <NuxtLink
          :to="$localePath('/help/alphabet')"
          class="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 flex items-center gap-1"
          title="Help & Instructions"
        >
          <span>❓</span>
        </NuxtLink>
      </div>
    </Navbar>

    <div ref="game" class="game" @keyup="keyup">
      <Transition name="letters-appear" mode="out-in">
        <div v-if="show && !showTits" :key="l1 + l2 + l3" class="letters" :style="styles">
          <div class="l1">
            {{ l1 }}
          </div>
          <div class="l2">
            {{ l2 }}
          </div>
          <div v-if="three" class="l2">
            {{ l3 }}
          </div>
        </div>
      </Transition>
      <Transition name="tits-appear">
        <div v-if="showTits" class="tits" />
      </Transition>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'

const alphabet = {
  ru: ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'э', 'ю', 'я'],
  en: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z'],
  es: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
}

const sides = {
  ru: ['л', 'п', 'о'],
  en: ['l', 'r', 'b'],
  es: ['i', 'd', 'a'],
}

const speeds = [5000, 3000, 2000, 1000, 500, 250]

export default {
  components: { Navbar },

  data() {
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

  computed: {
    three() {
      return this.$route.params.no === '3'
    },

    styles() {
      return {
        top: `${this.posY}px`,
        left: `${this.posX}px`,
        fontSize: `${this.size * 40 + 40}px`,
      }
    },

    showTits() {
      return this.boobs && this.round > 25 && Math.random() > 0.95
    },

    alpha() {
      return alphabet[this.$i18n.locale] || alphabet.en
    },

    side() {
      return sides[this.$i18n.locale] || sides.en
    },
  },

  watch: {
    playing(val) {
      if (val)
        this.play()
      else clearTimeout(this.timeoutId)
    },

    speed(_val) {
      this.timeout = speeds[this.speed - 1]
      this.restart()
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
        const lettersWidth = fontSize * 0.8 // Single letter width
        const lettersHeight = fontSize * (this.three ? 3.5 : 2.5) // Stacked letters height (2 or 3 letters)
        const margin = 25

        // Ensure letters stay within bounds
        this.posX = Math.max(margin, Math.min(
          gameWidth - lettersWidth - margin,
          margin + Math.round((gameWidth - lettersWidth - margin * 2) * Math.random()),
        ))
        this.posY = Math.max(margin, Math.min(
          gameHeight - lettersHeight - margin,
          margin + Math.round((gameHeight - lettersHeight - margin * 2) * Math.random()),
        ))
      }

      if (this.alpha && this.alpha.length > 0) {
        this.l1 = this.alpha[Math.round(Math.random() * (this.alpha.length - 1))]
      }
      if (this.side && this.side.length > 0) {
        this.l2 = this.side[Math.round(Math.random() * (this.side.length - 1))]
        this.l3 = this.side[Math.round(Math.random() * (this.side.length - 1))]
      }
    },

    keyup(e) {
      if (e.keyCode === 32) {
        this.playing = !this.playing
      }
    },

    // SEO methods
    getPageTitle() {
      const no = this.$route.params.no
      return `${this.$t('alpha' + no)} - ${this.$t('name')}`
    },

    getPageDescription() {
      const no = this.$route.params.no
      return no === '2' ? this.$t('alpha2_description') : this.$t('alpha3_description')
    },

    getPageKeywords() {
      const no = this.$route.params.no
      const baseKeywords = this.$t('seo_keywords_alphabet')
      return no === '2' ? `${baseKeywords}, ${this.$t('seo_two_letters')}, ${this.$t('seo_beginner')}` : `${baseKeywords}, ${this.$t('seo_three_letters')}, ${this.$t('seo_advanced')}`
    },
  },
}
</script>

<style scoped>
.game {
  height: calc(100vh - 64px);
  position: relative;
}

.letters {
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
  background-image: url(../../public/tits.jpg);
  background-size: contain;
}

/* Letters appearance transitions */
.letters-appear-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.letters-appear-leave-active {
  transition: all 0.25s ease-in;
}

.letters-appear-enter-from {
  opacity: 0;
  transform: scale(0.7) translateY(-30px) rotate(-5deg);
}

.letters-appear-leave-to {
  opacity: 0;
  transform: scale(1.3) translateY(30px) rotate(5deg);
}

/* Tits appearance transition */
.tits-appear-enter-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.tits-appear-leave-active {
  transition: all 0.3s ease-in;
}

.tits-appear-enter-from {
  opacity: 0;
  transform: scale(0.3) rotate(15deg);
}

.tits-appear-leave-to {
  opacity: 0;
  transform: scale(1.2) rotate(-10deg);
}
</style>
