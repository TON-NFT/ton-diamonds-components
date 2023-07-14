<template>
  <div class="GlintLeaderBoard_paginationWrapper__COX5F inherited-styles-for-exported-element">
    <div class="Pagination_paginationWrapper__hBv1V Pagination_redesignWrapper___wxzr">
      <a class="Pagination_item__GJ3ds" :class="{ Pagination_disabled__9kuyw: currentPage === 1 }" @click.prevent="goToPageBack" href="#">
        <svg class="Pagination_chevronLeft__szAD1"><use xlink:href="#icon-left"></use></svg>
      </a>
      <a v-if="currentPage > 4 && totalPages > 6" class="Pagination_item__GJ3ds" :class="{ Pagination_active__fJ98n: currentPage === 1 }" @click.prevent="goToPage(1)" href="#">
        {{ 1 }}
      </a>
      <a class="Pagination_item__GJ3ds Pagination_disabled__9kuyw" v-if="currentPage > 4 && totalPages > 6" href="#">
        ...
      </a>
      <a v-for="page in getDisplayedPages()" :key="page" class="Pagination_item__GJ3ds" :class="{ Pagination_active__fJ98n: currentPage === page }" @click.prevent="goToPage(page)" href="#">
        {{ page }}
      </a>
      <a class="Pagination_item__GJ3ds Pagination_disabled__9kuyw" v-if="getDisplayedPages()[getDisplayedPages().length - 1] !== totalPages" href="#">
        ...
      </a>
      <a v-if="totalPages - 2 > currentPage && totalPages > 6" class="Pagination_item__GJ3ds" :class="{ Pagination_active__fJ98n: currentPage === totalPages }" @click.prevent="goToPage(totalPages)" href="#">
        {{ totalPages }}
      </a>
      <a class="Pagination_item__GJ3ds" :class="{ Pagination_disabled__9kuyw: currentPage === totalPages }" @click.prevent="goToPageNext" href="#">
        <svg class="Pagination_chevronRight___Q0BQ"><use xlink:href="#icon-right"></use></svg>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  totalPages: {
    type: Number,
    default: 100,
    required: true,
  },
})

const currentPage = ref(1)
const displayedPages = ref(5)

function getDisplayedPages() {
  if(props.totalPages > 6) {
    if(currentPage.value > 4) displayedPages.value = 3
    if(currentPage.value < 5 || currentPage.value > props.totalPages - 3) displayedPages.value = 5

    let startPage = currentPage.value - Math.floor(displayedPages.value / 2)
    if (startPage < 1 || currentPage.value === 4) {
      startPage = 1
    }

    let endPage = startPage + displayedPages.value - 1
    if (endPage > props.totalPages) {
      endPage = props.totalPages
      startPage = endPage - displayedPages.value + 1
      if (startPage < 1) {
        startPage = 1
      }
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  if(props.totalPages <= 6) {
    displayedPages.value = props.totalPages
    let startPage = currentPage.value - Math.floor(displayedPages.value / 2)

    if (startPage < 1) {
      startPage = 1
    }

    const pages = [];
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i)
    }
    return pages
  }
}

function goToPage(pageNumber) {
  currentPage.value = pageNumber
}

function goToPageNext() {
  if(currentPage.value === props.totalPages) return
  currentPage.value = currentPage.value + 1
}

function goToPageBack() {
  if(currentPage.value === 1) return
  currentPage.value = currentPage.value - 1
}
</script>

<style lang="sass" scoped>
.Pagination_paginationWrapper__hBv1V
  flex-direction: row

.Pagination_redesignWrapper___wxzr
  background: #16181c
  border-radius: 12px
  display: inline-flex
  padding: 4px

.GlintLeaderBoard_paginationWrapper__COX5F
  display: flex

.Pagination_paginationWrapper__hBv1V
  .Pagination_item__GJ3ds
    align-items: center
    background: #16181c
    box-sizing: border-box
    cursor: pointer
    display: flex
    justify-content: center
    margin-right: 8px
    text-align: center
    transition: all .3s

  .Pagination_disabled__9kuyw
    cursor: auto

.Pagination_redesignWrapper___wxzr
  .Pagination_item__GJ3ds
    border-radius: 8px
    border-style: none
    color: #898b8f
    font-size: 16px
    font-weight: 500
    height: 40px
    line-height: 24px
    min-width: 40px
    padding: 0 8px

  .Pagination_disabled__9kuyw
    color: #898b8f

  .Pagination_active__fJ98n
    background: #212429
    color: #e9e9eb

  .Pagination_item__GJ3ds svg
    height: 24px
    width: 24px

@media screen and (max-width: 600px)
  .Pagination_redesignWrapper___wxzr .Pagination_item__GJ3ds
    margin-right: 4px

.Pagination_paginationWrapper__hBv1V
  .Pagination_item__GJ3ds
    &:hover
      border-color: #023b66

    &:last-child
      margin-right: 0

    .Pagination_chevronLeft__szAD1
      transform: rotate(180deg)

  .Pagination_active__fJ98n:hover
    border-color: #e9e9eb

  .Pagination_disabled__9kuyw:hover
    border-color: #898b8f

.Pagination_redesignWrapper___wxzr
  .Pagination_item__GJ3ds:hover
    background: #212429
    color: #e9e9eb

  .Pagination_disabled__9kuyw:hover
    background: #16181c !important
    color: #898b8f
    cursor: default

.Pagination_paginationWrapper__hBv1V .Pagination_item__GJ3ds
  .Pagination_chevronLeft__szAD1 path, .Pagination_chevronRight___Q0BQ path
    transition: all .3s

.Pagination_redesignWrapper___wxzr .Pagination_item__GJ3ds:hover svg path
  fill: currentcolor

</style>
