<template>
  <input class="form-checkbox" type="checkbox" id="flexCheckDefault">
</template>

<script>
export default {
  name: "InputCheckbox",
  props:['bg'],

}
</script>

<style scoped>
  .form-checkbox{
    width: 1em;
    height: 1em;
    margin-top: .25em;
    vertical-align: top;
    background-color: #f1f1f1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, .25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    float: left;
    margin-left: -1.5em;
    border-radius: .25rem;
    transition: 300ms;
  }

  .form-checkbox:checked{
    background-color: #7b98ff;
    box-shadow: rgba(123, 152, 255, 0.4) 0 3px 12px 0;
    border: none;
  }

  .form-checkbox:checked[type="checkbox"]{
    background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e");
  }
</style>