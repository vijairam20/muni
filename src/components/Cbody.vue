<template>
    <div class="cbody">
        <div class="start">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quidem vitae, facilis sed quae dignissimos consequuntur iste unde voluptatem debitis quod nulla fugit nihil sunt culpa. Dignissimos distinctio deserunt nisi?</h1>
            <div class="start-content">
            <div class="scontent">
            <figure>
                <img src="@/assets/svgs/Maps.svg" alt="">
            </figure>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam id laborum consequatur suscipit tempora, ab odit ipsa. Ipsam consequatur possimus adipisci reprehenderit aut, inventore pariatur saepe soluta reiciendis laborum?
            </p>
            </div>
            <div class="scontent">
            <figure>
                <img src="@/assets/svgs/Maps.svg" alt="">
            </figure>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam id laborum consequatur suscipit tempora, ab odit ipsa. Ipsam consequatur possimus adipisci reprehenderit aut, inventore pariatur saepe soluta reiciendis laborum?
            </p>
            </div>
            <div class="scontent">
            <figure>
                <img src="@/assets/svgs/Maps.svg" alt="">
            </figure>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam id laborum consequatur suscipit tempora, ab odit ipsa. Ipsam consequatur possimus adipisci reprehenderit aut, inventore pariatur saepe soluta reiciendis laborum?
            </p>
            </div>
            </div>
        </div>
        <div class="middle">
        <div class="content-inner">
            <figure>
                <img src="@/assets/svgs/Maps.svg" alt="">
            </figure>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates itaque molestiae veritatis laboriosam nihil numquam eligendi officiis minus quaerat libero error maiores explicabo, impedit qui doloribus? Odit, numquam sapiente!</p>
            </article>
        </div>
        <div class="content-inner">
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates itaque molestiae veritatis laboriosam nihil numquam eligendi officiis minus quaerat libero error maiores explicabo, impedit qui doloribus? Odit, numquam sapiente!</p>
            </article>
            <figure>
                <img src="@/assets/svgs/CB.svg" alt="" style="float: right;">
            </figure>
        </div>
        <div class="content-inner">
            <figure>
                <img src="@/assets/svgs/Compass.svg" alt="">
            </figure>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates itaque molestiae veritatis laboriosam nihil numquam eligendi officiis minus quaerat libero error maiores explicabo, impedit qui doloribus? Odit, numquam sapiente!</p>
            </article>
        </div>
        <div class="content-inner">
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates itaque molestiae veritatis laboriosam nihil numquam eligendi officiis minus quaerat libero error maiores explicabo, impedit qui doloribus? Odit, numquam sapiente!</p>
            </article>
            <figure>
                <img src="@/assets/svgs/Rocket.svg" alt="">
            </figure>
        </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Montserrat");

.content-inner {
  display: flex;
  img {
    //width :  350px;
    height: 350px;
    float: left;
  }
  article {
    margin-top: 90px;
    margin-left: 35px;
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1.5em;
    text-align: left;
    padding: 50px;
  }
}

.start{
    margin-top: 3em;
    h1{
        font-family: "Montserrat" , sans-serif ;
        font-weight: bold;
        font-size: 2em;
        text-align: center;
     }
}
.start-content{
    margin-top: 3em;
    margin-bottom: 2em;
    display: flex ;
    justify-content:space-around;
    figure{
    margin-left: auto;
    margin-right: auto;
        width: 50%;
    }
    img{
        width: 200px;
        height: 200px;
        
    }

    p{
        font-family: "Open Sans" , sans-serif ;
        font-size: 1.5em;
    }
}

.scontent{
    margin-left: 2em;
    
}
</style>
