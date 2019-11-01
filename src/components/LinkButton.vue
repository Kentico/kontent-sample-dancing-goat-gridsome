<template>
  <div class="row">
    <div class="clear center-text">
      <g-link :to="link" class="btn btn-more">
        {{ text }}
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'link-button',
  props: ['text', 'link'],
}
</script>
