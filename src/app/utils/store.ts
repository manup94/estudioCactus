import { create } from "zustand"

export interface Store {
  selection: Record<string, string> | null
  setSelection: (newSelection: Record<string, string>) => void
}

export const useStore = create<Store>((set, get) => ({
  selection: null,
  setSelection: (newSelection) =>
    { set({ selection: { ...get().selection, ...newSelection } }); },
}))

export const setSelectionSelector = (state: Store) => state.setSelection
