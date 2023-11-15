import create from "zustand";

const UseStore = create((set) => ({
  // State for NewsList
  news: [],
  setNews: (news) => set({ news }),

  // State for SavedNewsList
  savedNews: [],
  setSavedNews: (savedNews) => set({ savedNews }),
  //To write CRUD functions for savedNews

  // State for SearchBar
  search: "bitcoin",
  setSearch: (search) => set({ search }),
}));

export default UseStore;
