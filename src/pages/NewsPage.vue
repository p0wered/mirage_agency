<template>
  <div>
    <section class="news-section">
      <div class="container">
        <div class="news-flexbox">
          <div class="section-text">
            <h1 class="title-lg-row">Check our <span class="colorized">latest</span> news</h1>
          </div>
          <div class="news-panel-row panel-sm" data-aos="fade-left" data-aos-delay="150" data-aos-duration="600">
            <template v-for="item in news1" :key="item">
              <NewsPanelSmall class="col-12 col-md-8 col-lg-4" :panel-title="item.title" :panel-desc="item.description" :news-text="item.text"></NewsPanelSmall>
            </template>
          </div>
          <div class="news-panel-row" data-aos="fade-right" data-aos-delay="150" data-aos-duration="600">
            <template v-for="item in news2" :key="item">
              <NewsPanelLarge class="col-12 col-md-8 col-lg-6" :panel-title="item.title" :panel-desc="item.description" :news-text="item.text"></NewsPanelLarge>
            </template>
          </div>
          <div class="news-panel-row panel-sm" data-aos="fade-left" data-aos-delay="150" data-aos-duration="600">
            <template v-for="item in news3" :key="item">
              <NewsPanelLarge class="col-12 col-md-8 col-lg-4" :panel-title="item.title" :panel-desc="item.description" :news-text="item.text"></NewsPanelLarge>
            </template>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="600" class="home-flexbox hf-blog">
          <h1 class="title-lg-row">Subscribe To Our Blog</h1>
          <p class="desc-row col-12 col-lg-7">A newsletter is a tool used to communicate regularly with your subscribers, delivering
            the information</p>
          <div class="input-flexbox">
            <input class="blog-input col-12 col-md-8 col-lg-5" type="email" placeholder="Your Email Address Here">
            <button class="main-btn blog-btn col-8 col-md-4 col-lg-3" @click="$vs.notify({title:'Thank You!',text:'You are now subscribed to our blog',color:'#6680e1',position:'bottom-right'})">Send now</button>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <i class="bi bi-c-circle"></i>
      <p style="margin: 0 0 0 1rem">All Rights Served By MIRAGE {{new Date().getFullYear()}}</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import NewsPanelSmall from "@/components/NewsPanelSmall";
import NewsPanelLarge from "@/components/NewsPanelLarge.vue";
export default {
  name: "NewsPage",
  components: {NewsPanelLarge, NewsPanelSmall},
  mounted() {
    axios.get("backend/news/data.json").then(({data}) => {
      this.news1 = data.data1
      this.news2 = data.data2
      this.news3 = data.data3
    })
  },
  data(){
    return {
      checkBox1:false,
      panelName: 'TITLE',
      news1: [],
      news2: [],
      news3: [],
    }
  }
}
</script>

<style scoped>

</style>