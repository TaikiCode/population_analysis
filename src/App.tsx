import { VFC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Chart from './components/Chart'
import Layout from './components/Layout'
import PrefectureList from './components/PrefectureList'
import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const App: VFC = () => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      <PrefectureList />
      <Chart />
    </Layout>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

export default App
