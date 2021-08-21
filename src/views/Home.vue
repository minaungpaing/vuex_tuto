<template>
  <div class="home">
    <product-list/>
  </div>
</template>

<script>

import ProductList from '../components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
