<template>
    <div
        v-if="articles.length === 0"
        class="row"
    >
    </div>
    <div
        v-else
        class="row"
    >
        <h1 class="title-tab">Latest Articles</h1>
        <div class="article-tile article-tile-large">
            <div class="col-md-12 col-lg-6">
                <g-link :to="articles[0].path">
                    <img
                        v-if="articles[0].imageLink"
                        v-bind:alt="articles[0].title"
                        class="article-tile-image"
                        v-bind:src="articles[0].imageLink"
                        v-bind:title="articles[0].title"
                    />
                    <span
                        v-else
                        class="article-tile-image"
                    >{{ $t('Article.noTeaserValue') }}</span>
                </g-link>
            </div>
            <div class="col-md-12 col-lg-6">
                <div class="article-tile-date">
                    {{articles[0].postDate}}
                </div>
                <div class="article-tile-content">
                    <h2>
                        <g-link :to="articles[0].path">{{articles[0].title}}</g-link>
                    </h2>
                    <p class="article-tile-text lead-paragraph">
                        {{articles[0].summary}}
                    </p>
                </div>
            </div>
        </div>
        <div
            v-for="(article, key) in articles.slice(1)"
            class="col-md-3"
            :key="key"
        >
            <div class="article-tile">
                <g-link :to="article.path">
                    <img
                        v-if="article.imageLink"
                        v-bind:alt="'Article' + article.title"
                        class="article-tile-image"
                        v-bind:src="article.imageLink"
                        v-bind:title="'Article' + article.title"
                    />
                    <span
                        v-else
                        class="article-tile-image"
                    >{{ $t('Article.noTeaserValue') }}</span>
                </g-link>
                <div class="article-tile-date">
                    {{article.postDate}}
                </div>
                <div class="article-tile-content">
                    <h2 class="h4">
                        <g-link :to="article.path">{{article.title}}</g-link>
                    </h2>
                    <p class="article-tile-text">
                        {{article.summary}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<static-query>
query Articles {
  articles: allArticle (sortBy: "postDate", limit:5) {
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
    articles: function() {
      return this.$static.articles.edges.map(article => ({
        imageLink: article.node.teaserImage[0].url,
        postDate : article.node.postDate,
        summary :  article.node.summary || "No summary",
        path: article.node.path,
        title: article.node.title
      }))
    }
  },
}
</script>