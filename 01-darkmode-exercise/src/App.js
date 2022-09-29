import { useEffect, useState } from 'react'
import './styles.css'
import Toggle from './components/Toggle'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

useEffect(() => {
  if(isDarkMode === false){
    console.log("Darkmode nutzen!!!")
  }
}, [isDarkMode])

  return (
    <main className={isDarkMode ? 'dark' : 'light'}>
      <h1 className={isDarkMode === true ? "hidden" : ""}>You should use Dark Mode</h1>
      <h2>Toggle Dark Mode</h2>
      <Toggle toggleValue={isDarkMode} onChange={setIsDarkMode} />
    </main>
  )
}
