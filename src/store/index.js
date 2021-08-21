import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: null,
    cart: []
  },
  mutations: {
    SET_PRODUCTS(state, product) {
      state.products = product
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
    ADD_TO_CART(state, { product, qty }) {
      let productInCart = state.cart.find( a => a.product.id === product.id)

      if (productInCart) {
        return productInCart.qty += qty
      }

      state.cart.push({
        product,
        qty
      })
    },
    CLEAR_CART(state) {
      state.cart = []
    },
    REMOVE_FROM_CART(state, product) {
     state.cart = state.cart.filter( a => a.product.id !== product.id)
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          commit('SET_PRODUCTS', res.data);
        })
        .catch(err => {
          console.log(err.data)
        })
    },
    getProduct({ commit }, id) {
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
          commit('SET_PRODUCT', res.data);
        })
        .catch(err => {
          console.log(err.data)
        })
    },
    addToCard({ commit }, { product, qty }) {
      commit('ADD_TO_CART', { product, qty })
    },
    removeFromCart({ commit }, product) {
      commit('REMOVE_FROM_CART', product)
    }
  },
  getters: {
    cartCount( state ) {
      return state.cart.length
    },
    cartTotal( state ) {
      let total = 0

      state.cart.forEach(item => total += item.product.price * item.qty)

      return total
    }
  },
  modules: {
  }
})
