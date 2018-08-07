<template>
  <div class="home">
    <people/>
    <footer>
      <div class="cta">
        <div class="logo">
          <span>MUNI</span>
        </div>
        <div class="email">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem laborum ab quam voluptate </p>
        </div>
      </div>
      <div class="bottom">
        <h1>MUNI</h1>
      </div>
    </footer>
  </div>
</template>

<script>
import People from "@/components/People.vue"
export default {
  name: "home",
  components: {
    People
  }
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Russo+One');

footer{
  margin-top: 20px;
  height: 300px;
  font-family: 'Montserrat', sans-serif;
  color: white;

}
.cta{
  display: flex;
  background-color:#3F51B5;
  padding: 4em;
  text-align: center;
}
.logo{
  span {
      font-family: 'Russo One' , sans-serif ;
      font-size: 4em;
      padding: 3em;

    }
}
.email{
text-align: left ;
font-size: 1.5em;
padding-left: 5em;
}

bottom{
  display: flex;
}
</style>

