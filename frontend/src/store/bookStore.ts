import { create } from 'zustand'
import { Book } from '../services/api'

interface BookStore {
  books: Book[]
  currentBook: Book | null
  isLoading: boolean
  error: string | null
  
  // Actions
  setBooks: (books: Book[]) => void
  setCurrentBook: (book: Book | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  updateBook: (book: Book) => void
}

export const useBookStore = create<BookStore>((set) => ({
  books: [],
  currentBook: null,
  isLoading: false,
  error: null,
  
  setBooks: (books) => set({ books }),
  setCurrentBook: (book) => set({ currentBook: book }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  updateBook: (book) =>
    set((state) => ({
      books: state.books.map((b) => (b.id === book.id ? book : b)),
      currentBook: state.currentBook?.id === book.id ? book : state.currentBook,
    })),
}))
