import React, { createContext, useState, useContext } from 'react'
import MOCK_PLACES from '../constants/places'
import { IPlace } from '../types/placeType'

interface IAppContext {
  places: IPlace[]
}

interface IAppProvider {
  children: React.ReactNode
}

const AppContext = createContext<IAppContext>({} as IAppContext)

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [places] = useState<IPlace[]>(MOCK_PLACES)

  return (
    <AppContext.Provider value={{ places }}>{children}</AppContext.Provider>
  )
}

function useApp(): IAppContext {
  const context = useContext(AppContext)
  return context
}

export { AppProvider, useApp }
