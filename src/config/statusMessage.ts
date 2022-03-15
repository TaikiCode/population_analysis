// ステータスメッセージをここで定義する
export const STATUS_MESSAGE = {
  isLoading: 'Loading...',
  isError: 'エラーが発生しています。。',
  isEmpty: '上記から都道府県を選択して下さい。',
} as const

export type StatusMessageType = typeof STATUS_MESSAGE[keyof typeof STATUS_MESSAGE]
