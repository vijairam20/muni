<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
body {
  height: 100%;
  min-height: 100%;
}
</style>
