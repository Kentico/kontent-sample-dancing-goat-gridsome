<template>
  <aside class="col-md-4 col-lg-3 product-filter">
    <template v-for="filter in filters">
      <h4 :key="filter.id">{{ filter.title }}</h4>
      <div v-for="option in filter.options" :key="option.id">
        <span class="checkbox js-postback">
          <input :id="option.id" type="checkbox" :checked="option.selected" />
          <label
            :htmlFor="option.id"
            @click="
              $emit('toggleFilterOption', {
                filterId: filter.id,
                optionId: option.id
              })
            "
            >{{ option.name }}</label
          >
        </span>
      </div>
    </template>
  </aside>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true
    }
  }
}
</script>