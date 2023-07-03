import React,{ createContext, useEffect, useState } from 'react'

export const stateContext=createContext(null);
// const initialState={
//     chat:false,
//     cart:false,
//     userProfile:false,
//     notification:false,
// }

export default function StateContextProvider({children}) {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor,setCurrentColor]=useState(localStorage.getItem('colorMode')?localStorage.getItem('colorMode'):'#03C9D7')
    const [currentMode,setCurrentMode]=useState(localStorage.getItem('themeMode')?localStorage.getItem('themeMode'):'Light')
    const [themeSettings,setThemeSettings]=useState(false)
    const [initialState, setInitialState] = useState({
      chat:false,
      cart:false,
      userProfile:false,
      notification:false,
    })
    const [isClicked, setIsClicked] = useState(initialState)
    const setMode=(e)=>{
      setCurrentMode(e.target.value)
      localStorage.setItem('themeMode',e.target.value)
      setThemeSettings(false)
    }
    const setColor=(color)=>{
      setCurrentColor(color)
      localStorage.setItem('colorMode',color)
      setThemeSettings(false)
      }
    const handleClick=(clicked)=>{
      setInitialState((prevstate)=>{
        
        return {
      ...prevstate,
      chat:clicked==='chat'?!prevstate.chat:false,
      cart:clicked==='cart'?!prevstate.cart:false,
      userProfile:clicked==='userProfile'?!prevstate.userProfile:false,
      notification:clicked==='notification'?!prevstate.notification:false,
        }
      })
    }
    useEffect(() => {
      setIsClicked(initialState)
    }, [initialState]);
    
  return (
    <stateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize,
    currentColor,currentMode,setColor,setMode,themeSettings,setThemeSettings}}>
      {children}
    </stateContext.Provider>
  )
}


