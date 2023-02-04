<template>
  <div id="container" class="map"></div>
</template>

<script>
import { initMap } from './map'
export default {
  name: 'Maps',
  components: {},
  props: {},
  setup() {
    initMap()
    return {}
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>
