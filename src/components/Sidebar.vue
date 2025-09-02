<template>
  <div class="w-64 bg-white border-r border-gray-200 flex flex-col">
    <!-- Logo -->
    <div class="p-6 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
          <span class="text-white font-bold text-sm">L</span>
        </div>
        <span class="font-semibold text-gray-900">Lano</span>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4 space-y-1">
      <!-- Dashboard -->
      <div class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
        <i class="fas fa-chart-bar w-5 h-5 mr-3 text-gray-400"></i>
        Dashboard
      </div>

      <!-- Master Product Feed -->
      <div class="space-y-1">
        <div class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
          <div class="flex items-center">
            <i class="fas fa-box w-5 h-5 mr-3 text-gray-400"></i>
            Master Product Feed
          </div>
          <i class="fas fa-chevron-down w-3 h-3 text-gray-400"></i>
        </div>
      </div>

      <!-- Stores -->
      <div class="space-y-1">
        <div class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
          <div class="flex items-center">
            <i class="fas fa-store w-5 h-5 mr-3 text-gray-400"></i>
            Stores
          </div>
          <i class="fas fa-chevron-down w-3 h-3 text-gray-400"></i>
        </div>
        
        <!-- Lano Submenu -->
        <div class="ml-8 space-y-1">
          <div class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
            <span>Lano</span>
            <i class="fas fa-chevron-down w-3 h-3 text-gray-400"></i>
          </div>
          
          <!-- Sub-navigation -->
          <div class="ml-4 space-y-1">
            <div class="px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">Dashboard</div>
            <div class="px-3 py-2 text-sm text-blue-600 bg-blue-50 rounded-md font-medium">Product</div>
            <div class="px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">Category Master</div>
            <div class="px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">Category Order</div>
            <div class="px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">Product Order</div>
            <div class="px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">Brand Master</div>
            <div class="px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">Promotions Deal</div>
            <div class="px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">Career Page Forms</div>
            <div class="px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100">Vendor Mapping</div>
          </div>
        </div>
      </div>

      <!-- Content Management -->
      <div class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
        <div class="flex items-center">
          <i class="fas fa-file-alt w-5 h-5 mr-3 text-gray-400"></i>
          Content Management
        </div>
        <i class="fas fa-chevron-down w-3 h-3 text-gray-400"></i>
      </div>

      <!-- Orders -->
      <div class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
        <div class="flex items-center">
          <i class="fas fa-shopping-cart w-5 h-5 mr-3 text-gray-400"></i>
          Orders
        </div>
        <i class="fas fa-chevron-down w-3 h-3 text-gray-400"></i>
      </div>

      <!-- Customer -->
      <div class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
        <div class="flex items-center">
          <i class="fas fa-users w-5 h-5 mr-3 text-gray-400"></i>
          Customer
        </div>
        <i class="fas fa-chevron-down w-3 h-3 text-gray-400"></i>
      </div>

      <!-- Promotions -->
      <div class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
        <div class="flex items-center">
          <i class="fas fa-tags w-5 h-5 mr-3 text-gray-400"></i>
          Promotions
        </div>
        <i class="fas fa-chevron-down w-3 h-3 text-gray-400"></i>
      </div>

      <!-- Settings -->
      <div class="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
        <div class="flex items-center">
          <i class="fas fa-cog w-5 h-5 mr-3 text-gray-400"></i>
          Settings
        </div>
        <i class="fas fa-chevron-down w-3 h-3 text-gray-400"></i>
      </div>

      <!-- Configurator -->
      <div class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
        <i class="fas fa-wrench w-5 h-5 mr-3 text-gray-400"></i>
        Configurator
      </div>

      <!-- Reports -->
      <div class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100">
        <i class="fas fa-chart-line w-5 h-5 mr-3 text-gray-400"></i>
        Reports
      </div>
    </nav>

    <!-- User Profile Section at Bottom -->
    <div class="p-4 border-t border-gray-200 relative">
      <div @click="toggleProfileMenu" class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
       <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
         <i class="fas fa-user text-white text-sm"></i>
       </div>
       <div class="flex-1 min-w-0">
         <p class="text-sm font-medium text-gray-900 truncate">Vipul Solanki</p>
         <p class="text-xs text-gray-500 truncate">Admin • Online</p>
       </div>
       <div class="flex items-center space-x-2">
         <div class="w-2 h-2 bg-green-400 rounded-full"></div>
         <i :class="showProfileMenu ? 'fas fa-chevron-down' : 'fas fa-chevron-up'" class="text-gray-400 text-xs transition-transform"></i>
       </div>
      </div>
      
      <!-- Profile Menu Popup -->
      <div v-if="showProfileMenu" class="absolute bottom-full left-4 right-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <div class="py-2">
          <button @click="handleProfileAction('settings')" class="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <i class="fas fa-user-cog w-4 h-4 mr-3 text-gray-400"></i>
            Profile Settings
          </button>
          <button @click="handleProfileAction('notifications')" class="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <i class="fas fa-bell w-4 h-4 mr-3 text-gray-400"></i>
            Notifications
          </button>
          <div class="border-t border-gray-100 my-1"></div>
          <button @click="handleProfileAction('signout')" class="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
            <i class="fas fa-sign-out-alt w-4 h-4 mr-3 text-red-400"></i>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      showProfileMenu: false
    }
  },
  methods: {
    toggleProfileMenu() {
      this.showProfileMenu = !this.showProfileMenu
    },
    handleProfileAction(action) {
      this.showProfileMenu = false
      
      switch(action) {
        case 'settings':
          console.log('Opening profile settings...')
          // Add profile settings logic here
          break
        case 'notifications':
          console.log('Opening notifications...')
          // Add notifications logic here
          break
        case 'signout':
          console.log('Signing out...')
          // Add sign out logic here
          break
      }
    }
  },
  mounted() {
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.showProfileMenu = false
      }
    })
  }
}
</script>