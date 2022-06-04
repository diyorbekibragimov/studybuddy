<script setup>
import Welcome from "@/components/Welcome.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <Welcome />
  </main>
</template>

<style scoped>
main {
  padding: 50px 0px;
}
</style>