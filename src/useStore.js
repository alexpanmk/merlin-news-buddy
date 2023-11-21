import create from "zustand";
import useAirtableCRUD from "./hooks/useAirtableCRUD";

const useStore = create((set) => ({

  // State for environment variables
  newsAPIkey: import.meta.env.VITE_NEWS_API_KEY,
  setNewsAPIkey: (newsAPIkey) => set({ newsAPIkey }),
  airtableBase: import.meta.env.VITE_AIRTABLE_BASE,
  setAirtableBase: (airtableBase) => set({ airtableBase }),

  openAIKey: import.meta.env.VITE_OPENAI_API_KEY,


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

  // State for NewsLibrary
  newsLibrary: [],
  newsLibraryInitialLoad: false,
  newsLibraryInitialLoad: () => set((state) => ({ newsLibraryInitialLoad: !state.newsLibraryInitialLoad })),
  toggleNewsLibraryInitialLoad: () => set((state) => ({ newsLibraryInitialLoad: !state.newsLibraryInitialLoad })),
  setNewsLibrary: (newsLibrary) => set({ newsLibrary }),
  
  //State for NewsLab
  nodes: [],
  newsLabInitialLoad: false,
  toggleNewsLabInitialLoad: () => set((state) => ({ newsLabInitialLoad: !state.newsLabInitialLoad })),
  setNewsLab: (newsLab) => set({ newsLab }),


}));

export default useStore;
