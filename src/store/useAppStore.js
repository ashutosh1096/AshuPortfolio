import { create } from 'zustand';


const useAppStore = create((set) => ({
  
  load: true,
  setLoad: (val) => set({ load: val }),

  width: 1200,
  setWidth: (width) => set({ width }),

  expand: false,
  navColour: false,
  setExpand: (val) => set({ expand: val }),
  setNavColour: (val) => set({ navColour: val }),

}));

export default useAppStore;