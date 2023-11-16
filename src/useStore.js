import create from "zustand";

const useStore = create((set) => ({
  // State for NewsList
  news: [],
  setNews: (news) => set({ news }),

  // State for SearchBar
  search: "bitcoin",
  setSearch: (search) => set({ search }),
}));

export default useStore;
