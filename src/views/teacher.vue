<template>
<div class="teacher">
<div class="best">
    <div class="bar">
        <el-button class="bar-button">
           <h2>优质教师</h2>
        </el-button>
    </div>


</div>
    <div>
    <Live2d></Live2d>
</div>
</div>
</template>

<script>
    import Live2d from "../components/Live2d";
    import teachers1 from '../assets/data/teachers/teacheres.js'
    export default {
        name: "teacher",
  components:{
            Live2d
  },
        mounted() {
            this.teachers = teachers1
        },
        data(){
            return{
                teachers:[]
            }
        },
        methods:{
           toTeacherDetail(item){
               this.$router.push({
                   name:'teacherDetail',
                   params:{
                       teacherData:item
                   }
               })
           }
        }
    }
</script>

<style scoped>
.teacher{
    margin-top: 2%;
    width: 100%;
    height: 95%;
    background: #475669;
}
.bar{

}
.bar-button{
    width: 100%;
    height: 150px;
    font-size: xx-large;
    position: relative;
}

  .teacherTab{
      height: 150px;
      width: 100%;
      font-size: x-large;
      position: relative;
      border:#9FC6FA solid 2px;
      margin-left: 0px;
  }
    .teacherTab-img{
        position: absolute;
width: 100px;
        height: 100px;
        left: 3%;
        top: 25px;
    }
    .teacherTab-name{
        position: absolute;
        left: 150px;
        top: 0px;
    }
    .teacherTab-describe{
        position: absolute;
        left: 150px;
        top: 50px;
        width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 40px;
        font-weight: 300;
    }
 .teacherTab-icon{
     position: absolute;
     right: 20px;
     top: 20px;
 }
    .teacherTab-rate{
        position: absolute;
        right: 20px;
        top: 15px;
    }
    .teacherTab-notice{
        position: absolute;
        right: 140px;
        top: -10px;
    }
</style>
