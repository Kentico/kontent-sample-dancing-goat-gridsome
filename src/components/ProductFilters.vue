<template>
  <aside class="col-md-4 col-lg-3 product-filter">
    <template v-for="filter in filters">
      <h4 :key="filter.id">{{ filter.title }}</h4>
      <div v-for="option in filter.options" :key="option.id">
        <span class="checkbox js-postback">
          <input :id="option.id" type="checkbox" :checked="option.checked" />
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

    <!-- <div v-for="processing in processingsData" :key="processing.codename">
      <span class="checkbox js-postback">
        <input
          :id="processing.codename"
          type="checkbox"
          :checked="processing.checked"
        />
        <label
          :htmlFor="processing.codename"
          @click="processingOnChange(processing.codename)"
          >{{ processing.name }}</label
        >
      </span>
    </div> -->
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