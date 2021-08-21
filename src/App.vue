<template>
  <div id="app">
    <MainHeader />
    <b-container>
      <div id="nav">
      </div>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
export default {
  components: {
    MainHeader,
  },
};
</script>


<style>
</style>
