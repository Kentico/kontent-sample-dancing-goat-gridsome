<template>
  <div>
    <iframe
      v-if="node.videoHost[0].codename === 'vimeo'"
      class="hosted-video__wrapper"
      :src="
        `https://player.vimeo.com/video/${node.videoId}?title =0&byline =0&portrait =0`
      "
      width="640"
      height="360"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    >
    </iframe>
    <iframe
      v-else-if="node.videoHost[0].codename === 'youtube'"
      class="hosted-video__wrapper"
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${node.videoId}`"
      frameborder="0"
      allowfullscreen
    >
    </iframe>
    <div v-else>
      Video provider not supported
    </div>
  </div>
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      required: true
    }
  }
}
</script>