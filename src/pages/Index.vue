<template>
  <Layout>
    <div class="container">
      <Banner codename="home_page_hero_unit" />
      <LatestArticles />
      <LinkButton text="More Articles" link="/articles" />
      <OurStory />
      <LinkButton text="Read the whole story" link="/about" />
      <HomeCafes />
      <LinkButton text="Find out more" link="/cafes" />
    </div>
  </Layout>
</template>

<script>
import Banner from '../components/Banner'
import LatestArticles from '../components/LatestArticles'
import LinkButton from '../components/LinkButton'
import OurStory from '../components/OurStory'
import HomeCafes from '../components/HomeCafes'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Banner,
    LatestArticles,
    LinkButton,
    OurStory,
    HomeCafes,
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
