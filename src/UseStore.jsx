import create from "zustand";

const UseStore = create((set) => ({
  // State for NewsList
  news: [],
  setNews: (news) => set({ news }),
  // State for SavedNewsList
  savedNews: [],
  setSavedNews: (savedNews) => set({ savedNews }),
}));

export default UseStore;
