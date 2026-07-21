import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Button from './Button'

interface ProgressCardProps {
  bookId: number
  title: string
  progress: number
  pages: number
  completed: number
}

function ProgressCard({ bookId, title, progress, pages, completed }: ProgressCardProps) {
  const navigate = useNavigate()

  return (
    <div className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{completed} من {pages} صفحة</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <Button
        onClick={() => navigate(`/book/${bookId}`)}
        icon={<FiArrowLeft />}
      >
        متابعة القراءة
      </Button>
    </div>
  )
}

export default ProgressCard
