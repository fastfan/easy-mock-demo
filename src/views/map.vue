
<template>
    <div id="threecolorCodeoverviewMap" class="threecolorCodeoverviewMap"></div>
</template>
<script>
import AMap from 'AMap'
export default {
  components: {

  },
  watch:{

  },
  methods: {
    initMap() {
      this.map = new AMap.Map("threecolorCodeoverviewMap", {
        animateEnable: true,
        zoom: 14,
        pitch: 45,
        rotation: 0,
        expandZoomRange: true,
        zooms: [4, 18],
        center: [111.755503,40.848417],
        mapStyle: "amap://styles/normal",
      });
      this.$emit("init", this.map);
    },
  },
  mounted() {
     this.initMap()
  },
  data() {
    return {
      map: null,
    };
  },
};
</script>
<style lang="scss">
 .threecolorCodeoverviewMap{
   width: 100%;
   height: 100%;
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
</style>
