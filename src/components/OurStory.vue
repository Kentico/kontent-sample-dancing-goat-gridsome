<template>
    <div class="row">
        <h1 class="title-tab">{{$static.ourStory.title}}</h1>
        <div class="col-sm-12">
            <div
                class="ourstory-section center-text"
                v-bind:style='SectionStyleObject'
            >
                <RichText :html="$static.ourStory.description" />
            </div>
        </div>
    </div>
</template>

<static-query>
query OurStory {
  ourStory: factAboutUs(path: "/fact-about-us/our-story") {
    path
    description
    image {
      url
    }
    title
  }
}
</static-query>

<script>
import RichText from './RichText'

export default {
  name: 'our-story',
  components: {
    RichText
  },
  computed: {
    SectionStyleObject: function() {
      return {
      backgroundImage: 'url(' + this.$static.ourStory.image[0].url + ')',
    }
  },
}
}
</script>
