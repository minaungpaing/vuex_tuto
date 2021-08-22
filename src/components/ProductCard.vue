<template>
    <div class="col-3 mt-3">
        <div class="card h-100 text-left">
            <img :src="product.image" alt="img" class="w-100" height="300px">
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="{name: 'product', params: {id: product.id }}">{{product.title.substring(0,15) + '...'}}</router-link>
                </h4>
                <div class="d-flex justify-content-between align-items-center">
                    <strong>$ {{product.price}}</strong>
                    <span v-if="product.category == men" class="badge badge-success">{{ product.category }}</span>
                    <span v-if="product.category == women" class="badge badge-info">{{ product.category }}</span>
                    <span v-if="product.category == 'electronics'" class="badge badge-danger">{{ product.category }}</span>
                    <span v-if="product.category == 'jewelery'" class="badge badge-primary">{{ product.category }}</span>
                </div>
                <p class="card-text">{{ product.description.substring(0,50) + '...' }}</p>
            </div>
            <div class="px-4 pb-3">
                <button class="btn btn-secondary" @click="addToCart()">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],

    data() {
        return {
            men: "men's clothing",
            women: "women's clothing"
        }
    },

    methods: {
        addToCart() {
            return this.$store.dispatch('addToCard', {
                product: this.product,
                qty: 1
            })
        }
    }
}
</script>

<style>

</style>