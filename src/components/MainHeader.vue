<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-container>
          <!-- <b-navbar-brand href="#">SHOP</b-navbar-brand>    -->

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <router-link class="nav-link" to="/">Home</router-link>
              <router-link class="nav-link" to="/about">About</router-link>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <Cart/>
            <b-button variant="outline-secondary" class="ml-2">Login</b-button>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import Cart from "./Cart.vue"
export default {
  components: {
    Cart
  }
};
</script>

<style>
</style>