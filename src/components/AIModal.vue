<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-robot text-white"></i>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-gray-900">AI Product Assistant</h2>
              <p class="text-sm text-gray-600">Get intelligent insights and recommendations</p>
            </div>
          </div>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
      </div>
      
      <div class="p-6">
        <div class="space-y-6">
          <!-- AI Chat Interface -->
          <div class="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-robot text-white text-sm"></i>
                </div>
                <div class="bg-white rounded-lg p-3 shadow-sm">
                  <p class="text-sm text-gray-800">Hello! I'm your AI assistant. I can help you with:</p>
                  <ul class="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Product optimization recommendations</li>
                    <li>• Pricing strategy analysis</li>
                    <li>• Inventory forecasting</li>
                    <li>• Category suggestions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Quick Actions -->
          <div class="grid grid-cols-2 gap-4">
            <button class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
              <div class="flex items-center space-x-3">
                <i class="fas fa-chart-line text-blue-500"></i>
                <div>
                  <h3 class="font-medium text-gray-900">Optimize Pricing</h3>
                  <p class="text-sm text-gray-600">AI-powered price recommendations</p>
                </div>
              </div>
            </button>
            
            <button class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
              <div class="flex items-center space-x-3">
                <i class="fas fa-tags text-green-500"></i>
                <div>
                  <h3 class="font-medium text-gray-900">Auto-Categorize</h3>
                  <p class="text-sm text-gray-600">Smart product categorization</p>
                </div>
              </div>
            </button>
            
            <button class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
              <div class="flex items-center space-x-3">
                <i class="fas fa-warehouse text-purple-500"></i>
                <div>
                  <h3 class="font-medium text-gray-900">Inventory Forecast</h3>
                  <p class="text-sm text-gray-600">Predict demand patterns</p>
                </div>
              </div>
            </button>
            
            <button class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
              <div class="flex items-center space-x-3">
                <i class="fas fa-edit text-orange-500"></i>
                <div>
                  <h3 class="font-medium text-gray-900">Improve Descriptions</h3>
                  <p class="text-sm text-gray-600">AI-enhanced product copy</p>
                </div>
              </div>
            </button>
          </div>
          
          <!-- Input Area -->
          <div class="flex space-x-3">
            <input 
              type="text" 
              placeholder="Ask me anything about your products..."
              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
            <button class="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AIModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>