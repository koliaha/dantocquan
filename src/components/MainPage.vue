<template>
    <video autoplay="autoplay" loop="loop" playsinline="" class="fade-in-video video-wrapper">
        <source src="@/assets/bg.mp4" type="video/mp4">
    </video>
</template>
<script>
export default {

}
</script>
<style lang="scss">
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
}
</style>