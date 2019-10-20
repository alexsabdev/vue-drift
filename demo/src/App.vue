<template>
  <div id="app" />
</template>

<script>
export default {
  mounted() {
    this.$drift.identify('1', {
      name: 'asdf',
      email: 'adsf@asdf.com'
    })
  }
}
</script>