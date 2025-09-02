import { 
  HomeIcon, 
  CubeIcon, 
  BuildingStorefrontIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  TagIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, current: false },
  { 
    name: 'Master Product Feed', 
    icon: CubeIcon, 
    current: false,
    children: []
  },
  { 
    name: 'Stores', 
    icon: BuildingStorefrontIcon, 
    current: false,
    children: [
      { name: 'Lano', current: false, children: [
        { name: 'Dashboard', current: false },
        { name: 'Product', current: true },
        { name: 'Category Master', current: false },
        { name: 'Category Order', current: false },
        { name: 'Product Order', current: false },
        { name: 'Brand Master', current: false },
        { name: 'Promotions Deal', current: false },
        { name: 'Career Page Forms', current: false },
        { name: 'Vendor Mapping', current: false },
      ]}
    ]
  },
  { 
    name: 'Content Management', 
    icon: ClipboardDocumentListIcon, 
    current: false,
    children: []
  },
  { 
    name: 'Orders', 
    icon: ClipboardDocumentListIcon, 
    current: false,
    children: []
  },
  { 
    name: 'Customer', 
    icon: UserGroupIcon, 
    current: false,
    children: []
  },
  { 
    name: 'Promotions', 
    icon: TagIcon, 
    current: false,
    children: []
  },
  { 
    name: 'Settings', 
    icon: Cog6ToothIcon, 
    current: false,
    children: []
  },
  { 
    name: 'Configurator', 
    icon: WrenchScrewdriverIcon, 
    current: false,
    children: []
  },
  { 
    name: 'Reports', 
    icon: ChartBarIcon, 
    current: false,
    children: []
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Stores', 'Lano'])

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    )
  }

  const renderNavItem = (item: any, level = 0) => {
    const isExpanded = expandedItems.includes(item.name)
    const hasChildren = item.children && item.children.length > 0

    return (
      <div key={item.name}>
        <div
          className={classNames(
            item.current
              ? 'bg-primary-50 border-r-2 border-primary-600 text-primary-700'
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
            'group flex items-center px-2 py-2 text-sm font-medium cursor-pointer',
            level === 0 ? 'pl-3' : level === 1 ? 'pl-6' : 'pl-9'
          )}
          onClick={() => hasChildren && toggleExpanded(item.name)}
        >
          {level === 0 && item.icon && (
            <item.icon
              className={classNames(
                item.current ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 flex-shrink-0 h-5 w-5'
              )}
              aria-hidden="true"
            />
          )}
          <span className="flex-1">{item.name}</span>
          {hasChildren && (
            isExpanded ? (
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-400" />
            ) : (
              <ChevronRightIcon className="ml-2 h-4 w-4 text-gray-400" />
            )
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="space-y-1">
            {item.children.map((child: any) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="ml-2 text-xl font-semibold text-gray-900">lano</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => renderNavItem(item))}
      </nav>
    </div>
  )
}