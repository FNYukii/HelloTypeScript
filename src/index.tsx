import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles/index.css'

import Header from './components/Header'
import TopPage from './screens/TopPage'
import AboutPage from './screens/AboutPage'
import ContactPage from './screens/ContactPage'
import NotFoundPage from './screens/NotFoundPage'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<TopPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)