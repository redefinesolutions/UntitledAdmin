export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Lano - Ecommerce Admin
        </h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Product Management</h2>
          <p className="text-gray-600">
            Welcome to your ecommerce admin dashboard. This is a test to ensure the preview is working.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-900">Total Products</h3>
              <p className="text-2xl font-bold text-blue-600">1,234</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-900">Active Products</h3>
              <p className="text-2xl font-bold text-green-600">987</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium text-yellow-900">Draft Products</h3>
              <p className="text-2xl font-bold text-yellow-600">247</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}