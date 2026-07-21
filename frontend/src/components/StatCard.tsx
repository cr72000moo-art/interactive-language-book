import { ReactNode } from 'react'

interface StatCardProps {
  icon: ReactNode
  label: string
  value: string
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-50 rounded-lg text-primary">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  )
}

export default StatCard
