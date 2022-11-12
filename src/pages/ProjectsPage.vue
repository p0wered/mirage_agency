<template>
  <div>
    <section class="projects-section">
      <div class="container">
        <div class="home-flexbox pf-1">
          <div data-aos="fade" data-aos-delay="250" data-aos-duration="600" class="hf-image-box">
            <img alt="This is an image" class="recommended-img" src="../assets/Projects.png">
          </div>
          <div data-aos="fade-right" data-aos-delay="250" data-aos-duration="600" class="col-lg-5" style="z-index: 1">
            <h3 class="title-sm-left">For those looking for new growth points</h3>
            <h1 class="title-lg-left">Expand your range of services and attract new customers</h1>
            <p class="desc">Try out new features in the fast-paced Mirage. We constantly communicate with our
              partners, exchange ideas and develop ourselves.</p>
          </div>
        </div>
        <div class="projects-flexbox">
          <h1 class="projects-title">Our Best <span style="color: #7b98ff; font-weight: 700">Projects</span></h1>
          <Flicking style="padding: 1rem" :options="{ align: 'prev', circular: true, horizontal: true, panelsPerView: 3}" @move-end="onMoveEnd">
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <button class="main-btn projects-btn">VISIT SITE</button>
              </div>
            </div>
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <button class="main-btn projects-btn">VISIT SITE</button>
              </div>
            </div>
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <button class="main-btn projects-btn">VISIT SITE</button>
              </div>
            </div>
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <button class="main-btn projects-btn">VISIT SITE</button>
              </div>
            </div>
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <button class="main-btn projects-btn">VISIT SITE</button>
              </div>
            </div>
            <div class="site-panel">
              <h1 class="site-panel-h1">TINKOFF</h1>
              <p class="desc">Best Virtual Bank in Russia</p>
              <div class="btn-flexbox">
                <button class="main-btn projects-btn">VISIT SITE</button>
              </div>
            </div>
          </Flicking>
        </div>
        <div class="home-flexbox">

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage"
}
</script>

<style>

</style>