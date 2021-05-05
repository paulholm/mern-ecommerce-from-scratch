import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Header, Footer } from './components'
import {
  CartPage,
  HomePage,
  LoginPage,
  OrderListPage,
  OrderPage,
  PaymentPage,
  PlaceOrderPage,
  ProductEditPage,
  ProductListPage,
  ProductPage,
  ProfilePage,
  RegisterPage,
  ShippingPage,
  UserEditPage,
  UserListPage,
} from './pages'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/admin/orderlist' component={OrderListPage} />
          <Route path='/admin/productlist' component={ProductListPage} exact />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListPage}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditPage} />
          <Route path='/admin/userlist' component={UserListPage} />
          <Route path='/admin/user/:id/edit' component={UserEditPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/order/:id' component={OrderPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/page/:pageNumber' component={HomePage} exact />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/search/:keyword' component={HomePage} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomePage}
            exact
          />
          <Route path='/shipping' component={ShippingPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
