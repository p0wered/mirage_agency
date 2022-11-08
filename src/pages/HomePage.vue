<template>
  <div>
    <section class="home-section hs-1">
      <div class="container">
        <div class="home-flexbox hf-1">
          <div class="col-lg-5">
            <h3 class="title-sm-left">Creative Agency</h3>
            <h1 class="title-lg-left">We Deliver The Best Product for You</h1>
            <p class="desc">Design is the creation of a plan or convention for the construction of an object or a system
              as in architectural blueprints, engineering drawings and business processes</p>
          </div>
          <div class="hf-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Recommended.56c2bffe.webp">
          </div>
        </div>
      </div>
    </section>
    <section class="home-section hs-row">
      <div class="container">
        <div class="home-flexbox-row">
          <div class="hf2-text">
            <h3 class="title-sm-row">Our services</h3>
            <h1 class="title-lg-row">Why People Choose Us</h1>
          </div>
          <div class="block-row">
            <div class="block-row-item">
              <i style="font-size: 3rem" class="bi bi-columns"></i>
              <h3 class="block-title">Design</h3>
              <p>a plan or drawing produced to show the look and function</p>
              <router-link :to="{name:'projects'}">LEARN MORE</router-link>
            </div>
            <div class="block-row-item">
              <i style="font-size: 3rem" class="bi bi-cpu"></i>
              <h3 class="block-title">Development</h3>
              <p>development is defined as the process of growth or new </p>
              <router-link :to="{name:'projects'}">LEARN MORE</router-link>
            </div>
            <div class="block-row-item">
              <i style="font-size: 3rem;" class="bi bi-briefcase"></i>
              <h3 class="block-title">Branding</h3>
              <p>The marketing practice of creating a name or symbol</p>
              <router-link :to="{name:'projects'}">LEARN MORE</router-link>
            </div>
            <div class="block-row-item">
              <i style="font-size: 3rem;" class="bi bi-balloon-heart"></i>
              <h3 class="block-title">Illustration</h3>
              <p>An illustration is a decoration, interpretation or visual</p>
              <router-link :to="{name:'projects'}">LEARN MORE</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home-section">
      <div class="container">
        <div class="home-flexbox hf-2">
          <div class="hf-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Design.059e9f72.webp">
          </div>
          <div class="col-lg-5">
            <h3 data-aos="fade-up" class="title-sm-left">Design Things</h3>
            <h1 class="title-lg-left">We Loves To Design Your Creative Ideas</h1>
            <p class="desc">A creative concept is an overarching “Big Idea” that captures audience interest, influences
              their emotional response and inspires them to take action.It is a unifying theme that can be used across
              all campaign messages </p>
          </div>
        </div>
        <div class="home-flexbox hf-3">
          <div class="col-lg-5">
            <h3 class="title-sm-left">Our Teamwork</h3>
            <h1 class="title-lg-left">We Believe Success Lies On Teamwork</h1>
            <p class="desc">Good teamwork means a synergistic way of working with each person committed and working
              towards a shared goal. It is therefore a necessity that leaders facilitate and build the teamwork skills
              of their people if they are</p>
          </div>
          <div class="hf-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Teamwork.efec38b6.webp">
          </div>
        </div>
      </div>
    </section>
    <section class="company-list">
      <div class="container">
        <div class="company-list-flexbox cl-row">
          <h3 class="title-sm-row">Our Partners</h3>
          <div class="company-list-flexbox">
            <img class="company-logo" src="../assets/AirbnbLogo.svg" alt="This Is An Image">
            <img class="company-logo" src="../assets/GoogleLogo.svg" alt="This Is An Image">
            <img class="company-logo" src="../assets/NationalGeographicLogo.svg" alt="This Is An Image">
            <img class="company-logo" src="../assets/SpotifyLogo.svg" alt="This Is An Image">
            <img class="company-logo" src="../assets/TinkoffLogo.svg" alt="This Is An Image">
          </div>
        </div>
      </div>
    </section>
    <section class="home-section hs-blog">
      <div class="container">
        <div class="home-flexbox hf-blog">
          <h1 class="title-lg-row">Subscribe To Our Blog</h1>
          <p class="desc-row col-12 col-lg-7">A newsletter is a tool used to communicate regularly with your subscribers, delivering
            the information</p>
          <div class="input-flexbox">
            <input class="blog-input col-12 col-md-8 col-lg-5" type="email" placeholder="Your Email Address Here">
            <button class="blog-btn col-8 col-md-4 col-lg-3" @click="reloadPage">Send now</button>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer>
    <i class="bi bi-c-circle"></i>
    <p style="margin: 0 0 0 1rem">All Rights Served By MIRAGE {{new Date().getFullYear()}}</p>
  </footer>
</template>

<script>

export default {
  name: "HomePage",
  methods: {
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>
<style scoped>

</style>