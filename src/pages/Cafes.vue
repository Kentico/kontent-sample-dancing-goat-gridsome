<template>
  <Layout>
    <div class="container">
      <h2>Our Cafes</h2>
      <div class="row">
        <div v-for="(ourCafe, index) in ourCafes" class="col-md-6" :key="index">
          <div
            class="cafe-image-tile js-scroll-to-map"
            :data-address="ourCafe.dataAddress"
          >
            <div
              class="cafe-image-tile-image-wrapper"
              :style="{
                backgroundImage: `url(${ourCafe.photo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'right'
              }"
            ></div>
            <div class="cafe-image-tile-content">
              <h3 class="cafe-image-tile-name">{{ ourCafe.name }}</h3>
              <address class="cafe-tile-address">
                <span :name="ourCafe.name" class="cafe-tile-address-anchor">
                  {{ ourCafe.street }}, {{ ourCafe.city }}<br />{{
                    ourCafe.zipCode
                  }}, {{ ourCafe.countryWithState }}
                </span>
              </address>
              <p>{{ ourCafe.phone }}</p>
            </div>
          </div>
        </div>
      </div>
      <h2>Other places where you can drink our coffee</h2>
      <div class="row">
        <div v-for="(location, index) in locations" :key="index">
          <h3>{{ location }}</h3>
          <p
            v-for="(partnerCafe, index) in getLocationCafes(location)"
            :key="index"
          >
            {{ partnerCafe.name }}, {{ partnerCafe.street }},
            {{ partnerCafe.phone }}
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query Cafes {
  cafes: allCafe (sortBy:"name", order: ASC) {
    edges {
      node {
        id
        name
        photo {
          url
        }
        country
        street
        city
        zipCode
        state
        phone
      }
    }
  }
}
</static-query>

<script>
import { mapCafe } from '../helpers/cafeHelpers'

export default {
  computed: {
    cafes: function () {
      return this.$static.cafes.edges.map(e => mapCafe(e.node))
    },
    ourCafes: function () {
      return this.cafes.filter(cafe => cafe.country === 'USA')
    },
    partnerCafes: function () {
      return this.cafes.filter(cafe => cafe.country !== 'USA')
    },
    locations: function () {
      return this.partnerCafes
        .map(model => model.location)
        .reduce((result, location) => {
          if (result.indexOf(location) < 0) {
            result.push(location);
          }
          return result;
        }, [])
        .sort();
    }
  },
  methods: {
    getLocationCafes: function (location) {
      return this.cafes.filter(c => c.location === location)
    }
  }
}
</script>