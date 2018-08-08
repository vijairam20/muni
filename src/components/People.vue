<template>
    <div class="people">
        <div class="person">
            <span></span>
            <h1>Person 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid perspiciatis consectetur delectus cupiditate, itaque explicabo et ab eius doloribus recusandae illum voluptatem labore repudiandae exercitationem error! Neque, corporis mollitia.</p>
        </div>
        <div class="person">
            <span></span>
            <h1>Person 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid perspiciatis consectetur delectus cupiditate, itaque explicabo et ab eius doloribus recusandae illum voluptatem labore repudiandae exercitationem error! Neque, corporis mollitia.</p>

        </div>
        <div class="person">
            <span></span>
            <h1>Person 3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid perspiciatis consectetur delectus cupiditate, itaque explicabo et ab eius doloribus recusandae illum voluptatem labore repudiandae exercitationem error! Neque, corporis mollitia.</p>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang ="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Montserrat');

.people{
    display: flex;
    span {
        height: 100px;
        width: 100px;
        background-color: grey;
        border-radius: 50%;
        display: inline-block;
        margin: 150px;
        margin-bottom: 10px;
        padding: 100px;
    }
}
.person{
    text-align: center;
    h1{
        font-size: 3em;
        font-family: 'Montserrat', sans-serif;

    }
    p{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    text-align: left;
    margin-left: 25px;
    }
}
</style>
