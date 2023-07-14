<template>
  <div class="Select_Select__c0jZV inherited-styles-for-exported-element">
    <div
      @click.stop="openBlock = !openBlock, console.log('qwfqwf')" class="Select_SelectValue__nuBys">{{ selection }}
      <div class="Input_root__JYT11">
        <div class="Input_inner__AFwX9">
          <input class="Input_input__lvORT Input_textInput__a3yOZ Input_legacy__YSmUn Select_SelectInput__31PPa" type="text" id="select" name="select" value="">
        </div>
      </div>
      <svg :class="{ 'rotate-180': openBlock }" class="Select_SelectArrow__4C7cC"><use xlink:href="#icon-show"></use></svg>
    </div>
    <DropDownList v-if="openBlock" :listInput="listInput" @selected="handleSelected" />
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
const selection = ref(props.listInput[0].text)

function handleSelected(selectedItem) {
  console.log(selectedItem)
  selection.value = selectedItem
  openBlock.value = false
}
</script>

<style lang="sass" scoped>
input
  appearance: none
  font-family: Inter, sans-serif !important

.Select_Select__c0jZV
  display: flex
  flex-direction: column
  position: relative
  width: 100%

.Select_SelectArrow__4C7cC
  height: 20px
  position: absolute
  right: 12px
  top: 12px
  transform: rotate(0deg)
  transition: transform .2s ease-in
  width: 20px
  z-index: 3

.Select_SelectInput__31PPa, .Select_SelectValue__nuBys
  background-color: #060a0f
  box-shadow: 0 0 0 0.5px rgba(214, 228, 255, 0.16)
  height: 44px

.rotate-180
  transform: rotate(180deg)

.Select_SelectValue__nuBys
  align-items: center
  border-radius: 12px
  color: #e9e9eb
  cursor: pointer
  display: flex
  font-size: 14px
  font-weight: 600
  padding-left: 12px
  padding-right: 12px
  position: relative
  width: 100%

.Select_SelectInput__31PPa
  visibility: hidden

.Select_SelectDropdown__1Q1tE
  background-color: #16181c
  border: 1px solid rgba(214, 228, 255, 0.16)
  border-image: none 100% 1 0 stretch
  border-radius: 12px
  left: 0
  max-height: 220px
  overflow: hidden
  position: absolute
  right: 0
  top: calc(100% + 8px)
  z-index: 5

.Select_SelectDropdownScroll__okwMN
  height: 100%
  max-height: 220px
  overflow-y: auto
  width: 100%

.Select_SelectOption__uQrj4
  align-items: center
  color: #e9e9eb
  cursor: pointer
  display: flex
  font-size: 14px
  font-weight: 600
  height: 44px
  justify-content: space-between
  line-height: 20px
  padding-left: 12px
  padding-right: 12px
  transition: background-color .2s ease-in
  width: 100%

.Input_root__JYT11
  width: 100%

.Input_input__lvORT
  border-radius: 12px
  box-sizing: border-box
  color: #e9e9eb
  width: 100%

.Input_inner__AFwX9
  height: 100%
  position: relative
  width: 100%

.Input_textInput__a3yOZ
  font-size: 16px
  font-weight: 500
  line-height: 1.5
  padding: 16px
  transition: border-color .25s ease-out

.Input_legacy__YSmUn
  background: #060a0f
  border: 1px solid rgba(214, 228, 255, 0.16)
  border-image: none 100% 1 0 stretch

.Select_SelectArrow__4C7cC path
  fill: #fff

.Select_SelectValue__nuBys > div
  left: 0
  position: absolute
  top: 0
  z-index: 2

.Input_input__lvORT::placeholder
  color: #898b8f99

.Input_textInput__a3yOZ
  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button
    appearance: none
    margin: 0

.Select_SelectOption__uQrj4:hover
  background-color: #1e2024

.Input_input__lvORT:focus-visible
  outline: 0

.Input_textInput__a3yOZ
  &:active, &:focus
    color: #e9e9eb

.Input_legacy__YSmUn
  &:active, &:focus
    border-color: rgba(214, 228, 255, 0.16)

</style>
