<template>
<div class="teacherDetail">
    <div class="back">
        <el-button  class="back-tips" >教师详情</el-button>
        <el-button class="back-button" type="warning" @click="backTeachers">返回</el-button>
    </div>
    <el-button class="teacherTab" >
        <el-image :src="tableTeacher.src" class="teacherTab-img"></el-image>
        <h2 class="teacherTab-name">{{tableTeacher.name}}</h2>
        <h5 class="teacherTab-describe">{{tableTeacher.describe}}</h5>

        <h4 class="teacherTab-notice">热度：</h4>
        <el-rate class="teacherTab-rate"
                 v-model="tableTeacher.rate"
                 show-score
                 text-color="#ff9900"
                 disabled="disabled"
                 void-icon-class="icon-rate-face-off"
                 :colors="['greenyellow', 'cyan', 'red']">
        </el-rate>
    </el-button>
    <el-card shadow="hover" class="moreDetail">
          <div slot="header">
              <span>老师介绍</span>
          </div>
        <div class="card-body">
            <p>{{tableTeacher.describe}}</p>
        </div>
    </el-card>
    <el-card shadow="hover" class="moreDetail">
        <div slot="header">
            <span>开授课程</span>
        </div>
        <div class="card-body">
           <div class="card-body-classes" v-for="(item,index) in tableClasses" :key="index">
               <el-button  class="card-body-classes-more" @click="class_detail(item.classId)">查看更多</el-button>
               <el-image class="card-body-classes-img" :src="item.classSrc"></el-image>
               <span class="card-body-classes-name">{{item.className}}</span>
               <span class="card-body-classes-price">{{item.classPrice}}￥/节</span>
               <p class="card-body-classes-describe">{{item.classDescribe}}</p>
           </div>

        </div>
    </el-card>
</div>
</template>

<script>
    import classes from "../assets/data/teachers/classes";
    import classesTeacheres from "../assets/data/teachers/classesTeacheres";
    import teacheres from "../assets/data/teachers/teacheres";
    export default {
        name: "teacherDetail",
        mounted() {
            if(this.tableTeacher.teacherId == null) {
                this.getTableTeacher()
            }
        },
        methods:{
            class_detail(classId){
             this.$router.push(
                 {
                     name:'classDetail',
                     params:{
                         classId:classId
                     }
                 }
             )
            },
            backTeachers(){
              this.$router.push('teacher')
            },
            getTableTeacher(){
         let id = this.$route.params.teacherData.id
           this.classes = classes
                this.teachersClasses = classesTeacheres
                this.teachers = teacheres
      let classesId = []
                for(let i = 0 ;i < this.teachers.length; i++){
                      if( this.teachers[i].id == id){
                          this.tableTeacher.id =  this.teachers[i].id
                          this.tableTeacher.name =  this.teachers[i].name
                          this.tableTeacher.describe =  this.teachers[i].describe
                          this.tableTeacher.rate =  this.teachers[i].rate
                           this.tableTeacher.src =  this.teachers[i].src
                      }
                }
                for(let i = 0; i < this.teachersClasses.length; i++){
                    if(id == this.teachersClasses[i].teacherId){
                        classesId.push(this.teachersClasses[i].classId)
                    }
                }
                for (let i = 0 ; i< this.classes.length; i++){
                   for (let b = 0 ; b < classesId.length;b++){
                       if(this.classes[i].classId == classesId[b]){
                           this.tableClasses.push(
                               {
                                   classId:this.classes[i].classId,
                                   className:this.classes[i].className,
                                   classPrice:this.classes[i].classPrice,
                                   classDescribe:this.classes[i].classDescribe,
                                   classSrc: this.classes[i].src,
                               }
                           )
                       }
                   }
                }
            }
        },
        data(){
          return{
              teacherDetailName:{
                  name:null,
              },
              tableTeacher:{
                 id:null,
                  name:null,
                  describe:null,
                  rate:null,
                  src:null,
              },

              teachers:[],
              classes:[],
              teachersClasses:[],
              tableClasses:[],
              teacherDetail:{
                  name:null,
                  describe:null,
                  rate:null,
                  src:null,
              }
          }
        },

    }
</script>

<style scoped>
    .back-tips{
font-size: xx-large;
        box-shadow: 1px 1px 1px skyblue;
        position: absolute;
        border: skyblue solid 1px;
        text-align: center;
        margin: auto;
        width: 900px;
        height: 100px;
        left: 0px;
    }
    .back{
        margin-top: 10px;
        width: 100%;
        height: 100px;
       position: relative;

    }
    .back-button{
        position: absolute;
        top: 10px;
        right: 20px;
        height: 80px;
        width: 130px;
        font-size: x-large;
    }
.teacherDetail{
    margin-top: 10px;
    width: 100%;
    height: auto;
}
.teacherTab{
    margin-top: 10px;
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
    .moreDetail{
          width: 100%;
        height: auto;
        position: relative;
        margin-top: 20px;
        font-size: x-large;
        text-align: left;
    }
    .card-body{
        text-align: left;
        width: 100%;
        height:auto;
        font-size: x-large

    }
    .card-body-classes{
        width: 38%;
        height: 400px;
        margin: 55px;
        display: inline-block;
        position: relative;
        border: 1px solid cadetblue;
        overflow: hidden;
    }
    .card-body-classes-img{
        position: absolute;
        width: 200px;
        height: 200px;
        left: 20px;
        top: 20px;


    }
    .card-body-classes-name{
   position: absolute;
    left: 230px;
        top: 50px;
        color: gray;
    }
    .card-body-classes-price{
     position: absolute;
        left: 250px;
        top: 100px;
        color: palevioletred;
    }
    .card-body-classes-describe{
        width: 100%;
        height: 100px;
        position: absolute;
        left: 10px;
        top: 240px;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp:3;
        word-break:break-all;
        display:-webkit-box;
        -webkit-box-orient:vertical;

    }
    .card-body-classes-more{
        position: absolute;
        font-size: large;
        right: 0px;
    }
</style>
