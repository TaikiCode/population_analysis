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
  name: number
  [prefName: string]: number
}
