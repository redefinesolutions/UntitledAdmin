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
          <button class="flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-md hover:from-green-600 hover:to-teal-600">
            <i class="fas fa-robot mr-2"></i>
            AI Assistant
          </button>
        </div>
      </div>

      <!-- Products Table -->
      <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <!-- Table Header -->
        <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
          <div class="grid grid-cols-12 gap-4 items-center text-sm font-semibold text-gray-700">
            <div class="col-span-1">
              <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
            </div>
            <div class="col-span-4 flex items-center space-x-2">
              <span>Product</span>
              <i class="fas fa-sort text-gray-400 text-xs"></i>
            </div>
            <div class="col-span-1 text-center">
              <span>Brand</span>
            </div>
            <div class="col-span-1 text-center">
              <span>Location</span>
            </div>
            <div class="col-span-1 text-center">
              <span>MSRP</span>
            </div>
            <div class="col-span-1 text-center">
              <span>Sale Price</span>
            </div>
            <div class="col-span-1 text-center">
              <span>AI Score</span>
            </div>
            <div class="col-span-1 text-center">
              <span>Created By</span>
            </div>
            <div class="col-span-1 text-center">
              <span>Actions</span>
            </div>
          </div>
        </div>

        <!-- Table Body -->
        <div class="divide-y divide-gray-100">
          <div v-for="product in products" :key="product.id" class="px-6 py-4 hover:bg-blue-50 transition-colors duration-200 group">
            <div class="grid grid-cols-12 gap-4 items-center">
              <!-- Checkbox -->
              <div class="col-span-1">
                <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
              </div>
              
              <!-- Product Info -->
              <div class="col-span-4">
                <div class="flex items-center space-x-4">
                  <div class="relative">
                    <img :src="product.image" :alt="product.name" class="w-14 h-14 rounded-lg object-cover shadow-sm">
                    <div v-if="product.condition === 'New'" class="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-700 transition-colors duration-200">
                      {{ product.name }}
                    </h3>
                    <p class="text-xs text-gray-500 font-mono">ID: {{ product.unit }}</p>
                    <div class="flex items-center space-x-2 mt-1">
                      <span v-if="product.condition" :class="getConditionBadge(product.condition)" class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium">
                        {{ product.condition }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Brand -->
              <div class="col-span-1 text-center">
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {{ product.brand }}
                </span>
              </div>
              
              <!-- Location -->
              <div class="col-span-1 text-center">
                <span class="text-sm text-gray-600">{{ product.location || 'N/A' }}</span>
              </div>
              
              <!-- MSRP -->
              <div class="col-span-1 text-center">
                <span class="text-sm font-semibold text-gray-900">${{ product.msrp }}</span>
              </div>
              
              <!-- Sale Price -->
              <div class="col-span-1 text-center">
                <span class="text-sm font-bold text-green-600">${{ product.salePrice }}</span>
              </div>
              
              <!-- AI Score -->
              <div class="col-span-1 text-center">
                <div class="flex items-center justify-center space-x-2">
                  <div class="w-12 bg-gray-200 rounded-full h-2">
                    <div :class="getAIScoreColor(product.aiScore)" :style="`width: ${product.aiScore}%`" class="h-2 rounded-full transition-all duration-300"></div>
                  </div>
                  <span class="text-xs font-bold" :class="getAIScoreTextColor(product.aiScore)">{{ product.aiScore }}%</span>
                </div>
              </div>
              
              <!-- Created By -->
              <div class="col-span-1 text-center">
                <div class="flex items-center justify-center space-x-2">
                  <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span class="text-white text-xs font-bold">{{ product.createdBy.charAt(0) }}</span>
                  </div>
                  <div class="text-left">
                    <div class="text-xs font-medium text-gray-900">{{ product.createdBy }}</div>
                    <div class="text-xs text-gray-500">{{ product.createdDate }}</div>
                  </div>
                </div>
              </div>
              
              <!-- Actions -->
              <div class="col-span-1 text-center">
                <div class="flex items-center justify-center space-x-1">
                  <button class="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <i class="fas fa-eye text-blue-600 text-xs"></i>
                  </button>
                  <button class="w-8 h-8 bg-green-100 hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <i class="fas fa-edit text-green-600 text-xs"></i>
                  </button>
                  <button class="w-8 h-8 bg-purple-100 hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <i class="fas fa-robot text-purple-600 text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <select class="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm">
            <option>12 Per Page</option>
            <option>24 Per Page</option>
            <option>48 Per Page</option>
          </select>
          <span class="text-sm font-medium text-gray-700">Total Records: <span class="text-blue-600 font-bold">80,263</span></span>
        </div>
        <div class="flex items-center space-x-2">
          <button class="px-4 py-2 text-sm border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-sm">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-sm">1</button>
          <button class="px-4 py-2 text-sm border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-sm">2</button>
          <span class="px-2 text-sm text-gray-500">...</span>
          <button class="px-4 py-2 text-sm border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-sm">6689</button>
          <button class="px-4 py-2 text-sm border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-sm">6690</button>
          <button class="px-4 py-2 text-sm border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-sm">
            <i class="fas fa-chevron-right"></i>
          </button>
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
    }
  }
}
</script>