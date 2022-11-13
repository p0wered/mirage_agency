<template>
  <div>
    <section class="projects-section">
      {{window.width}}
      {{window.height}}
      <div class="container">
        <div class="home-flexbox pf-1 hf-2">
          <div data-aos="fade" data-aos-delay="250" data-aos-duration="600" class="projects-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Projects.5jb387ss.webp">
          </div>
          <div data-aos="fade-right" data-aos-delay="250" data-aos-duration="600" class="col-lg-5" style="z-index: 1">
            <h3 class="title-sm-left">For those looking for new growth points</h3>
            <h1 class="title-lg-left">Expand your range of services and attract new customers</h1>
            <p class="desc">Try out new features in the fast-paced Mirage. We constantly communicate with our
              partners, exchange ideas and develop ourselves.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="slider-container col-sm-12 col-md-10 col-xxl-8">
        <div class="projects-flexbox" data-aos="fade-up">
          <h1 class=title-lg-row style="text-align: center">Our Best <span style="color: #7b98ff; font-weight: 700">Projects</span></h1>
          <div class="slider-flexbox">
            <span class="flicking-arrow-prev is-outside d-none d-lg-block">
            <i class="arrow-icon bi bi-caret-left-fill"></i>
            </span>
            <Flicking style="padding: 1rem" :options="{ align: 'prev', circular: true, horizontal: true, panelsPerView: 3}" :plugins="plugins">
              <div class="site-panel">
                <div>
                  <h1 class="site-panel-h1">TINKOFF</h1>
                  <p class="desc">Best Virtual Bank in Russia</p>
                </div>
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
              <div class="site-panel">
                <div>
                  <h1 class="site-panel-h1">TINKOFF</h1>
                  <p class="desc">Best Virtual Bank in Russia</p>
                </div>
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
              <div class="site-panel">
                <div>
                  <h1 class="site-panel-h1">TINKOFF</h1>
                  <p class="desc">Best Virtual Bank in Russia</p>
                </div>
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
              <div class="site-panel">
                <div>
                  <h1 class="site-panel-h1">TINKOFF</h1>
                  <p class="desc">Best Virtual Bank in Russia</p>
                </div>
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
              <div class="site-panel">
                <div>
                  <h1 class="site-panel-h1">TINKOFF</h1>
                  <p class="desc">Best Virtual Bank in Russia</p>
                </div>
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
              <div class="site-panel">
                <div>
                  <h1 class="site-panel-h1">TINKOFF</h1>
                  <p class="desc">Best Virtual Bank in Russia</p>
                </div>
                <form class="projects-btn" action="https://www.tinkoff.ru/" target="_blank">
                  <button class="main-btn projects-btn">VISIT SITE</button>
                </form>
              </div>
            </Flicking>
            <span class="flicking-arrow-next is-outside d-none d-lg-block">
            <i class="arrow-icon bi bi-caret-right-fill"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="home-flexbox hf-row pf-2">
          <div style="text-align: center">
            <h3 class="title-lg-row">Want to become a partner?</h3>
            <h1 class="desc-row">Leave a request and we will contact you shortly</h1>
          </div>
          <form class="contact-form col-sm-12 col-md-11 col-xxl-9">
            <h4 class="contact-form-title">Tell Us About Yourself</h4>
            <input class="contact-input" type="text" placeholder="Full Name">
            <input class="contact-input" type="text" placeholder="Company">
            <div class="input-separator">
              <input class="contact-input input-email" type="email" placeholder="Email">
              <input class="contact-input input-number" type="tel" placeholder="Phone">
            </div>
            <div class="checkbox-f">
              <vs-checkbox v-model="checkBox1">I agree to the <span style="color: #7b98ff">processing of personal data</span></vs-checkbox>
            </div>
            <div class="btn-f">
              <form class="projects-btn">
                <button class="main-btn projects-btn">SUBMIT</button>
                <p class="desc">We will contact you within the working day</p>
              </form>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking/dist/flicking.esm";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
export default {
  name: "ProjectsPage",
  components: {
    Flicking
  },
  el: '#app',
  data() {
    return {
      plugins: [new Arrow({ parentEl: document.body })],
      checkBox1:false,
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
