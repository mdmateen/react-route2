import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Products from './components/Products';
import PageNotFount from './components/PageNotFount';
import Nav from './components/Nav';
import FeatureProduct from './components/FeatureProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='products' element={<Products />} >
          <Route index element={<FeatureProduct />} /> 
          <Route path='feature' element={<FeatureProduct />} />
          <Route path='new' element={<NewProduct />}></Route>
        </Route>
        <Route path='*' element={<PageNotFount />} />
      </Routes>

    </>
  );
}

export default App;
