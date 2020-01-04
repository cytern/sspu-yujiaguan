<template>
<div class="classTable-day">
    <div class="coursesTable">
        <el-card>
        <div class="title" slot="header"><span>课程表</span></div>
        <div class="base-clock">
            <el-table
                    :data="classTable"
                    border
                    style="width: 100%;">
                <el-table-column

                        prop="time"
                        label="时间"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="one"
                        label="周一"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="two"
                        label="周二"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="three"
                        label="周三"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="four"
                        label="周四"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="five"
                        label="周五"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="six"
                        label="周六"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="seven"
                        label="周日"
                        width="130">
                </el-table-column>
            </el-table>

        </div>
        </el-card>
    </div>
</div>
</template>

<script>
    export default {
        name: "classTableDay",
        data(){
          return{
              classesTable:[],
              classTable:[
                  {   time:'8:00-10:00',
                      one:'',
                      two:'',
                      three:'',
                      four:'',
                      five:'',
                      six:'',
                      seven:'',
                  },
                  {   time:'10:00-12:00',
                      one:'',
                      two:'',
                      three:'',
                      four:'',
                      five:'',
                      six:'',
                      seven:'',
                  },
                  {   time:'12:00-14:00',
                      one:'',
                      two:'',
                      three:'',
                      four:'',
                      five:'',
                      six:'',
                      seven:'',
                  },
                  {   time:'14:00-16:00',
                      one:'',
                      two:'',
                      three:'',
                      four:'',
                      five:'',
                      six:'',
                      seven:'',
                  },
                  {   time:'16:00-18:00',
                      one:'',
                      two:'',
                      three:'',
                      four:'',
                      five:'',
                      six:'',
                      seven:'',
                  },
                  {   time:'18:00-20:00',
                      one:'',
                      two:'',
                      three:'',
                      four:'',
                      five:'',
                      six:'',
                      seven:'',
                  },
                  {   time:'20:00-22:00',
                      one:'',
                      two:'',
                      three:'',
                      four:'',
                      five:'',
                      six:'',
                      seven:'',
                  },
              ],

        }
        },
        mounted() {
            this.getTableClass()
        },
        methods:{
getTableClass(){
this.classesTable = this.$store.state.classesTable
    for(let i = 0; i < this.classesTable.length ; i ++){
        if (this.classesTable[i].classTime < 55){
            this.classTable[4].four = this.classesTable[i].className
        }else {
            this.classTable[6].six =(this.classesTable[i].className,this.classesTable[i].teacherName)
        }
    }
},
        }
    }
</script>

<style scoped>
    .classTable-day{
        width: 100%;
        height: 100%;
    }
.coursesTable{
    margin-top: 30px;
    width: 100%;
    height: 100%;
    position: relative;
}


</style>
