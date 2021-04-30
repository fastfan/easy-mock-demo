/**
 *@description: 返回折线图点击区域返回的x轴、y轴的数据
 *@author: fw
 *@date: 2020.08.31
 * @param {Object} params 当前echarts点击区域的信息.
 * @param {String} name 当前echarts的dom信息.
 */
export function chartClickData(params,name) {
    let pointInPixel = [params.offsetX, params.offsetY];
    let xData,yData;
      if (name.chart.containPixel("grid", pointInPixel)) {
        /*此处添加具体执行代码*/
        let pointInGrid = name.chart.convertFromPixel(
          { seriesIndex: 0 },
          pointInPixel
        );
        //X轴序号
        let xIndex = pointInGrid[0];
        //获取当前图表的option
        let op = name.chart.getOption();
        //获得图表中我们想要的数据
         xData = op.xAxis[0].data[xIndex];
         yData = op.series.map(t=>{
             return t.data[xIndex]
         })
        console.log(xData + "：" + yData);
    }
    return {
      xData,
      yData
    };
  }
  
 
  