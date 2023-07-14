<template>
  <a target="_blank"
    rel="noreferrer"
    class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_dark__hKxQ0 Footer_communityLink__c0Z0A Button_iconCurrentColor__5vx1t Button_redesign__2StXC inherited-styles-for-exported-element"
    :href="herf">
    <svg><use :xlink:href="`#icon-${icon}`"></use></svg>
    {{ text }}
  </a>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  herf: {
    type: String,
    default: '',
  }
})

</script>

<style lang="sass" scoped>
.Button_button__30ukX
  align-items: center
  box-sizing: border-box
  cursor: pointer
  display: flex
  font-size: 16px
  font-weight: 600
  height: fit-content
  justify-content: center
  line-height: 24px
  text-align: center
  text-decoration: none
  transition: all 0.3s

.Button_default__Cpmha
  border-radius: 12px
  border-style: none

.Button_button__30ukX svg
  flex-shrink: 0
  height: 24px
  width: 24px

.Button_default__Cpmha svg
  margin-right: 8px

.Button_iconCurrentColor__5vx1t svg path
  fill: currentcolor

.Button_button__30ukX:active
  transform: scale(0.95)

.Button_solid__ZczOc.Button_dark__hKxQ0
  background-color: #1e2024
  color: #fff

.Button_redesign__2StXC.Button_default__Cpmha
  padding: 12px 24px 12px 20px

@media (max-width: 600px)
  .Button_default__Cpmha:has(svg)
    padding: 12px 16px

  .Button_redesign__2StXC.Button_default__Cpmha
    font-size: 14px
    line-height: 20px

.Button_solid__ZczOc.Button_dark__hKxQ0:hover
  background-color: #212429

.Footer_communityLink__c0Z0A
  width: 350px !important
</style>
