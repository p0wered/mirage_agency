<template>
  <div class="news-panel">
    <div class="news-panel-img img-ratio-sm"></div>
    <div>
      <h4>{{panelTitle}}</h4>
      <p>{{panelDesc}}</p>
      <button class="news-btn" @click="popupActive=true">Read More</button>
      <vs-popup class="holamundo" :title="newsTitle" v-model:active="popupActive">
        <p>{{newsText}}</p>
      </vs-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsPanelSmall",
  props:['panelTitle','panelDesc','newsTitle','newsText'],
  data(){
    return{
      popupActive:false,
    }
  }
}
</script>

<style scoped>

</style>