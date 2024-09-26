import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MyFormData from './components/MyFormData'

function App() {
  return (
    <>
    <Navbar/>
    <main className="grow">
      <MyFormData/>
    </main>
    <Footer/>
    </>
  )
}

export default App