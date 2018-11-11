<template>
  <div id="home">
    <canvas id="backCanvas"></canvas>
    <h1 class="three-h1">
      <p>韩杨 &nbsp;three.js</p>
      <p class="three-a">
        <router-link to="/example-1">example-1</router-link>
        <router-link to="/example-2">example-2</router-link>
      </p>
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { BackCanvas } from '@/util/particle';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    const canvas = document.getElementById('backCanvas');
    const w = document.getElementById('home').offsetWidth;
    const h = document.getElementById('home').offsetHeight;
    const myCanvas = new BackCanvas('backCanvas', w, h);
    myCanvas.loop();
  }
}
</script>

<style lang="less">
#home {
  height: 100%;
  position: relative;
  @media screen {
    .three-h1 {
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      font-weight: 300;
      font-size: 78px;
      @media (max-width: 1024px) {
        font-size: 32px;
      }
      .three-a {
        font-size: 24px;
        @media (max-width: 1024px) {
          font-size: 12px;
        }
        a {
          @media (max-width: 1024px) {
            margin-left: 12px;
          }
          margin-left: 24px;
        }
        a:first-child {
          margin-left: 0;
        }
      }
    }
  }
}


canvas {
  display: block;
}
</style>
