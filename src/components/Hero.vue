<template>
    <section class = "hero">
        <div class="hero-inner">
            <h1>MUNI</h1>
            <h2>AWS Consultancy</h2>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

.hero{
    width: 100vw;
    height: 95vh; 

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;

    font-family: 'Montserrat', sans-serif;
background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); 
}

.hero h1 {
    /* Text styles */
    font-size: 5em;

    margin-top: 0;
    margin-bottom: 0.5em;
}
</style>
