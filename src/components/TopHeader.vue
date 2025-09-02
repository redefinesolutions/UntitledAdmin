<template>
  <header class="bg-white border-b border-gray-200 px-6 py-4">
    <div class="flex items-center justify-end">
      <!-- User Profile -->
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <i class="fas fa-user text-gray-600 text-sm"></i>
        </div>
        <span class="text-sm font-medium text-gray-700">Vipul Solanki</span>
        <i class="fas fa-chevron-down w-3 h-3 text-gray-400"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>