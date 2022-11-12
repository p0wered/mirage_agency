<template>
  <div>
    <section class="projects-section">
      {{window.width}}
      {{window.height}}
      <div class="container" style="overflow: hidden">
        <div class="home-flexbox pf-1 hf-2">
          <div data-aos="fade" data-aos-delay="250" data-aos-duration="600" class="hf-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Projects.5jb387ss.webp">
          </div>
          <div data-aos="fade-right" data-aos-delay="250" data-aos-duration="600" class="col-lg-5" style="z-index: 1">
            <h3 class="title-sm-left">For those looking for new growth points</h3>
            <h1 class="title-lg-left">Expand your range of services and attract new customers</h1>
            <p class="desc">Try out new features in the fast-paced Mirage. We constantly communicate with our
              partners, exchange ideas and develop ourselves.</p>
          </div>
        </div>
        <div class="projects-flexbox" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600">
          <h1 class=title-lg-row style="text-align: center">Our Best <span style="color: #7b98ff; font-weight: 700">Projects</span></h1>
          <Flicking style="padding: 1rem" :options="{ align: 'prev', circular: true, horizontal: true, panelsPerView: 3}" @move-end="onMoveEnd">
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
            </div>
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
            </div>
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
            </div>
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
            </div>
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
            </div>
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
            </div>
          </Flicking>
        </div>
        <div class="home-flexbox hf-row pf-2">
          <h3 class="title-sm-row">Want to become a partner?</h3>
          <h1 class="desc-row">Leave a request and we will contact you shortly</h1>
          <form class="contact-form col-lg-7">
            <h4 class="contact-form-title">Tell Us About Yourself</h4>
            <input class="contact-input" type="text" placeholder="Your Full Name">
            <input class="contact-input" type="text" placeholder="Company">
            <div class="input-separator">
              <input class="contact-input input-email" type="email" placeholder="Email">
              <input class="contact-input input-number" placeholder="Phone" v-model="message" @keypress="isNumber($event)">
            </div>
            <div class="checkbox-f">
              <vs-checkbox v-model="option">I agree to the processing of personal data</vs-checkbox>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking/dist/flicking.esm";
import {Arrow} from "@egjs/flicking-plugins";

export default {
  name: "ProjectsPage",
  components: {
    Flicking
  },
  el: '#app',
  data:() => {
    return {
      option: true,
      plugins: [new Arrow()],
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      // eslint-disable-next-line no-empty
      if (window.innerWidth < 768) {

      }
    }
  },

}
</script>
