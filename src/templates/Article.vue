<template>
  <Layout>
    <div class="container">
      <article
        class="article-detail col-lg-9 col-md-12 article-detail-related-box"
      >
        <h2>{{ $page.article.title }}</h2>
        <div class="article-detail-datetime">
          {{ $page.article.postDate }}
        </div>
        <div class="row">
          <div class="article-detail-image col-md-push-2 col-md-8">
            <img
              v-if="$page.article.teaserImage[0]"
              :alt="$page.article.teaserImage[0].description"
              class="img-responsive"
              :src="$page.article.teaserImage[0].url"
              :title="$page.article.teaserImage[0].description"
            />
          </div>
        </div>
        <div class="row">
          <RichText
            v-if="$page.article.bodyCopy"
            class="article-detail-content"
            :html="$page.article.bodyCopy"
          />
        </div>
      </article>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
   article(path: $path) {
    path
    codename
    title
    postDate(format: "MMMM D")
    summary
    teaserImage {
      description
      url
    }
    bodyCopy
  }
}
</page-query>

<script>
import RichText from '../components/RichText'
export default {
  components: {
    RichText
  }
}
</script>