import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookReaderPage from './pages/BookReaderPage'
import VocabularyPage from './pages/VocabularyPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:bookId" element={<BookReaderPage />} />
        <Route path="/vocabulary" element={<VocabularyPage />} />
      </Routes>
    </Router>
  )
}

export default App
