<template>
  <Layout>
    <div class="container">
      <article class="product-detail">
        <div class="row">
          <div class="col-md-12">
            <header>
              <h2>{{ $page.brewer.name }}</h2>
            </header>
          </div>
        </div>
        <div class="row-fluid">
          <div class="col-lg-7 col-md-6">
            <figure class="image">
              <img :alt="name" class="" :src="$page.brewer.image[0].url" :title="name" />
            </figure>
            <div class="description">
              <RichText
                v-if="$page.brewer.longDescription"
                :html="$page.brewer.longDescription"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
   brewer(path: $path) {
    id
    path
    codename
    name
    image {
      url
    }
    longDescription
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