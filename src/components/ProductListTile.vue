<template>
  <div class="col-md-6 col-lg-4">
    <article class="product-tile">
      <g-link :to="product.path">
        <h1 class="product-heading">{{ product.name }}</h1>
        <span v-if="product.productStatus" class="product-tile-status">
          {{ product.productStatus }}
        </span>
        <figure class="product-tile-image">
          <img
            :alt="product.name"
            class=""
            :src="product.imageUrl"
            :title="product.name"
          />
        </figure>
        <div class="product-tile-info">
          <span class="product-tile-price">
            {{ product.price }}
          </span>
        </div>
      </g-link>
    </article>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>