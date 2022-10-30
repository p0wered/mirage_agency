<template>
  <div class="pr">
    <TextComponent><h1>SSSS</h1></TextComponent>
    <vs-button
        :active="active == 0"
        @click="active = 0"
    >
      Active
    </vs-button>
  </div>
</template>

<script>
import TextComponent from "@/components/TextComponent";
export default {
  name: "HomePage",
  components: {TextComponent}
}
</script>

<style scoped>

</style>