<template>
  <div class="flex-1 overflow-auto">
    <div class="p-6">
      <!-- Page Header -->
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-semibold text-gray-900">Product</h1>
        <div class="flex items-center space-x-3">
          <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Export
          </button>
          <button class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Import
          </button>
          <button class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
            + Add Bundle
          </button>
        </div>
      </div>

      <!-- Tabs -->
      <div class="border-b border-gray-200 mb-6">
        <nav class="-mb-px flex space-x-8">
          <button class="py-2 px-1 border-b-2 border-blue-500 font-medium text-sm text-blue-600">All</button>
          <button class="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">Active</button>
          <button class="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">Inactive</button>
          <button class="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">Draft</button>
          <button class="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">Discontinued</button>
          <button class="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700">Bundle</button>
        </nav>
      </div>

      <!-- Search and Filters -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex-1 max-w-md">
          <div class="relative">
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input 
              type="text" 
              placeholder="Search" 
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <button class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <i class="fas fa-columns mr-2"></i>
            Edit Columns
          </button>
          <button class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <i class="fas fa-star mr-2"></i>
            Save
          </button>
          <button class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <i class="fas fa-filter mr-2"></i>
            More Filters(0)
          </button>
        </div>
      </div>

      <!-- Products Table -->
      <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left">
                  <input type="checkbox" class="rounded border-gray-300">
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MSRP ($)</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Our Cost ($)</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IMAP ($)</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sale Price ($)</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created By</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="product in products" :key="product.id" class="hover:bg-gray-50">
                <td class="px-6 py-4">
                  <input type="checkbox" class="rounded border-gray-300">
                </td>
                <td class="px-6 py-4">
                  <img :src="product.image" :alt="product.name" class="w-12 h-12 rounded-md object-cover">
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.unit }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.brand }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.category }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.condition }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.location }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.msrp }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.ourCost }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.imap }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.salePrice }}</td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  <div>{{ product.createdDate }}</div>
                  <div class="text-xs">{{ product.createdTime }}</div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.createdBy }}</td>
                <td class="px-6 py-4 text-sm text-gray-500">
                  <div>{{ product.updated }}</div>
                  <div class="text-xs">{{ product.updatedTime }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="bg-white px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <select class="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>25 Per Page</option>
              <option>50 Per Page</option>
              <option>100 Per Page</option>
            </select>
            <span class="text-sm text-gray-700">Total Records: 80263</span>
          </div>
          <div class="flex items-center space-x-2">
            <button class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">1</button>
            <button class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">2</button>
            <span class="px-2 text-sm text-gray-500">...</span>
            <button class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">3210</button>
            <button class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">3211</button>
            <button class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsPage',
  data() {
    return {
      products: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          name: 'Q John Deere 4320D Compact Tractor 195531',
          unit: '195531',
          brand: 'Others',
          category: 'Equipment > Tractors > Compact Tractors',
          condition: 'Used',
          location: 'Shakopee',
          msrp: '17900.00',
          ourCost: '17900.00',
          imap: '0.00',
          salePrice: '17900.00',
          createdDate: '10/14/2024',
          createdTime: '11:19 AM',
          createdBy: 'Amin N',
          updated: '05/20',
          updatedTime: '03:07'
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          name: 'Q Kubota L2502HST Compact Tractor 245748',
          unit: '245748',
          brand: 'Kubota',
          category: 'Parts > Kubota',
          condition: 'New',
          location: 'Anoka',
          msrp: '0.01',
          ourCost: '0.01',
          imap: '0.00',
          salePrice: '0.01',
          createdDate: '07/26/2024',
          createdTime: '12:18 PM',
          createdBy: 'Amin N',
          updated: '01/20',
          updatedTime: '12:10'
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          name: '135-2449 TORO',
          unit: '135-2449',
          brand: 'Toro',
          category: 'Parts > Toro',
          condition: '',
          location: 'Loretto',
          msrp: '194.99',
          ourCost: '194.99',
          imap: '194.99',
          salePrice: '194.99',
          createdDate: '06/30/2025',
          createdTime: '08:06 AM',
          createdBy: 'Parvej Shaikh',
          updated: '08/01',
          updatedTime: '22:28'
        },
        {
          id: 4,
          image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          name: '1425 - TOWABLE THE BEAST HORIZONTAL GRINDER',
          unit: 'BNT-1425-TOWABLE',
          brand: 'Bandit',
          category: 'Equipment > Grinders',
          condition: '',
          location: '',
          msrp: '0.00',
          ourCost: '0.00',
          imap: '0.00',
          salePrice: '0.00',
          createdDate: '07/14/2025',
          createdTime: '08:52 AM',
          createdBy: 'Parvej Shaikh',
          updated: '07/20',
          updatedTime: '11:58'
        },
        {
          id: 5,
          image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          name: '1425 - TRACK THE BEAST HORIZONTAL GRINDER',
          unit: 'BNT-1425-TRACK',
          brand: 'Bandit',
          category: 'Equipment > Grinders',
          condition: '',
          location: '',
          msrp: '0.00',
          ourCost: '0.00',
          imap: '0.00',
          salePrice: '0.00',
          createdDate: '07/14/2025',
          createdTime: '08:52 AM',
          createdBy: 'Parvej Shaikh',
          updated: '07/20',
          updatedTime: '11:59'
        },
        {
          id: 6,
          image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          name: '1680XP - TOWABLE THE BEAST HORIZONTAL GRINDER',
          unit: 'BNT-1680XP-TOWABLE',
          brand: 'Bandit',
          category: 'Equipment > Grinders',
          condition: '',
          location: '',
          msrp: '0.00',
          ourCost: '0.00',
          imap: '0.00',
          salePrice: '0.00',
          createdDate: '07/14/2025',
          createdTime: '08:52 AM',
          createdBy: 'Parvej Shaikh',
          updated: '07/20',
          updatedTime: '11:59'
        },
        {
          id: 7,
          image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          name: '1680XP - TRACK THE BEAST HORIZONTAL GRINDER',
          unit: 'BNT-1680XP-TRACK',
          brand: 'Bandit',
          category: 'Equipment > Grinders',
          condition: '',
          location: '',
          msrp: '0.00',
          ourCost: '0.00',
          imap: '0.00',
          salePrice: '0.00',
          createdDate: '07/14/2025',
          createdTime: '08:52 AM',
          createdBy: 'Parvej Shaikh',
          updated: '07/20',
          updatedTime: '11:59'
        },
        {
          id: 8,
          image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          name: '1984 Homemade Homemade Blades 254544',
          unit: '254544',
          brand: 'Others',
          category: 'Attachments > Blades',
          condition: 'Used',
          location: 'Anoka',
          msrp: '1500.00',
          ourCost: '1500.00',
          imap: '0.00',
          salePrice: '900.00',
          createdDate: '02/25/2025',
          createdTime: '08:02 AM',
          createdBy: 'Amin N',
          updated: '07/11',
          updatedTime: '22:05'
        },
        {
          id: 9,
          image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          name: '1990 Bobcat 742B Skid Steer Loaders 3246',
          unit: '3246',
          brand: 'Bobcat',
          category: 'Equipment > Skid Steer Loaders',
          condition: 'Used',
          location: 'Shakopee',
          msrp: '15500.00',
          ourCost: '15500.00',
          imap: '0.00',
          salePrice: '8800.00',
          createdDate: '05/15/2025',
          createdTime: '07:00 AM',
          createdBy: 'Amin N',
          updated: '05/11',
          updatedTime: '07:30'
        }
      ]
    }
  }
}
</script>