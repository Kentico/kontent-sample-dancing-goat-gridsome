<template>
  <Layout>
    <div class="container">
      <template v-for="(article, index) in articles">
        <div :key="article.id">
          <div v-if="index % 4 === 0" class="clear"></div>
          <div class="col-md-3">
            <div class="article-tile">
              <g-link :to="article.path">
                <img
                  v-if="article.imageLink"
                  :alt="'Article ' + article.title"
                  class="article-tile-image"
                  :src="article.imageLink"
                  :title="'Article ' + article.title"
                />
                <span v-else class="article-tile-image">{{
                  $t("Article.noTeaserValue")
                }}</span>
              </g-link>
              <div class="article-tile-date">
                {{ article.postDate }}
              </div>
              <div class="article-tile-content">
                <h2 class="h4">
                  <g-link :to="article.path">{{
                    article.title
                  }}</g-link>
                </h2>
                <p class="article-tile-text">
                  {{ article.summary }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </Layout>
</template>

<static-query>
query Articles {
  articles: allArticle (sortBy: "postDate") {
    edges {
      node {
        id
        path
        codename
        title
        postDate (format: "MMMM D")
        summary
        teaserImage {
          description
          url
        }
      }
    }
  }
}
</static-query>

<script>

export default {
  computed: {
    articles: function () {
      return this.$static.articles.edges.map(article => ({
        imageLink: article.node.teaserImage[0].url,
        postDate: article.node.postDate,
        summary: article.node.summary || "No summary",
        path: article.node.path,
        title: article.node.title
      }))
    }
  },
}
</script>