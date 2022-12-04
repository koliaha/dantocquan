<template>
    <div class="main-wrapper">
        <video autoplay="autoplay" loop="loop" playsinline="" class="fade-in-video video-wrapper">
            <source src="@/assets/bg1.mp4" type="video/mp4">
        </video>
        <div class="logo-wrapper">
            <img src="@/assets/logo.png" alt="">
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.main-wrapper{
    position: relative;
    @media (min-width: 960px) {
        max-width: 40%;
        width: 100%;
    }
}
.logo-wrapper{
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100px;
    width: 100%;
    // border: 2px solid white;
    padding: 10px;
    img{
        width: 100%;
    }
    @media (min-width: 960px) {
        left: 20%;
        max-width: 180px;
    }
}
.video-wrapper {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100vh;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 300px 150px -100px inset;
    margin: 0px;
    padding: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: cover;
    z-index: -1;
    @media (min-width: 960px) {
        max-width: 40%;
        width: 100%;
    }
    
}
</style>