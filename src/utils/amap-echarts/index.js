import echarts from 'echarts/lib/echarts'
import AMapEcharts from './amap-echarts.js'
import AMapCoordinate from './amap-coordinate.js'

// 注册坐标系
echarts.registerCoordinateSystem('amap', AMapCoordinate)

export default AMapEcharts
