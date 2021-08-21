<template>
  <div class="row mt-5">
      <div class="col-4">
          <img :src="product.image" alt="img" class="w-100" />
      </div>
      <div class="col-8">
          <h1>{{ product.title}}</h1>
          <h3>$ {{ product.price}}</h3>
          <input type="text" class="text-center col-1 mr-2 p-1" v-model="qty"/>
          <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>
          <h4 class="mt-5">Description :</h4>
          <p class="mt-2">
              {{
                  product.description
              }}
          </p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            qty: 1
        }
    },

    mounted() {
        this.$store.dispatch('getProduct', this.id)
    },

    computed: {
        product() {
            return this.$store.state.product
        }
    },

    methods: {
        addToCart() {
            return this.$store.dispatch('addToCard', {
                product: this.product,
                qty: this.qty
            })
        }
    }
}
</script>

<style>

</style>