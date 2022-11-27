<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
    color: black;
  &:link{
    color: inherit;
    text-decoration: none;
  }
  &:visited{
    color: inherit;
  }

}
.container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}

</style>
