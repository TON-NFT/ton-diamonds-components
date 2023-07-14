<template>
  <section>
    <NftActivity :tabs="tabs" />
  </section>
</template>

<script setup>

const tabs = [
 { name: 'nfts', title: 'NFTs', count: 10},
 { name: 'activity', title: 'Activity'},
 { name: 'jzjzj', title: 'SageLalala', count: 1},
]
</script>