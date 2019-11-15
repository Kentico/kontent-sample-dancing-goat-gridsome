<template>
  <div id="product-list" class="col-md-8 col-lg-9 product-list">
    <ProductListTile
        v-for="product in products"
        :product="product"
        :key="product.id"
      />
  </div>
</template>
<script>
import ProductListTile from './ProductListTile'

export default {
  components: {
    ProductListTile
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>