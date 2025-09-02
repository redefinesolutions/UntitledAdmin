import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ProductTable from './components/ProductTable'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-25">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-25">
          <div className="container mx-auto px-6 py-8">
            <ProductTable />
          </div>
        </main>
      </div>
    </div>
  )
}