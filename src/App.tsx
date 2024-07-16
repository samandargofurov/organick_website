import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Layout from './layout'
import About from './pages/About/About'
import Shop from './pages/Shop/Shop'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><Home></Home></Layout>}></Route>
        <Route path='/about' element={<Layout><About></About></Layout>}></Route>
        <Route path='/shop' element={<Layout><Shop></Shop></Layout>}></Route>
        <Route path='/shop' element={<Layout><Shop></Shop></Layout>}></Route>
        <Route path='/shop' element={<Layout><Shop></Shop></Layout>}></Route>
      </Routes>
    </>
  )
}

export default App