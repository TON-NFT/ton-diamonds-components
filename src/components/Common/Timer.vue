<template>
  <div class="Seasons_farming__k0Jy4 inherited-styles-for-exported-element">
    <p class="Text_p__mrhFK Text_default__ei0zT Text_regular__lCAPC Seasons_cardTitle__3Yi5e">Time until the end of stage one farming:</p>
    <div class="Seasons_cardContent__1c45c">
      <div class="Seasons_timeBlockWrapper__a1ZeQ">
        <div class="Seasons_timeBlockNumber__yD_I4">
          <p class="Text_h3__0opol Text_default__ei0zT Seasons_num__Mu0pz Seasons_date__HTqen">{{ days1 }}</p>
          <p class="Text_h3__0opol Text_default__ei0zT Seasons_num__Mu0pz Seasons_date__HTqen">{{ days2 }}</p>
          <p class="Text_h3__0opol Text_default__ei0zT Seasons_num__Mu0pz Seasons_date__HTqen">{{ days3 }}</p>
        </div>
        <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC">days</p>
      </div>
      <p class="Text_h3__0opol Text_default__ei0zT Seasons_dateDivider__jHkWL">:</p>
      <div class="Seasons_timeBlockWrapper__a1ZeQ">
        <div class="Seasons_timeBlockNumber__yD_I4">
          <p class="Text_h3__0opol Text_default__ei0zT Seasons_num__Mu0pz Seasons_date__HTqen">{{ hours1 }}</p>
          <p class="Text_h3__0opol Text_default__ei0zT Seasons_num__Mu0pz Seasons_date__HTqen">{{ hours2 }}</p>
        </div>
        <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC">hours</p>
      </div>
      <p class="Text_h3__0opol Text_default__ei0zT Seasons_dateDivider__jHkWL">:</p>
      <div class="Seasons_timeBlockWrapper__a1ZeQ">
        <div class="Seasons_timeBlockNumber__yD_I4">
          <p class="Text_h3__0opol Text_default__ei0zT Seasons_num__Mu0pz Seasons_date__HTqen">{{ minutes1 }}</p>
          <p class="Text_h3__0opol Text_default__ei0zT Seasons_num__Mu0pz Seasons_date__HTqen">{{ minutes2 }}</p>
        </div>
        <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC">minutes</p>
      </div>
      <p class="Text_h3__0opol Text_default__ei0zT Seasons_dateDivider__jHkWL">:</p>
      <div class="Seasons_timeBlockWrapper__a1ZeQ">
        <div class="Seasons_timeBlockNumber__yD_I4">
          <p class="Text_h3__0opol Text_default__ei0zT Seasons_num__Mu0pz Seasons_date__HTqen">{{ seconds1 }}</p>
          <p class="Text_h3__0opol Text_default__ei0zT Seasons_num__Mu0pz Seasons_date__HTqen">{{ seconds2 }}</p>
        </div>
        <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC">seconds</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  days: {
    type: Number,
    default: 100,
    required: true,
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

  const [days1, days2, days3] = String(days).padStart(3, '0').split('')
  const [hours1, hours2] = String(hours).padStart(2, '0').split('')
  const [minutes1, minutes2] = String(minutes).padStart(2, '0').split('')
  const [seconds1, seconds2] = String(seconds).padStart(2, '0').split('')

  return { days1, days2, days3, hours1, hours2, minutes1, minutes2, seconds1, seconds2 }
}

const [days1, days2, days3, hours1, hours2, minutes1, minutes2, seconds1, seconds2] = [
  'days1', 'days2', 'days3', 'hours1', 'hours2', 'minutes1', 'minutes2', 'seconds1', 'seconds2'
].map(prop => computed(() => timeLeft.value[prop]))

onMounted(() => {
  const timerInterval = setInterval(() => {
    timeLeft.value = getTimeRemaining()

    if (timeLeft.value.total <= 0) {
      clearInterval(timerInterval)
    }
  }, 1000)
})
</script>

<style lang="sass" scoped>
.Text_h3__0opol
  font-size: 24px
  font-weight: 700
  line-height: 36px

.Text_p__mrhFK
  font-size: 14px
  line-height: 20px

.Text_default__ei0zT
  color: #e9e9eb

.Text_secondary__0Sfqb
  color: #bfc1c7

.Text_regular__lCAPC
  font-weight: 400

.Seasons_cardContent__1c45c
  align-items: center
  display: flex
  flex-direction: row
  justify-content: flex-start

.Seasons_farming__k0Jy4
  background-color: #16181c
  border-radius: 16px
  padding: 48px
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

.Seasons_cardTitle__3Yi5e
  margin-bottom: 16px
  text-align: left
  text-transform: uppercase

.Seasons_num__Mu0pz
  align-items: center
  border-radius: 8px
  display: inline-flex
  font-weight: 600
  height: 52px
  justify-content: center
  max-height: 52px
  max-width: 48px
  width: 48px

.Seasons_date__HTqen
  background: #1e2024
  color: #e9e9eb
  margin-right: 0

.Seasons_timeBlockWrapper__a1ZeQ
  column-gap: 8px
  display: flex
  flex-direction: column
  row-gap: 8px

.Seasons_timeBlockNumber__yD_I4
  column-gap: 4px
  display: flex
  row-gap: 4px

.Seasons_dateDivider__jHkWL
  color: #898b8f
  margin: -32px 16px 0

@media (max-width: 600px)
  .Seasons_cardTitle__3Yi5e
    font-size: 12px
    line-height: 18px
    margin-bottom: 2px
    text-align: center

  .Seasons_cardContent__1c45c
    justify-content: center

  .Seasons_farming__k0Jy4
    overflow: hidden
    padding: 16px
    width: 100%

  .Seasons_num__Mu0pz
    height: 44px
    max-height: 44px
    max-width: 35px
    width: 35px

  .Seasons_timeBlockWrapper__a1ZeQ
    column-gap: 4px
    row-gap: 4px

  .Seasons_timeBlockNumber__yD_I4
    column-gap: 2px
    row-gap: 2px

  .Seasons_dateDivider__jHkWL
    margin: -32px 12px 0

.Seasons_timeBlockWrapper__a1ZeQ p
  text-align: center

@media (max-width: 600px)
  .Seasons_farming__k0Jy4 .Seasons_cardTitle__3Yi5e
    margin-bottom: 8px

</style>
