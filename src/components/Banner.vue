<template>
  <section class="banner-section" v-bind:style="sectionStyleObject">
    <h2 class="banner-heading">{{ banner.title }}</h2>
    <div class="banner-text" v-html="banner.marketingMessage"></div>
    </div>
  </section>
</template>

<static-query>
query Banners {
  banners: allHeroUnit {
    edges {
      node {
        codename
        name
        title
        marketingMessage
        image {
          url
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'Banner',
  props: {
    codename: {
      type: String,
      required: true,
    }
  },
  computed: {
    banner: function () {
      const matchingEdge = this.$static.banners.edges.find(edge => {
        return edge.node.codename === this.codename
      })

      return matchingEdge.node
    },
    sectionStyleObject: function () {
      return { backgroundImage: 'url(' + this.banner.image[0].url + ')' }
    },
  }
}
</script>