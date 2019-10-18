<template>
  <Layout>
    <div class="container">
      <Banner codename="home_page_hero_unit" />
      <LatestArticles />
    </div>
  </Layout>
</template>

<script>
import Banner from '../components/Banner'
import LatestArticles from '../components/LatestArticles'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Banner,
    LatestArticles
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
