<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Left Sidebar -->
    <Sidebar />
    
    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Header -->
      <TopHeader />
      
      <!-- Products Content -->
      <ProductsPage />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import TopHeader from './components/TopHeader.vue'
import ProductsPage from './components/ProductsPage.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    TopHeader,
    ProductsPage
  }
}
</script>