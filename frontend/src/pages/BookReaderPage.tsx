import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import PDFViewer from '../components/PDFViewer'
import ExercisePanel from '../components/ExercisePanel'
import ToolBar from '../components/ToolBar'
import Button from '../components/Button'
import { FiChevronLeft, FiChevronRight, FiHighlighter, FiMessageCircle, FiVolume2 } from 'react-icons/fi'

function BookReaderPage() {
  const { bookId } = useParams()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 200

  const tools = [
    { id: 'highlight', label: 'تحديد', icon: <FiHighlighter size={20} /> },
    { id: 'note', label: 'ملاحظة', icon: <FiMessageCircle size={20} /> },
    { id: 'audio', label: 'صوت', icon: <FiVolume2 size={20} /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={`كتاب رقم ${bookId}`} />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <PDFViewer pageNumber={currentPage} />
            
            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between">
              <Button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                icon={<FiChevronLeft />}
              >
                السابق
              </Button>
              
              <span className="text-gray-600">
                صفحة {currentPage} من {totalPages}
              </span>
              
              <Button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                icon={<FiChevronRight />}
              >
                التالي
              </Button>
            </div>

            {/* Exercise */}
            <ExercisePanel />
          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 h-fit">
            <h3 className="text-lg font-bold text-gray-800 mb-4">الفصل 1.5: التعريفات</h3>
            <ToolBar tools={tools} />
            
            <div className="mt-6">
              <Button
                onClick={() => navigate('/')}
                variant="secondary"
                className="w-full"
              >
                العودة للرئيسية
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookReaderPage
