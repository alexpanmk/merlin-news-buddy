import create from "zustand";

const useStore = create((set) => ({
  // State for NewsList
  news: [],
  setNews: (news) => set({ news }),
  // State for SavedNewsList
  savedNews: [],
  setSavedNews: (savedNews) => set({ savedNews }),
}));

export default useStore;
