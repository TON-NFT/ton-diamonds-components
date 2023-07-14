<template>
  <form
    method="GET"
    class="SearchInput_form__89W0w Nfts_search__gdyLb inherited-styles-for-exported-element">
    <svg width="24" height="24" class="SearchInput_searchIcon__dMLYQ Icon_color"><use xlink:href="#icon-search"></use></svg>
    <input
      class="SearchInput_input__2JD1G SearchInput_input__pTUko"
      id="searchInput"
      type="text"
      :placeholder="placeholder"
      autocomplete="off"
      v-model="searchValue"
      @keyup.enter="search"
      @blur="blur"/>
    <span v-if="searchValue" @click.stop="clearInput" class="SearchInput_closeIcon__42Y4b">
      <svg class="SearchInput_closeIconSvg__Qa_W9 Icon_color"><use xlink:href="#icon-close"></use></svg>
    </span>
  </form>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search',
  },
})

const searchValue = ref('')

function clearInput() {
  searchValue.value = ''
}

function blur() {
  if (!searchValue.value) return
  console.log(searchValue.value)
  searchValue.value = ''
}

function search() {
  console.log(searchValue.value)
}
</script>

<style lang="sass" scoped>
input
  appearance: none
  border-style: none
  font-family: Inter, sans-serif !important

.SearchInput_form__89W0w
  display: flex
  flex-direction: column
  position: relative
  width: 100%

  &:hover .Icon_color use
    color: var(--text-color-primary)

@media screen and (max-width: 1000px)
  .SearchInput_form__89W0w
    width: 100%

.SearchInput_input__pTUko
  background: var(--main-tertiary)
  border: 1px solid var(--main-tertiary)
  box-sizing: border-box
  border-radius: 12px
  width: 100%
  padding: 11px 11px 11px 48px
  transition: border .3s ease
  outline: none
  color: var(--text-color-tertiary)
  font-size: 16px
  line-height: 24px
  transition: all .3s ease

.SearchInput_form__89W0w
  .SearchInput_searchIcon__dMLYQ
    left: 12px
    position: absolute
    top: calc(50% - 12px)

  .SearchInput_closeIcon__42Y4b
    align-items: center
    cursor: pointer
    display: flex
    height: 20px
    justify-content: center
    overflow: hidden
    position: absolute
    right: 10px
    top: 50%
    transform: translateY(-50%)
    transition: opacity 0.2s
    width: 20px
    z-index: 5

.Icon_color
  use
    color: var(--text-color-tertiary)
    transition: all .5s ease

  &:hover
    color: var(--text-color-primary)

.SearchInput_form__89W0w
  .SearchInput_input__2JD1G::placeholder
    opacity: 1

  .SearchInput_searchIcon__dMLYQ path
    transition: all 0.3s

  .SearchInput_closeIcon__42Y4b > svg
    height: 20px
    width: 20px

  &:active .SearchInput_input__2JD1G, .SearchInput_input__2JD1G:hover, &:active .SearchInput_input__2JD1G, &:focus .SearchInput_input__2JD1G, &:focus-within .SearchInput_input__2JD1G
    box-shadow: 0 0 0 1px var(--dark-hover)
    color: #e9e9eb
</style>
