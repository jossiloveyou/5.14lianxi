import React from 'react'
import echarts from 'echarts'

export default class Chart extends React.Component{
  componentDidMount () {
    var myChart = echarts.init(this.el);
    var myChart2 = echarts.init(this.el2);
    var myChart3 = echarts.init(this.el3);
    var myChart4 = echarts.init(this.el4);
    var option = {
        title: {
            text: 'Line Chart'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    var option2 = {
      title: {
          text: 'Bar Chart'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    };
    var option3 = {
      title: {
          text: 'Area Chart'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    };
    var option4 = {
      title: {
          text: 'Doughnut Chart'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    };
    window.addEventListener('resize',() => {
        myChart.resize()
    })
    myChart.setOption(option);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
  }
  render () {
    return (
      <div className="chart">
        <div className="content" ref={v => this.el = v}>

        </div>
        <div className="content" ref={v => this.el2 = v}>

        </div>
        <div className="content" ref={v => this.el3 = v}>

        </div>
        <div className="content" ref={v => this.el4 = v}>

        </div>
      </div>
    )
  }
}