<template>
  <div class="news-panel">
    <div class="news-panel-img img-ratio-lg"></div>
    <div>
      <h4>{{panelName}}</h4>
      <p>{{panelDesc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsPanelLarge",
  data(){
    return{
      panelName: 'TITLE',
      panelDesc: 'This method helps you build a quality email list, increase email open rates and protect your brand from fines.'
    }
  }
}
</script>

<style scoped>

</style>