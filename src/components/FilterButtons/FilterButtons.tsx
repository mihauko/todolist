import React from 'react'
import { Filter } from '../../types/task.types'

interface FilterButtonsProps {
  currentFilter: Filter
  onFilterChange: (filter: Filter) => void
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  currentFilter,
  onFilterChange
}) => {
  return (
    <div className="mb-6 flex space-x-4">
      {Object.values(Filter).map((filterValue) => (
        <button
          key={filterValue}
          type="button"
          onClick={() => onFilterChange(filterValue)}
          className={`flex-1 rounded-lg border border-[#DEE2E6] py-1.5 font-medium transition-colors ${
            currentFilter === filterValue
              ? 'bg-[#17A2B8] text-white hover:bg-[#148a9c]'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          {filterValue === Filter.All ? 'Show all' : `Hide completed`}
        </button>
      ))}
    </div>
  )
}
