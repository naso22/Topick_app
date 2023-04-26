<template>
  <first-view></first-view>
  <the-header></the-header>
</template>
  
<script>
import FirstView from "./components/topic-resouse/TheTopic.vue";
import TheHeader from "./components/layout/TheHeader.vue"
export default {
  name: 'App',
  components: {
      TheHeader,
      FirstView
  }
}
</script>

<style>
body{
    margin: 0px;
    padding: 0px;

}

li{
    list-style:none;
}

a{
    text-decoration: none;
    color:#fff;
}
html{

    left: 0;
    right: 0;
}
</style>
