<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
      <!-- Header -->
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-filter text-blue-600"></i>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-gray-900">Filter Products</h2>
              <p class="text-sm text-gray-600">Refine your product search with advanced filters</p>
            </div>
          </div>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
      </div>
      
      <!-- Filter Content -->
      <div class="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- Status & Condition -->
          <div class="space-y-6">
            <div>
              <h3 class="text-sm font-medium text-gray-900 mb-3">Status</h3>
              <div class="space-y-2">
                <label v-for="status in statusOptions" :key="status.value" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="status.value"
                    v-model="filters.status"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  >
                  <span class="ml-2 text-sm text-gray-700">{{ status.label }}</span>
                  <span class="ml-auto text-xs text-gray-500">({{ status.count }})</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 class="text-sm font-medium text-gray-900 mb-3">Condition</h3>
              <div class="space-y-2">
                <label v-for="condition in conditionOptions" :key="condition.value" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="condition.value"
                    v-model="filters.condition"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  >
                  <span class="ml-2 text-sm text-gray-700">{{ condition.label }}</span>
                  <span class="ml-auto text-xs text-gray-500">({{ condition.count }})</span>
                </label>
              </div>
            </div>
          </div>
          
          <!-- Categories & Brands -->
          <div class="space-y-6">
            <div>
              <h3 class="text-sm font-medium text-gray-900 mb-3">Categories</h3>
              <div class="relative mb-3">
                <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                <input 
                  type="text" 
                  placeholder="Search categories..."
                  v-model="categorySearch"
                  class="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
              </div>
              <div class="max-h-40 overflow-y-auto space-y-2">
                <label v-for="category in filteredCategories" :key="category.value" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="category.value"
                    v-model="filters.categories"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  >
                  <span class="ml-2 text-sm text-gray-700 truncate">{{ category.label }}</span>
                  <span class="ml-auto text-xs text-gray-500">({{ category.count }})</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 class="text-sm font-medium text-gray-900 mb-3">Brands</h3>
              <div class="relative mb-3">
                <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                <input 
                  type="text" 
                  placeholder="Search brands..."
                  v-model="brandSearch"
                  class="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
              </div>
              <div class="max-h-40 overflow-y-auto space-y-2">
                <label v-for="brand in filteredBrands" :key="brand.value" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="brand.value"
                    v-model="filters.brands"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  >
                  <span class="ml-2 text-sm text-gray-700">{{ brand.label }}</span>
                  <span class="ml-auto text-xs text-gray-500">({{ brand.count }})</span>
                </label>
              </div>
            </div>
          </div>
          
          <!-- Price & Date Ranges -->
          <div class="space-y-6">
            <div>
              <h3 class="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
              <div class="space-y-3">
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Min Price</label>
                    <input 
                      type="number" 
                      placeholder="0.00"
                      v-model="filters.priceMin"
                      class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Max Price</label>
                    <input 
                      type="number" 
                      placeholder="999999.99"
                      v-model="filters.priceMax"
                      class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                  </div>
                </div>
                <div class="space-y-2">
                  <label v-for="range in priceRanges" :key="range.value" class="flex items-center">
                    <input 
                      type="radio" 
                      :value="range.value"
                      v-model="filters.priceRange"
                      @change="setPriceRange(range)"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    >
                    <span class="ml-2 text-sm text-gray-700">{{ range.label }}</span>
                    <span class="ml-auto text-xs text-gray-500">({{ range.count }})</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-sm font-medium text-gray-900 mb-3">Date Created</h3>
              <div class="space-y-3">
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">From Date</label>
                    <input 
                      type="date" 
                      v-model="filters.dateFrom"
                      class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">To Date</label>
                    <input 
                      type="date" 
                      v-model="filters.dateTo"
                      class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                  </div>
                </div>
                <div class="space-y-2">
                  <label v-for="period in datePeriods" :key="period.value" class="flex items-center">
                    <input 
                      type="radio" 
                      :value="period.value"
                      v-model="filters.datePeriod"
                      @change="setDatePeriod(period)"
                      class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    >
                    <span class="ml-2 text-sm text-gray-700">{{ period.label }}</span>
                    <span class="ml-auto text-xs text-gray-500">({{ period.count }})</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-sm font-medium text-gray-900 mb-3">Location</h3>
              <select 
                v-model="filters.location"
                class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Locations</option>
                <option v-for="location in locationOptions" :key="location.value" :value="location.value">
                  {{ location.label }} ({{ location.count }})
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="p-6 border-t border-gray-200 bg-gray-50">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-600">{{ activeFiltersCount }} filters active</span>
            <button 
              @click="clearAllFilters"
              class="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear All
            </button>
          </div>
          <div class="flex items-center space-x-3">
            <button 
              @click="closeModal"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              @click="applyFilters"
              class="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Apply Filters ({{ filteredResultsCount }})
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      categorySearch: '',
      brandSearch: '',
      filters: {
        status: [],
        condition: [],
        categories: [],
        brands: [],
        priceMin: '',
        priceMax: '',
        priceRange: '',
        dateFrom: '',
        dateTo: '',
        datePeriod: '',
        location: ''
      },
      statusOptions: [
        { value: 'active', label: 'Active', count: 45623 },
        { value: 'inactive', label: 'Inactive', count: 12456 },
        { value: 'draft', label: 'Draft', count: 8934 },
        { value: 'discontinued', label: 'Discontinued', count: 3250 }
      ],
      conditionOptions: [
        { value: 'new', label: 'New', count: 28456 },
        { value: 'used', label: 'Used', count: 35678 },
        { value: 'refurbished', label: 'Refurbished', count: 8934 },
        { value: 'damaged', label: 'Damaged', count: 2195 }
      ],
      categoryOptions: [
        { value: 'equipment', label: 'Equipment', count: 15234 },
        { value: 'equipment-tractors', label: 'Equipment > Tractors', count: 8456 },
        { value: 'equipment-tractors-compact', label: 'Equipment > Tractors > Compact Tractors', count: 3456 },
        { value: 'equipment-grinders', label: 'Equipment > Grinders', count: 2345 },
        { value: 'equipment-skid-steer', label: 'Equipment > Skid Steer Loaders', count: 4567 },
        { value: 'parts', label: 'Parts', count: 25678 },
        { value: 'parts-kubota', label: 'Parts > Kubota', count: 8934 },
        { value: 'parts-toro', label: 'Parts > Toro', count: 6789 },
        { value: 'attachments', label: 'Attachments', count: 12456 },
        { value: 'attachments-blades', label: 'Attachments > Blades', count: 3456 }
      ],
      brandOptions: [
        { value: 'kubota', label: 'Kubota', count: 12456 },
        { value: 'john-deere', label: 'John Deere', count: 8934 },
        { value: 'toro', label: 'Toro', count: 6789 },
        { value: 'bobcat', label: 'Bobcat', count: 5678 },
        { value: 'bandit', label: 'Bandit', count: 4567 },
        { value: 'others', label: 'Others', count: 15234 }
      ],
      priceRanges: [
        { value: 'under-100', label: 'Under $100', count: 8934, min: 0, max: 100 },
        { value: '100-500', label: '$100 - $500', count: 12456, min: 100, max: 500 },
        { value: '500-1000', label: '$500 - $1,000', count: 15678, min: 500, max: 1000 },
        { value: '1000-5000', label: '$1,000 - $5,000', count: 18934, min: 1000, max: 5000 },
        { value: '5000-10000', label: '$5,000 - $10,000', count: 12345, min: 5000, max: 10000 },
        { value: 'over-10000', label: 'Over $10,000', count: 8456, min: 10000, max: null }
      ],
      datePeriods: [
        { value: 'today', label: 'Today', count: 234 },
        { value: 'week', label: 'This Week', count: 1456 },
        { value: 'month', label: 'This Month', count: 5678 },
        { value: 'quarter', label: 'This Quarter', count: 15234 },
        { value: 'year', label: 'This Year', count: 45678 }
      ],
      locationOptions: [
        { value: 'shakopee', label: 'Shakopee', count: 15234 },
        { value: 'anoka', label: 'Anoka', count: 12456 },
        { value: 'loretto', label: 'Loretto', count: 8934 },
        { value: 'minneapolis', label: 'Minneapolis', count: 6789 },
        { value: 'st-paul', label: 'St. Paul', count: 4567 }
      ]
    }
  },
  computed: {
    filteredCategories() {
      if (!this.categorySearch) return this.categoryOptions
      return this.categoryOptions.filter(category => 
        category.label.toLowerCase().includes(this.categorySearch.toLowerCase())
      )
    },
    filteredBrands() {
      if (!this.brandSearch) return this.brandOptions
      return this.brandOptions.filter(brand => 
        brand.label.toLowerCase().includes(this.brandSearch.toLowerCase())
      )
    },
    activeFiltersCount() {
      let count = 0
      if (this.filters.status.length) count++
      if (this.filters.condition.length) count++
      if (this.filters.categories.length) count++
      if (this.filters.brands.length) count++
      if (this.filters.priceMin || this.filters.priceMax || this.filters.priceRange) count++
      if (this.filters.dateFrom || this.filters.dateTo || this.filters.datePeriod) count++
      if (this.filters.location) count++
      return count
    },
    filteredResultsCount() {
      // This would normally calculate based on actual filtered results
      // For demo purposes, showing a mock count
      return Math.max(1, 80263 - (this.activeFiltersCount * 5000))
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    applyFilters() {
      this.$emit('apply-filters', this.filters)
      this.closeModal()
    },
    clearAllFilters() {
      this.filters = {
        status: [],
        condition: [],
        categories: [],
        brands: [],
        priceMin: '',
        priceMax: '',
        priceRange: '',
        dateFrom: '',
        dateTo: '',
        datePeriod: '',
        location: ''
      }
      this.categorySearch = ''
      this.brandSearch = ''
    },
    setPriceRange(range) {
      this.filters.priceMin = range.min || ''
      this.filters.priceMax = range.max || ''
    },
    setDatePeriod(period) {
      const today = new Date()
      let fromDate = new Date()
      
      switch(period.value) {
        case 'today':
          fromDate = today
          break
        case 'week':
          fromDate.setDate(today.getDate() - 7)
          break
        case 'month':
          fromDate.setMonth(today.getMonth() - 1)
          break
        case 'quarter':
          fromDate.setMonth(today.getMonth() - 3)
          break
        case 'year':
          fromDate.setFullYear(today.getFullYear() - 1)
          break
      }
      
      this.filters.dateFrom = fromDate.toISOString().split('T')[0]
      this.filters.dateTo = today.toISOString().split('T')[0]
    }
  }
}
</script>