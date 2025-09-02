<template>
  <div class="flex-1 overflow-auto">
    <div class="p-6">
      <!-- Page Header -->
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-semibold text-gray-900">Product</h1>
        <div class="flex items-center space-x-3">
          <button class="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-md hover:from-purple-700 hover:to-blue-700 flex items-center">
            <i class="fas fa-magic mr-2"></i>
            AI Insights
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

      <!-- AI Dashboard Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
          <div class="flex items-center justify-between mb-4">
            <div class="p-2 bg-blue-600 rounded-lg">
              <i class="fas fa-brain text-white"></i>
            </div>
            <span class="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">AI Powered</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Smart Pricing</h3>
          <p class="text-sm text-gray-600 mb-3">AI suggests optimal pricing for 1,247 products</p>
          <div class="flex items-center text-green-600">
            <i class="fas fa-arrow-up text-xs mr-1"></i>
            <span class="text-sm font-medium">+12.5% potential revenue</span>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200">
          <div class="flex items-center justify-between mb-4">
            <div class="p-2 bg-green-600 rounded-lg">
              <i class="fas fa-chart-line text-white"></i>
            </div>
            <span class="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Live</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Demand Forecast</h3>
          <p class="text-sm text-gray-600 mb-3">Predicted high demand for 23 products</p>
          <div class="flex items-center text-orange-600">
            <i class="fas fa-exclamation-triangle text-xs mr-1"></i>
            <span class="text-sm font-medium">Restock alerts active</span>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl border border-purple-200">
          <div class="flex items-center justify-between mb-4">
            <div class="p-2 bg-purple-600 rounded-lg">
              <i class="fas fa-tags text-white"></i>
            </div>
            <span class="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">Auto</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Smart Categories</h3>
          <p class="text-sm text-gray-600 mb-3">AI categorized 156 new products</p>
          <div class="flex items-center text-blue-600">
            <i class="fas fa-check-circle text-xs mr-1"></i>
            <span class="text-sm font-medium">98.7% accuracy</span>
          </div>
        </div>

        <div class="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl border border-orange-200">
          <div class="flex items-center justify-between mb-4">
            <div class="p-2 bg-orange-600 rounded-lg">
              <i class="fas fa-exclamation-circle text-white"></i>
            </div>
            <span class="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">Alert</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Quality Issues</h3>
          <p class="text-sm text-gray-600 mb-3">AI detected 8 products needing review</p>
          <div class="flex items-center text-red-600">
            <i class="fas fa-arrow-down text-xs mr-1"></i>
            <span class="text-sm font-medium">Action required</span>
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
          <button class="flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md hover:from-indigo-700 hover:to-purple-700">
            <i class="fas fa-robot mr-2"></i>
            AI Optimize
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
        <!-- AI Recommendations Banner -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <i class="fas fa-lightbulb mr-3 text-yellow-300"></i>
              <div>
                <h4 class="font-medium">AI Recommendations Active</h4>
                <p class="text-sm text-blue-100">Smart suggestions are being applied to optimize your product catalog</p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="text-center">
                <div class="text-lg font-bold">1,247</div>
                <div class="text-xs text-blue-100">Products Analyzed</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold">94%</div>
                <div class="text-xs text-blue-100">Accuracy Score</div>
              </div>
              <button class="text-white hover:text-blue-200">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left">
                  <input type="checkbox" class="rounded border-gray-300">
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div class="flex items-center">
                    AI Score
                    <i class="fas fa-info-circle ml-1 text-gray-400" title="AI-powered product performance score"></i>
                  </div>
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
                  <div class="flex items-center">
                    <div class="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                      <div :class="getAIScoreColor(product.aiScore)" class="h-2 rounded-full" :style="`width: ${product.aiScore}%`"></div>
                    </div>
                    <span class="text-sm font-medium" :class="getAIScoreTextColor(product.aiScore)">{{ product.aiScore }}%</span>
                  </div>
                  <div class="flex mt-1 space-x-1">
                    <span v-if="product.aiRecommendations.includes('pricing')" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      <i class="fas fa-dollar-sign mr-1"></i>
                      Price
                    </span>
                    <span v-if="product.aiRecommendations.includes('category')" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      <i class="fas fa-tags mr-1"></i>
                      Category
                    </span>
                    <span v-if="product.aiRecommendations.includes('demand')" class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                      <i class="fas fa-chart-line mr-1"></i>
                      Demand
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <img :src="product.image" :alt="product.name" class="w-12 h-12 rounded-md object-cover">
                  <div v-if="product.aiImageQuality" class="mt-1">
                    <span class="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium" :class="product.aiImageQuality === 'high' ? 'bg-green-100 text-green-800' : product.aiImageQuality === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'">
                      <i class="fas fa-camera mr-1"></i>
                      {{ product.aiImageQuality }}
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm font-medium text-gray-900">{{ product.name }}</div>
                  <div v-if="product.aiSentiment" class="mt-1 flex items-center">
                    <i :class="product.aiSentiment === 'positive' ? 'fas fa-smile text-green-500' : product.aiSentiment === 'neutral' ? 'fas fa-meh text-yellow-500' : 'fas fa-frown text-red-500'" class="mr-1"></i>
                    <span class="text-xs text-gray-500 capitalize">{{ product.aiSentiment }} sentiment</span>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.unit }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.brand }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.category }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.condition }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{{ product.location }}</td>
                <td class="px-6 py-4 text-sm text-gray-900">
                  <div class="flex items-center">
                    {{ product.msrp }}
                    <span v-if="product.aiPricingRecommendation" class="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      <i class="fas fa-arrow-up mr-1"></i>
                      +{{ product.aiPricingRecommendation }}%
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-900">
                  {{ product.ourCost }}
                </td>
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
          aiScore: 87,
          aiRecommendations: ['pricing', 'demand'],
          aiImageQuality: 'high',
          aiSentiment: 'positive',
          aiPricingRecommendation: 8,
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
          aiScore: 92,
          aiRecommendations: ['category'],
          aiImageQuality: 'medium',
          aiSentiment: 'positive',
          aiPricingRecommendation: null,
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
          aiScore: 76,
          aiRecommendations: ['pricing', 'category'],
          aiImageQuality: 'high',
          aiSentiment: 'neutral',
          aiPricingRecommendation: 12,
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
          aiScore: 45,
          aiRecommendations: ['demand'],
          aiImageQuality: 'low',
          aiSentiment: 'negative',
          aiPricingRecommendation: null,
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
          aiScore: 68,
          aiRecommendations: ['category', 'demand'],
          aiImageQuality: 'medium',
          aiSentiment: 'neutral',
          aiPricingRecommendation: 5,
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
          aiScore: 83,
          aiRecommendations: ['pricing'],
          aiImageQuality: 'high',
          aiSentiment: 'positive',
          aiPricingRecommendation: 15,
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
          aiScore: 91,
          aiRecommendations: ['demand'],
          aiImageQuality: 'high',
          aiSentiment: 'positive',
          aiPricingRecommendation: null,
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
          aiScore: 54,
          aiRecommendations: ['pricing', 'category', 'demand'],
          aiImageQuality: 'low',
          aiSentiment: 'negative',
          aiPricingRecommendation: 20,
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
          aiScore: 79,
          aiRecommendations: ['pricing'],
          aiImageQuality: 'medium',
          aiSentiment: 'positive',
          aiPricingRecommendation: 10,
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
    }
  }
}
</script>