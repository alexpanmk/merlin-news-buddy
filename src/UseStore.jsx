import create from "zustand";

const useStore = create((set) => ({
  // sample state
  count: 0,
}));

export default useStore;
