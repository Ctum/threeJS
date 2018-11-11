<template>
  <div class="home">
    <canvas id="backCanvas" style="width:1500px; height:1000px;"></canvas>
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
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const myCanvas = new BackCanvas('backCanvas', w, h);
    myCanvas.loop();
  }
}
</script>
