<template>
    <div class="cbody">
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content-inner{
  display: flex;
  img{
    width :  300px;
    height:  300px;
    float: left;
  }
  article{
    margin-top:90px;
    margin-left: 35px;
  }
  p{
    font-size: 1.5em;
    text-align: left;
  }
}
</style>
