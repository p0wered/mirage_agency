<template>
  <div>
      <nav>
        <div class="container">
          <div class="nav-flexbox">
            <div class="logo-box">
              <h1>MIRAGE</h1>
            </div>
            <ul class="desktop-routes d-none d-md-flex">
              <li><router-link :to="{name:'home'}">HOME</router-link></li>
              <li><router-link :to="{name:'projects'}">PROJECTS</router-link></li>
              <li><router-link :to="{name:'pricing'}">PRICING</router-link></li>
              <li><router-link :to="{name:'news'}">NEWS</router-link></li>
              <li><router-link :to="{name:'contacts'}">CONTACTS</router-link></li>
            </ul>
            <div class="mobile-menu d-md-none" @click="showM">
              <i class="bi bi-list" v-show="showList"></i>
              <i class="bi bi-x-lg" v-show="showCross"></i>
            </div>
          </div>
        </div>
      </nav>
    <div class="mobile-nav" v-show="showMenu" >
      <ul class="mobile-routes d-flex d-md-none">
        <li><router-link :to="{name:'home'}">HOME</router-link></li>
        <li><router-link :to="{name:'projects'}">PROJECTS</router-link></li>
        <li><router-link :to="{name:'pricing'}">PRICING</router-link></li>
        <li><router-link :to="{name:'news'}">NEWS</router-link></li>
        <li><router-link :to="{name:'contacts'}">CONTACTS</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        showMenu: false,
        showCross: false,
        showList: true,
      }
    },
    methods: {
      showM() {
        this.showList = !this.showList
        this.showCross = !this.showCross
        this.showMenu = !this.showMenu
      },
    }
  }
</script>

