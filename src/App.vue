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
            <div :class="{menu:true, 'menu--close4': true, 'open': animation === true, 'd-block':true, 'd-md-none':true}" @click="showM">
              <div class="menu__icon">
                <div class="menu__line menu__line--1"></div>
                <div class="menu__line menu__line--2"></div>
                <div class="menu__line menu__line--3"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    <div :class="{'mobile-nav':true, 'close': closerMenu === true}" v-show="showMenu" >
      <ul class="mobile-routes d-flex d-md-none">
        <li @click="showM"><router-link :to="{name:'home'}">HOME</router-link></li>
        <li @click="showM"><router-link :to="{name:'projects'}">PROJECTS</router-link></li>
        <li @click="showM"><router-link :to="{name:'pricing'}">PRICING</router-link></li>
        <li @click="showM"><router-link :to="{name:'news'}">NEWS</router-link></li>
        <li @click="showM"><router-link :to="{name:'contacts'}">CONTACTS</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { useRoute } from 'vue-router';
  export default {
    data () {
      return{
        showMenu: false,
        closerMenu: false,
        animation: false,
        routeName: useRoute().name
      }
    },
    watch:{
      // eslint-disable-next-line no-unused-vars
      routeName(olds, news) {
        this.showM()
        alert('hui')
      }
    },
    methods: {
      showM() {
        let self = this
        this.animation = true
        if (this.showMenu === true) {
          this.closerMenu = true
          this.animation = false
          setTimeout(function () {
            self.closerMenu = false
            self.showMenu = false
          },400)
        }
        else {
          this.showMenu = !this.showMenu
        }
      },
    }
  }
</script>

<!--TURKEY PHP GURU WAS HERE-->
