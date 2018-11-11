<template>
  <div id="home">
    <canvas id="backCanvas"></canvas>
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
    console.log(w, h, 'jj');
    const myCanvas = new BackCanvas('backCanvas', w, h);
    myCanvas.loop();
  }
}
</script>

<style lang="less">
#home {
  height: 100%;
}
canvas {
  display: block;
}
</style>
