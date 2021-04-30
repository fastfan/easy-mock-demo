<template>
  <div class="hello">
     <Map @init="initMap" />
  </div>
</template>

<script>
import Map from "../views/map.vue"
export default {
  name: 'HelloWorld',
  components:{
     Map
  },
  props: {
    msg: String
  },
  data(){
    return {
      map:""
    }
  },
  methods:{
    initMap(map) {
      // 初始化地图
      this.map = map;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  height: 100%;
}
.threecolor-codeoverview {
   width: 100%;
   height: 1200px;
   &-header{
     position: fixed;
     top: 0;
     left: 0;
   }
   &-map{
     position: fixed;
     top: 64px;
     left: 0;
     z-index: 1;
     /deep/ .amap-maps{
      width: 100%;
    }
    /deep/ .amap-marker .amap-marker-content div {
      background-size: contain;
    }
    /deep/ .amap-maps .amap-marker .amap-marker-label{
        border: 0;
        background-color: #fff;
        padding: 5px;
        &::after{
          content:"";
          width:0;
          height:0;
          position: absolute;
          top: 24px;
          left: 20px;
          border-top:solid 5px #fff;
          border-right:solid 5px transparent;
          border-left:solid 5px transparent;
        }
     }
   }
   &-searchLeftpanel{
      /deep/ .content{
         padding: 0;
       }
   }
   &-leftpanel,&-searchLeftpanel{
     position: fixed;
     top: 64px;
     left: 0;
     z-index: 3;
     width: 420px;
     height: 100%;
   }
   &-rightpanel,&-searchRightpanel{
     position: fixed;
     top: 64px;
     right: 0;
     z-index: 3;
     width: 420px;
     height: 100%;
     /deep/ .qc-base-panel-2-title{
       padding: 7px 20px 21px;
       img{
         top: 16px;
       }
     }
   }
   &-topmid{
     position: fixed;
     top: 84px;
     left: 0;
     z-index: 2;
   }
   &-search{
     width: 100%;
     margin: 0 auto;
     position: fixed;
     top: 224px;
     left: 0;
     z-index: 2;
     &-cont{
       width: 560px;
       height: 52px;
       margin: 0 auto;
       line-height: 52px;
       background: #fff;
       .el-input{
          width: 448px;
          margin-left: 20px;
          margin-right: 12px;
       }
     }
   }
    .contral-box {
      position: absolute;
      right: 430px;
      bottom: 20px;
      z-index: 2;
      // width: 60px;
      /deep/.contral {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 68px;
        height: 68px;
        &.active {
          // background: linear-gradient(360deg, #010e1d 2%, #0059b3 100%);
        }
        .icon {
          width: 68px;
          height: 68px;
        }
        .txt {
          font-size: 12px;
          font-weight: 400;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
 }
</style>
