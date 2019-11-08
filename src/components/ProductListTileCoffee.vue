<template>
  <div class="col-md-6 col-lg-4">
    <article class="product-tile">
      <g-link :to="coffee.path">
        <h1 class="product-heading">{{ coffee.name }}</h1>
        <span v-if="coffee.productStatus" class="product-tile-status">
          {{ coffee.productStatus }}
        </span>
        <figure class="product-tile-image">
          <img
            :alt="coffee.name"
            class=""
            :src="coffee.imageUrl"
            :title="coffee.name"
          />
        </figure>
        <div class="product-tile-info">
          <span class="product-tile-price">
            {{ coffee.price }}
          </span>
        </div>
      </g-link>
    </article>
  </div>
</template>
<script>
export default {
  props: {
    coffee: {
      type: Object,
      required: true
    }
  }
}
</script>