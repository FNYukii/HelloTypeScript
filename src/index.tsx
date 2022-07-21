import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles/index.css'

import Header from './components/Header'
import ReadScreen from './screens/ReadScreen'
import ReadRealtimeScreen from './screens/ReadRealtimeScreen'
import CreateScreen from './screens/CreateScreen'
import NotFoundPage from './screens/NotFoundPage'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ReadScreen/>}/>
        <Route path='/read-realtime' element={<ReadRealtimeScreen/>}/>
        <Route path='/create' element={<CreateScreen/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)