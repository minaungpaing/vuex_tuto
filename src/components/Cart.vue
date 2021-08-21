<template>
  <b-dropdown id="dropdown-buttons" :text="cartCount" class="ml-auto">
    <div v-if="this.$store.getters.cartCount != 0">
      <p v-for="(item, id) in cart" :key="id">
        <span class="d-flex justify-content-between">
          <strong>{{ item.product.title.substring(0, 22) + "..." }}</strong>
          <button class="btn btn-sm btn-secondary" @click="removeFromCart(item.product)">remove</button>
        </span>
        {{ item.qty }} x $ {{ item.product.price }}

        <b-dropdown-divider></b-dropdown-divider>
      </p>
    </div>
    <div v-else>
      <p class="text-center py-2">There is no item in Cart.</p>
      <b-dropdown-divider></b-dropdown-divider>
    </div>
    <div class="d-flex justify-content-between px-2">
      <span
        >Total: <strong>$ {{ cartTotal }}</strong></span
      >
      <button class="btn btn-sm btn-danger" @click="clearCart()">
        Clear Cart
      </button>
    </div>
  </b-dropdown>
</template>

<script>
export default {
  data() {
    return {
      cartItem: 0,
    };
  },
  computed: {
    cartCount() {
      return "Cart (" + this.$store.getters.cartCount.toString() + ")";
    },
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    clearCart() {
      return this.$store.commit("CLEAR_CART");
    },
    removeFromCart(product) {
      return this.$store.dispatch('removeFromCart', product)
    }
  },
};
</script>

<style>
.dropdown-menu {
  width: 300px !important;
  padding: 10px !important;
}
</style>