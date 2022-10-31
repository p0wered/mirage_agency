<template>
  <div>
      <nav>
        <div class="container">
          <div class="nav-flexbox">
            <div class="logo-box">
              <h1>MIRAGE</h1>
            </div>
              <ul>
                <li><router-link :to="{name:'home'}">HOME</router-link></li>
                <li><router-link :to="{name:'projects'}">PROJECTS</router-link></li>
                <li><router-link :to="{name:'pricing'}">PRICING</router-link></li>
                <li><router-link :to="{name:'news'}">NEWS</router-link></li>
                <li><router-link :to="{name:'contacts'}">CONTACTS</router-link></li>
              </ul>
          </div>
        </div>
      </nav>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

