<template>
  <div id="app" />
</template>

<script>
export default {
  mounted() {
    this.$drift.identify('0', {
      name: 'asdf',
      email: 'adsf@asdf.com'
    })
  }
}
</script>