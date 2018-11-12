<template>
  <div id="home">
    <canvas id="backCanvas"></canvas>
    <h1 class="three-h1">
      <p><span @click="toResume">韩杨</span>前端开发</p>
      <p class="three-a">
        <router-link to="/danmu">danmu</router-link>
        <router-link to="/example-2">example-2</router-link>
      </p>
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { BackCanvas } from '@/util/particle';

export default {
  name: 'home',
  mounted() {
    const w = document.getElementById('home').offsetWidth;
    const h = document.getElementById('home').offsetHeight;
    const myCanvas = new BackCanvas('backCanvas', w, h);
    myCanvas.loop();
  },
  methods: {
    toResume() {
      this.$router.push('/resume');
    }
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
      font-size: 68px;
      width:100%;
      a{
        text-decoration: none;
      }
      span:after {
        background: url('../assets/link.svg') no-repeat;
        cursor: pointer;
        content: '  '
      }
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
          text-decoration: none;
        }
        a:first-child {
          margin-left: 0;
        }
        a:visited, a:link{
          color: rgb(51, 51, 51);
        }
        a:hover, a:active {
          color:#42b983;
        }
      }
    }
  }
}


canvas {
  display: block;
}
</style>
