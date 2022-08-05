<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid"> 
    <img src="https://i.postimg.cc/FK2tW1M6/1280px-Pick-n-Pay-logo-svg.png" class="navImage">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <a class="nav-link dropdown-toggle" id="item-dropdown" type="button" data-bs-toggle="collapse" data-bs-target="#item-dropdown">
            Categories
          </a>
          <ul class="nav-item">
          <a class="nav-link active meagen" aria-current="page" href="/">Home</a>
          </ul>
          <ul class="dropdown-menu" aria-labelledby="item-dropdown" id="item-dropdown">
            <li><a class="dropdown-item" type="fruit" href="#">Fruit</a></li>
            <li><a class="dropdown-item" type="bakery" href="#">Bakery</a></li>
            <li><a class="dropdown-item" type="milk" href="#">Milk, Dairy & Eggs</a></li>
            <li><a class="dropdown-item" type="meat" href="#">Meat, Poultry & Seafood</a></li>
            <li><a class="dropdown-item" type="meals" href="#">Ready Meals & Desserts</a></li>
            <li><a class="dropdown-item" type="deli" href="#">Deli & Party</a></li>
            <li><a class="dropdown-item" type="frozen" href="#">Frozen Food</a></li>
            <li><a class="dropdown-item" type="snacks" href="#">Chocolates Chips & Snacks</a></li>
            <li><a class="dropdown-item" type="cupboard" href="#">Food Cupboard</a></li>
            <li><a class="dropdown-item" type="beverages" href="#">Beverages</a></li>
            <li><a class="dropdown-item" type="beer" href="#">Beer, Cider & Seltzer</a></li>
            <li><a class="dropdown-item" type="wine" href="#">Wine</a></li>
            <li><a class="dropdown-item" type="spirits" href="#">Spirits</a></li>
            <li><a class="dropdown-item" type="cleaning" href="#">Household & Cleaning</a></li>
            <li><a class="dropdown-item" type="personal" href="#">Personal Care & Health</a></li>
            <li><a class="dropdown-item" type="baby" href="#">Baby</a></li>
            <li><a class="dropdown-item" type="pet" href="#">Pet Care</a></li>
            <li><a class="dropdown-item" type="appliances" href="#">Home, Appliances & Outdoor</a></li>
            <li><a class="dropdown-item" type="electronics" href="#">Electronics & Office</a></li>
          </ul>
      </ul>
      <form class="d-flex" role="search" id="search-wrap">
          <input autocomplete="off" placeholder="Search Item">
          </form>
           
    </div>

  <div class="top-nav">
    <ul>
      <ul><a href="/login">Login</a></ul>
    </ul>
  </div>
</nav>
</template>



<style scoped>
:root {
    /* color theme */
    --color-primary: #025008b8;
    --color-white: #e8e6e3;
    --color-black: #060606;
    --color-dark: #274424;
    --color-gray: #83868389;

    /* font-family */
    --font-Poppins: 'Poppins', sans-serif;
    --font-Raleway: 'Raleway', sans-serif;
    --font-OpenSans: 'Open Sans', sans-serif;

    /* font-size */
    --font-lg: 64px;
    --font-xm: 45px;
    --font-md: 26px;
    --font-sm: 15px;
    --font-xs: 9px;


    /* font-weight */
    --size-lg: 1280px;
    --size-md: 976px;
    --size-sm: 768px;
    --size-xs: 500px;
}
html, body {
    height: 100%;
}
#search-wrap{
  display:flex;
  flex-direction: column;
  gap:.25rem;
  border-radius:10px;

}

.dropdown-item #item-dropdown{
  display:inline-block
}

input{
  font-size:1em;
  border-radius: 10px;
  border-color:grey ; 
}


.search-menu{
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: .25rem;
  margin-top: 1rem;
  list-style: none;
}

.search-item{
  border-bottom-color: var(--color-gray);
  border-width: 0.5px
}

a{
  font-weight:100;
  text-decoration:none;
  list-style: none;
}

.hide{
  display:none;
}

div.container {
    width: 100%;
    height: 100%;
}

.container-nav {
    /* width: 15%; */
    width: 100%;
    /* min-width: 250px; */
    height: 8%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 4;
    background-color: var(--color-gray);
    transition: left 1s;
    padding-top:0;
}

/* .containerMain {
    display: none;
    position: fixed;
    top: 10px;
    right: 10px;
    width: 50px;
     height: 50px;
    border-radius: 50%;
    z-index: 5;
    border: none;
    font-family: var(--font-OpenSans);
    font-size: var(--font-md);
    background-color: var(--color-primary);
    color: var(--color-white);
    cursor: pointer;
}  */

.navImage {
    top:0;
    width: 180px;
    height: 53px;
    padding: 10px;
    /* border: 1px solid var(--color-dark); */
    margin-bottom: 20px;
}
/* .meagen{
  margin-left: 102%;
  margin-bottom: 40px;
} */
.top-nav{
  margin-bottom: 3px;
}


@media screen and (max-width:990px){
    .navImage{
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
    
}
</style>