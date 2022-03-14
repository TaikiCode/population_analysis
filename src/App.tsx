import { VFC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Chart from './components/Chart'
import Layout from './components/Layout'
import PrefectureList from './components/PrefectureList'
import './App.scss'
import { useSelectedPrefs } from './hooks/useSelectedPrefs'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const App: VFC = () => {
  const { selectedPref, handleSelectPref } = useSelectedPrefs()
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <PrefectureList handleSelectPref={handleSelectPref} />
        <Chart selectedPref={selectedPref} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
