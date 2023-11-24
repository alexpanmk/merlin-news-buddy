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
  
  //TODO: Fetch headlines from newsapi
  headlinesFetch: async () => {
    const url = new URL("https://newsapi.org/v2/top-headlines");

    const params = new URLSearchParams({
      country: "sg",
      apiKey: import.meta.env.VITE_NEWSAPI_API_KEY,
      pageSize: 12,
    });
  
    url.search = params.toString();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        useStore.getState().setNews(data.articles);
        console.log(data.articles);
      })
      .catch((error) => console.log(error));
    
  },

  //TODO: shift newsapi fetch to here
  newsFetch: async (searchParam) => {
    //TODO: Use searchPArams instead of string interpolation
    const url = new URL("https://newsapi.org/v2/everything");

    const params = new URLSearchParams({
      ...searchParam, //concatenate NL searchParam to params
      apiKey: import.meta.env.VITE_NEWSAPI_API_KEY,
      pageSize: 12,
    });
  
    url.search = params.toString();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        useStore.getState().setNews(data.articles);
        console.log(data.articles);
      })
      .catch((error) => console.log(error));
      //TODO: Add error handling
  },
  newsInitialLoad: false,
  newsInitialLoad: () => set((state) => ({ newsInitialLoad: !state.newsInitialLoad })),
  setNews: (news) => set({ news }),

  // State for SearchBar
  search: "bitcoin",
  setSearch: (search) => set({ search }),

  // State for NewsLibrary
  newsLibrary: [],
  newsLibraryInitialLoad: false,
  newsLibraryInitialLoad: () => set((state) => ({ newsLibraryInitialLoad: !state.newsLibraryInitialLoad })),
  setNewsLibrary: (newsLibrary) => set({ newsLibrary }),
  
  //State for NewsLab
  newsLabNodes: [],
  setNewsLabNodes: (newsLabNodes) => set({ newsLabNodes }),
  
  //State for settings
  AIMode: true,
  toggleAIMode: () => set((state) => ({ AIMode: !state.AIMode })),


}));

export default useStore;
