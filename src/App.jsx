import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
import AddItem from './pages/AddItem'
import AddCategory from './pages/AddCategory'

function AppRoutes() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <>
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:itemCode" element={<ProductDetails />} />

        {/* Admin pages (no navbar) */}
        <Route path="/admin/add-item" element={<AddItem />} />
        <Route path="/admin/add-category" element={<AddCategory />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
