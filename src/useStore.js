import create from "zustand";
import useAirtableCRUD from "./hooks/useAirtableCRUD";

const useStore = create((set) => ({

  // State for environment variables
  newsAPIkey: import.meta.env.VITE_NEWS_API_KEY,
  setNewsAPIkey: (newsAPIkey) => set({ newsAPIkey }),
  airtableBase: import.meta.env.VITE_AIRTABLE_BASE,
  setAirtableBase: (airtableBase) => set({ airtableBase }),

  openAIKey: import.meta.env.VITE_OPENAI_KEY,


  // State for NewsList
  news: [],
  setNews: (news) => set({ news }),

  //State for SavedNews @ NewsLibrary
  savedNews: [],
  savedNewsInitialLoad: false,
  toggleSavedNewsInitialLoad: () => set((state) => ({ savedNewsInitialLoad: !state.savedNewsInitialLoad })),
  setSavedNews: (savedNews) => set({ savedNews }),
  addSavedNews: (savedNews) => set((state) => ({ savedNews: [...state.savedNews, savedNews] })),
  deleteSavedNews: (savedNews) => set((state) => ({ savedNews: state.savedNews.filter((news) => news.id !== savedNews.id) })),
  updateSavedNews: (savedNews) => set((state) => ({ savedNews: state.savedNews.map((news) => news.id === savedNews.id ? savedNews : news) })),

  // State for SearchBar
  search: "bitcoin",
  setSearch: (search) => set({ search }),
}));

export default useStore;
