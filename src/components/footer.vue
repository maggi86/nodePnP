<template>
    <footer id="footer">
        <p>Copyright &copy; 2022 PicknPay</p>
    </footer>
</template>

<style scoped>
:root {
    --color-primary: #025008b8;
    --color-white: #e8e6e3;
    --color-black: #060606;
    --color-dark: #274424;
    --color-gray: #83868389;


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

#footer {
 background-color:var(--color-gray);
  width: 100%;
  height: 40px;
  padding: 10px ;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  text-align: center;
  bottom: 0;
  position: fixed;
  z-index: 10;
}
</style>
<script>
// import { computed } from '@vue/runtime-core'
    // export default{
    //     mounted{
    //         return this.$store.dispatch('')
    //     }
    //     computed:{
    //         products(){

    //         }
    //     }
    // }
</script>