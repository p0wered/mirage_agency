<template>
  <div class="hui">
    <Flicking :options="{ align: 'prev', circular: true }" @move-end="onMoveEnd">
      <div class="panel">1</div>
      <div class="panel">2</div>
      <div class="panel">3</div>
    </Flicking>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage"
}
</script>

<style>

</style>