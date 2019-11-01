<template>
<div>
  <h1>TWEET</h1>
  <Tweet :id="tweetId" :options="{ theme }"></Tweet>
</div>

</template>

<script>
import { Tweet } from 'vue-tweet-embed'
export default {
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  components: {
    Tweet
  },
  computed: {
    tweetId: function() {
      return this.node.tweetLink.match('^.*twitter.com/.*/(\\d+)/?.*$')[1];
    },
    theme: function() {
      return this.node.theme[0] ? this.node.theme[0].codename : 'light';
    },
  }
}
</script>