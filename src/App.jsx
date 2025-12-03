
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import ProductList from './Pages/Product/ProductList.jsx'
import Product from './Pages/Product/Product.jsx'
import Login from './Pages/Login/Login.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Layout from './Pages/Layouts/Layout.jsx'
import AdminLayout from './Pages/Layouts/AdminLayout.jsx'
import Dashboard from './Pages/Admin/Dashboard/Dashboard.jsx'
import ProductListAdmin from './Pages/Admin/Product/ProductList.jsx'
import NewProduct from './Pages/Admin/Product/NewProduct.jsx'
import UpdateProduct from './Pages/Admin/Product/UpdateProduct.jsx'
import Order from './Pages/Admin/Order/Order.jsx'
import Register from './Pages/Login/Register.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" >
          <Route index element={<ProductList />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" >
          <Route index element={<ProductListAdmin />} />
          <Route path="new" element={<NewProduct />} />
          <Route path=":id" element={<UpdateProduct />} />
        </Route>
        <Route path="orders" element={<Order />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
