<template>
  <div>
    <b-alert show dismissible :variant="notification.type">
      {{ notification.message }}
    </b-alert>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['notification'],

  data() {
      return {
          timeout: null
      }
  },
  created() {
      this.timeout = setTimeout(() => {
          this.removeNotification(this.notification);
      },5000)
  },

  beforeDestroy() {
      clearTimeout(this.timeout);
  },

  methods: {
      ...mapActions('notification',['removeNotification'])
  }
};
</script>