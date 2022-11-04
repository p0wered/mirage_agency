<template>
  <div>
    <section class="home-section-1">
      <div class="container">
        <div class="home-flexbox-1">
          <div class="col-lg-5">
            <h3 class="title-sm-left">Creative Agency</h3>
            <h1 class="title-lg-left">We Deliver The Best Product for You</h1>
            <p class="desc">Design is the creation of a plan or convention for the construction of an object or a system as in architectural blueprints, engineering drawings and business processes</p>
          </div>
          <div class="hf-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Recommended.56c2bffe.webp">
          </div>
        </div>
      </div>
    </section>
    <section class="home-section-row">
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
    <section class="home-section-2">
      <div class="container">
        <div class="home-flexbox-2">
          <div class="hf-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Design.059e9f72.webp">
          </div>
          <div class="col-lg-5">
            <h3 class="title-sm-left">Design Things</h3>
            <h1 class="title-lg-left">We Loves To Design Your Creative Ideas</h1>
            <p class="desc">A creative concept is an overarching “Big Idea” that captures audience interest, influences their emotional response and inspires them to take action.It is a unifying theme that can be used across all campaign messages </p>
          </div>
        </div>
        <div class="home-flexbox-3">
          <div class="col-lg-5">
            <h3 class="title-sm-left">Our Teamwork</h3>
            <h1 class="title-lg-left">We Believe Success Lies On Teamwork</h1>
            <p class="desc">Good teamwork means a synergistic way of working with each person committed and working towards a shared goal. It is therefore a necessity that leaders facilitate and build the teamwork skills of their people if they are</p>
          </div>
          <div class="hf-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Teamwork.efec38b6.webp">
          </div>
        </div>
      </div>
    </section>
    <section class="company-list">
      <div class="container">
        <div class="company-list-flexbox">
          <img id="airbnb-logo" src="../assets/AirbnbLogo.svg">
          <img id="google-logo" src="../assets/GoogleLogo.svg">
          <img id="nat-geo-logo" src="../assets/NationalGeographicLogo.svg">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
}
</script>
<style scoped>

</style>