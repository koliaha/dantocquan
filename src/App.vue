<template>
  <div class="mainpage">
    <div class="lang-switch-wrapper">
      <LocalizionBtn />
    </div>
    <MainPage />
    <router-view />
  </div>
</template>
<script setup>
import MainPage from '@/components/MainPage.vue'
import LocalizionBtn from '@/components/LocalizionBtn.vue'
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: black;

  &:link {
    color: inherit;
    text-decoration: none;
  }

  &:visited {
    color: inherit;
  }

}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}
.mainpage {
  // background: gray;
  min-height: 100vh;
  position: relative;
}
.foodlist {
    max-width: 700px;
    width: 100%;
    background: white;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 0 30px rgb(206 215 224 / 25%);
    z-index: 2;
    min-height: 100vh;
    margin: 65vh auto 0px;
    padding: 15px 0 50px;
    position: relative;

    @media (min-width: 960px) {
        max-width: 60%;
        margin: 0px 0px 0px auto;
    }

}
.lang-switch-wrapper{
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 5;
}
.loader {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
}
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b40101;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ff863f;
}

</style>
