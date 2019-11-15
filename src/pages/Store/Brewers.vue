<template>
  <Layout>
    <ProductListing :filters="filters" :products="brewers" />
  </Layout>
</template>

<static-query>
query coffeeListing {
  filterManufacturer: allTaxonomyManufacturer(order: ASC) {
    edges {
      node {
        id
        name
        __typename
      }
    }
  }
  filterProductStatus: allTaxonomyProductStatus(order: ASC) {
    edges {
      node {
        id
        name
        __typename

      }
    }
  }
  brewers: allBrewer(order: ASC) {
    edges {
      node {
        path
        productName
        image {
          url
        }
        price
        manufacturer {
          id
          __typename
        }
        productStatus {
          id
          name
          __typename
        }
      }
    }
  }
}
</static-query>
<script>
import ProductListing from "../../components/ProductListing"
import { getPriceRanges, mapTerm, mapProduct } from "../../helpers/productHelper"

export default {
  components: {
    ProductListing
  },
  computed: {
    brewers: function () {
      return this.$static.brewers.edges.map(edge => {
        let filterValues = []
        const priceRanges = getPriceRanges(edge.node.price)
        filterValues = filterValues.concat(priceRanges.map(r => `price__${r}`))
        filterValues = filterValues.concat(edge.node.manufacturer.map(x => mapTerm(x).id))
        filterValues = filterValues.concat(edge.node.productStatus.map(x => mapTerm(x).id))

        return mapProduct(edge.node, filterValues)
      })
    },
    filters: function () {
      const filterOptionsManufacturer = this.$static.filterManufacturer.edges.map(edge => mapTerm(edge.node))
      const filterOptionsProductStatus = this.$static.filterProductStatus.edges.map(edge => mapTerm(edge.node))
      const filterOptionsPrice = [
        { id: 'price__000-5000', name: '$0.00 - $50.00' },
        { id: 'price__5000-25000', name: '$50.00 - $250.00' },
        { id: 'price__25000-500000', name: '$240.00 - $5,000.00' }
      ]
      return [
        { title: 'Manufacturer', options: filterOptionsManufacturer },
        { title: 'Price', options: filterOptionsPrice },
        { title: 'Status', options: filterOptionsProductStatus }
      ]
    }
  },
}
</script>