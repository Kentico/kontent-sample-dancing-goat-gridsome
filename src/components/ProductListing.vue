<template>
  <div class="container">
    <div class="container product-page-container">
      <nav role="navigation" class="sub-menu row">
        <div class="store-menu-list row">
          <ul>
            <li>
              <g-link :to="`/store/coffees`">Coffees</g-link>
            </li>
            <li>
              <g-link :to="`/store/brewers`">Brewers</g-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="product-page row">
        <div class="flex">
          <ProductFilters
            :filters="filters"
            :selectedOptions="activeFilterOptions"
            v-on:toggleFilterOption="toggleFilterOption"
          />
          <ProductList :products="productsFiltered" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductFilters from './ProductFilters'
import ProductList from './ProductList'

export default {
  data: () => ({
    activeFilters: []
  }),
  props: {
    products: {
      type: Array,
      required: true
    },
    filters: {
      type: Array,
      required: true
    }
  },
  components: {
    ProductFilters,
    ProductList
  },
  computed: {
    activeFilterOptions: function () {
      return this.activeFilters
        .map(f => f[1])
        .reduce((a, b) => {
          console.log("wut")
          return a.concat(b)
        }, [])
    },
    productsFiltered: function () {
      return this.products.filter(p => {
        const filterMatches = this.activeFilters.map(f => {
          return p.filterValues.some(option => f[1].includes(option))
        })

        return filterMatches.every(m => m)
      })
    }
  },
  methods: {
    toggleFilterOption: function (filterOption) {
      const { filterTitle, optionId } = filterOption

      const filterIndex = this.activeFilters.findIndex(f => f[0] === filterTitle)
      if (filterIndex > -1) {
        const optionIndex = this.activeFilters[filterIndex][1].indexOf(optionId)
        if (optionIndex > -1) {
          this.activeFilters[filterIndex][1].splice(optionIndex, 1)
          if (this.activeFilters[filterIndex][1].length === 0) {
            this.activeFilters.splice(filterIndex, 1)
          }
        } else {
          this.activeFilters[filterIndex][1].push(optionId)
        }
      } else {
        this.activeFilters.push([filterTitle, [optionId]])
      }
    },
  }
}
</script>