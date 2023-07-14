<template>
  <section>
    <Sort :listInput="listInput"  />
    <Sort :listInput="lalalala"  />
  </section>
</template>

<script setup>
const listInput = [
  {name: 'null_null', text: 'Recommended'},
  {name: 'rarity_asc', text: 'Rarity: Low to High'},
  {name: 'rarity_desc', text: 'Rarity: High to Low'},
  {name: 'price_asc', text: 'Price: Low to High'},
  {name: 'price_desc', text: 'Price: High to Low'},
]

const lalalala = [
  {name: 'null_null', text: 'Рекомендасьон'},
  {name: 'rarity_asc', text: 'Чота вверх'},
  {name: 'rarity_desc', text: 'Чота вниз'},
  {name: 'price_asc', text: 'Летим на юг'},
  {name: 'price_desc', text: 'Плывем на восток'}
]
</script>