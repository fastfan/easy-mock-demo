   import echarts from 'echarts'
    var myData = ['某某某某中的对中的', '某某某某中的对中的', '某某某某中的对中的', '某某某某中的对中的', '某某某某中的对中的', '某某某某中的对中的', '某某某某中的对中的']
    var lineData = [100, 100, 100, 100, 100, 100, 100]
    var lastYearData = {
        1: [3, 20, 62, 34, 55, 65, 33]
    }
    var thisYearData = {
        1: [11, 38, 23, 39, 66, 66, 79]
    }
    var timeLineData = [1]
//    双柱状图配置
    export const commonOption = {
        baseOption: {
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            legend : {
                bottom : '-3%',
                left : '30%',
                itemWidth : 18,
                itemHeight : 12,
                itemGap: 10,
                icon : 'horizontal',
                textStyle : {
                    color : 'rgba(255,255,255,.6)',
                    fontSize : 12,
                },
                data: ['总量', '这个月']
            },
            grid: [{//配置左侧y轴数字样式
                show: false,
                left: '5%',
                top: '0%',
                bottom: '8%',
                containLabel: true,
                width: '28%'
            },  {//配置中间文字样式
                show: false,
                left: '51%',
                top: '0%',
                bottom: '8%',
                width: '0%'
            }, {//配置右侧y轴数字样式
                show: false,
                right: '2%',
                top: '0%',
                bottom: '8%',
                containLabel: true,
                width: '34%'
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'bottom',
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: 'white'
                    }
                },
                splitLine: {
                    show: false
                }
            }, {
                gridIndex: 1,
                show: false,
            }, {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'bottom',
                axisLabel: {
                    show: false,
                      interval: 0,  
                      textStyle: {
                        color: 'white'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: myData
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 12
                    }

                },
                data: myData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
                data: myData
            }],
            series: []

        },
        options: []
    }
    commonOption.baseOption.timeline.data.push(timeLineData[0]);
    commonOption.options.push({
        series: [
        {
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            // symbol: 'rect',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            barWidth: 10,
            // symbolRepeat: true,
            // symbolSize: 14,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return lastYearData[timeLineData[0]][series.dataIndex]
                    },
                    position: 'insideTopLeft',
                    textStyle:{
                        color: 'rgba(255,255,255,1)',
                        fontSize: 12,
                    },
                    offset: [0, -5],
                }
            },
            z: -100,
                animationEasing: 'elasticOut',
                 animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            name: '总量',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(47,194,91,1)", // 渐变色的起始颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(47,194,91,0)", // 渐变线的结束颜色
                    },
                  ],
                  false
                ),
                }
            },
            data: lastYearData[timeLineData[0]],
        },
        {
            type: 'pictorialBar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            barWidth: 10,
            symbolRepeat: true,
            symbolSize: 14,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                        return thisYearData[timeLineData[0]][series.dataIndex]
                    },
                    position: 'insideTopRight',
                    textStyle:{
                        color: 'rgba(255,255,255,1)',
                        fontSize: 12,
                    },
                    offset: [0, -5],
                }
            },
            z: -100,
                animationEasing: 'elasticOut',
                 animationDelay: function (dataIndex, params) {
                return params.index * 30;
            }
        }, {
            name: '这个月',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            barWidth: 10,
            barCategoryGap: "0%",
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 1,
                      color: "rgba(0,157,255,1)", // 渐变色的起始颜色
                    },
                    {
                      offset: 0,
                      color: "rgba(0,157,255,0)", // 渐变线的结束颜色
                    },
                  ],
                  false
                ),
                }
            },
            data: thisYearData[timeLineData[0]],
        }
        ]
    });