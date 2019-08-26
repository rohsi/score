<template xmlns="http://www.w3.org/1999/html">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><router-link  to="/stocktrader">StockTrader</router-link></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link  to="/Portfolio">Portfolio</router-link></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link  to="/Stocks">Stocks</router-link></a>
          </li>


        </ul>
         <ul class="navbar-nav ml-auto"">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Save</a>
            <a class="dropdown-item" href="#">Load</a>
          </div>
        </li>
           <li class="nav-item active">
             <a class="nav-link" href="#">End Day</a>
           </li>

         </ul>





      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
