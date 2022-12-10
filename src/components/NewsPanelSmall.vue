<template>
  <div class="news-panel">
    <div class="news-panel-img img-ratio"></div>
    <div>
      <h4>{{panelTitle}}</h4>
      <p class="text-lim-4">{{panelDesc}}</p>
      <button class="news-btn" @click="popupActivo=true">Read More</button>
      <vs-popup fullscreen style="color: #56597a" class="holamundo" title="" :background-color-popup="colorx" background-color="rgba(0,0,0,.6)" v-model:active="popupActivo">
        <div class="container">
          <div class="popup-flexbox">
            <div class="placeholder-image"></div>
            <p>{{newsText}}</p>
          </div>
        </div>
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
      colorx: '#f1f1f1'
    }
  }
}
</script>

<style scoped>

</style>