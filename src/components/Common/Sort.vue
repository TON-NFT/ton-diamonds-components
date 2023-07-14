<template>
  <div
    class="CollectionSortControls_sortWrapper__fWZar Nfts_sortWrapper__EMUx_ inherited-styles-for-exported-element">
    <button
      @click="openBlock = !openBlock"
      type="button"
      class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_dark__hKxQ0 CollectionSortControls_desktopButton__FgsXK Button_iconCurrentColor__5vx1t">
      {{ selection }}
      <svg :class="{ 'rotate-180': openBlock }" class="CollectionSortControls_chevron__l3dpD"><use xlink:href="#icon-show"></use></svg>
    </button>
    <ul
      v-if="openBlock"
      class="CollectionSortControls_desktopListWrapper__Ql_u_ FadeContainer_transitionExit__gLpxI FadeContainer_transitionExitActive__FAIbN inherited-styles-for-exported-element">
      <li class="Text_p__mrhFK Text_tertiary__q_g0h Text_bold__96_eJ CollectionSortControls_itemWrapper__15vDt CollectionSortControls_sortByLabel__osYFH">Sort by</li>
      <li
        v-for="(item, key) in listInput"
        :key="key"
        class="CollectionSortControls_itemWrapper__15vDt CollectionSortControls_option__Wa3B_ CollectionSortControls_activeOption__2U1t_"
        @click="selectInput(item)">
        <label for="null_null" class="RadioInput_radioLabel__U6ZkF">
          <input id="null_null" type="radio" name="input-radio" :checked="item.text === selection" class="RadioInput_radioInput__9LDzB">{{ item.text }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>

const props = defineProps({
  listInput: {
    type: Array,
    default: () => [],
    required: true,
  },
})
const openBlock = ref(false)

const selection = ref(props.listInput[0]?.text)

function closeDropdown() {
  openBlock.value = false
  console.log('работает!!!');
}

function selectInput(item) {
  selection.value = item.text
  openBlock.value = false
}
</script>

<style lang="sass" scoped>
label
  padding: 0
  border-style: initial
  border-width: 0
  font-family: inherit

li
  border-style: initial
  border-width: 0
  font-family: inherit
  line-height: inherit

ul
  list-style: none

.rotate-180
  transform: rotate(180deg)

.inherited-styles-for-exported-element
  color: #e9e9eb
  font-family: Inter, sans-serif
  line-height: 1

input
  appearance: none
  font-family: Inter, sans-serif !important

.CollectionSortControls_sortByLabel__osYFH
  padding: 8px 12px

.Text_tertiary__q_g0h
  color: var(--text-color-tertiary)

.Text_bold__96_eJ
  font-weight: 700

.CollectionSortControls_option__Wa3B_
  transition: var(--default-transition)
  border-radius: 8px
  transition: all .5s ease

  &:hover
    background: #1e2024

.CollectionSortControls_itemWrapper__15vDt
  padding: 12px

.RadioInput_radioInput__9LDzB:checked
  border-color: var(--accent-primary)

.FadeContainer_transitionExitActive__FAIbN
  transition: all .3s

.Text_p__mrhFK
  font-size: 14px
  line-height: 20px

.RadioInput_radioLabel__U6ZkF
  align-items: center
  border-radius: 12px
  cursor: pointer
  display: flex
  font-size: 16px
  font-weight: 500
  line-height: 24px

.RadioInput_radioInput__9LDzB:after
  content: ""
  display: inline-block
  border-radius: 50%
  background: var(--accent-primary)
  color: var(--reverse-theme-text-color)
  position: absolute
  height: 0
  width: 0
  top: 50%
  left: 50%
  transform: translate(0)
  transition: var(--default-transition)

.RadioInput_radioLabel__U6ZkF
  display: flex
  align-items: center
  cursor: pointer
  border-radius: 12px
  font-weight: 600
  font-size: 16px
  line-height: 24px

.RadioInput_radioInput__9LDzB
  border-radius: 50%
  display: inline-block
  flex-shrink: 0
  height: 22px
  margin: 0 12px 0 0
  position: relative
  width: 22px
  height: 22px
  width: 22px
  border: 2px solid var(--text-color-tertiary)
  border-radius: 50%
  transition: var(--default-transition)
  flex-shrink: 0
  position: relative
  margin: 0 12px 0 0
  display: inline-block

.CollectionSortControls_desktopListWrapper__Ql_u_
  background: #16181c
  border: 1px solid rgba(214, 228, 255, 0.16)
  border-image: none 100% 1 0 1 0 stretch
  border-radius: 12px
  min-width: 230px
  padding: 4px
  position: absolute
  top: calc(100% + 12px)
  z-index: 3

.RadioInput_radioInput__9LDzB
  &::after
    border-radius: 50%
    content: ""
    display: inline-block
    height: 0
    left: 50%
    position: absolute
    top: 50%
    transform: translate(0)
    width: 0

  &:checked::after
    height: 14px
    left: calc(50% - 7px)
    top: calc(50% - 7px)
    width: 14px

.inherited-styles-for-exported-element
  color: #e9e9eb
  font-family: Inter, sans-serif
  line-height: 1

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

.Button_default__Cpmha
  border-radius: 12px
  border-style: none
  padding: 12px 24px

.CollectionSortControls_sortWrapper__fWZar
  column-gap: 16px
  display: flex
  position: relative
  row-gap: 16px

.CollectionSortControls_chevron__l3dpD
  margin-left: 8px
  transition: all 0.3s

.CollectionSortControls_mobileButton__aTOPv
  display: none

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

  &:hover
    background-color: #212429

.CollectionSortControls_chevron__l3dpD
  margin-right: 0 !important

div
  -webkit-font-smoothing: antialiased
  -webkit-tap-highlight-color: transparent
  border-style: initial
  border-width: 0
  box-sizing: border-box
  font-feature-settings: inherit
  font-kerning: inherit
  font-optical-sizing: inherit
  font-size: inherit
  font-stretch: inherit
  font-style: inherit
  font-variant: inherit
  font-variation-settings: inherit
  font-weight: inherit
  margin-left: 0
  margin-right: 0
  margin-top: 0
  padding: 0
  vertical-align: baseline

.inherited-styles-for-exported-element
  color: #e9e9eb
  font-family: Inter, sans-serif
  line-height: 1

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

.Button_default__Cpmha
  border-radius: 12px
  border-style: none
  padding: 12px 24px

@media (max-width: 600px)
  .Button_button__30ukX
    font-size: 14px
    line-height: 20px

  .Button_default__Cpmha
    padding: 14px 20px

.CollectionSortControls_sortWrapper__fWZar
  column-gap: 16px
  display: flex

  /* justify-content: flex-end;
  position: relative
  row-gap: 16px

.CollectionSortControls_chevron__l3dpD
  margin-left: 8px
  transition: all 0.3s

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

.Button_solid__ZczOc
  &.Button_dark__hKxQ0
    background-color: #1e2024
    color: #fff

  .Button_dark__hKxQ0:hover
    background-color: #212429

@media (max-width: 600px)
  .Button_default__Cpmha:has(svg)
    padding: 12px 16px

@media screen and (max-width: 600px)
  .Nfts_sortWrapper__EMUx_
    width: 100%

.CollectionSortControls_chevron__l3dpD
  margin-right: 0 !important

</style>
