<template>
  <div>
    ARTIST {{ artist }}
  </div>
</template>

<script>
export default {
  computed: {
    artist() {
      const { meta, params } = this.$route
      return meta.artist || params.artist
    }
  }
}
</script>

<style>

</style>
