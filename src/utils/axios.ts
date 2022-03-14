import axios from 'axios'

// 取得先のAPIのbaseURL
const API_BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1'
// API key
const API_KEY = process.env.REACT_APP_RESAS_API_KEY || ''

// インスタンス生成（client.get(URL)~でアクセスできる）
export const client = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'X-API-KEY': API_KEY },
})

