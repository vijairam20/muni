<template>
  <div class="home">
    <hero/>
     <CBody/> 
    <people/>
    <VFooter/> 
  </div>
</template>

<script>
import People from "@/components/People.vue"
import Hero from "@/components/Hero.vue"
import Navbar from "@/components/Navbar.vue"
import CBody from "@/components/Cbody.vue"
import VFooter from "@/components/VFooter.vue"

export default {
  name: "home",
  components: {
    People , Hero , Navbar , CBody , VFooter
  }
};
</script>
<style lang="scss" scoped>





</style>

