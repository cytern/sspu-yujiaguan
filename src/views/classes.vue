<template>
    <div class="teacher">
        <div class="best">
            <div class="bar">
                <el-button class="bar-button">
                    <h2>精品课程</h2>
                </el-button>
            </div>
            <el-button class="teacherTab" v-for="(item,index) in classes" :key="index" @click="toClassesDetail(item)">
                <el-image :src="item.src" class="teacherTab-img"></el-image>
                <h2 class="teacherTab-name">{{item.className}}</h2>
                <h5 class="teacherTab-describe">{{item.classDescribe}}</h5>
                <h1 class="teacherTab-icon">></h1>
                <h4 class="teacherTab-notice">热度：</h4>
                <el-rate class="teacherTab-rate"
                         v-model="item.rate"
                         show-score
                         text-color="#ff9900"
                         disabled="disabled"
                         void-icon-class="icon-rate-face-off"
                         :colors="['greenyellow', 'cyan', 'red']">
                </el-rate>
                <span class="price">￥：{{item.classPrice}}/节</span>
            </el-button>
        </div>
        <div>
            <Live2d></Live2d>
        </div>
    </div>
</template>

<script>
    import Live2d from "../components/Live2d";
   import classes from "../assets/data/teachers/classes";
    export default {
        name: "classes",
        components:{
            Live2d
        },
        mounted() {
            this.classes = classes
        },
        data(){
            return{
                classes:[]
            }
        },
        methods:{
            toClassesDetail(item){
                this.$router.push({
                    name:'classDetail',
                    params:{
                        classId:item.classId
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
    .price{
      color: darkorange;
    }
</style>
