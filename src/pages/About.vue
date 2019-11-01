<template>
  <Layout>
    <div class="container">
      <div v-for="(fact, index) in facts" :key="fact.id">
        <section v-if="index % 2 === 0" class="row text-and-image" :key="index">
          <h2 class="col-lg-12">{{ fact.name }}</h2>
          <div class="col-md-6">
            <RichText
              class="text-and-image-text"
              :html="fact.description"
            />
          </div>
          <div class="col-md-6">
            <g-image
              :alt="fact.name"
              class="img-responsive"
              :src="fact.image[0].url"
              :title="fact.name"
            />
          </div>
        </section>
        <section v-else class="row text-and-image" :key="fact.id">
          <h2 class="col-lg-12">{{ fact.name }}</h2>
          <div class="col-md-6 col-md-push-6">
            <RichText
              class="text-and-image-text-right"
              :html="fact.description"
            />
          </div>
          <div class="col-md-6 col-md-pull-6">
            <g-image
              :alt="fact.name"
              class="img-responsive"
              :src="fact.image[0].url"
              :title="fact.name"
            />
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query AboutUs {
  aboutUs: aboutUs (path: "/about-us/about-us") {
    metadataMetaTitle
    metadataMetaDescription
    facts {
      id
      name
      description
      image {url}
    }
  }
}
</static-query>

<script>
import RichText from '../components/RichText'

export default {
  metaInfo () {
    return {
      title: this.$static.aboutUs.metadataMetaTitle
    }
  },
  components: {
    RichText
  },
  computed: {
    facts: function () {
      return this.$static.aboutUs.facts
    }
  }
}
</script>
