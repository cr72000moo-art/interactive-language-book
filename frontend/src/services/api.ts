import axios from 'axios'

const API_BASE = '/api'

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface Book {
  id: number
  title: string
  language: string
  level: string
  pages: number
  progress: number
  completed: number
}

export interface Word {
  id: number
  word: string
  translation: string
  pronunciation: string
  example: string
  bookId: number
}

export interface Exercise {
  id: number
  pageId: number
  type: string
  question: string
  answer: string
  difficulty: string
}

// Books API
export const bookAPI = {
  getAll: () => api.get<Book[]>('/books'),
  getById: (id: number) => api.get<Book>(`/books/${id}`),
  create: (data: Partial<Book>) => api.post<Book>('/books', data),
  update: (id: number, data: Partial<Book>) => api.put<Book>(`/books/${id}`, data),
  delete: (id: number) => api.delete(`/books/${id}`),
}

// Vocabulary API
export const vocabularyAPI = {
  getByBook: (bookId: number) => api.get<Word[]>(`/vocabulary/book/${bookId}`),
  getById: (id: number) => api.get<Word>(`/vocabulary/${id}`),
  create: (data: Partial<Word>) => api.post<Word>('/vocabulary', data),
  update: (id: number, data: Partial<Word>) => api.put<Word>(`/vocabulary/${id}`, data),
}

// Exercises API
export const exerciseAPI = {
  getByPage: (pageId: number) => api.get<Exercise[]>(`/exercises/page/${pageId}`),
  submitAnswer: (exerciseId: number, answer: string) =>
    api.post(`/exercises/${exerciseId}/submit`, { answer }),
}

// Progress API
export const progressAPI = {
  getUserProgress: () => api.get('/progress'),
  updateProgress: (bookId: number, pageNumber: number) =>
    api.post('/progress/update', { bookId, pageNumber }),
}

export default api
