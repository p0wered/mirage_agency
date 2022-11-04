<template>
  <div>
    <section class="home-section-1">
      <div class="container">
        <div class="home-flexbox-1">
          <div class="col-lg-5">
            <h3 class="title-sm-1">Creative Agency</h3>
            <h1 class="title-lg-1">We Deliver The Best Product for You</h1>
            <p class="desc-1">Design is the creation of a plan or convention for the construction of an object or a system as in architectural blueprints, engineering drawings and business processes</p>
          </div>
          <div class="hf1-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Recommended.png">
          </div>
        </div>
      </div>
    </section>
    <section class="home-section-2">
      <div class="container">
        <div class="home-flexbox-2">
          <div class="hf2-text">
            <h3 class="title-sm-2">Our services</h3>
            <h1 class="title-lg-2">Why People Choose Us</h1>
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
              <i style="font-size: 3rem" class="bi bi-balloon-heart"></i>
              <h3 class="block-title">Illustration</h3>
              <p>An illustration is a decoration, interpretation or visual</p>
              <router-link :to="{name:'projects'}">LEARN MORE</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home-section-1">
      <div class="container">
        <div class="home-flexbox-1">
          <div class="hf1-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Recommended.png">
          </div>
          <div class="col-lg-5">
            <h3 class="title-sm-1">Creative Agency</h3>
            <h1 class="title-lg-1">We Deliver The Best Product for You</h1>
            <p class="desc-1">Design is the creation of a plan or convention for the construction of an object or a system as in architectural blueprints, engineering drawings and business processes</p>
          </div>
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