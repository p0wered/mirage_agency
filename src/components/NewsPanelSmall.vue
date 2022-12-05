<template>
  <div class="news-panel">
    <div class="news-panel-img img-ratio"></div>
    <div>
      <h4>{{panelTitle}}</h4>
      <p class="text-lim-4">{{panelDesc}}</p>
      <button class="news-btn" @click="popupActivo=true">Read More</button>
      <vs-popup class="holamundo" :title="panelTitle" v-model:active="popupActivo">
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
      popupActivo:false,
    }
  }
}
</script>

<style scoped>

</style>