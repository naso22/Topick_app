<template>
        <div class="fv flex-center">
            {{topic[random]}}
        </div>
</template>

<script>
export default {
    props:['topic','random']
}
</script>

<style scoped>
.flex-center{
    display: flex;
    justify-content: center;
    text-align: center;
}


.fv {
    height: 70vh;
    flex-direction: column;
    font-size: 100px;
    font-weight: bold;

}
</style>