<template>
    <div v-if="!input" class="Select_SelectDropdown__1Q1tE">
      <div class="Select_SelectDropdownScroll__okwMN">
        <div
          v-for="(item, key) in listInput"
          :key="key"
          class="Select_SelectOption__uQrj4"
          @click="selectInput(item)">
          {{ item.text }}
        </div>
      </div>
    </div>
    <div v-else class="Select_SelectDropdown__1Q1tE">
      <div class="Select_SelectDropdownScroll__okwMN">
        <div
          v-if="!filteredList.length"
          class="Select_SelectOption__uQrj4">
          Ничего не найдено
        </div>
        <div
          v-for="(item, key) in filteredList"
          :key="key"
          class="Select_SelectOption__uQrj4"
          @click.stop="selectInput(item)">
          {{ item.text1 }}
          <span v-if="item.text2" class="Select_SelectOptionTag__fYuB5">{{ item.text2 }}</span>
        </div>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  listInput: {
    type: Array,
    default: () => [],
    required: true,
  },
  filteredList: {
    type: Array,
    default: () => [],
  },
  input: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['selected'])
const selection = ref(props.listInput[0].text)

function selectInput(item) {
  if (props.input === false) {
    selection.value = item.text
    emit('selected', item.text)
  }
  if (props.input === true) {
    selection.value = item.text1
    emit('selected', item.text1)
  }
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

.Select_SelectOptionTag__fYuB5
  background-color: #059df5
  border-radius: 4px
  color: #e9e9eb
  font-size: 10px
  font-weight: 600
  line-height: 16px
  padding: 2px 4px

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
