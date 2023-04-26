<template>

  <button>
      <slot></slot>
  </button>

</template>

<style scoped>

button {
    background-color: #fff100;
    border-bottom: 5px solid #6969692c;
    width: 200px;
    height: 50px;
    font-weight: bold;
    margin: 20px;
    -webkit-box-shadow: 0 5px 0 #e6d900;
    box-shadow: 0 5px 0 #e6d900;
}


button:hover {
    -webkit-transform: translate(0, 5px);
    transform: translate(0, 5px);
    -webkit-box-shadow: 0 2px 0 #e6d900;
    box-shadow: 0 10px 0 #e6d900;
}
</style>
<script setup>
</script>