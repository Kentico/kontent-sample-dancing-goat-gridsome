<template>
  <Layout>
    <ProductListing :filters="filters" :products="coffees" />
  </Layout>
</template>

<static-query>
query coffeeListing {
  processingTerms: allTaxonomyProcessing (order:ASC) {
    edges {
      node {
        id
        name
        __typename
      }
    }
  }
  productStatusTerms: allTaxonomyProductStatus (order:ASC) {
    edges {
      node {
        id
        name
        __typename
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
          __typename
        }
        productStatus {
          id
          __typename
          name
        }
      }
    }
  }
}
</static-query>
<script>
import ProductListing from "../../components/ProductListing"
import { mapTerm, mapProduct } from "../../helpers/productHelper"

export default {
  components: {
    ProductListing
  },
  computed: {
    coffees: function () {
      return this.$static.coffees.edges.map(edge => {
        let filterValues = []
        filterValues = filterValues.concat(edge.node.processing.map(x => mapTerm(x).id))
        filterValues = filterValues.concat(edge.node.productStatus.map(x => mapTerm(x).id))

        return mapProduct(edge.node, filterValues)
      })
    },
    filters: function () {
      const processingFilterOptions = this.$static.processingTerms.edges.map(edge => mapTerm(edge.node))
      const productStatusFilterOptions = this.$static.productStatusTerms.edges.map(edge => mapTerm(edge.node))
      return [
        { title: 'Coffee processing', options: processingFilterOptions },
        { title: 'Status', options: productStatusFilterOptions }
      ]
    }
  },
}
</script>