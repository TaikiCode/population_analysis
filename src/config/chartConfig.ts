import Highcharts from 'highcharts'

// チャート自体の設定
const DEFAULT_OPTIONS: Highcharts.Options = {
  // タイトル（表示させない）
  title: {
    text: '',
    style: {
      display: 'none',
    },
  },
  // X軸ラベル
  xAxis: {
    title: {
      text: '年度',
    },
  },
  // Y軸ラベル
  yAxis: {
    title: {
      text: '人口数',
    },
  },
  // 凡例
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },
  // レスポンシブ設定
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
}

// チャートサイズ設定
const CHART_SIZE = { width: '100%', height: '100%' }

export { DEFAULT_OPTIONS, CHART_SIZE }
