<template>
  <div id="app">
<HelloWorld/>
    <router-view/>
  </div>
</template>

<style>

</style>
<script>
  import HelloWorld from "./components/HelloWorld";
  export default {
    components: {HelloWorld}
  }
</script>