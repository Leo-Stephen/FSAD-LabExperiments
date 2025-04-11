import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createStore } from 'redux'
var store = createStore(NavReducer)
import App from './App.jsx'
import NavReducer from './components/Ex4/reducer/NavReducer.jsx'
import './css/ExFour.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ExTwo from './components/ExTwo.jsx'
import Parent from './components/Ex3/Parent.jsx'
import Homepage from './components/Homepage.jsx'
import Content from './components/Ex4/Content.jsx'
import Ex5 from './components/Ex5/Ex5.jsx'
import Users from './components/Ex6/Users.jsx'
import Weather from './components/Ex6/Weather.jsx'
import ProductManagement from './components/Ex9/ProductManagement.jsx'

var customer =() => createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/ex2' element={<ExTwo/>}></Route>
        <Route path='/ex3' element={<Parent/>}></Route>
        <Route path='/ex4' element={<Content store={store}/>}/>
        <Route path='/ex5' element={<Ex5 />} />
        <Route path='/ex6' element={<Users/>}/>
        <Route path='/ex7' element={<Weather/>} />
        <Route path='/ex9' element={<ProductManagement />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

customer()
store.subscribe(customer)
