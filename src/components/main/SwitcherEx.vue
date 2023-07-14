<template>
  <section>
    <Switcher :tabs="btns" />
  </section>
</template>

<script setup>

const btns = [
 {  title: 'All' },
 {  title: 'Artists' },
 {  title: 'Sage' },
 {  title: 'OduVanchik' },
 {  title: 'Artemushka' },
 {  title: 'Kasta' },
]
</script>