<template>
  <v-runtime-template :template="html" />
</template>

<static-query>
query RichText {
  item_link: allItemLink {
    edges {
      node {
        id
        path
      }
    }
  }
  asset: allAsset {
    edges {
      node {
        id
        url(width: 1920, format: "webp")
        placeholderUrl: url(width: 50, format: "webp")
        description
      }
    }
  }
  tweet: allTweet {
    edges {
      node {
        id
        theme {
          codename
        }
        tweetLink
        displayOptions {
          codename
        }
      }
    }
  }
  hosted_video: allHostedVideo {
    edges {
      node {
        id
        videoHost {
          codename
        }
        videoId
      }
    }
  }
}
</static-query>

<script>
import Asset from './Asset'
import HostedVideo from './HostedVideo'
import ItemLink from './ItemLink';
import Tweet from './Tweet'
import VRuntimeTemplate from 'v-runtime-template'

export default {
  components: {
    Asset,
    HostedVideo,
    ItemLink,
    Tweet,
    VRuntimeTemplate,
  },
  props: {
    html: {
      type: String,
      required: true
    }
  }, methods: {
    getNode: function (codename, id) {
      const query = this.$static[codename]

      if (typeof (query) === 'undefined') {
        return null
      }

      const edges = query.edges.filter(
        edge => edge.node.id === id
      )

      if (edges.length === 1) {
        return edges[0].node
      }

      return null
    }
  }
}
</script>