<template>
  <Layout>
    <div class="container">
      <div class="col-md-12">
        <h2 class="contact-title">Roastery</h2>
        <ul v-if="firstCafe" class="contact-info">
          <li>{{ firstCafe.phone }}</li>
          <li>
            <a :href="'mailto:' + firstCafe.email" target="_top">{{
              firstCafe.email
            }}</a>
          </li>
          <li>
            <a
              @click="handleRoasteryClick"
              :data-address="firstCafe.dataAddress"
              class="js-scroll-to-map"
              >{{ firstCafe.dataAddress }},<br />
              {{ firstCafe.zipCode }}, {{ firstCafe.countryWithState }}<br />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Our cafes</h2>
        <div class="row">
          <div
            v-for="(model, index) in cafes"
            class="col-md-6 col-lg-3"
            :key="index"
          >
            <div
              @click="handleAddressClick(model)"
              class="cafe-tile cursor-hand js-scroll-to-map"
              :data-address="model.dataAddress"
            >
              <div class="cafe-tile-content">
                <h3 class="cafe-tile-name">{{ model.name }}</h3>
                <address class="cafe-tile-address">
                  <a :name="model.name" class="cafe-tile-address-anchor">
                    {{ model.street }}, {{ model.city }}<br />{{
                      model.zipCode
                    }}, {{ model.countryWithState }}
                  </a>
                </address>
                <p>{{ model.phone }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="map-title">Drop in</h2>
      <ContactMap
            :cafesAddresses="cafesAddresses"
            :focusOnAddress="selectedAddress"
        />
    </div>
  </Layout>
</template>

<static-query>
query ContactInfo {
  cafes: allCafe (sortBy:"name", order: ASC, filter:{ country: { eq: "USA"}}, limit:4) {
    edges {
      node {
        codename
        name
        country
        photo {
          url
        }
        country
        street
        city
        zipCode
        state
        phone
        email
      }
    }
  }
}
</static-query>

<script>
import { mapCafe } from '../helpers/cafeHelpers'
import ContactMap from '../components/ContactMap'

export default {
  components: {
    ContactMap
  },
  data: () => ({
    selectedAddress: null
  }),
  computed: {
    firstCafe: function () {
      return this.cafes ? this.cafes[0] : null
    },
    cafes: function () {
      return this.$static.cafes.edges.map(e => mapCafe(e.node))
    },
    cafesAddresses: function(){
      if (this.cafes.length === 0){
        return [];
      }
      return this.cafes.map((cafe) => {
        return `${cafe.city}, ${cafe.street}`;
      })
    }
  },
  methods: {
    handleRoasteryClick: function(){
      if(this.selectedAddress === this.firstCafe.dataAddress){
        //VueScrollTo.scrollTo('#map');
        return;
      }
      this.selectedAddress = this.firstCafe.dataAddress
    },
    handleAddressClick: function(model){
      if(this.selectedAddress === model.dataAddress){
        //VueScrollTo.scrollTo('#map');
        return;
      }
      this.selectedAddress = model.dataAddress
    },
  }
}
</script>