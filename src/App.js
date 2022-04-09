import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import Login from '../src/Components/Login/Login'
import Header from '../src/Components/Header/Header'
import Register from './Components/Register/Register';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <>
    <Header></Header>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/products' element={<Products/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/orders' element={
         <RequireAuth>
           <Orders/>
         </RequireAuth>
       }></Route>
     </Routes>
    </>
  );
}

export default App;
