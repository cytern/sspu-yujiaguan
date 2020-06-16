<template>
  <div id="app">
<!--    <div class="nav-bar">-->
<!--      <div class="left">{{time1}}</div>-->
<!--      <div class="center"><el-button type="text" style="font-size: 80px;color: white" @click="toIndex()"><i class="el-icon-house"></i></el-button></div>-->
<!--      <div class="right">{{time2}}</div>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>
<script>
import dayjs from 'dayjs'
  export default {
    methods:{
    toIndex(){
      this.$router.push('/')
    },
      refreshTime () {
        this.time1 = dayjs().format('YYYY'+'年'+'M'+'月'+'D'+'日')
        this.time2 =  dayjs().format('HH'+'时'+'MM'+'分'+'ss'+'秒')
      },
    },
    mounted(){
      this.timeInterval = setInterval(() => {
        this.refreshTime()
      }, 500)
    },
    beforeDestroy () {
      clearInterval(this.timeInterval)
    },
    data(){
      return {
        time1: dayjs().format('YYYY' + '年' + 'M' + '月' + 'D' + '日'),
        time2: dayjs().format('HH' + '时' + 'MM' + '分' + 'ss' + '秒'),
        timeInterval: null,
      }
    },
    created () {
      setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: 'static/live2dw/',
          pluginJsPath: 'lib/',
          pluginModelPath: 'live2d-widget-model-tororo/assets/',
          tagMode: false,
          debug: false,
          model: { jsonPath: '../static/live2dw/live2d-widget-model-tororo/assets/tororo.model.json' },
          display: { position: 'right', width: 300, height: 650 },
          mobile: { show: true },
          log: false
        })
      }, 1000)
    },
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  width: 100%;
  position: relative;
  overflow: hidden;

}
.nav-bar{
  display: flex;
  height: 160px;
  text-align: center;
  width: 100%;
  color:white;
  box-shadow: 3px 3px 2px #C0C4CC;
  background:url("./assets/img/navBackgroud.jpg");
  font-size: 40px;
}
.left{
  width: 30%;
  margin: auto;
}
.right{
  width: 30%;
  margin: auto;
}
.center{
  flex: 1;
  margin: auto;

}
  .live2D{
    position: absolute;
    top: 0px;
    right: 0px;
  }

</style>
