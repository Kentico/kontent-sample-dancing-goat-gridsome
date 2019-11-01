<template>
    <div class="row">
        <div>
            <h1 class="title-tab">Taste our coffee</h1>
        </div>
        <div
            v-for="cafe in $static.homeCafes.edges"
            class="col-xs-6 col-md-3"
            :key="cafe.node.id"
        >
            <div>
                <g-link
                    to="/cafes"
                    class="ourcoffee-tile-link"
                >
                    <h2 class="ourcoffee-tile-text center-text">{{cafe.node.name}}</h2>
                    <span class="cafe-overlay"> </span>
                    <img
                        v-bind:alt="cafe.node.name"
                        class="ourcoffee-tile-image"
                        v-bind:src="cafe.node.photo[0].url"
                        v-bind:title="cafe.node.name"
                    />
                </g-link>
            </div>
        </div>
    </div>
</template>

<static-query>
query HomeCafes {
  homeCafes: allCafe (sortBy:"name", order: ASC, filter:{ country: { eq: "USA"}}, limit:4) {
    edges {
      node {
       codename
        name
        country
        photo {
          url
        }
      }
    }
  }
}
</static-query>

