<template>
<div class="class-detail">
    <el-card class="class-detail-body">
        <div slot="header" class="class-detail-body-title">
            <span class="title">{{classData.className}}</span>
            <el-button class="class-back" type="warning" @click="back">返回</el-button>
        </div>
        <div class="class-detail-body-describe">
            <div class="class-img">
                <el-carousel height="400px">
                    <el-carousel-item v-for="item in classData" :key="item">
                        <h3 class="small">{{ item.src }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
             <p class="class-describe">{{classData.classDescribe}}</p>

        </div>
        <el-card >
            <div slot="header"><h2>开授教师</h2></div>
             <el-card class="teacherClass" v-for="(item,index) in teacheres" :key="index" >
                 <div slot="header">{{item.name}}</div>
                 <el-image :src="item.src" class="teacher-img"></el-image>
                 <span class="teacher-rate"></span>
                 <p class="teacher-describe"></p>
                 <el-button class="addClasses" type="primary" @click="addClass(item,index)">申请报名</el-button>
             </el-card>
        </el-card>
    </el-card>
</div>
</template>

<script>
    import classes from "../assets/data/teachers/classes";
    import teacheres from "../assets/data/teachers/teacheres";
    import classesTeacheres from "../assets/data/teachers/classesTeacheres";
    export default {
        name: "classDetail",
        mounted() {
            this.getTableClass()
        },
        methods:{
            addClass(teacher,index){
                this.$alert('确认添加课程', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                      this.$store.state.classesTable.push(
                          {
                                 teacherName:teacher.name,
                                 teacherId:teacher.id,
                                 teacherSrc:teacher.src,
                              className:this.classData.className,
                              classTime:this.classesTeacheres[index].classTime,
                              classSrc:this.classData.src
                          }
                      )
                        console.log(action)
                        console.log( this.$store.state.classesTable)
                    }
                });
            },
          back(){
            this.$router.go(-1)
          },
            getTableClass(){
                this.classId = this.$route.params.classId
                this.teacheres = teacheres
                this.classesTeacheres = classesTeacheres
                this.classes = classes
                let table = []
                let classesTeachers = this.classesTeacheres
                let teachers = this.teacheres
                this.classes.forEach((value) => {
                    if(value.classId == this.classId){
                        this.classData = value
                    }
                })
               for (let i = 0;i < teachers.length;i++){
                   for (let s = 0; 0 < classesTeachers.length;s++){
                       if(classesTeachers[s].classId === this.classId){
                           if(teachers[i].id === classesTeachers[s].teacherId){
                               table.push(
                                   {
                                       classId:classesTeachers[s].classId,
                                       teacherId:classesTeachers[s].teacherId,
                                       classTime:classesTeachers[s].classTime,
                                       name:teachers[i].name,
                                       describe:teachers[i].describe,
                                   }
                               )
                           }
                       }
                   }
               }
                console.log(table)
            },

        },
        data(){
            return{
                classData:{},
                teacheres:[],
                classId:null,
                teacheresUrl:null,
                classesTeacheres:[],
                classes:[],
                tableTeachers:[]
            }
        }
    }

</script>

<style scoped>
    .class-detail{
        margin-top: 20px;
        width: 100%;
        height: 100%;
    }
    .class-detail-body{
        width: 100%;
    }
    .class-detail-body-title{
        height: 80px;
        color: #2c3e50;
        font-size: xx-large;
        text-align: left;
        position: relative;
    }
    .title{
        text-align: left;
    }
    .class-back{
        width: 70px;
        height: 70px;
      position: absolute;
        right: 20px;
        top: 5px;
    }
    .class-detail-body-describe{
        width: 100%;
        font-size: x-large;
        color: black;
        position: relative;
        height: 800px;
    }
    .class-img{
        position: absolute;
        left: 0px;
        top: 0px;
        width:100%;

    }
    .class-describe{
        position: absolute;
        left: 0px;
        top: 450px;
        margin-right: 100px;
        margin-left: 100px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .teacherClass{
        width: 45%;
        font-size: larger;
        position: relative;
        display: inline-block;
        margin: 10px;
    }
    .teacher-img{
        width: 200px;
        height: 200px;

    }
</style>
