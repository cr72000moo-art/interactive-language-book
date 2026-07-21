import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ProgressCard from '../components/ProgressCard'
import StatCard from '../components/StatCard'
import { FiBook, FiTrendingUp, FiAward } from 'react-icons/fi'

interface Book {
  id: number
  title: string
  progress: number
  pages: number
  completed: number
}

function HomePage() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'تعلم الألمانية للمبتدئين', progress: 45, pages: 200, completed: 90 },
    { id: 2, title: 'اللغة الإسبانية الأساسية', progress: 60, pages: 180, completed: 108 },
    { id: 3, title: 'الفرنسية للسفر', progress: 30, pages: 150, completed: 45 },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="مرحباً بعودتك! 👋" />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard icon={<FiBook size={24} />} label="الكتب المشروعة" value="3" />
          <StatCard icon={<FiTrendingUp size={24} />} label="إجمالي التقدم" value="45%" />
          <StatCard icon={<FiAward size={24} />} label="الإنجازات" value="12" />
        </div>

        {/* Books in Progress */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">الكتب المشروعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <ProgressCard
                key={book.id}
                bookId={book.id}
                title={book.title}
                progress={book.progress}
                pages={book.pages}
                completed={book.completed}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
