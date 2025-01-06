


import './App.css'
import First from './Component/First'
import SearchProvider, { SearchContext } from './Context/SearchContext'
function App() {
  

  return (
    <>
     <SearchProvider>
      
     <First></First>
     </SearchProvider>
    </>
  )
}

export default App
