<template>
  <div class="ButtonTabs_typeControls__vqCOK inherited-styles-for-exported-element">
    <button
      v-for="(tab, key) in tabs"
      :key="key"
      :class="activeClass(key)"
      @click="changeTab(key)"
      class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_dark__hKxQ0 ButtonTabs_inactive__Psdhp Button_iconCurrentColor__5vx1t">
      {{ tab.title }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    default: () => [],
    required: true,
  },
})

const activeTab = ref(0)

function activeClass(tabId) {
  return tabId === activeTab.value ? 'tab --active' : 'tab'
}

function changeTab(tabId) {
  activeTab.value = tabId
}
</script>

<style lang="sass" scoped>

button
  appearance: none
  font-family: Inter, sans-serif !important

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
  width: max-content

.ButtonTabs_typeControls__vqCOK
  background: #16181c
  border-radius: 12px
  display: flex
  padding: 4px
  width: fit-content

  button
    border-radius: 8px
    border-style: none
    padding: 10px 24px

.Button_button__30ukX:active
  transform: scale(0.95)

.--active
  background: #212429 !important
  color: #fff !important

.Button_solid__ZczOc .Button_dark__hKxQ0
  background-color: #1e2024
  color: #fff

.ButtonTabs_typeControls__vqCOK .ButtonTabs_inactive__Psdhp
  background-color: transparent
  color: #898b8f
  transition: all .5s ease-out

  &:hover
    color: #e9e9eb
</style>
