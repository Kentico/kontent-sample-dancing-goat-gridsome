<template>
  <Layout>
    <div class="container">
      <article class="product-detail">
        <div class="row">
          <div class="col-md-12">
            <header>
              <h2>{{ $page.coffee.name }}</h2>
            </header>
          </div>
        </div>
        <div class="row-fluid">
          <div class="col-lg-7 col-md-6">
            <figure class="image">
              <img :alt="name" class="" :src="$page.coffee.image[0].url" :title="name" />
            </figure>
            <div class="description">
              <RichText
                v-if="$page.coffee.longDescription"
                :html="$page.coffee.longDescription"
              />
              <div class="product-detail-properties">
                <h4>Parameters</h4>
                <dl class="row">
                  <dt class="col-xs-12 col-sm-4">Farm</dt>
                  <dd class="col-xs-12 col-sm-8">{{ $page.coffee.farm }}</dd>
                  <dt class="col-xs-12 col-sm-4">Variety</dt>
                  <dd class="col-xs-12 col-sm-8">{{ $page.coffee.variety }}</dd>
                  <dt class="col-xs-12 col-sm-4">Processing</dt>
                  <dd class="col-xs-12 col-sm-8">{{ $page.coffee.processing[0].name }}</dd>
                  <dt class="col-xs-12 col-sm-4">Altitude</dt>
                  <dd class="col-xs-12 col-sm-8">{{ $page.coffee.altitude }} feet</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
   coffee(path: $path) {
    id
    path
    codename
    name
    image {
      url
    }
    longDescription
    farm
    variety
    processing {
      name
    }
    altitude
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