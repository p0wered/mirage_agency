<template>
  <div class="news-panel">
    <div class="news-panel-img img-ratio-lg"></div>
    <div>
      <h4>{{panelTitle}}</h4>
      <p>{{panelDesc}}</p>
      <button class="news-btn" @click="popupActivo=true">Read More</button>
      <vs-popup class="holamundo" title="{{newsTitle}}" v-model:active="popupActivo">
        <p>{{newsText}}</p>
      </vs-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsPanelLarge",
  data(){
    return{
      panelTitle: 'TITLE',
      panelDesc: 'This method helps you build a quality email list, increase email open rates and protect your brand from fines.',
      newsTitle:'',
      newsText:'',
      popupActivo:false
    }
  }
}
</script>

<style scoped>

</style>