<template>
  <div class='demo'>
    <div class="demo-main">
       <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import * as Comp from "@/components/chartsComponents.js";
  export default {
    name: 'demo',
    provide() {
    return {
      page: this
     };
    },
    components: {
      
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    mounted() {

    },
    methods: {
      
    },
    beforeCreate() {
      Object.keys(Comp).forEach(key => {
        Vue.component(key, Vue.extend(Comp[key]));
      });
    },
  };
</script>

<style lang='scss'>
  .demo {
    width: 100%;
    height: 100%;
    background: #091b2f;
    &-main{
      width: 800px;
      padding: 30px;
      margin: 0 auto;
      .comp1{
        margin-bottom: 20px;
      }
    }
    .detail{
      position: fixed;
      top: 0;
      left: 0;
      width: 448px;
      height: 100%;
    }
    .detail2{
      position: fixed;
      top: 0;
      right: 0;
      width: 448px;
      height: 100%;
      .handle-status{
        vertical-align: top;
        margin-right: 5px;
      }
    }
    .detail3{
      position: fixed;
      top: 130px;
      left: 588px;
      width: 448px;
      height: 100%;
    }
  }
</style>
