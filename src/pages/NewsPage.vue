<template>
  <div>
    <section class="news-section">
      <div class="container">
        <div class="news-flexbox">
          <div class="news-text">
            <h1 class="title-lg-row">Check our <span class="colorized">latest</span> news</h1>
          </div>
          <div class="news-panel-row">
            <NewsPanelSmall></NewsPanelSmall>
            <NewsPanelSmall></NewsPanelSmall>
            <NewsPanelSmall></NewsPanelSmall>
          </div>
          <div class="news-panel-row">
            <NewsPanelLarge></NewsPanelLarge>
            <NewsPanelLarge></NewsPanelLarge>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NewsPanelSmall from "@/components/NewsPanelSmall";
import NewsPanelLarge from "@/components/NewsPanelLarge";
export default {
  name: "NewsPage",
  components: {NewsPanelLarge, NewsPanelSmall},
  data(){
    return {
      checkBox1:false,
      panelName: 'TITLE'
    }
  }
}
</script>

<style scoped>

</style>