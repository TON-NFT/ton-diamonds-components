<template>
  <section>
    <SelectionWithInput :listInput="listItems" placeholder="Кто вы сегодня?"/>
    <SelectionWithoutInput :listInput="listInput" />
  </section>
</template>

<script setup>
const listItems = [
  {text1: 'собачка', text2: 'гав'},
  {text1: 'киса', text2: 'мяу'},
  {text1: 'пиг', text2: 'хрю'},
  {text1: 'курочка', text2: 'ко-ко'},
  {text1: 'каста', text2: 'женщина не пиши мне ти мне не интиресна'},
]

const listInput = [
  {text: '10.12.2022'},
  {text: '10/12/2022'},
  {text: '2022-10-12'},
]
</script>
