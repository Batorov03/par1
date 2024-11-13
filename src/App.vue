<template>
  <div id="app">





    <!--    <nav>-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </nav>-->
    <div class="layout">
      <aside class="sidebar" :style="{width: isUrban ? 400 + 'px' : 50 +'px'}">
        <div class="toggle">
          <button @click="isUrban = !isUrban">TOGGLE</button>
        </div>
        <div class="main__main">
          <router-link to="/"> main</router-link>
        </div>
        <div class="counter__counter">
          <router-link to="/counter"> counter</router-link>
        </div>
        <div class="about__about">
          <router-link to="/courses"> courses__1 </router-link>
        </div>
        <div class="about__about">
          <router-link to="/courses__2"> courses__2 </router-link>
        </div>
        <div class="about__about">
          <router-link to="/courses__3"> courses__3 </router-link>
        </div>
        <div class="about__about">
          <router-link to="/courses__4"> courses__4 </router-link>
        </div>
        <div class="about__about">
          <router-link to="/courses__5"> courses__5 </router-link>
        </div>
        <div class="about__about">
          <router-link to="/courses__6"> courses__6 </router-link>
        </div>

      </aside>
      <div class="section">
        <header class="header">header</header>
        <main>
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>
<script>

export default {

  data() {
    return {
      isUrban: true,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}


body {
  padding: 0;
  margin: 0;
}

* {
  font-size: 20px;
  font-weight: bold;
}

.main__main {
  padding: 30px 30px;


}
.about__about{
  padding: 30px;
}

.counter__counter {
  padding: 30px 30px;
}


.layout {
  display: flex;
  width: 100%;
  //align-items: center;
  //min-height: 100vh;
  //width: 100vw;
}

.sidebar {
  width: 400px;
  min-height: 100vh;
  background: gray;
}

.section {
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  background: darkseagreen;
}

.toggle {
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid black;
}


//nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
