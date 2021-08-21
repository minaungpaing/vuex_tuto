<template>
  <div class="d-flex align-items-stretch flex-wrap">
      <productCard v-for="(product,index) in products" :key="index" :product="product"/>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },

  computed: {
    products() {
      return this.$store.state.products
    }
  },

  mounted() {
    this.$store.dispatch('getProducts')
  }

}
</script>

<style>

</style>