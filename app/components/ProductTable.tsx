'use client'

import { useState } from 'react'
import { 
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  PlusIcon,
  StarIcon,
  TableCellsIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

const tabs = [
  { name: 'All', current: true },
  { name: 'Active', current: false },
  { name: 'Inactive', current: false },
  { name: 'Draft', current: false },
  { name: 'Discontinued', current: false },
  { name: 'Bundle', current: false },
]

const products = [
  {
    id: 1,
    image: '/api/placeholder/40/40',
    name: 'John Deere 4320D Compact Tractor 195531',
    unit: '195531',
    brand: 'Others',
    category: 'Equipment > Tractors > Compact Tractors',
    condition: 'Used',
    location: 'Shakopee',
    msrp: 17900.00,
    ourCost: 17900.00,
    imap: 0.00,
    salePrice: 17900.00,
    createdDate: '10/14/2024 11:19 AM',
    createdBy: 'Amin N',
    updatedDate: '05/20/2024 03:07 PM'
  },
  {
    id: 2,
    image: '/api/placeholder/40/40',
    name: 'Kubota L2502HST Compact Tractor 245748',
    unit: '245748',
    brand: 'Kubota',
    category: 'Parts > Kubota',
    condition: 'New',
    location: 'Anoka',
    msrp: 0.01,
    ourCost: 0.01,
    imap: 0.00,
    salePrice: 0.01,
    createdDate: '07/26/2024 12:19 PM',
    createdBy: 'Amin N',
    updatedDate: '01/20/2024 12:19 PM'
  },
  {
    id: 3,
    image: null,
    name: '135-2449 TORO',
    unit: '135-2449',
    brand: 'Toro',
    category: 'Parts > Toro',
    condition: '',
    location: 'Loretto',
    msrp: 194.99,
    ourCost: 194.99,
    imap: 194.99,
    salePrice: 194.99,
    createdDate: '06/30/2025 08:06 AM',
    createdBy: 'Parvej Shaikh',
    updatedDate: '08/01/2024 22:28 PM'
  },
  {
    id: 4,
    image: '/api/placeholder/40/40',
    name: '1425 - TOWABLE THE BEAST HORIZONTAL GRINDER',
    unit: 'BNT-1425-TOWABLE',
    brand: 'Bandit',
    category: 'Equipment > Grinders',
    condition: '',
    location: '',
    msrp: 0.00,
    ourCost: 0.00,
    imap: 0.00,
    salePrice: 0.00,
    createdDate: '07/14/2025 08:52 AM',
    createdBy: 'Parvej Shaikh',
    updatedDate: '07/20/2024 11:58 AM'
  },
  {
    id: 5,
    image: '/api/placeholder/40/40',
    name: '1425 - TRACK THE BEAST HORIZONTAL GRINDER',
    unit: 'BNT-1425-TRACK',
    brand: 'Bandit',
    category: 'Equipment > Grinders',
    condition: '',
    location: '',
    msrp: 0.00,
    ourCost: 0.00,
    imap: 0.00,
    salePrice: 0.00,
    createdDate: '07/14/2025 08:52 AM',
    createdBy: 'Parvej Shaikh',
    updatedDate: '07/20/2024 11:59 AM'
  },
  {
    id: 6,
    image: '/api/placeholder/40/40',
    name: '1680XP - TOWABLE THE BEAST HORIZONTAL GRINDER',
    unit: 'BNT-1680XP-TOWABLE',
    brand: 'Bandit',
    category: 'Equipment > Grinders',
    condition: '',
    location: '',
    msrp: 0.00,
    ourCost: 0.00,
    imap: 0.00,
    salePrice: 0.00,
    createdDate: '07/14/2025 08:52 AM',
    createdBy: 'Parvej Shaikh',
    updatedDate: '07/20/2024 11:59 AM'
  },
  {
    id: 7,
    image: '/api/placeholder/40/40',
    name: '1680XP - TRACK THE BEAST HORIZONTAL GRINDER',
    unit: 'BNT-1680XP-TRACK',
    brand: 'Bandit',
    category: 'Equipment > Grinders',
    condition: '',
    location: '',
    msrp: 0.00,
    ourCost: 0.00,
    imap: 0.00,
    salePrice: 0.00,
    createdDate: '07/14/2025 08:52 AM',
    createdBy: 'Parvej Shaikh',
    updatedDate: '07/20/2024 11:59 AM'
  },
  {
    id: 8,
    image: '/api/placeholder/40/40',
    name: '1984 Homemade Homemade Blades 254544',
    unit: '254544',
    brand: 'Others',
    category: 'Attachments > Blades',
    condition: 'Used',
    location: 'Anoka',
    msrp: 1500.00,
    ourCost: 1500.00,
    imap: 0.00,
    salePrice: 900.00,
    createdDate: '02/25/2025 08:02 AM',
    createdBy: 'Amin N',
    updatedDate: '07/11/2024 22:05 PM'
  },
  {
    id: 9,
    image: '/api/placeholder/40/40',
    name: '1990 Bobcat 742B Skid Steer Loaders 3246',
    unit: '3246',
    brand: 'Bobcat',
    category: 'Equipment > Skid Steer Loaders',
    condition: 'Used',
    location: 'Shakopee',
    msrp: 15500.00,
    ourCost: 15500.00,
    imap: 0.00,
    salePrice: 8800.00,
    createdDate: '05/15/2025 07:09 AM',
    createdBy: 'Amin N',
    updatedDate: '05/11/2024 07:30 AM'
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductTable() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [savedFilters, setSavedFilters] = useState(false)

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const toggleAllProducts = () => {
    setSelectedProducts(prev => 
      prev.length === products.length ? [] : products.map(p => p.id)
    )
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount)
  }

  return (
    <div className="bg-white shadow-sm rounded-lg">
      {/* Header Actions */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Tabs */}
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={classNames(
                    tab.current
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm'
                  )}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <ArrowUpTrayIcon className="h-4 w-4 mr-2" />
              Import
            </button>
            <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Bundle
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <TableCellsIcon className="h-4 w-4 mr-2" />
              Edit Columns
            </button>
            <button 
              className={classNames(
                "inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md bg-white hover:bg-gray-50",
                savedFilters ? "text-primary-700" : "text-gray-700"
              )}
              onClick={() => setSavedFilters(!savedFilters)}
            >
              {savedFilters ? (
                <StarIconSolid className="h-4 w-4 mr-2 text-primary-500" />
              ) : (
                <StarIcon className="h-4 w-4 mr-2" />
              )}
              Save
            </button>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <AdjustmentsHorizontalIcon className="h-4 w-4 mr-2" />
              More Filters(0)
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  checked={selectedProducts.length === products.length}
                  onChange={toggleAllProducts}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Unit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Condition
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                MSRP ($)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Our Cost ($)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                IMAP ($)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sale Price ($)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created By
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleProductSelection(product.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.image ? (
                    <img 
                      className="h-10 w-10 rounded-lg object-cover" 
                      src={`https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2`}
                      alt={product.name}
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">No Image</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                    {product.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.unit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.brand}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs truncate">
                    {product.category}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.condition}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatCurrency(product.msrp)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatCurrency(product.ourCost)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatCurrency(product.imap)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatCurrency(product.salePrice)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.createdDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.createdBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.updatedDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              25 Per Page
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-700">
              Total Records : 80263
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button className="bg-primary-50 border-primary-500 text-primary-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                1
              </button>
              <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                2
              </button>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                3210
              </button>
              <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                3211
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}