import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Purchases from './pages/Purchases'
import Login from './pages/Login'
import Product from './pages/Product'
import NAvBar from './components/NAvBar'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'
function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <NAvBar />
      {isLoading && <LoadingScreen />}
      <Container className='my-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
              <Route path='/purchases' element={<Purchases />} />
          </Route>
        </Routes>
      </Container>
    </HashRouter>
  )
}

export default App




// npm install react-bootstrap
// npm install bootswatch
//import 'bootswatch/dist/slate/bootstrap.min.css';

