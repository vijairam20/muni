<template>
  <div class="vfooter">
     <div class="cta">
        <div class="logo">
          <span>MUNI</span>
        </div>
        <div class="email">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem laborum ab quam voluptate </p>
        </div>
      </div>
      <div class="bottom">
    <div class="nav-items">
      
        <router-link to = "/">Home</router-link>
        <router-link to = "/customers">Customers</router-link>
        <router-link to = "/resources">Resources</router-link>
        <router-link to = "/about">About Us</router-link>
        <router-link to = "/contactus">Contact Us</router-link>
    </div>
  </div>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Russo+One');
.cta{
  margin-top: 30px;
    display: flex;
    background-color: #3f51b5;
    padding: 4em;
    text-align: center;
      font-family: 'Montserrat', sans-serif;
       color: white;

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

.bottom{
  background-color: black;
  color: white;
  display: flex;
  justify-content: flex-end;
  font-family: 'Montserrat', sans-serif;

  h1{
    margin-right: 10px;
    color: white;
    font-size: 1em;
    padding: 1em;
  }
}

.nav-logo{
  margin-top: 0.6em;
  span {
      font-family: 'Russo One' , sans-serif ;
      font-size: 3em;
      padding: 1em;
    }
  a{
    text-decoration: none ;
    color: white;
  }
}
.nav-items{
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-family: 'Montserrat' , sans-serif ;

  a{
    text-decoration: none ;
    padding: 1em;
    font-weight: bold;
    font-size: 1.5em;
    color: white;
  }
}

</style>
