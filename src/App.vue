<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from "@/components/footer.vue"
import Navbar from "@/components/navbar.vue"

export default{
  components:{
    Footer,
    Navbar,
  }
}
</script>

<style>
:root {
    --color-primary: #025008b8;
    --color-white: #e8e6e3;
    --color-black: #060606;
    --color-dark: #274424;
    --color-gray: #838683ae;


    --font-Poppins: 'Poppins', sans-serif;
    --font-Raleway: 'Raleway', sans-serif;
    --font-OpenSans: 'Open Sans', sans-serif;

    --font-lg: 64px;
    --font-xm: 45px;
    --font-md: 26px;
    --font-sm: 15px;
    --font-xs: 9px;

    --size-lg: 1280px;
    --size-md: 976px;
    --size-sm: 768px;
    --size-xs: 500px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-dark)
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--color-black);
}

nav a.router-link-exact-active {
  color: var(--color-primary);
}
</style>
