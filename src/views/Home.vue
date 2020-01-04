<template>
  <div class="home">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <div class="block" style="margin-top: 1%">
      <el-carousel height="600px" style="width: 1080px;margin: auto">
        <el-carousel-item v-for="item in banner" :key="item">
          <img :src="item.src" style="width: 100%;height: 100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="height: 7%">
    <div class="notice">
      <div class="notice_font">
        <transition
                name="custom-classes-transition"
                enter-active-class="animated rollIn"
                leave-active-class="animated rollOut"
        >
          <h3 v-if="noticeTrue"><i class="el-icon-reading"></i><a :href="noticeDom.url">{{noticeDom.title}}</a></h3>
        </transition>
      </div>
    </div>
    </div>

    <div class="Navigation" >
      <div class="small_Navigation" v-for="(item,index) in buttons" :key="index">
        <el-button class="small_Navigation_button" :class="item.className"  circle @click="toOthers(item.src)"></el-button>
        <h3>{{item.title}}</h3>
      </div>
    </div>
  </div>
</template>
<script >
  import totalData from "../assets/data/home";
export default {
  name: 'home',

  methods:{
    toOthers(src){
      if(src == 'signUp'){
         let classes = this.$store.state.classesTable
        if (classes.length < 1 ){
          this.$alert('哎呀，出错了', '没有找到您今天的课程', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'primary',
                message: '加入点课程试试吧~'
              });
             console.log(action)
            }
          });
        }else {
        this.$confirm('您确定要签到么?', classes[0].className, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '签到成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'warning',
            message: '已取消'
          });
        });}
      }else {
      this.$router.push(
              {
                name:src
              }
      )
    }
    },
    choose(){
      this.noticeTrue = false
    },
    roll(){
      let a = this.noticeTrue
      let b = this.whichOne
      let c =this.notice
      if(a == true) {
        this.noticeTrue = false
      }else {
        if(b < c.length) {

          this.noticeDom = c[b]
          this.whichOne = b +1
          this.noticeTrue = true

        }else if (b >= c.length) {
          this.whichOne = 0
          this.noticeDom = c[b]
          this.noticeTrue = true
        }
      }
    }
  },
  mounted(){
    this.timeInterval = setInterval(() => {
      this.roll()
    }, 1500)
    this.buttons = totalData.buttons
    this.notice = totalData.notice

  },
  beforeDestroy () {
    clearInterval(this.timeInterval)
  },
  data(){
    return{
      buttons:[],
      test1:false,
      timeInterval:null,
      whichOne:0,
      banner:[
        {
          src:require('../assets/img/y1.jpg')
        },
        {
          src:require('../assets/img/y2.jpg')
        },
        {
          src:require('../assets/img/y3.jpg')
        },
        {
          src:require('../assets/img/y4.jpg')
        },
      ],
      noticeDom:{
        title:'SSPU首家线下瑜伽馆开业啦',
        url:''
      },
      noticeTrue:true,
      notice:[],
    }
  },
}
</script>
<style scoped>
  .home{

    font-weight: 800;
    width: 100%;

  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .notice {
    margin-top: 6%;
    width: 100%;
    height: 80px;
    font-size: xx-large;

  }
  .notice_font{
    width: 100%;

  }
  .Navigation{
    width: 1080px;
    height: 100%;
    border-bottom: 1px solid #475669;
    font-size: x-large;
    overflow: hidden;
  }
  .small_Navigation{
    display: inline-block;
    padding: 1%;
    transition:all 1s;
  }
  .small_Navigation-enter,.small_Navigation-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }
  .small_Navigation-leave-active{
    position: absolute;
  }

  .small_Navigation_button{
    width: 300px;
    height: 300px;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    transition-duration: 1s;
  }
  .teacher{
    width: 300px;
    height: 300px;
    background: url("../assets/img/teacher.jpg");
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;

  }
  .classes{
    width: 300px;
    height: 300px;
    background: url("../assets/img/teacherDetail.jpg");
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
  }
  .classTableDay{
    width: 300px;
    height: 300px;
    background: url("../assets/img/tableClassDay.jpg");
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
  }
  .signUp{
    width: 300px;
    height: 300px;
    background: url("../assets/img/signUp.png");
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
  }
  .index{
    width: 300px;
    height: 300px;
    background: url("../assets/img/index.jpg");
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    transition: 2s;
  }
  @keyframes myfirst
  {
    0% {border:3px dotted white;}
    50% {border: 15px dotted skyblue;}
    75% {border: 15px dotted palevioletred}
    100% {border: 3px dotted white}

  }

  .small_Navigation_button:hover{
    animation: myfirst 2s;
    -moz-animation: myfirst 2s;
    -webkit-animation: myfirst 2s;
    -o-animation: myfirst 2s;

  }
  .changeList-move {
    transition: transform 1s;
  }

</style>
