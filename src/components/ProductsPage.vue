<template>
  <div class="flex-1 overflow-auto">
    <div class="p-6">
      <!-- Page Header -->
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-semibold text-gray-900">Product</h1>
        <div class="flex items-center space-x-3">
          <button class="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-md hover:from-purple-700 hover:to-blue-700 flex items-center">
            <i class="fas fa-magic mr-2"></i>
            AI Optimize
          </button>
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

      <!-- AI Insights Panel -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-brain text-white"></i>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">AI Product Insights</h3>
              <p class="text-sm text-gray-600">Powered by advanced machine learning algorithms</p>
            </div>
          </div>
          <button class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div class="bg-white rounded-lg p-4 border border-blue-100">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Price Optimization</span>
              <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">+12% Revenue</span>
            </div>
            <p class="text-xs text-gray-600">AI suggests optimal pricing for 247 products to maximize profit margins</p>
            <button class="text-blue-600 text-xs font-medium mt-2 hover:text-blue-700">View Suggestions →</button>
          </div>
          
          <div class="bg-white rounded-lg p-4 border border-purple-100">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Smart Categorization</span>
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">89% Accuracy</span>
            </div>
            <p class="text-xs text-gray-600">Auto-categorize 1,234 uncategorized products using AI image recognition</p>
            <button class="text-purple-600 text-xs font-medium mt-2 hover:text-purple-700">Auto-Categorize →</button>
          </div>
          
          <div class="bg-white rounded-lg p-4 border border-indigo-100">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Demand Forecasting</span>
              <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">High Demand</span>
            </div>
            <p class="text-xs text-gray-600">Predict inventory needs for next 30 days based on market trends</p>
            <button class="text-indigo-600 text-xs font-medium mt-2 hover:text-indigo-700">View Forecast →</button>
          </div>
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
        <div class="flex items-center space-x-4 flex-1">
          <div class="relative">
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input 
              type="text" 
              placeholder="Search products..." 
              class="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
          </div>
          
        </div>
        
        <div class="flex items-center space-x-3">
          <button class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <i class="fas fa-filter mr-2"></i>
            Filters
          </button>
          <button class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
            + Add Product
          </button>
        </div>
      </div>

      <!-- Products Table -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div class="overflow-x-auto">
          <!-- Table Header -->
          <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div class="flex min-w-max text-xs font-medium text-gray-500 uppercase tracking-wide">
              <div class="w-12 flex-shrink-0 flex items-center">
                <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
              </div>
              <div class="w-16 flex-shrink-0">IMAGE</div>
              <div class="w-80 flex-shrink-0 flex items-center">
                PRODUCT NAME
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-24 flex-shrink-0 flex items-center">
                UNIT
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-24 flex-shrink-0 flex items-center">
                BRAND
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-48 flex-shrink-0 flex items-center">
                CATEGORY
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-24 flex-shrink-0">CONDITION</div>
              <div class="w-24 flex-shrink-0">LOCATION</div>
              <div class="w-24 flex-shrink-0 flex items-center">
                MSRP ($)
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-28 flex-shrink-0 flex items-center">
                OUR COST ($)
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-24 flex-shrink-0 flex items-center">
                IMAP ($)
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-28 flex-shrink-0 flex items-center">
                SALE PRICE ($)
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-32 flex-shrink-0 flex items-center">
                CREATED DATE
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-28 flex-shrink-0 flex items-center">
                CREATED BY
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-32 flex-shrink-0 flex items-center">
                UPDATED DATE
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-28 flex-shrink-0 flex items-center">
                UPDATED BY
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-24 flex-shrink-0 flex items-center">
                STATUS
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
              <div class="w-28 flex-shrink-0 flex items-center">
                DISCONTINUE
                <div class="ml-2 flex flex-col">
                  <i class="fas fa-chevron-up text-xs text-gray-400 leading-none"></i>
                  <i class="fas fa-chevron-down text-xs text-gray-400 leading-none"></i>
                </div>
              </div>
            </div>
          </div>
            <div class="col-span-1">
              <span>Condition</span>
            </div>
            <div class="col-span-1">
              <span>Sale Price</span>
            </div>
            <div class="col-span-1">
              <span>AI Score</span>
            </div>
            <div class="col-span-1">
              <span>Actions</span>
            </div>
          </div>
        </div>

        <!-- Table Body -->
        <div class="divide-y divide-gray-100">
          <div v-for="product in products" :key="product.id" class="px-6 py-6 hover:bg-gray-50 transition-colors duration-200">
            <div class="grid grid-cols-12 gap-4 items-center">
          <!-- Table Body -->
          <div class="divide-y divide-gray-100">
            <div v-for="product in products" :key="product.id" class="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
              <div class="flex min-w-max items-center text-sm">
                <!-- Checkbox -->
                <div class="w-12 flex-shrink-0">
                  <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                </div>
                
                <!-- Image -->
                <div class="w-16 flex-shrink-0">
                  <img :src="product.image" :alt="product.name" class="w-12 h-12 rounded-md object-cover">
                </div>
                
                <!-- Product Name -->
                <div class="w-80 flex-shrink-0">
                  <h3 class="text-sm font-medium text-gray-900 truncate">{{ product.name }}</h3>
                </div>
                
                <!-- Unit -->
                <div class="w-24 flex-shrink-0">
                  <span class="text-sm text-gray-600">{{ product.unit }}</span>
                </div>
                
                <!-- Brand -->
                <div class="w-24 flex-shrink-0">
                  <span class="text-sm text-gray-900">{{ product.brand }}</span>
                </div>
                
                <!-- Category -->
                <div class="w-48 flex-shrink-0">
                  <span class="text-sm text-gray-600 truncate block">{{ product.category }}</span>
                </div>
                
                <!-- Condition -->
                <div class="w-24 flex-shrink-0">
                  <span v-if="product.condition" :class="getConditionBadge(product.condition)" class="inline-flex px-2 py-1 text-xs font-medium rounded-full">
                    {{ product.condition }}
                  </span>
                </div>
                
                <!-- Location -->
                <div class="w-24 flex-shrink-0">
                  <span class="text-sm text-gray-600">{{ product.location || '-' }}</span>
                </div>
                
                <!-- MSRP -->
                <div class="w-24 flex-shrink-0">
                  <span class="text-sm text-gray-900">${{ product.msrp }}</span>
                </div>
                
                <!-- Our Cost -->
                <div class="w-28 flex-shrink-0">
                  <span class="text-sm text-gray-900">${{ product.ourCost }}</span>
                </div>
                
                <!-- IMAP -->
                <div class="w-24 flex-shrink-0">
                  <span class="text-sm text-gray-900">${{ product.imap }}</span>
                </div>
                
                <!-- Sale Price -->
                <div class="w-28 flex-shrink-0">
                  <span class="text-sm font-medium text-gray-900">${{ product.salePrice }}</span>
                </div>
                
                <!-- Created Date -->
                <div class="w-32 flex-shrink-0">
                  <span class="text-sm text-gray-600">{{ product.createdDate }}</span>
                </div>
                
                <!-- Created By -->
                <div class="w-28 flex-shrink-0">
                  <div class="flex items-center space-x-2">
                    <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span class="text-xs text-white font-medium">{{ getInitials(product.createdBy) }}</span>
                    </div>
                    <span class="text-sm text-gray-600 truncate">{{ product.createdBy }}</span>
                  </div>
                </div>
                
                <!-- Updated Date -->
                <div class="w-32 flex-shrink-0">
                  <span class="text-sm text-gray-600">{{ product.updated }}</span>
                </div>
                
                <!-- Updated By -->
                <div class="w-28 flex-shrink-0">
                  <span class="text-sm text-gray-600">-</span>
                </div>
                
                <!-- Status -->
                <div class="w-24 flex-shrink-0">
                  <span class="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
                
                <!-- Discontinue -->
                <div class="w-28 flex-shrink-0">
                  <span class="text-sm text-gray-600">No</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 px-6 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <select class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 bg-white">
            <option>12 Per Page</option>
            <option>24 Per Page</option>
            <option>48 Per Page</option>
            <option>100 Per Page</option>
          </select>
          <span class="text-sm text-gray-700">
            Showing <span class="font-medium">1-12</span> of <span class="font-medium">80,263</span> products
          </span>
        </div>
        <div class="flex items-center space-x-2">
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="px-3 py-2 text-sm bg-blue-600 text-white rounded-md">1</button>
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">2</button>
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">3</button>
          <span class="px-2 text-sm text-gray-500">...</span>
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">6689</button>
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">6690</button>
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
            <i class="fas fa-chevron-right"></i>
          </button>
          <div class="ml-4 flex items-center space-x-2">
            <span class="text-sm text-gray-500">Go to page:</span>
            <input type="number" min="1" max="6690" class="w-16 px-2 py-1 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
          </div>
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
          updatedTime: '03:07',
          aiScore: 85
        },
        {
          id: 2,
          selected: false,
          showMenu: false,
          isLowStock: true,
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
          updatedTime: '12:10',
          aiScore: 92
        },
        {
          id: 3,
          selected: false,
          showMenu: false,
          isLowStock: false,
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
          updatedTime: '22:28',
          aiScore: 78
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
          updatedTime: '11:58',
          aiScore: 65
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
          updatedTime: '11:59',
          aiScore: 67
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
          updatedTime: '11:59',
          aiScore: 71
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
          updatedTime: '11:59',
          aiScore: 69
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
          updatedTime: '22:05',
          aiScore: 58
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
          updatedTime: '07:30',
          aiScore: 74
        }
      ]
    }
  },
  methods: {
    toggleSelectAll() {
      this.allSelected = !this.allSelected
      this.products.forEach(product => {
        product.selected = this.allSelected
      })
      this.updateBulkActions()
    },
    updateBulkActions() {
      this.selectedCount = this.products.filter(p => p.selected).length
    },
    toggleProductMenu(productId) {
      this.products.forEach(product => {
        if (product.id === productId) {
          product.showMenu = !product.showMenu
        } else {
          product.showMenu = false
        }
      })
    },
    viewProduct(id) {
      console.log('Viewing product:', id)
      // Add view product logic
    },
    editProduct(id) {
      console.log('Editing product:', id)
      // Add edit product logic
    },
    openAIModal(product) {
      console.log('Opening AI modal for:', product.name)
      // Add AI modal logic
    },
    duplicateProduct(id) {
      console.log('Duplicating product:', id)
      // Add duplicate logic
    },
    archiveProduct(id) {
      console.log('Archiving product:', id)
      // Add archive logic
    },
    deleteProduct(id) {
      console.log('Deleting product:', id)
      // Add delete logic
    },
    getAIScoreColor(score) {
      if (score >= 80) return 'bg-green-500'
      if (score >= 60) return 'bg-yellow-500'
      return 'bg-red-500'
    },
    getAIScoreTextColor(score) {
      if (score >= 80) return 'text-green-600'
      if (score >= 60) return 'text-yellow-600'
      return 'text-red-600'
    },
    getConditionBadge(condition) {
      if (condition === 'New') return 'bg-green-100 text-green-800'
      if (condition === 'Used') return 'bg-blue-100 text-blue-800'
      return 'bg-gray-100 text-gray-800'
    },
    getAIRecommendation(score) {
      if (score >= 80) return 'Excellent optimization - product is performing well'
      if (score >= 60) return 'Good potential - consider price or description optimization'
      return 'Needs attention - multiple optimization opportunities available'
    },
    getInitials(name) {
      return name.split(' ').map(n => n[0]).join('').toUpperCase()
    }
  }
}
</script>