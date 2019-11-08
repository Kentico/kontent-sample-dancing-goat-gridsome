<template>
  <Store>
    <ProductFilters
      :filters="filters"
      v-on:toggleFilterOption="toggleFilterOption"
    />
    <ProductList>
      <ProductListTileCoffee
        v-for="coffee in coffeesFiltered"
        :coffee="coffee"
        :key="coffee.id"
      />
    </ProductList>
  </Store>
</template>

<static-query>
query coffeeFilters {
  processingTerms: allTaxonomyProcessing (order:ASC) {
    edges {
      node {
        id
        name
      }
    }
  }
  productStatusTerms: allTaxonomyProductStatus (order:ASC) {
    edges {
      node {
        id
        name
      }
    }
  }
  coffees: allCoffee (order:ASC) {
    edges {
      node {
        path
        productName
        image {
          url
        }
        price
        processing {
          id
        }
        productStatus {
          id
          name
        }
      }
    }
  }
}
</static-query>
<script>
import Store from '../../layouts/Store'
import ProductFilters from "../../components/ProductFilters"
import ProductList from "../../components/ProductList"
import ProductListTileCoffee from "../../components/ProductListTileCoffee"

const FILTER_ID_PROCESSING = 'processing'
const FILTER_ID_PRODUCT_STATUS = 'product_status'

export default {
  data: () => ({
    activeFilters: {}
  }),
  components: {
    Store,
    ProductFilters,
    ProductList,
    ProductListTileCoffee
  },
  computed: {
    coffees: function () {
      return this.$static.coffees.edges.map(edge => {
        let filterValues = {}
        filterValues[FILTER_ID_PROCESSING] = edge.node.processing.map(x => (x.id))
        filterValues[FILTER_ID_PRODUCT_STATUS] = edge.node.productStatus.map(x => (x.id))

        return {
          path: edge.node.path,
          name: edge.node.productName,
          price: edge.node.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
          imageUrl: edge.node.image[0].url,
          productStatus: edge.node.productStatus && edge.node.productStatus.length > 0 ? edge.node.productStatus[0].name : null,
          filterValues
        }
      })
    },
    coffeesFiltered: function () {
      return this.coffees.filter(item => {
        let filterMatches = []

        for (const filterId in this.activeFilters) {
          const activeOptions = this.activeFilters[filterId]
          const filterIsApplied = activeOptions && activeOptions.length > 0
          if (filterIsApplied) {
            const itemOptions = item.filterValues && item.filterValues[filterId] ? item.filterValues[filterId] : []
            const matches = itemOptions.some(i => activeOptions.includes(i))
            if (!matches) {
              return false
            }
          }
        }

        return true
      })
    },
    filters: function () {
      const processingFilterOptions = this.$static.processingTerms.edges.map(edge => this.mapTerm(FILTER_ID_PROCESSING, edge.node))
      const productStatusFilterOptions = this.$static.productStatusTerms.edges.map(edge => this.mapTerm(FILTER_ID_PRODUCT_STATUS, edge.node))
      return [
        { title: 'Coffee processing', id: FILTER_ID_PROCESSING, options: processingFilterOptions },
        { title: 'Status', id: FILTER_ID_PRODUCT_STATUS, options: productStatusFilterOptions }
      ]
    }
  },
  methods: {
    toggleFilterOption: function (filterOption) {
      const { filterId, optionId } = filterOption

      const filterIsActive = this.isFilterActivated(filterId)
      if (!filterIsActive) {
        this.$set(this.activeFilters, filterId, [])
      }

      const optionIndex = this.activeFilters[filterId].indexOf(optionId)

      if (optionIndex > -1) {
        this.activeFilters[filterId].splice(optionIndex, 1)
      } else {
        this.activeFilters[filterId].push(optionId)
      }
    },
    mapTerm: function (filterId, node) {
      const filterOption = {
        filterId: filterId,
        optionId: node.id
      }
      const selected = this.isFilterOptionSelected(filterOption)
      return {
        id: node.id,
        name: node.name,
        selected
      }
    },
    isFilterOptionSelected: function (filterOption) {
      const { filterId, optionId } = filterOption
      if (this.isFilterActivated(filterId)) {
        const optionIndex = this.activeFilters[filterId].indexOf(optionId)
        return optionIndex > -1
      }

      return false
    },
    isFilterActivated: function (filterId) {
      const activeFilterIds = Object.keys(this.activeFilters)
      return activeFilterIds.includes(filterId)
    }
  }
}
</script>