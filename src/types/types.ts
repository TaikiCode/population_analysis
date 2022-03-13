export interface Prefecture {
  prefCode: number
  prefName: string
}

export interface TotalPopulation {
  year: number
  value: number
}

export interface Population {
  boundaryYear: number
  data: {
    label: string
    data: TotalPopulation[]
  }[]
}

export interface Chart {
  categories: string[]
  series: {
    name: string
    data: number[]
  }
}
