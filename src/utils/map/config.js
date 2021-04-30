/*
** 网格样式配置项
*/
export const defaultPolygonConfig = {
  strokeColor: 'rgb(41,71,252)', //线颜色
  strokeOpacity: 0.5, //线透明度
  strokeWeight: 3, //线宽
  fillColor: 'rgba(23,145,252,0.28)', //填充色
  fillOpacity: 0.5 //填充透明度
}
export const defaultCircleConfig = {
  fillColor: 'rgba(23,145,252,0.28)', //填充色
  strokeWeight: 0,
  strokeColor: 'rgba(23,145,252,0.28)'
}
export const defaultClusterConfig = {
  minClusterSize: 5,
  gridSize: 120,
  maxZoom: 17
}
/*
** mark点图标配置
*/
export const PointInfo = {
  monitor_normal: {
    defaultIcon: require('@/assets/images/cityAppearanceAI/gis_icon_monitor_normal.png'),
    activeIcon: require('@/assets/images/cityAppearanceAI/gis_icon_monitor_normal.png'),
    defaultSize: [36, 48],
    activeSize: [72, 96]
  },
  monitor_warning: {
    defaultIcon: require('@/assets/images/cityAppearanceAI/gis_icon_monitor_warning.png'),
    activeIcon: require('@/assets/images/cityAppearanceAI/gis_icon_monitor_warning.png'),
    defaultSize: [36, 48],
    activeSize: [72, 96]
  },
  police_monitor_normal: {
    defaultIcon: require('@/assets/images/cityAppearanceAI/gis_icon_police_monitor_normal.png'),
    activeIcon: require('@/assets/images/cityAppearanceAI/gis_icon_police_monitor_normal.png'),
    defaultSize: [36, 48],
    activeSize: [72, 96]
  },
  event_normal: {
    defaultIcon: require('@/assets/images/cityAppearanceAI/gis_icon_event_normal.png'),
    activeIcon: require('@/assets/images/cityAppearanceAI/gis_icon_event_normal.png'),
    defaultSize: [36, 48],
    activeSize: [72, 96]
  },
  event_warning: {
    defaultIcon: require('@/assets/images/cityAppearanceAI/gis_icon_event_warning.png'),
    activeIcon: require('@/assets/images/cityAppearanceAI/gis_icon_event_warning.png'),
    defaultSize: [36, 48],
    activeSize: [72, 96]
  },
  outdoor_blue: {
    defaultIcon: require('@/assets/images/cityAppearanceAI/gis_icon_outdoor_blue.png'),
    activeIcon: require('@/assets/images/cityAppearanceAI/gis_icon_outdoor_blue.png'),
    defaultSize: [36, 48],
    activeSize: [72, 96]
  },
  outdoor_yellow: {
    defaultIcon: require('@/assets/images/cityAppearanceAI/gis_icon_outdoor_yellow.png'),
    activeIcon: require('@/assets/images/cityAppearanceAI/gis_icon_outdoor_yellow.png'),
    defaultSize: [36, 48],
    activeSize: [72, 96]
  },
  outdoor_red: {
    defaultIcon: require('@/assets/images/cityAppearanceAI/gis_icon_outdoor_red.png'),
    activeIcon: require('@/assets/images/cityAppearanceAI/gis_icon_outdoor_red.png'),
    defaultSize: [36, 48],
    activeSize: [72, 96]
  },
  runfree: {
    defaultIcon: require('@/assets/images/cityAppearanceAI/gis_icon_runfree.png'),
    activeIcon: require('@/assets/images/cityAppearanceAI/gis_icon_runfree.png'),
    defaultSize: [48, 48],
    activeSize: [48, 48]
  }
}
