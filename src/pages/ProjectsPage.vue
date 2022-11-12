<template>
  <div>
    <section class="projects-section">
      <div class="container">
        <h1 class="projects-title">OUR BEST <span style="color: #7b98ff">PROJECTS</span></h1>
        <Flicking :options="{ align: 'prev', circular: true, horizontal: true, panelsPerView: 3}" @move-end="onMoveEnd">
          <div class="site-panel"></div>
          <div class="site-panel"></div>
          <div class="site-panel"></div>
          <div class="site-panel"></div>
          <div class="site-panel"></div>
          <div class="site-panel"></div>
          <div class="site-panel"></div>
          <div class="site-panel"></div>
          <div class="site-panel"></div>
        </Flicking>
      </div>
    </section>
<!--    <div class="panel site-panel sp-1 col-4 col-lg-5">-->
<!--      <div class="site-panel-inner">-->
<!--        <h1 class="site-panel-h1">TINKOFF</h1>-->
<!--        <p class="desc">WEB-SERVICE</p>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="panel site-panel sp-2 col-4 col-lg-5">-->
<!--      <div class="site-panel-inner">-->
<!--        <h1 class="site-panel-h1">GOOGLE</h1>-->
<!--        <p class="desc">WEB-SERVICE</p>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="panel site-panel sp-3 col-4 col-lg-5">-->
<!--      <div class="site-panel-inner">-->
<!--        <h1 class="site-panel-h1">GOOGLE</h1>-->
<!--        <p class="desc">WEB-SERVICE</p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "ProjectsPage"
}
</script>

<style>

</style>