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

export default {
  data: () => ({
    activeFilters: []
  }),
  components: {
    Store,
    ProductFilters,
    ProductList,
    ProductListTileCoffee
  },
  computed: {
    processingFilterOptions: function () {
      return this.$static.processingTerms.edges.map(edge => this.mapTerm('processing', edge.node))
    },
    productStatusFilterOptions: function () {
      return this.$static.productStatusTerms.edges.map(edge => this.mapTerm('product_status', edge.node))
    },
    coffees: function () {
      return this.$static.coffees.edges.map(edge => ({
        path: edge.node.path,
        name: edge.node.productName,
        price: edge.node.price,
        imageUrl: edge.node.image[0].url,
        productStatus: edge.node.productStatus && edge.node.productStatus.length > 0 ? edge.node.productStatus[0] : null,
        processing: edge.node.processing[0]
      }))
    },
    coffeesFiltered: function () {
      const productStatusFilters = this.activeFilters.filter(f => f.filterId === 'product_status').map(f => f.optionId)
      const processingFilters = this.activeFilters.filter(f => f.filterId === 'processing').map(f => f.optionId)

      return this.coffees.filter(c => {
        let matchesStatus = false
        const statusFilterIsApplied = productStatusFilters.length > 0
        if (statusFilterIsApplied) {
          const productHasStatus = c.productStatus
          if (productHasStatus) {
            matchesStatus = productStatusFilters
              .includes(c.productStatus.id)
          }
        } else {
          matchesStatus = true
        }

        let matchesProcessing = false
        const processingFilterIsApplied = processingFilters.length > 0
        if (processingFilterIsApplied) {
          const productHasProcessing = c.processing
          if (productHasProcessing) {
            matchesProcessing = processingFilters
              .includes(c.processing.id)
          }
        } else {
          matchesProcessing = true
        }

        return matchesStatus && matchesProcessing
      })
    },
    filters: function () {
      return [
        { title: 'Coffee processing', id: 'processing', options: this.processingFilterOptions },
        { title: 'Status', id: 'product_status', options: this.productStatusFilterOptions }
      ]
    }
  },
  methods: {
    toggleFilterOption: function (details) {
      const index = this.activeFilters.findIndex(x => (x.filterId === details.filterId && x.optionId === details.optionId))
      console.log(index, this.activeFilters[index])
      if (index < 0) this.activeFilters.push(details); else this.activeFilters.splice(index, 1);
    },
    mapTerm: function (filterId, node) {
      const details = {
        filterId: filterId,
        optionId: node.id
      }
      const index = this.activeFilters.findIndex(x => this.isSameFilter(x, details))

      return {
        id: node.id,
        name: node.name,
        checked: index >= 0
      }
    },
    isSameFilter (a, b) {
      return a.filterId === b.filterId && a.optionId === b.optionId
    }
  }
}
</script>