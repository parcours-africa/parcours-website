'use client'
import { createContext } from "react"

type MenuContextType = {
  toogleMenu: boolean
  setToogleMenu: (value: boolean) => void
}

export const MenuContext = createContext<MenuContextType>({
  toogleMenu: false,
  setToogleMenu: () => {}
})
