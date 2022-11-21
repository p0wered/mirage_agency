<template>
  <div style="padding: 6rem">
    <vs-checkbox color="#720ea8" v-model="checkBox1">I agree to the <span style="color: #7b98ff">processing of personal data</span></vs-checkbox>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsPage",
  data(){
    return {
      checkBox1:false
    }
  }
}
</script>

<style scoped>

</style>