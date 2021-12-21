import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor() { }
  rem = document.body.clientWidth / 192;
  echartsInstance: any
  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'item',
      show: false
    },
    title: {
      text: '统计量饼图',
      left: 'center',
      top: 1 * this.rem,
      textStyle: {
        fontSize: 2.4 * this.rem,
      }
    },
    legend: {
      bottom: '5%',
      left: 'center',
      itemGap: 2 * this.rem,
      itemWidth: 0.8 * this.rem,
      itemHeight: 1.4 * this.rem,
      textStyle: {
        fontSize: 1.2 * this.rem,
        color: "#9CA0AB"
      }
    },
    series: [
      {
        type: 'pie',
        name: '统计量饼图',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0.5 * this.rem,
          borderColor: '#fff',
          borderWidth: 0.1 * this.rem
        },
        label: {
          show: false,
          position: 'center',
          formatter: '{b}\n{c}\n{d}%'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 2 * this.rem,
            // fontWeight: "normal"
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 1048, name: '蓝色统计量', itemStyle: {
              color: '#84E8F4'
            }
          },
          {
            value: 735, name: '红色统计量', itemStyle: {
              color: '#FC5B5D'
            }
          },
          {
            value: 580, name: '黄色统计量', itemStyle: {
              color: '#FCBE30'
            }
          },
        ]
      }
    ]
  };

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.chartOption.series[0].data[0].value = 100
      if (this.echartsInstance) {
        this.echartsInstance.setOption(this.chartOption, true)
      }
    }, 2000)
  }

}
