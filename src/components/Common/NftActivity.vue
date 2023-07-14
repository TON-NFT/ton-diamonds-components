<template>
  <div class="Tabs_tabsControlsWrapper__OhZOk inherited-styles-for-exported-element">
    <ul class="Tabs_tabList__fy_Ks" role="tablist">
      <li
        v-for="(tab, key) in tabs"
        :key="key"
        :class="activeClass(key)"
        @click="changeTab(key)"
        class="Tabs_tabControl__mAqGJ Tabs_activeTab__I_xKC">
        <h5 class="Text_h5__PRxb0 Text_default__ei0zT Text_semiBold__iFdnC Tabs_tabText__l52Lf">
          {{ tab.title }}
        </h5>
        <span v-if="tab.count" class="Tabs_tabControlCount__zlEI2">{{ tab.count }}</span>
      </li>
    </ul>
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
span
  margin-bottom: 0

h5, li
  padding: 0

h5, span
  margin-right: 0
  margin-top: 0

h5
  margin-left: 0

li
  margin: 0

ul
  list-style: none
  margin-left: 0
  margin-right: 0
  margin-top: 0
  padding-left: 0
  padding-right: 0
  padding-top: 0

div
  margin: 0
  padding: 0

.Text_h5__PRxb0
  font-size: 18px
  line-height: 26px

.Text_semiBold__iFdnC
  font-weight: 600

.Tabs_tabList__fy_Ks
  box-shadow: inset 0 -1px 0 0 rgba(214, 228, 255, 0.16)
  column-gap: 32px
  display: flex
  overflow: hidden
  padding-bottom: 16px
  position: relative
  row-gap: 32px

.Tabs_tabsControlsWrapper__OhZOk
  position: relative

.Tabs_tabControl__mAqGJ
  align-items: center
  background-color: transparent
  cursor: pointer
  display: flex
  position: relative
  user-select: none

  &::after
    background: #e9e9eb
    border-radius: 0
    bottom: -17px
    content: ''
    display: inline-block
    height: 0
    left: 50%
    position: absolute
    transition: all 0.3s
    width: 0

  .Tabs_activeTab__I_xKC
    background-color: transparent

  .Tabs_tabText__l52Lf
    align-items: center
    display: inline-flex
    margin-bottom: 0
    transition: all 0.3s
    color: var(--text-color-tertiary)

  .Tabs_tabControlCount__zlEI2
    border-radius: 4px
    color: #000
    display: inline-block
    font-size: 14px
    font-weight: 700
    height: 20px
    line-height: 20px
    margin-left: 6px
    padding: 0 4px 1px
    text-align: center
    transition: all 0.3s
    background: var(--text-color-tertiary)

@media screen and (max-width: 600px)
  .Tabs_tabList__fy_Ks
    overflow-x: auto

@media screen and (max-width: 600px)
  .Tabs_tabList__fy_Ks::-webkit-scrollbar
    display: none

.--active
  &::after
    border-radius: 2px 2px 0 0
    bottom: -16px
    height: 2px
    left: 0
    position: absolute
    width: 100%
    z-index: 2

  h5
    color: #fff !important

  span
    background: #fff !important

.Tabs_tabControl__mAqGJ:hover
  .Tabs_tabText__l52Lf
    color: #e9e9eb

  .Tabs_tabControlCount__zlEI2
    background: #e9e9eb
</style>
