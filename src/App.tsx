import {Routes, Route} from 'react-router-dom'
import { BookDetails, Footer, Home, Navbar, PageLoader } from './components'
import { useState } from 'react'

const App = () => {
  const [isSiteLoad, setIsSiteLoad] = useState<boolean>(true)
  const [showToTop, setShowToTop] = useState<boolean>(false)
  window.addEventListener('load', () => {
    setIsSiteLoad(false)
  })
  window.addEventListener('scroll', () => {
    if(window.scrollY > 1300){
      setShowToTop(true)
    }else{
      setShowToTop(false)
    }
  })
  setTimeout(() => {
    setIsSiteLoad(false)
  }, 2000);
  return (
    <div>
      {isSiteLoad && <PageLoader/>}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book/:id' element={<BookDetails/>}/>
      </Routes>
      <Footer/>
      {showToTop && 
      <div className='fixed bottom-[30px] end-[20px] cursor-pointer p-3' onClick={() => window.scrollTo(0, 0)}>
        <i className='fa fa-chevron-up text-orange-500 font-bold text-[1.5rem]'></i>
      </div>
      }
    </div>
  )
}

export default App
