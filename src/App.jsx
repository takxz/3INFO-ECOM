
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Pages/Home/Home.jsx'
import ProductList from './Components/Pages/Product/ProductList.jsx'
import Product from './Components/Pages/Product/Product.jsx'
import Login from './Components/Pages/Login/Login.jsx'
import Cart from './Components/Pages/Cart/Cart.jsx'
import Layout from './Components/Pages/Layouts/Layout.jsx'
import AdminLayout from './Components/Pages/Layouts/AdminLayout.jsx'
import Dashboard from './Components/Pages/Admin/Dashboard/Dashboard.jsx'
import ProductListAdmin from './Components/Pages/Admin/Product/ProductList.jsx'
import NewProduct from './Components/Pages/Admin/Product/NewProduct.jsx'
import UpdateProduct from './Components/Pages/Admin/Product/UpdateProduct.jsx'
import Order from './Components/Pages/Admin/Order/Order.jsx'


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
        <Route path="register" element={<SignIn />} />

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
