
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import UserLayout from './Components/User/UserLayout.jsx'
import UserProduct from './Components/User/UserProduct.jsx'
import UserLogin from './Components/User/UserLogin.jsx'
import UserHome from './Components/User/UserHome.jsx'
import UserCart from './Components/User/UserCart.jsx'
import UserProductDetail from './Components/User/UserProductDetail.jsx'
import AdminLayout from './Components/Admin/AdminLayout.jsx'
import AdminProduct from './Components/Admin/AdminProduct.jsx'
import AdminOrders from './Components/Admin/AdminOrders.jsx'
import AdminNewProduct from './Components/Admin/AdminNewProduct.jsx'
import AdminUpdateProduct from './Components/Admin/AdminUpdateProduct.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<UserHome />} />
        <Route path="/products" element={<UserProduct />} />
        <Route path="/products/:id" element={<UserProductDetail />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/cart" element={<UserCart />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="/products" element={<AdminProduct />} />
        <Route path="/products/new" element={<AdminNewProduct />} />
        <Route path="/products/:id" element={<AdminUpdateProduct />} />
        <Route path="/orders" element={<AdminOrders />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
