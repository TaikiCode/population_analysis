import { VFC } from 'react'
import './App.css'
import Chart from './components/Chart'
import Layout from './components/Layout'
import PrefectureList from './components/PrefectureList'

const App: VFC = () => (
  <Layout>
    <PrefectureList />
    <Chart />
  </Layout>
)

export default App
