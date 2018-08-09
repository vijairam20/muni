<template>
  <div class="navbar">
    <div class="nav-logo">
      <router-link to = "/"><span>MUNI</span></router-link>
    </div>
    <div class="nav-items">
        <router-link to = "/customers">Customers</router-link>
        <router-link to = "/resources">Resources</router-link>
        <router-link to = "/about">About Us</router-link>
        <router-link to = "/contactus">Contact Us</router-link>
    </div>
  </div>
</template>

<script>
export default {
name : "Navbar"
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Russo+One');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
.navbar{
  display: flex;
  background-color: transparent;
  //background-color: #00e0ff;
 color: black;
  margin: 0px;
  justify-content: space-between;
}
.nav-logo{
  margin-top: 0.6em;
  span {
      font-family: 'Russo One' , sans-serif ;
      font-size: 3em;
      padding: 1em;
    }
  a{
    color: black;
    text-decoration: none ;
  }
}
.nav-items{

  display: flex;
  flex-direction: flex-end;
  font-family: 'Montserrat' , sans-serif ;
  a{
    color: black;
    text-decoration: none ;
    padding: 1em;
    font-weight: bold;
    font-size: 1.5em;
  }
}

</style>

