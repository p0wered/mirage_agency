<template>
  <div class="uslovniy">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TextComponent",
  props: ["text"]
}
</script>

<style scoped>
.uslovniy{
  width: 100%;
  height: 100vh;
  background-color: aqua;
}
</style>