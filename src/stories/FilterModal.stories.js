import FilterModal from '../components/FilterModal.vue'

export default {
  title: 'Components/FilterModal',
  component: FilterModal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the modal is open or closed'
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive filter modal for product filtering with multiple filter types including status, condition, categories, brands, price ranges, date ranges, and location.'
      }
    }
  }
}

export const Default = {
  args: {
    isOpen: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Default filter modal with all filter options available.'
      }
    }
  }
}

export const Closed = {
  args: {
    isOpen: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Filter modal in closed state (not visible).'
      }
    }
  }
}

// Interactive story that demonstrates opening/closing
export const Interactive = {
  render: (args) => ({
    components: { FilterModal },
    data() {
      return {
        modalOpen: args.isOpen || false
      }
    },
    template: `
      <div class="p-8">
        <button 
          @click="modalOpen = true"
          class="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <i class="fas fa-filter mr-2"></i>
          Open Filters
        </button>
        
        <FilterModal 
          :isOpen="modalOpen" 
          @close="modalOpen = false"
          @apply-filters="handleApplyFilters"
        />
      </div>
    `,
    methods: {
      handleApplyFilters(filters) {
        console.log('Applied filters:', filters)
        this.modalOpen = false
      }
    }
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing how to open and close the filter modal.'
      }
    }
  }
}