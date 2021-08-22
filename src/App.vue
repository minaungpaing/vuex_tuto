<template>
  <div id="app">
    <MainHeader />
    <b-container>
      <div id="nav">
      </div>
      <router-view />
    </b-container>
    <notification-list/>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import NotificationList from './components/NotificationList.vue';
export default {
  components: {
    MainHeader,
    NotificationList,
  },
};
</script>


<style>
</style>
