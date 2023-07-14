<template>
  <p class="Text_h3__0opol Text_default__ei0zT Text_semiBold__iFdnC GlintProgressBar_date__Mn7Ym GlintProgressBar_mounted__RsvUI inherited-styles-for-exported-element">
    {{ days }}D : {{ hours }}H : {{ minutes }}M <span v-if="showSeconds" class="Text_semiBold__iFdnC">: {{ seconds }}S</span>
  </p>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  days: {
    type: Number,
    default: 1,
    required: true,
  },
  showSeconds: {
    type: Boolean,
    default: true,
  },
})

const countDownDate = new Date()
countDownDate.setDate(countDownDate.getDate() + props.days)

const timeLeft = ref(getTimeRemaining())

function getTimeRemaining() {
  const now = new Date().getTime()
  const distance = countDownDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds}
}

const days = computed(() => timeLeft.value.days)
const hours = computed(() => timeLeft.value.hours)
const minutes = computed(() => timeLeft.value.minutes)
const seconds = computed(() => timeLeft.value.seconds)

onMounted(() => {
  const timerInterval = setInterval(() => {
    timeLeft.value = getTimeRemaining()

    if (timeLeft.value.days <= 0 && timeLeft.value.hours <= 0 && timeLeft.value.minutes <= 0 && timeLeft.value.seconds <= 0) {
      clearInterval(timerInterval)
    }
  }, 1000)
})
</script>

<style lang="sass" scoped>
.Text_h3__0opol
  font-size: 24px
  line-height: 36px

.Text_default__ei0zT
  color: #e9e9eb

.Text_semiBold__iFdnC
  font-weight: 600

.GlintProgressBar_date__Mn7Ym
  transition: opacity .1s

  &.GlintProgressBar_mounted__RsvUI
    opacity: 1
</style>