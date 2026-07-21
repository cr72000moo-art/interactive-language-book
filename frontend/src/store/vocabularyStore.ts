import { create } from 'zustand'
import { Word } from '../services/api'

interface VocabularyStore {
  words: Word[]
  currentWordIndex: number
  isLoading: boolean
  
  // Actions
  setWords: (words: Word[]) => void
  setCurrentWordIndex: (index: number) => void
  setLoading: (loading: boolean) => void
  nextWord: () => void
  previousWord: () => void
}

export const useVocabularyStore = create<VocabularyStore>((set) => ({
  words: [],
  currentWordIndex: 0,
  isLoading: false,
  
  setWords: (words) => set({ words, currentWordIndex: 0 }),
  setCurrentWordIndex: (index) => set({ currentWordIndex: index }),
  setLoading: (isLoading) => set({ isLoading }),
  nextWord: () =>
    set((state) => ({
      currentWordIndex: Math.min(state.currentWordIndex + 1, state.words.length - 1),
    })),
  previousWord: () =>
    set((state) => ({
      currentWordIndex: Math.max(state.currentWordIndex - 1, 0),
    })),
}))
