import { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import { FiPlayCircle, FiRotateCw } from 'react-icons/fi'

interface Word {
  id: number
  word: string
  translation: string
  pronunciation: string
  example: string
}

function VocabularyPage() {
  const [words] = useState<Word[]>([
    {
      id: 1,
      word: 'Hallo',
      translation: 'مرحبا',
      pronunciation: 'HA-lo',
      example: 'Hallo, wie geht es dir?'
    },
    {
      id: 2,
      word: 'Danke',
      translation: 'شكرا',
      pronunciation: 'DAHN-kuh',
      example: 'Danke für deine Hilfe!'
    },
    {
      id: 3,
      word: 'Freund',
      translation: 'صديق',
      pronunciation: 'FROOND',
      example: 'Das ist mein guter Freund.'
    },
  ])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const current = words[currentIndex]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="قاموس المفردات" />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Flashcard */}
        <div className="mb-8">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-12 text-white cursor-pointer shadow-lg hover:shadow-xl transition min-h-64 flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-sm opacity-75 mb-2">اضغط للقلب</p>
              {isFlipped ? (
                <div>
                  <p className="text-4xl font-bold mb-2">{current.word}</p>
                  <p className="text-lg opacity-90">{current.pronunciation}</p>
                </div>
              ) : (
                <div>
                  <p className="text-4xl font-bold mb-2">{current.translation}</p>
                  <p className="text-lg opacity-90">كلمة {currentIndex + 1} من {words.length}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Example */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">مثال استخدام</h3>
          <p className="text-gray-600 italic">"{current.example}"</p>
        </div>

        {/* Controls */}
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            variant="secondary"
            icon={<FiRotateCw />}
          >
            السابق
          </Button>
          
          <Button
            onClick={() => {}}
            icon={<FiPlayCircle />}
          >
            استمع
          </Button>
          
          <Button
            onClick={() => setCurrentIndex(Math.min(words.length - 1, currentIndex + 1))}
            icon={<FiRotateCw />}
          >
            التالي
          </Button>
        </div>

        {/* Progress */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>التقدم</span>
            <span>{currentIndex + 1} من {words.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VocabularyPage
